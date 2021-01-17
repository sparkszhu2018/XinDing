
namespace Kun.Sell.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sell.SaleOrderItem")]
    [BasedOnRow(typeof(Entities.SaleOrderItemRow), CheckNames = true)]
    public class SaleOrderItemColumns
    {
        [EditLink]
        public Int32Field Serial { get; set; }
        public StringField MaterialCode { get; set; }
        public StringField MaterialName { get; set; }
        public StringField UnitName { get; set; }
        public Decimal Qty { get; set; }
        public StringField LotCode { get; set; }
        public StringField WarehouseName { get; set; }
        public StringField PositionName { get; set; }
        public Decimal SalePrice { get; set; }
        public Decimal SaleAmount { get; set; }
        public String Specification { get; set; }
    }
}