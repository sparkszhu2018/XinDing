
namespace Kun.Stock.Repositories
{
    using Kun.Sys.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.OutStockRow;
    using static Kun.Stock.Enums.StockEnums;
    using Kun.Stock.Entities;
    using static Kun.Stock.Enums.MoveRecordEnums;
    using Kun.Sys.Enum;
    using Kun.Stock.Enums;

    public class OutStockRepository
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
                var row = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity;
                var items = row.Materials;
                var stockRep = new StockDataRepository();
                var moveRep = new MoveRecordRepository();
                foreach (var m in items)
                {  
                    //扣减库存数量
                    var stock = stockRep.Retrieve(uow.Connection, new RetrieveRequest { EntityId = m.StockDataId }).Entity;
                    stockRep.Update(uow, new SaveRequest<StockDataRow>
                    {
                        Entity = new StockDataRow
                        {
                            Id = m.StockDataId,
                            Qty = stock.Qty - m.Qty,
                            AvailableQty = stock.AvailableQty - m.Qty,
                            BuyPrice = (stock.Qty - m.Qty) * stock.BuyPrice,
                            SalePrice = (stock.Qty - m.Qty) * stock.SalePrice,
                        }
                    });
                    // 记录移库数据
                    var mov = new MoveRecordRow
                    {
                        MovCode = MoveType.OutStock,
                        Qty = m.Qty,
                        FromStockId = stock.Id,
                        FromMaterialId = m.MaterialId,
                        FromUnitId = m.UnitId,
                        FromWarehouseId = m.WarehouseId,
                        FromPositionId = m.PositionId,
                        FromLotId = m.LotId,
                        BizBillType = DocumentKind.OutStockBill,
                        BizBillId = m.HeadId,
                        BizItemId = m.Id,
                        Status = MoveRecordEnums.Status.Normal,
                        BizBillCode = row.BillNo,
                    };
                    moveRep.Create(uow, new SaveRequest<MoveRecordRow> { Entity = mov });
                }
            }
            else if (Status == BillStatus.UnAudited) //反审核
            {
                var items = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity.Materials;
                var stockRep = new StockDataRepository();
                var moveRep = new MoveRecordRepository();
                foreach (var m in items)
                { 
                    //取消扣减库存数量
                    var stock = stockRep.Retrieve(uow.Connection, new RetrieveRequest { EntityId = m.StockDataId }).Entity;
                    stockRep.Update(uow, new SaveRequest<StockDataRow>
                    {
                        Entity = new StockDataRow
                        {
                            Id = m.StockDataId,
                            Qty = stock.Qty + m.Qty,
                            AvailableQty = stock.AvailableQty + m.Qty,
                            BuyPrice = (stock.AvailableQty + m.Qty) * stock.BuyPrice,
                            SalePrice = (stock.AvailableQty + m.Qty) * stock.SalePrice,
                            IsActive = Administration.Entities.ActiveStatus.Active
                        }
                    });
                    // 删除库存记录数据
                    var movField = MoveRecordRow.Fields;
                    var mov = uow.Connection.TrySingle<MoveRecordRow>(movField.IsActive == 1
                        && movField.BizBillId == (Guid)m.HeadId && movField.BizItemId == (Guid)m.Id);
                    if (mov == null)
                    {
                        throw new Exception($"行{m.Serial},库存变更记录不存在,反审核失败!");
                    }
                    moveRep.Delete(uow, new DeleteRequest { EntityId = mov.Id });
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
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                if (IsCreate)
                {
                    Row.Id = Row.Id ?? Guid.NewGuid();
                    var prefix = new DocumentCodeConfigRepository().GetDocumentCodePrefix(Connection, Sys.Enum.DocumentKind.OutStockBill);
                    var today = DateTime.Today;
                    prefix = prefix + today.Year.ToString() + today.Month.ToString("00") + today.Day.ToString("00") + "-";
                    GetNextNumberResponse nextNumber = GetNextNumberHelper.GetNextNumber(Connection, new GetNextNumberRequest
                    {
                        Prefix = prefix,
                        Length = 16
                    }, fld.BillNo); ;
                    Row.BillNo = nextNumber.Serial;
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}