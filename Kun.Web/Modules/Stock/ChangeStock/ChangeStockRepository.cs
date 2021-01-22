﻿
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
    using System.Data;
    using static Kun.Stock.Enums.MoveRecordEnums;
    using static Kun.Stock.Enums.StockEnums;
    using MyRow = Entities.ChangeStockRow;

    public class ChangeStockRepository
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
                    ApproverDate = DateTime.Now,
                    ApproverId = long.Parse(Authorization.UserId),
                }
            };
            if (Status == BillStatus.Audited) //审核通过
            {
                var items = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity.Items;
                var stockRep = new StockDataRepository();
                var moveRep = new MoveRecordRepository();
                foreach (var m in items)
                {
                    if (m.FromMaterialCode == "10000000") //虚拟物料跳过
                        continue;

                    //扣减库存数量
                    var stock = stockRep.Retrieve(uow.Connection, new RetrieveRequest { EntityId = m.FromStockId }).Entity;
                    stockRep.Update(uow, new SaveRequest<StockDataRow>
                    {
                        Entity = new StockDataRow
                        {
                            Id = m.FromStockId,
                            Qty = stock.Qty - m.Qty,
                            AvailableQty = stock.AvailableQty - m.Qty,
                        }
                    });

                    //新增库存
                    var toStock = new StockDataRow
                    {
                        MaterialId = m.ToMaterialId,
                        Qty = m.Qty,
                        ReservedQty = 0,
                        AvailableQty = m.Qty,
                        UnitId = m.ToUnitId,
                        BuyPrice = m.ToBuyPrice,
                        BuyAmount = m.ToBuyPrice * m.Qty,
                        SalePrice = m.ToSalePrice,
                        SaleAmount = m.ToSalePrice * m.Qty,
                        Specification = m.ToSpecification,
                        WarehouseId = m.ToWarehouseId,
                        PositionId = m.ToPositionId,
                        LotId = m.ToLotId
                    };
                    stockRep.Create(uow, new SaveRequest<StockDataRow> { Entity = toStock });
                    m.ToStockId = toStock.Id;

                    // 记录移库数据
                    var mov = new MoveRecordRow
                    {
                        MovCode = MoveType.ChangeStock,
                        Qty = m.Qty,
                        FromStockId = stock.Id,
                        FromMaterialId = m.FromMaterialId,
                        FromUnitId = m.FromUnitId,
                        FromWarehouseId = m.FromWarehouseId,
                        FromPositionId = m.FromPositionId,
                        FromLotId = m.FromLotId, 
                        BizBillType = DocumentKind.ChangeStockBill,
                        BizBillId = m.HeadId,
                        BizItemId = m.Id, 
                        Status = MoveRecordEnums.Status.Normal,
                        BizBillCode = m.BillNo,

                        ToStockId = toStock.Id,
                        ToMaterialId = m.ToMaterialId,
                        ToUnitId = m.ToUnitId,
                        ToWarehouseId = m.ToWarehouseId,
                        ToPositionId = m.ToPositionId,
                        ToLotId = m.ToLotId,

                    };
                    moveRep.Create(uow, new SaveRequest<MoveRecordRow> { Entity = mov });

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
                    var prefix = new DocumentCodeConfigRepository().GetDocumentCodePrefix(Connection, Sys.Enum.DocumentKind.ChangeStockBill);
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
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}