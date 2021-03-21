
namespace Kun.Stock.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stock.MoveRecord")]
    [BasedOnRow(typeof(Entities.MoveRecordRow), CheckNames = true)]
    public class MoveRecordColumns
    {

        public Int32 MovCode { get; set; }
        public DateTime InsertDate { get; set; }
        public String FromMaterialCode { get; set; }
        public String FromMaterialName { get; set; }
        public String ToMaterialCode { get; set; }
        public String ToMaterialName { get; set; }
        public Decimal Qty { get; set; }
        public Int32 BizBillType { get; set; }
        [EditLink]
        public String BizBillCode { get; set; }
        public String FromUnitName { get; set; }
        public String FromWarehouseName { get; set; }
        public String FromPositionName { get; set; }
        public String FromLotCode { get; set; }
        public String ToUnitName { get; set; }
        public String ToWarehouseName { get; set; }
        public String ToPositionName { get; set; }
        public String ToLotCode { get; set; }

    }
}