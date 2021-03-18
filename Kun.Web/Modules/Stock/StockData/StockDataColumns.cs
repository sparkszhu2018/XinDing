
namespace Kun.Stock.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stock.StockData")]
    [BasedOnRow(typeof(Entities.StockDataRow), CheckNames = true)]
    public class StockDataColumns
    { 
        public String MaterialCode { get; set; }
        public String MaterialName { get; set; }
        public String UnitName { get; set; }
        public String LotCode { get; set; }
        public Decimal Qty { get; set; }
        public Decimal ReservedQty { get; set; }
        public Decimal AvailableQty { get; set; } 
        public String Specification { get; set; } 
        public Decimal BuyPrice { get; set; }
        public Decimal BuyAmount { get; set; }

        
        public Decimal SalePrice { get; set; }
        public Decimal SaleAmount { get; set; }

        public String PositionName { get; set; }
        public String WarehouseName { get; set; }
        public String Applicant { get; set; }




    }
}