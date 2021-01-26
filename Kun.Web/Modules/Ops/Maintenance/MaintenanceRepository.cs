
namespace Kun.Ops.Repositories
{
    using Kun.Basic.Repositories;
    using Kun.Stock.Entities;
    using Kun.Stock.Enums;
    using Kun.Stock.Repositories;
    using Kun.Sys.Enum;
    using Kun.Sys.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using static Kun.Ops.Enums.OpsEnums;
    using static Kun.Stock.Enums.MoveRecordEnums;
    using MyRow = Entities.MaintenanceRow;

    public class MaintenanceRepository
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
                var items = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity.Materials;
                var stockRep = new StockDataRepository();
                //var lotRep = new LotRepository();
                var moveRep = new MoveRecordRepository();
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
                    // 记录移库数据
                    var mov = new MoveRecordRow
                    {
                        MovCode = MoveType.Maint,
                        Qty =  m.Qty,
                        FromStockId = stock.Id,
                        FromMaterialId = m.MaterialId,
                        FromUnitId = m.UnitId,
                        FromWarehouseId = m.WarehouseId,
                        FromPositionId = m.PositionId,
                        FromLotId = m.LotId,
                        BizBillType = DocumentKind.MaintBill,
                        BizBillId = m.HeadId,
                        BizItemId = m.Id,
                        Status = MoveRecordEnums.Status.Normal,
                        BizBillCode = m.BillNo,
                    };
                    moveRep.Create(uow, new SaveRequest<MoveRecordRow> { Entity = mov }); 
                }
            }
            else if (Status == BillStatus.UnAudited) //反审核
            {
                //下游单据验证 待开发





                var items = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity.Materials;
                var stockRep = new StockDataRepository(); 
                var moveRep = new MoveRecordRepository();
                foreach (var m in items)
                {
                    if (m.MaterialCode == "10000000") //虚拟物料跳过
                        continue;

                    //取消扣减库存数量
                    var stock = stockRep.Retrieve(uow.Connection, new RetrieveRequest { EntityId = m.StockDataId }).Entity;
                    stockRep.Update(uow, new SaveRequest<StockDataRow>
                    {
                        Entity = new StockDataRow
                        {
                            Id = m.StockDataId,
                            Qty = stock.Qty + m.Qty,
                            AvailableQty = stock.AvailableQty + m.Qty,
                            IsActive =  Administration.Entities.ActiveStatus.Active
                        }
                    });
                    // 删除库存记录数据
                    var movField = MoveRecordRow.Fields;
                    var mov = uow.Connection.TrySingle<MoveRecordRow>(movField.IsActive == 1
                        && movField.BizBillId == (Guid)m.HeadId && movField.BizItemId == (Guid)m.Id);
                    if(mov == null)
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
                    var prefix = new DocumentCodeConfigRepository().GetDocumentCodePrefix(Connection, Sys.Enum.DocumentKind.MaintBill);
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