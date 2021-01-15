
namespace Kun.Ops.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ops.MaintenanceManhours")]
    [BasedOnRow(typeof(Entities.MaintenanceManhoursRow), CheckNames = true)]
    public class MaintenanceManhoursForm
    {
        [LabelWidth(100, UntilNext = true),HalfWidth(UntilNext =true)]
        [ReadOnly(true)]
        public Int32 Serial { get; set; }
        [ReadOnly(true)]
        public Guid ManhourId { get; set; }
        [ReadOnly(true)]
        public Decimal Price { get; set; }
        public Decimal Qty { get; set; }
        public Decimal Amount { get; set; }
        [FullWidth(UntilNext = true)]
        public String Note { get; set; }
    }
}