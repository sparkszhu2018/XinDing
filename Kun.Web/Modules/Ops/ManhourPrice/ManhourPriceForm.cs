
namespace Kun.Ops.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ops.ManhourPrice")]
    [BasedOnRow(typeof(Entities.ManhourPriceRow), CheckNames = true)]
    public class ManhourPriceForm
    {
        public String Name { get; set; }
        public Decimal Price { get; set; }
    }
}