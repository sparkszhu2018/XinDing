
namespace Kun.Stock.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Stock.OutStockItem")]
    [BasedOnRow(typeof(Entities.OutStockItemRow), CheckNames = true)]
    public class OutStockItemForm
    {
        [LabelWidth(100, UntilNext = true), ReadOnly(true)]
        public Guid MaterialId { get; set; }
        public String MaterialName { get; set; }
        [HalfWidth(UntilNext = true), ReadOnly(true)]
        public Int32 Serial { get; set; }
        [Hidden]
        public Guid UnitId { get; set; }
        public String UnitName { get; set; }
        public Decimal Qty { get; set; }
        [ReadOnly(true)]
        public Decimal StockQty { get; set; }
         
        [ReadOnly(true)]
        public Decimal BuyPrice { get; set; }
        [ReadOnly(true)]
        public Decimal BuyAmount { get; set; }
        [ReadOnly(true)]
        public String Specification { get; set; }
        [ReadOnly(true)]
        public Guid LotId { get; set; }
        [ReadOnly(true)]
        public Guid WarehouseId { get; set; }
        [ReadOnly(true)]
        public Guid PositionId { get; set; }
    }
}