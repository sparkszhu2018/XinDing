
namespace Kun.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.ReceiptItem")]
    [BasedOnRow(typeof(Entities.ReceiptItemRow), CheckNames = true)]
    public class ReceiptItemForm
    {
        public Guid HeadId { get; set; }
        public Int32 Serial { get; set; }
        public Int32 SourceDocumentType { get; set; }
        public Guid SourceDocumentId { get; set; }
        public String SourceDocumentNo { get; set; }
        public Guid SourceItemId { get; set; }
        public Int32 SourceItemSerial { get; set; }
        public String Name { get; set; }
        public Decimal InvoiceAmount { get; set; }
        public Decimal BalanceAmount { get; set; }
        public Decimal ReceiptAmount { get; set; }
        public String Note { get; set; }
    }
}