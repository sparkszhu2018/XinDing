
namespace Kun.Finance.Repositories
{
    using Kun.Finance.Entities;
    using Kun.Sys.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using static Kun.Finance.Enums.FinanceEnums;
    using MyRow = Entities.InvoiceRow;

    public class InvoiceRepository
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
                //var head = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity;
                var items = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity.Items;
                var billInvoicedRep = new BillInvoicedRepository();
                foreach (var m in items)
                {
                    //记录到 BillInvoiced表
                    billInvoicedRep.AddOrUpdate(uow, new SaveRequest<BillInvoicedRow>
                    {
                        Entity = new BillInvoicedRow
                        {
                            SourceDocumentType = m.SourceDocumentType,
                            SourceDocumentId = m.SourceDocumentId,
                            SourceDocumentNo = m.SourceDocumentNo,
                            SourceItemId = m.SourceItemId,
                            SourceItemSerial = m.SourceItemSerial,
                            InvoiceAmount = m.InvoiceAmount,
                            Qty = m.Qty,
                            Kind = m.Kind,
                        }
                    }); 
                }
            }
            else if (Status == BillStatus.UnAudited) //反审核
            {
                var items = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity.Items;
                var billInvoicedRep = new BillInvoicedRepository();
                foreach (var m in items)
                {
                    //扣减 BillInvoiced表
                    billInvoicedRep.Reduce(uow, new SaveRequest<BillInvoicedRow>
                    {
                        Entity = new BillInvoicedRow
                        {
                            SourceDocumentType = m.SourceDocumentType,
                            SourceDocumentId = m.SourceDocumentId,
                            SourceDocumentNo = m.SourceDocumentNo,
                            SourceItemId = m.SourceItemId,
                            SourceItemSerial = m.SourceItemSerial,
                            InvoiceAmount = m.InvoiceAmount,
                            Qty = m.Qty,
                            Kind = m.Kind,
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
                    var prefix = new DocumentCodeConfigRepository().GetDocumentCodePrefix(Connection, Sys.Enum.DocumentKind.InvoiceBill);
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