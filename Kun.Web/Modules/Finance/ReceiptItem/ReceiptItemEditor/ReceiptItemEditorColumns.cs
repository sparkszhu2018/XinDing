
namespace Kun.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.ReceiptItemEditor")]
    [BasedOnRow(typeof(Entities.InvoiceItemRow), CheckNames = true)]
    public class ReceiptItemEditorColumns
    {
        [EditLink]
        public Int32 Serial { get; set; } 
        public String SourceDocumentNo { get; set; }
        public Int32 SourceItemSerial { get; set; }
        public String Name { get; set; }
        public Decimal InvoiceAmount;
        public Decimal BalanceAmount;
        public Decimal ReceiptAmount;
        public String Note { get; set; }
    }
}