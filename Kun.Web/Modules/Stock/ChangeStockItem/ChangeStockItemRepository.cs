﻿
namespace Kun.Stock.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ChangeStockItemRow;

    public class ChangeStockItemRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

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

        [DefaultHandler]
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                if (IsCreate)
                {
                    Row.Id = Row.Id ?? Guid.NewGuid();
                }
                var changeCode = $"{(Row.FromMaterialId != Row.ToMaterialId ? 1 : 0)}" +
                    $"{(Row.FromLotId != Row.FromLotId ? 1 : 0)}" +
                    $"{(Row.FromWarehouseId != Row.ToWarehouseId || Row.FromPositionId != Row.ToPositionId ? 1 : 0)}" +
                    $"{(Row.FromSpecification != Row.ToSpecification ? 1 : 0)}" +
                    $"{(Row.FromBuyPrice != Row.ToBuyPrice || Row.FromSalePrice != Row.ToSalePrice ? 1 : 0)}" +
                    $"00000";
                Row.ChangeCode = changeCode;

            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}