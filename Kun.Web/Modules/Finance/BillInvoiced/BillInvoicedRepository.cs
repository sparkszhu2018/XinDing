
namespace Kun.Finance.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.BillInvoicedRow;

    public class BillInvoicedRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse AddOrUpdate(IUnitOfWork uow, SaveRequest<MyRow> request)
        {  
            var list = this.List(uow.Connection, new ListRequest
            {
                EqualityFilter = new System.Collections.Generic.Dictionary<string, object> {
                { "SourceDocumentType",request.Entity.SourceDocumentType},
                { "SourceDocumentId",request.Entity.SourceDocumentId},
                { "SourceItemId",request.Entity.SourceItemId},
                { "Kind",request.Entity.Kind},
            }
            }).Entities;
            if (list.Count > 0)
            {
                var exit = list.First();
                return Update(uow, new SaveRequest<MyRow>
                {
                    Entity = new MyRow
                    {
                        Id = list[0].Id,
                        InvoiceAmount = exit.InvoiceAmount + request.Entity.InvoiceAmount,
                        Qty = exit.Qty + (request.Entity.Kind == Enums.FinanceEnums.InvoiceItemKind.SaleOrderItem ? request.Entity.Qty : 0) //非销售订单数量不变
                    }
                });
            }
            else
            {
                return Create(uow, new SaveRequest<MyRow>
                {
                    Entity = new MyRow
                    {
                        SourceDocumentType = request.Entity.SourceDocumentType,
                        SourceDocumentId = request.Entity.SourceDocumentId,
                        SourceDocumentNo = request.Entity.SourceDocumentNo,
                        SourceItemId = request.Entity.SourceItemId,
                        SourceItemSerial = request.Entity.SourceItemSerial, 
                        InvoiceAmount = request.Entity.InvoiceAmount,
                        Qty = request.Entity.Qty,
                        Kind = request.Entity.Kind,
                    }
                });
            } 
        }
        /// <summary>
        /// 取消开票，扣减数量金额
        /// </summary>
        /// <param name="uow"></param>
        /// <param name="request"></param>
        /// <returns></returns>
        public SaveResponse Reduce(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var list = this.List(uow.Connection, new ListRequest
            {
                EqualityFilter = new System.Collections.Generic.Dictionary<string, object> {
                { "SourceDocumentType",request.Entity.SourceDocumentType},
                { "SourceDocumentId",request.Entity.SourceDocumentId},
                { "SourceItemId",request.Entity.SourceItemId},
                { "Kind",request.Entity.Kind},
            }
            }).Entities;
            if (list.Count > 0)
            {
                var exit = list.First();
                return Update(uow, new SaveRequest<MyRow>
                {
                    Entity = new MyRow
                    {
                        Id = list[0].Id,
                        InvoiceAmount = exit.InvoiceAmount - request.Entity.InvoiceAmount,
                        Qty =  request.Entity.Kind == Enums.FinanceEnums.InvoiceItemKind.SaleOrderItem ? (exit.Qty - request.Entity.Qty) : 0  //非销售订单数量不变
                    }
                });
            }
            else
            {
                throw new Exception($"源单{request.Entity.SourceDocumentNo}-{ EnumMapper.GetText(request.Entity.Kind) }-行{request.Entity.SourceItemSerial??0}找不到已开票数据，无法反审核!");
            } 
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
                }
                if (Row.Qty < 0 || Row.InvoiceAmount < 0)
                {
                    throw new Exception($"源单{Row.SourceDocumentNo}-{ EnumMapper.GetText(Row.Kind) }-行{Row.SourceItemSerial??0}开票数量/金额不得为负，操作失败!");
                }
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}