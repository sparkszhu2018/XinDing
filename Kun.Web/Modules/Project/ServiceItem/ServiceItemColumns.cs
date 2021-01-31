
namespace Kun.Project.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Project.ServiceItem")]
    [BasedOnRow(typeof(Entities.ServiceItemRow), CheckNames = true)]
    public class ServiceItemColumns
    {
        [EditLink]
        public Int32 Serial { get; set; } 
        public String Name { get; set; }
        public Decimal Price { get; set; }
        public Decimal Qty { get; set; }
        public Decimal Amount { get; set; }

         
    }
}