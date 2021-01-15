
namespace Kun.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Unit")]
    [BasedOnRow(typeof(Entities.UnitRow), CheckNames = true)]
    public class UnitForm
    {
        public String Code { get; set; }
        public String Name { get; set; }
        public Boolean Decim { get; set; }
    }
}