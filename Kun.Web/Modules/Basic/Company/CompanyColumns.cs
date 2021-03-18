
namespace Kun.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Company")]
    [BasedOnRow(typeof(Entities.CompanyRow), CheckNames = true)]
    public class CompanyColumns
    { 
        [EditLink]
        public String Code { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
    }
}