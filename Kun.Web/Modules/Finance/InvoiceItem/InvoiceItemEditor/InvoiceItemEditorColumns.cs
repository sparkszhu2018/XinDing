
namespace Kun.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.InvoiceItemEditor")]
    [BasedOnRow(typeof(Entities.InvoiceItemRow), CheckNames = true)]
    public class InvoiceItemEditorColumns
    {
        [EditLink] 
        public Int32 Serial { get; set; }
        [Hidden]
        public Int32 SourceDocumentType { get; set; } 
        public String SourceDocumentNo { get; set; } 
        public Int32 SourceItemSerial { get; set; }
        [Hidden]
        public String Kind { get; set; }
        public String Name { get; set; }
        public String UnitName { get; set; }
        public Decimal Price { get; set; }
        public Decimal Qty { get; set; }
        public Decimal Amount { get; set; }
        public Decimal InvoiceAmount { get; set; }
       // public Decimal TaxRate { get; set; }
        public String InvoiceNo { get; set; }
        public String Note { get; set; }
        public String VendorName { get; set; }
    }
}