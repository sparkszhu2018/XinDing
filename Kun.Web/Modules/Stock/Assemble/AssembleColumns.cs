
namespace Kun.Stock.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stock.Assemble")]
    [BasedOnRow(typeof(Entities.AssembleRow), CheckNames = true)]
    public class AssembleColumns
    { 
        [EditLink]
        public String BillNo { get; set; } 
        public Int32 Status { get; set; }
        public DateTime Date { get; set; }
        public String ToMaterialCode { get; set; }
        public String ToMaterialName { get; set; }
        public String UnitName { get; set; }
        public Decimal Qty { get; set; }
        public Decimal BuyPrice { get; set; }
        public Decimal BuyAmount { get; set; } 
        public String LotCode { get; set; }
        public String WarehouseName { get; set; }
        public String PositionName { get; set; } 
        public String Note { get; set; } 
    }
}