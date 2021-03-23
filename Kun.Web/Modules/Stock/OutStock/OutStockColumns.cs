
namespace Kun.Stock.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stock.OutStock")]
    [BasedOnRow(typeof(Entities.OutStockRow), CheckNames = true)]
    public class OutStockColumns
    {
        [EditLink]
        public String BillNo { get; set; }
        
        public Int32 Status { get; set; }
        public DateTime Date { get; set; } 
         
        public String InsertUserDisplayName { get; set; }
        public DateTime? InsertDate { get; set; }
        public String ApproverName { get; set; }
        public DateTime ApproverDate { get; set; }
    }
}