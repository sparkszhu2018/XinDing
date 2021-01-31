
namespace Kun.Project.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Project.ServiceItemView")]
    [BasedOnRow(typeof(Entities.ServiceItemRow), CheckNames = true)]
    public class ServiceItemViewColumns
    {
        [SortOrder(1, true)]
        public StringField BillNo { get; set; } 
        public StringField HeadStatus { get; set; }
        
        [SortOrder(2)]
        public Int32 Serial { get; set; } 
        public String Name { get; set; }
        public Decimal Price { get; set; }
        public Decimal Qty { get; set; }
        public Decimal Amount { get; set; }

         
    }
}