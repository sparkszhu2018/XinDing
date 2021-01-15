
namespace Kun.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Vendor")]
    [BasedOnRow(typeof(Entities.VendorRow), CheckNames = true)]
    public class VendorColumns
    { 
        [EditLink]
        public String Code { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
        public String Contacts { get; set; }
        public String Mobile { get; set; }
    }
}