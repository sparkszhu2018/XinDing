
namespace Kun.Ops.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ops.MaintenanceManhours")]
    [BasedOnRow(typeof(Entities.MaintenanceManhoursRow), CheckNames = true)]
    public class MaintenanceManhoursColumns
    {
        [EditLink] 
        public Int32 Serial { get; set; }
        public String ManhourName { get; set; }
        public Decimal Price { get; set; }
        public Decimal Qty { get; set; }

        public Decimal Amount { get; set; } 
        public String Note { get; set; }
    }
}