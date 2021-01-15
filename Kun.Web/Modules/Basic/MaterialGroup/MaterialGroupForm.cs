
namespace Kun.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.MaterialGroup")]
    [BasedOnRow(typeof(Entities.MaterialGroupRow), CheckNames = true)]
    public class MaterialGroupForm
    {
        public String Code { get; set; }
        public String Name { get; set; }
    }
}