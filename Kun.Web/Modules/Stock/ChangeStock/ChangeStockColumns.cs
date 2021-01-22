
namespace Kun.Stock.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stock.ChangeStock")]
    [BasedOnRow(typeof(Entities.ChangeStockRow), CheckNames = true)]
    public class ChangeStockColumns
    { 
        [EditLink]
        public String BillNo { get; set; } 
        public String Status { get; set; }
        public DateTime Date { get; set; }
        public String Note { get; set; }
        public String ApproverName { get; set; }
        public DateTime ApproverDate { get; set; }
    }
}