
namespace Kun.Ops.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ops.MaintenanceType")]
    [BasedOnRow(typeof(Entities.MaintenanceTypeRow), CheckNames = true)]
    public class MaintenanceTypeForm
    {
        public String Name { get; set; }

        public Int32  Sort { get; set; }
    }
}