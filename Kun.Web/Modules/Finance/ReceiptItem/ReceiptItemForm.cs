
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
        [LabelWidth(100, UntilNext = true), ReadOnly(true)]
        [HalfWidth(UntilNext = true)]
        public Int32 Serial { get; set; }
        [ReadOnly(true)]
        public String SourceDocumentNo { get; set; }
        [ReadOnly(true)]
        public Int32 SourceItemSerial { get; set; }
        public String Name { get; set; }
        [ReadOnly(true)]
        public Decimal InvoiceAmount { get; set; }
        [ReadOnly(true)]
        public Decimal BalanceAmount { get; set; }
        public Decimal ReceiptAmount { get; set; }
        public String Note { get; set; }
    }
}