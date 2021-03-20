
namespace Kun.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.Invoice")]
    [BasedOnRow(typeof(Entities.InvoiceRow), CheckNames = true)]
    public class InvoiceColumns
    {
        [EditLink]
        public String BillNo { get; set; }
        //public Int32 BillType { get; set; }
        [QuickFilter]
        public Int32 Status { get; set; }
        [QuickFilter]
        public DateTime Date { get; set; }
        public String Note { get; set; } 
        public String CompanyName { get; set; }
         
        public String InvoiceNo { get; set; } 

        public Decimal  InvoiceAmount { get; set; }
        public Decimal ItemInvoiceAmount { get; set; }
        
        public Decimal  ReceiptAmount { get; set; }
        public Decimal  UnReceiptAmount { get; set; }

        [QuickFilter,Hidden]
        public Guid  CustomerId { get; set; }
        public String  CustomerName { get; set; }

        [Hidden]
        public String InsertUserDisplayName { get; set; }
        [Hidden]
        public DateTime? InsertDate { get; set; }
        [Hidden]
        public String ApproverName { get; set; }
        [Hidden]
        public DateTime ApproverDate { get; set; }
    }
}