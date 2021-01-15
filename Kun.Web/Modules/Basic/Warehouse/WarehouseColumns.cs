
namespace Kun.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Warehouse")]
    [BasedOnRow(typeof(Entities.WarehouseRow), CheckNames = true)]
    public class WarehouseColumns
    { 
        [EditLink]
        public String Code { get; set; }
        public String Name { get; set; } 
        public Boolean UsePosition { get; set; }
        public String Description { get; set; }
    }
}