
namespace Kun.Project.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Project.BizItemView")]
    [BasedOnRow(typeof(Entities.BizItemRow), CheckNames = true)]
    public class BizItemViewColumns
    { 
        [SortOrder(1, true)]
        public StringField BillNo { get; set; }
        public StringField HeadStatus { get; set; }
        [SortOrder(2)]
        public Int32 Serial { get; set; } 
        public String Name { get; set; }
        public String BizTypeName { get; set; }
        public Decimal Amount { get; set; }
          
    }
}