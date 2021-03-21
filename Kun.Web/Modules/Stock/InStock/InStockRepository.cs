
namespace Kun.Stock.Repositories
{
    using Kun.Basic.Repositories;
    using Kun.Stock.Entities;
    using Kun.Stock.Enums;
    using Kun.Sys.Enum;
    using Kun.Sys.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq; 
    using static Kun.Stock.Enums.MoveRecordEnums;
    using static Kun.Stock.Enums.StockEnums;
    using MyRow = Entities.InStockRow;

    public class InStockRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse ChangeStatus(IUnitOfWork uow, Guid Id, BillStatus Status)
        {
            var n = new SaveRequest<MyRow>()
            {
                EntityId = Id,
                Entity = new MyRow
                {
                    Status = Status, 
                }
            };
            if (Status == BillStatus.Reject || Status == BillStatus.Audited || Status == BillStatus.UnAudited)
            {
                n.Entity.ApproverDate = DateTime.Now;
                n.Entity.ApproverId = long.Parse(Authorization.UserId);
            }
            if (Status == BillStatus.Audited) //审核通过
            {
                var row = Retrieve(uow.Connection, new RetrieveRequest{EntityId = Id}).Entity;
                var items = row.Items;
                var lotRep = new LotRepository();
                var stockRep = new StockDataRepository();
                var moveRep = new MoveRecordRepository();
                foreach (var m in items)
                {
                    var stock = new StockDataRow();
                    var mat = new MaterialRepository().Retrieve(uow.Connection, new RetrieveRequest { EntityId = m.MaterialId }).Entity;
                    if (mat.IsBatch == true) //批次管理
                    {
                        stock = new StockDataRow
                        {
                            MaterialId = m.MaterialId,
                            Qty = m.ConfirmQty,
                            ReservedQty = 0,
                            AvailableQty = m.ConfirmQty,
                            UnitId = m.UnitId,
                            BuyPrice = m.BuyPrice,
                            BuyAmount = m.BuyAmount,
                            SalePrice = m.SalePrice,
                            SaleAmount = m.SaleAmount,
                            Specification = m.Specification,
                            WarehouseId = m.WarehouseId,
                            PositionId = m.PositionId,
                            LotId = lotRep.GetLot(uow, m.MaterialId).Entity.Id,
                            Applicant = m.ApplicantName
                        };
                        stockRep.Create(uow, new SaveRequest<StockDataRow> { Entity = stock });

                        m.LotId = stock.LotId; //反写批号到入库单明细
                    }
                    else
                    {
                        #region 非批次管理
                        stock = stockRep.List(uow.Connection, new ListRequest
                        {
                            EqualityFilter = new Dictionary<string, object> {
                                { "MaterialId", m.MaterialId },
                                { "WarehouseId", m.WarehouseId },
                                { "PositionId", m.PositionId }
                            }
                        }).Entities.FirstOrDefault();
                        if (stock == null)
                        {
                            stock = new StockDataRow
                            {
                                MaterialId = m.MaterialId,
                                Qty = m.ConfirmQty,
                                ReservedQty = 0,
                                AvailableQty = m.ConfirmQty,
                                UnitId = m.UnitId,
                                BuyPrice = m.BuyPrice,
                                BuyAmount = m.BuyAmount,
                                SalePrice = m.SalePrice,
                                SaleAmount = m.SaleAmount,
                                Specification = m.Specification,
                                WarehouseId = m.WarehouseId,
                                PositionId = m.PositionId,
                            };
                            stockRep.Create(uow, new SaveRequest<StockDataRow> { Entity = stock });
                        }
                        else
                        {
                            stock.Qty += m.ConfirmQty;
                            stock.AvailableQty += m.ConfirmQty;
                            stockRep.Update(uow, new SaveRequest<StockDataRow> { Entity = stock });
                        }
                        #endregion
                    }
                    #region 记录移库数据
                    var mov = new MoveRecordRow
                    {
                        MovCode = MoveType.Purchase,
                        Qty = m.ConfirmQty,
                        ToStockId = stock.Id,
                        ToMaterialId = m.MaterialId,
                        ToUnitId = m.UnitId,
                        ToWarehouseId = m.WarehouseId,
                        ToPositionId = m.PositionId,
                        ToLotId = m.LotId,
                        BizBillType = DocumentKind.InStockBill,
                        BizBillId = m.HeadId,
                        BizItemId = m.Id,
                        Status = MoveRecordEnums.Status.Normal,
                        BizBillCode = row.BillNo,
                    };
                    moveRep.Create(uow, new SaveRequest<MoveRecordRow> { Entity = mov });
                    #endregion
                }
                n.Entity.Items = items; //反写批号到入库单明细
            }
            else if (Status == BillStatus.UnAudited) //反审核
            {
                
                var items = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity.Items;
                var stockRep = new StockDataRepository();
                var moveRep = new MoveRecordRepository();
                foreach (var m in items)
                {
                    if (m.MaterialCode == "10000000") //虚拟物料跳过
                        continue;

                    // 删除库存记录数据
                    var movField = MoveRecordRow.Fields;
                    var mov = uow.Connection.TrySingle<MoveRecordRow>(movField.IsActive == 1
                        && movField.BizBillId == (Guid)m.HeadId && movField.BizItemId == (Guid)m.Id);
                    if (mov == null)
                    {
                        throw new Exception($"{m.MaterialCode},库存变更记录不存在,反审核失败!");
                    }
                    moveRep.Delete(uow, new DeleteRequest { EntityId = mov.Id });

                    //取消增加库存数量
                    var stock = stockRep.Retrieve(uow.Connection, new RetrieveRequest { EntityId = mov.ToStockId }).Entity;
                    stockRep.Update(uow, new SaveRequest<StockDataRow>
                    {
                        Entity = new StockDataRow
                        {
                            Id = stock.Id,
                            Qty = stock.Qty - m.ConfirmQty,
                            AvailableQty = stock.AvailableQty - m.ConfirmQty,
                            IsActive = Administration.Entities.ActiveStatus.Active
                        }
                    });

                }
            }
            return new MySaveHandler().Process(uow, n, SaveRequestType.Update);
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        { 
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {
            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                if (IsCreate)
                {
                    Row.Id = Row.Id ?? Guid.NewGuid(); 
                    var prefix = new DocumentCodeConfigRepository().GetDocumentCodePrefix(Connection, Sys.Enum.DocumentKind.InStockBill);
                    var today = DateTime.Today;
                    prefix = prefix + today.Year.ToString() + today.Month.ToString("00") + today.Day.ToString("00") + "-";
                    GetNextNumberResponse nextNumber = GetNextNumberHelper.GetNextNumber(Connection, new GetNextNumberRequest
                    {
                        Prefix = prefix,
                        Length = 18
                    }, fld.BillNo); ;
                    Row.BillNo = nextNumber.Serial; 
                } 
                 
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> {
            protected override void ExecuteDelete()
            {
                base.ExecuteDelete();
                var items = Connection.List<InStockItemRow>(InStockItemRow.Fields.HeadId == (Guid)Row.Id && InStockItemRow.Fields.IsActive == 1);
                items.ForEach(e => {
                    new InStockItemRepository().Delete(UnitOfWork, new DeleteRequest
                    {
                        EntityId = e.Id
                    });
                });
            }

        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> {
        
        
        }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}