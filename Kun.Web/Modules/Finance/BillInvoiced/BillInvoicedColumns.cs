
namespace Kun.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.BillInvoiced")]
    [BasedOnRow(typeof(Entities.BillInvoicedRow), CheckNames = true)]
    public class BillInvoicedColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid Id { get; set; }
        public Int32 SourceDocumentType { get; set; }
        public Guid SourceDocumentId { get; set; }
        [EditLink]
        public String SourceDocumentNo { get; set; }
        public Guid SourceItemId { get; set; }
        public Int32 SourceItemSerial { get; set; }
        public Decimal Amount { get; set; }
        public Decimal InvoiceAmount { get; set; }
    }
}