
namespace Kun.Stock.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Stock.MoveRecord")]
    [BasedOnRow(typeof(Entities.MoveRecordRow), CheckNames = true)]
    public class MoveRecordForm
    {
        public Int32 MovCode { get; set; }
        public Guid FromStockId { get; set; }
        public Guid FromMaterialId { get; set; }
        public Guid FromUnitId { get; set; }
        public Guid FromWarehouseId { get; set; }
        public Guid FromPositionId { get; set; }
        public Guid FromLotId { get; set; }
        public Decimal Qty { get; set; }
        public Guid ToStockId { get; set; }
        public Guid ToMaterialId { get; set; }
        public Guid ToUnitId { get; set; }
        public Guid ToWarehouseId { get; set; }
        public Guid ToPositionId { get; set; }
        public Guid ToLotId { get; set; }
        public Int32 BizBillType { get; set; }
        public Guid BizBillId { get; set; }
        public Guid BizItemId { get; set; }
        public Int32 Status { get; set; }
    }
}