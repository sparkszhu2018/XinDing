
namespace Kun.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.BizType")]
    [BasedOnRow(typeof(Entities.BizTypeRow), CheckNames = true)]
    public class BizTypeColumns
    { 
        [EditLink]
        public String Name { get; set; }
    }
}