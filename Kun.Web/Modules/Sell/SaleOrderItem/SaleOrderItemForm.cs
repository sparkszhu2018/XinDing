
namespace Kun.Sell.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sell.SaleOrderItem")]
    [BasedOnRow(typeof(Entities.SaleOrderItemRow), CheckNames = true)]
    public class SaleOrderItemForm
    {

        [LabelWidth(100, UntilNext = true), ReadOnly(true)]
        public Guid MaterialId { get; set; }
        [ReadOnly(true)]
        public String MaterialName { get; set; } 
        [HalfWidth(UntilNext = true), ReadOnly(true)]
        public Int32 Serial { get; set; }
        [Hidden]
        public Guid UnitId { get; set; }
        [ReadOnly(true)]
        public String UnitName { get; set; }
        public Decimal Qty { get; set; }
        public Decimal SalePrice { get; set; }
        [ReadOnly(true)]
        public Decimal SaleAmount { get; set; }
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