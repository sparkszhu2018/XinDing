
namespace Kun.Stock.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stock.ChangeStockItem")]
    [BasedOnRow(typeof(Entities.ChangeStockItemRow), CheckNames = true)]
    public class ChangeStockItemColumns
    {

        [EditLink]
        public String BillNo { get; set; }
        public String HeadStatus { get; set; }
        public String HeadDate { get; set; }

        [EditLink]
        public Int32 Serial { get; set; }
        public String FromMaterialCode { get; set; }
        public String FromMaterialName { get; set; }
        public Decimal Qty { get; set; }
        public String FromUnitName { get; set; }
        public String FromWarehouseName { get; set; }
        public String FromPositionName { get; set; }
        public String FromLotCode { get; set; }

        public Decimal FromBuyPrice { get; set; }
        public Decimal FromSalePrice { get; set; }
        public String FromSpecification { get; set; } 

        public String ToMaterialCode { get; set; }
        public String ToMaterialName { get; set; }
        public String ToUnitName { get; set; }
        public String ToWarehouseName { get; set; }
        public String ToPositionName { get; set; }
        public String ToLotCode { get; set; } 
        public Decimal ToBuyPrice { get; set; }
        public Decimal ToSalePrice { get; set; }
        public String ToSpecification { get; set; }

    }
}