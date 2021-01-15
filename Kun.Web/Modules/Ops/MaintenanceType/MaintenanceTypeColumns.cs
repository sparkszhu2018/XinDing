
namespace Kun.Ops.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ops.MaintenanceType")]
    [BasedOnRow(typeof(Entities.MaintenanceTypeRow), CheckNames = true)]
    public class MaintenanceTypeColumns
    { 
        [EditLink]
        public String Name { get; set; }
    }
}