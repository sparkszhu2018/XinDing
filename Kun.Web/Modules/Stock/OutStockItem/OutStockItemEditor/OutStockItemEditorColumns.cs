
namespace Kun.Stock.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stock.OutStockItemEditorColumns")]
    [BasedOnRow(typeof(Entities.OutStockItemRow), CheckNames = true)]
    public class OutStockItemEditorColumns
    {
        [EditLink]
        public Int32Field Serial { get; set; }
        [EditLink]
        public String MaterialCode { get; set; }
        public String MaterialName { get; set; }
        public String UnitName { get; set; }
        public Decimal Qty { get; set; }
        public String LotCode { get; set; }
        public String WarehouseName { get; set; }
        public String PositionName { get; set; }

        public String Specification { get; set; } 
        public Decimal BuyPrice { get; set; }
        public Decimal BuyAmount { get; set; }

        public String ApplicantName;
        public String Usage;


    }
}