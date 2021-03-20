
namespace Kun.Project.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Project.MaterialsItemEditorColumns")]
    [BasedOnRow(typeof(Entities.MaterialsItemRow), CheckNames = true)]
    public class MaterialsItemEditorColumns
    {
        [EditLink]
        public Int32  Serial { get; set; }
        public String  MaterialCode { get; set; }
        public String MaterialName { get; set; }
        public String UnitName { get; set; }
        public Decimal Qty { get; set; }
        public String LotCode { get; set; }
        public String WarehouseName { get; set; }
        public String PositionName { get; set; }
        public Decimal SalePrice { get; set; }
        public Decimal SaleAmount { get; set; }
        public String Specification { get; set; }
        public Decimal BuyPrice { get; set; }
        public Decimal BuyAmount { get; set; }
        public String Note { get; set; }

    }
}