
namespace Kun.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Unit")]
    [BasedOnRow(typeof(Entities.UnitRow), CheckNames = true)]
    public class UnitColumns
    {

        [EditLink]
        public String Code { get; set; }
        public String Name { get; set; } 
        public Boolean Decim { get; set; }
    }
}