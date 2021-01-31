
namespace Kun.Project.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Project.BizItem")]
    [BasedOnRow(typeof(Entities.BizItemRow), CheckNames = true)]
    public class BizItemColumns
    {
        [EditLink]
        public Int32 Serial { get; set; } 
        public String Name { get; set; }
        public String BizTypeName { get; set; }
        public Decimal Amount { get; set; }
          
    }
}