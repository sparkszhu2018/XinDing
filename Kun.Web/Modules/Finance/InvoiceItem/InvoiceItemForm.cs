
namespace Kun.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.InvoiceItem")]
    [BasedOnRow(typeof(Entities.InvoiceItemRow), CheckNames = true)]
    public class InvoiceItemForm
    {

        [LabelWidth(100, UntilNext = true), ReadOnly(true)]
        [HalfWidth(UntilNext = true)]
        public Int32 Serial { get; set; }
        [ReadOnly(true)]
        public Int32 SourceDocumentType { get; set; }

        //public Guid SourceDocumentId { get; set; }
        [ReadOnly(true)]
        public String SourceDocumentNo { get; set; }
        //public Guid SourceItemId { get; set; }
        [ReadOnly(true)]
        public Int32 SourceItemSerial { get; set; }
        [ReadOnly(true)]
        public Int32 Kind { get; set; }
        [ReadOnly(true)]
        public String Name { get; set; }
        [ReadOnly(true)]
        public String UnitName { get; set; }
        [ReadOnly(true)]
        public Decimal Price { get; set; }
        public Decimal Qty { get; set; }
        [ReadOnly(true)]
        public Decimal Amount { get; set; }
        public Decimal InvoiceAmount { get; set; }
        //public Decimal TaxRate { get; set; } 

        public String Note { get; set; }
    }
}