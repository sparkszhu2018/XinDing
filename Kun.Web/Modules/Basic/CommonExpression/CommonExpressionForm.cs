
namespace Kun.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.CommonExpression")]
    [BasedOnRow(typeof(Entities.CommonExpressionRow), CheckNames = true)]
    public class CommonExpressionForm
    {
        public String Content { get; set; }
    }
}