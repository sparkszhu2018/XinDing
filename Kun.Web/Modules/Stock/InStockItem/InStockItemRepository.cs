
namespace Kun.Stock.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.InStockItemRow;

    public class InStockItemRepository
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
                //if (IsCreate)
                //{
                Row.Id = Row.Id ?? Guid.NewGuid();
                Row.HeadId = Row.HeadId ?? Guid.NewGuid();
                //}
                Row.BuyPrice = Row.BuyPrice ?? 0M;
                Row.BuyAmount = Row.BuyAmount ?? 0M;
                Row.SalePrice = Row.SalePrice ?? 0M;
                Row.SaleAmount = Row.SaleAmount ?? 0M;
            }

        }
         
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
         
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
         
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}