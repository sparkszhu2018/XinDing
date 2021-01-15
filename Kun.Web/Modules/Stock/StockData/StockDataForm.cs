
namespace Kun.Stock.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Stock.StockData")]
    [BasedOnRow(typeof(Entities.StockDataRow), CheckNames = true)]
    public class StockDataForm
    {
        public Guid MaterialId { get; set; }
        public Decimal Qty { get; set; }
        public Decimal ReservedQty { get; set; }
        public Decimal AvailableQty { get; set; }
        public Guid UnitId { get; set; }
        public Guid LotId { get; set; }
        public Guid WarehouseId { get; set; }
        public Decimal BuyPrice { get; set; }
        public Decimal BuyAmount { get; set; }
        public Decimal SalePrice { get; set; }
        public Decimal SaleAmount { get; set; }
        public String Specification { get; set; }
    }
}