
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
    using MyRow = Entities.AssembleRow;

    public class AssembleRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }


        public SaveResponse ChangeStatus(IUnitOfWork uow, Guid Id, StockEnums.BillStatus Status)
        {
            var n = new SaveRequest<MyRow>()
            {
                EntityId = Id,
                Entity = new MyRow
                {
                    Status = Status,
                }
            };
            if (Status == StockEnums.BillStatus.Reject || Status == StockEnums.BillStatus.Audited || Status == StockEnums.BillStatus.UnAudited)
            {
                n.Entity.ApproverDate = DateTime.Now;
                n.Entity.ApproverId = long.Parse(Authorization.UserId);
            }
            if (Status == StockEnums.BillStatus.Audited) //审核通过
            {
                var assemble = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity;
                var items = assemble.Items;
                var buyAmount = items.Sum(c => c.BuyAmount);
                var lotRep = new LotRepository();
                var stockRep = new StockDataRepository();
                var moveRep = new MoveRecordRepository();
                //增加成品物料库存 
                var toStock = new StockDataRow
                {
                    MaterialId = assemble.ToMaterialId,
                    Qty = assemble.Qty,
                    ReservedQty = 0,
                    AvailableQty = assemble.Qty,
                    UnitId = assemble.UnitId,
                    BuyPrice = assemble.BuyPrice,
                    BuyAmount = assemble.BuyAmount,
                    SalePrice = 0,
                    SaleAmount = 0,
                    //Specification = assemble.,
                    WarehouseId = assemble.WarehouseId,
                    PositionId = assemble.PositionId,
                    LotId = lotRep.GetLot(uow, assemble.ToMaterialId).Entity.Id,
                };
                stockRep.Create(uow, new SaveRequest<StockDataRow> { Entity = toStock });
                n.Entity.LotId = toStock.LotId; //回写批次号
                n.Entity.StockDataId = toStock.Id;

                // 记录入库移库数据
                var mov = new MoveRecordRow
                {
                    MovCode = MoveType.AssembleIn,
                    Qty = assemble.Qty,
                    ToStockId = toStock.Id,
                    ToMaterialId = assemble.ToMaterialId,
                    ToUnitId = assemble.UnitId,
                    ToWarehouseId = assemble.WarehouseId,
                    ToPositionId = assemble.PositionId,
                    ToLotId = toStock.LotId,
                    BizBillType = DocumentKind.AssembleBill,
                    BizBillId = assemble.Id,
                    BizItemId = assemble.Id,
                    Status = MoveRecordEnums.Status.Normal,
                    BizBillCode = assemble.BillNo,

                };
                moveRep.Create(uow, new SaveRequest<MoveRecordRow> { Entity = mov });

                //扣减组件物料库存 
                foreach (var m in items)
                {
                    if (m.MaterialCode == "10000000") //虚拟物料跳过
                        continue;

                    //扣减库存数量
                    var stock = stockRep.Retrieve(uow.Connection, new RetrieveRequest { EntityId = m.StockDataId }).Entity;
                    stockRep.Update(uow, new SaveRequest<StockDataRow>
                    {
                        Entity = new StockDataRow
                        {
                            Id = m.StockDataId,
                            Qty = stock.Qty - m.Qty,
                            AvailableQty = stock.AvailableQty - m.Qty,
                        }
                    });
                    // 记录扣减移库数据
                    var mov_out = new MoveRecordRow
                    {
                        MovCode = MoveType.AssembleOut,
                        Qty = m.Qty,
                        FromStockId = stock.Id,
                        FromMaterialId = m.MaterialId,
                        FromUnitId = m.UnitId,
                        FromWarehouseId = m.WarehouseId,
                        FromPositionId = m.PositionId,
                        FromLotId = m.LotId,
                        BizBillType = DocumentKind.AssembleBill,
                        BizBillId = m.HeadId,
                        BizItemId = m.Id,
                        Status = MoveRecordEnums.Status.Normal,
                        BizBillCode = m.BillNo,
                    };
                    moveRep.Create(uow, new SaveRequest<MoveRecordRow> { Entity = mov_out });
                }
            }
            else if (Status == StockEnums.BillStatus.UnAudited) //反审核
            {
                var assemble = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity;
                var items = assemble.Items; 
                var stockRep = new StockDataRepository();
                var moveRep = new MoveRecordRepository();
                // 删除库存记录数据
                var movField = MoveRecordRow.Fields;
                var mov = uow.Connection.TrySingle<MoveRecordRow>(movField.IsActive == 1
                    && movField.BizBillId == (Guid)assemble.Id && movField.BizItemId == (Guid)assemble.Id);
                if (mov == null)
                {
                    throw new Exception($"{assemble.ToMaterialCode},组装入库记录不存在,反审核失败!");
                }
                moveRep.Delete(uow, new DeleteRequest { EntityId = mov.Id });

                //取消增加库存数量
                var stock = stockRep.Retrieve(uow.Connection, new RetrieveRequest { EntityId = mov.ToStockId }).Entity;
                stockRep.Update(uow, new SaveRequest<StockDataRow>
                {
                    Entity = new StockDataRow
                    {
                        Id = stock.Id,
                        Qty = stock.Qty - assemble.Qty,
                        AvailableQty = stock.AvailableQty - assemble.Qty,
                        IsActive = Administration.Entities.ActiveStatus.Active
                    }
                });


                //取消扣减组件物料库存 
                foreach (var m in items)
                {
                    if (m.MaterialCode == "10000000") //虚拟物料跳过
                        continue;

                    //取消扣减库存数量
                    var stock_out = stockRep.Retrieve(uow.Connection, new RetrieveRequest { EntityId = m.StockDataId }).Entity;
                    stockRep.Update(uow, new SaveRequest<StockDataRow>
                    {
                        Entity = new StockDataRow
                        {
                            Id = m.StockDataId,
                            Qty = stock_out.Qty + m.Qty,
                            AvailableQty = stock_out.AvailableQty + m.Qty,
                            IsActive = Administration.Entities.ActiveStatus.Active
                        }
                    });
                    // 删除库存记录数据
                    var movOutField = MoveRecordRow.Fields;
                    var mov_out = uow.Connection.TrySingle<MoveRecordRow>(movOutField.IsActive == 1
                        && movOutField.BizBillId == (Guid)m.HeadId && movOutField.BizItemId == (Guid)m.Id);
                    if (mov_out == null)
                    {
                        throw new Exception($"行{m.Serial},组装出库记录不存在,反审核失败!");
                    }
                    moveRep.Delete(uow, new DeleteRequest { EntityId = mov_out.Id });
                }
            }
            return new MySaveHandler().Process(uow, n, SaveRequestType.Update);
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var row = request.Entity;
            if ((row.Qty ?? 0) > 0)
            {
                row.BuyAmount = row.Items.Sum(c => c.BuyAmount);
                row.BuyPrice = row.BuyAmount / row.Qty;
            }
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var row = request.Entity;
            if ((row.Qty ?? 0) > 0)
            {
                row.BuyAmount = row.Items.Sum(c => c.BuyAmount);
                row.BuyPrice = row.BuyAmount / row.Qty;
            }
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
                    var prefix = new DocumentCodeConfigRepository().GetDocumentCodePrefix(Connection, Sys.Enum.DocumentKind.AssembleBill);
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