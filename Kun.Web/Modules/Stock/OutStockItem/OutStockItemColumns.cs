
namespace Kun.Stock.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stock.OutStockItem")]
    [BasedOnRow(typeof(Entities.OutStockItemRow), CheckNames = true)]
    public class OutStockItemColumns
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
        public Decimal BuyPrice { get; set; }
        public Decimal BuyAmount { get; set; }
        public Guid LotId { get; set; }
        public Guid WarehouseId { get; set; }
        public Guid PositionId { get; set; }
        public String Specification { get; set; }
    }
}