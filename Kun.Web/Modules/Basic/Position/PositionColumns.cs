
namespace Kun.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Position")]
    [BasedOnRow(typeof(Entities.PositionRow), CheckNames = true)]
    public class PositionColumns
    { 
        [EditLink]
        public String Code { get; set; }
        public String Name { get; set; }
        public String WarehouseName { get; set; }
    }
}