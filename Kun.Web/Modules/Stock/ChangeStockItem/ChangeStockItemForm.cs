
namespace Kun.Stock.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Stock.ChangeStockItem")]
    [BasedOnRow(typeof(Entities.ChangeStockItemRow), CheckNames = true)]
    public class ChangeStockItemForm
    {

        [LabelWidth(100, UntilNext = true)][ReadOnly(true)]
        public Guid FromMaterialId { get; set; }

        public Guid ToMaterialId { get; set; }

        [ReadOnly(true)]
        [HalfWidth(UntilNext = true)]
        public Int32 Serial { get; set; }
        public Decimal Qty { get; set; }

        [ReadOnly(true)]
        public Guid FromUnitId { get; set; }
        [ReadOnly(true)]
        public Guid ToUnitId { get; set; }

        [ReadOnly(true)]
        public Guid FromWarehouseId { get; set; }
        public Guid ToWarehouseId { get; set; }

        [ReadOnly(true)]
        public Guid FromPositionId { get; set; }
        public Guid ToPositionId { get; set; }


        [ReadOnly(true)]
        public Guid FromLotId { get; set; }
        public Guid ToLotId { get; set; }

        [ReadOnly(true)]
        public Decimal FromBuyPrice { get; set; }
        public Decimal ToBuyPrice { get; set; }

        [ReadOnly(true)]
        public Decimal FromSalePrice { get; set; }
        public Decimal ToSalePrice { get; set; }

        [ReadOnly(true)]
        public String FromSpecification { get; set; }  
        public String ToSpecification { get; set; }
    }
}