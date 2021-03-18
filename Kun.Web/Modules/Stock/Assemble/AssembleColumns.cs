
namespace Kun.Stock.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stock.Assemble")]
    [BasedOnRow(typeof(Entities.AssembleRow), CheckNames = true)]
    public class AssembleColumns
    {
     
        [EditLink]
        public String BillNo { get; set; } 
        public Int32 Status { get; set; }
        public DateTime Date { get; set; }
        public Guid ToMaterialId { get; set; }
        public Guid UnitId { get; set; }
        public Decimal Qty { get; set; }
        public Decimal BuyPrice { get; set; }
        public Decimal BuyAmount { get; set; }

        public String LotCode { get; set; }
        public String WarehouseName { get; set; }
        public String PositionName { get; set; }

        public Guid StockDataId { get; set; }
        public String Note { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }
    }
}