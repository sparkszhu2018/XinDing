
namespace Kun.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Kun.Administration.Entities;
    using Kun.Finance.Entities;

    [FormScript("Finance.Invoice")]
    [BasedOnRow(typeof(Entities.InvoiceRow), CheckNames = true)]
    public class InvoiceForm
    {
        [Category("基本信息")]
        [OneThirdWidth(UntilNext = true), LabelWidth(100, UntilNext = true)]
        public String BillNo { get; set; }
        public Int32 Status { get; set; }
        public DateTime Date { get; set; }

        [LookupEditor(typeof(UserRow))]
        public Int64 InsertUserId { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }

        [Category("业务信息")]
        //public Int32Field BillType { get; set; }


        public String InvoiceNo { get; set; }
        public Guid CompanyId { get; set; }

        public Guid CustomerId { get; set; }
        
        public Decimal InvoiceAmount { get; set; }
        [ReadOnly(true)]
        public Decimal ItemInvoiceAmount { get; set; }

        [FullWidth]
        public String Note { get; set; }

        [Category("开票明细")]
        [FullWidth, InvoiceItemEditor]
        public List<InvoiceItemRow> Items { get; set; }
    }
}