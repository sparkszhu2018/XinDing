
namespace Kun.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.BizType")]
    [BasedOnRow(typeof(Entities.BizTypeRow), CheckNames = true)]
    public class BizTypeForm
    {
        public String Name { get; set; }
    }
}