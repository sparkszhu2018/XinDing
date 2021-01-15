
namespace Kun.Ops.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ops.ManhourPrice")]
    [BasedOnRow(typeof(Entities.ManhourPriceRow), CheckNames = true)]
    public class ManhourPriceColumns
    {
       
        [EditLink]
        public String Name { get; set; }
        public Decimal Price { get; set; }
    }
}