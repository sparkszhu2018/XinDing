
namespace Kun.Sell.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sell.SaleOrder")]
    [BasedOnRow(typeof(Entities.SaleOrderRow), CheckNames = true)]
    public class SaleOrderColumns
    {
        [EditLink]
        public String BillNo { get; set; }
        public Int32 BillType { get; set; }
        public Int32 Status { get; set; }
        public DateTime Date { get; set; } 
        public String CustomerName { get; set; }

        public String InsertUserDisplayName { get; set; }
        public DateTime? InsertDate { get; set; }
        public String ApproverName { get; set; }
        public DateTime ApproverDate { get; set; }
    }
}