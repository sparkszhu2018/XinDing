
namespace Kun.Finance.Repositories
{
    using Kun.Sys.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using static Kun.Finance.Enums.FinanceEnums;
    using MyRow = Entities.ReceiptRow;

    public class ReceiptRepository
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
            if (Status == BillStatus.Commited) //提交
            {
                //CheckInvoiceQtyAmount(uow, Id);
            }
            else if (Status == BillStatus.Audited) //审核通过
            {
                //CheckInvoiceQtyAmount(uow, Id);
                //更新发票的已回款金额
                var items = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity.Items;
                var invoiceItemRepository = new InvoiceItemRepository();
                foreach(var i in items)
                {
                    var invoiceItem = invoiceItemRepository.Retrieve(uow.Connection, new RetrieveRequest { EntityId = i.SourceItemId }).Entity;
                    invoiceItemRepository.Update(uow, new SaveRequest<Entities.InvoiceItemRow>
                    {
                        Entity = new Entities.InvoiceItemRow
                        {
                            Id = invoiceItem.Id,
                            ReceiptAmount = invoiceItem.ReceiptAmount + i.ReceiptAmount
                        }
                    }) ;
                } 
            }
            else if (Status == BillStatus.UnAudited) //反审核
            {
                var items = Retrieve(uow.Connection, new RetrieveRequest { EntityId = Id }).Entity.Items;
                var invoiceItemRepository = new InvoiceItemRepository();
                foreach (var i in items)
                {
                    var invoiceItem = invoiceItemRepository.Retrieve(uow.Connection, new RetrieveRequest { EntityId = i.SourceItemId }).Entity;

                    if (invoiceItem.ReceiptAmount - i.ReceiptAmount < 0) { throw new Exception($"行{i.Serial}对应的发票回款金额不得小于0!"); }
                    invoiceItemRepository.Update(uow, new SaveRequest<Entities.InvoiceItemRow>
                    {
                        Entity = new Entities.InvoiceItemRow
                        {
                            Id = invoiceItem.Id,
                            ReceiptAmount = invoiceItem.ReceiptAmount - i.ReceiptAmount
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
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                if (IsCreate)
                {
                    Row.Id = Row.Id ?? Guid.NewGuid();
                    var prefix = new DocumentCodeConfigRepository().GetDocumentCodePrefix(Connection, Sys.Enum.DocumentKind.ReceiptBill);
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