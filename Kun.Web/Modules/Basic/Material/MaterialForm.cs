
namespace Kun.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Material")]
    [BasedOnRow(typeof(Entities.MaterialRow), CheckNames = true)]
    public class MaterialForm
    {
        public String Code { get; set; }
        public String Name { get; set; } 
        public Guid UnitId { get; set; }
        public Decimal SafetyStock { get; set; }
        [ReadOnly(true),DefaultValue(true)]
        public Boolean IsBatch { get; set; }
        public Guid GroupId { get; set; }
    }
}