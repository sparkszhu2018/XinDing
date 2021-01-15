﻿
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid Id { get; set; }
        public Guid HeadId { get; set; }
        public Int32 Serial { get; set; }
        public Guid StockDataId { get; set; }
        public Guid MaterialId { get; set; }
        [EditLink]
        public String MaterialName { get; set; }
        public Guid UnitId { get; set; }
        public String UnitName { get; set; }
        public Decimal Qty { get; set; }
        public Decimal SalePrice { get; set; }
        public Decimal SaleAmount { get; set; }
        public Guid LotId { get; set; }
        public Guid WarehouseId { get; set; }
        public Guid PositionId { get; set; }
        public String Specification { get; set; }
    }
}