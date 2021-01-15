
namespace Kun.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Material")]
    [BasedOnRow(typeof(Entities.MaterialRow), CheckNames = true)]
    public class MaterialColumns
    { 
        [EditLink]
        public String Code { get; set; }
        public String Name { get; set; }
        public String GroupName { get; set; }
        public String UnitCode { get; set; }
        public Decimal SafetyStock { get; set; }
        public Boolean IsBatch { get; set; }
    }
}