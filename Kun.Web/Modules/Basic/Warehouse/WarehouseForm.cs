
namespace Kun.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Warehouse")]
    [BasedOnRow(typeof(Entities.WarehouseRow), CheckNames = true)]
    public class WarehouseForm
    {
        public String Code { get; set; }
        public String Name { get; set; }
        
        public Boolean UsePosition { get; set; }
        
        public String Description { get; set; }
    }
}