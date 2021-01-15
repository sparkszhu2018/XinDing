
namespace Kun.Ops.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ops.MaintenanceMaterials")]
    [BasedOnRow(typeof(Entities.MaintenanceMaterialsRow), CheckNames = true)]
    public class MaintenanceMaterialsForm
    {

        [LabelWidth(100, UntilNext = true),ReadOnly(true)]
        public Guid MaterialId { get; set; } 
        public String MaterialName { get; set; }

        [HalfWidth(UntilNext = true), ReadOnly(true)] 
        public Int32 Serial { get; set; }
        [Hidden]
        public Guid UnitId { get; set; }
        public String  UnitName { get; set; }
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