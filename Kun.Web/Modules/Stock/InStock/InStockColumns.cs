
namespace Kun.Stock.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stock.InStock")]
    [BasedOnRow(typeof(Entities.InStockRow), CheckNames = true)]
    public class InStockColumns
    {
        
        [EditLink]
        public String BillNo { get; set; }
        public Int32 BillType { get; set; }
        public String Status { get; set; }
        public DateTime Date { get; set; }
        public String Note { get; set; }
        public String ApproverName { get; set; }
        public DateTime ApproverDate { get; set; }
    }
}