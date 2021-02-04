
namespace Kun.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.BillInvoiced")]
    [BasedOnRow(typeof(Entities.BillInvoicedRow), CheckNames = true)]
    public class BillInvoicedForm
    {
        public Int32 SourceDocumentType { get; set; }
        public Guid SourceDocumentId { get; set; }
        public String SourceDocumentNo { get; set; }
        public Guid SourceItemId { get; set; }
        public Int32 SourceItemSerial { get; set; }
        public Decimal Amount { get; set; }
        public Decimal InvoiceAmount { get; set; }
    }
}