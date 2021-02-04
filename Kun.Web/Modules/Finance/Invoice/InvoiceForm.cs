
namespace Kun.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Invoice")]
    [BasedOnRow(typeof(Entities.InvoiceRow), CheckNames = true)]
    public class InvoiceForm
    {
        public String BillNo { get; set; }
        public Int32 BillType { get; set; }
        public Int32 Status { get; set; }
        public String Note { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }
    }
}