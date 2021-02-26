
namespace Kun.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.ReceiptItem")]
    [BasedOnRow(typeof(Entities.ReceiptItemRow), CheckNames = true)]
    public class ReceiptItemColumns
    { 
        public String BillNo { get; set; }
        public Int32 Serial { get; set; }
        public Int32 HeadStatus { get; set; }
        public DateTimeField HeadDate { get; set; }
        public String SourceDocumentNo { get; set; } 
        public Int32 SourceItemSerial { get; set; }
        public String Name { get; set; }
        public Decimal InvoiceAmount { get; set; }
        public Decimal BalanceAmount { get; set; }
        public Decimal ReceiptAmount { get; set; }
        public String Note { get; set; }
    }
}