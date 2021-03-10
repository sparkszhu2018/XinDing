
namespace Kun.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.InvoiceItem")]
    [BasedOnRow(typeof(Entities.InvoiceItemRow), CheckNames = true)]
    public class InvoiceItemColumns
    {
        [EditLink]
        public String BillNo { get; set; }
        public Int32 Serial { get; set; } 
        public DateTime HeadDate { get; set; }  
       
        public String Name { get; set; }
        public String UnitName { get; set; }
        public Decimal Price { get; set; }
        public Decimal Qty { get; set; }
        public Decimal Amount { get; set; }
        public Decimal InvoiceAmount { get; set; }
        public Decimal? ReceiptAmount { get; set; }
        public String InvoiceNo { get; set; }
        public String Note { get; set; }
        public String VendorName { get; set; }
        public String SourceDocumentNo { get; set; }
        public Int32 SourceItemSerial { get; set; }
    }
}