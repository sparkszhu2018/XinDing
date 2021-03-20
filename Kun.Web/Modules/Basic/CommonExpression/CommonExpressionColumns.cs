
namespace Kun.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.CommonExpression")]
    [BasedOnRow(typeof(Entities.CommonExpressionRow), CheckNames = true)]
    public class CommonExpressionColumns
    { 
        [EditLink]
        public String Content { get; set; }
    }
}