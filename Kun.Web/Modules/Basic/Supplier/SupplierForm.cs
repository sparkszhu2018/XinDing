
namespace Kun.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Supplier")]
    [BasedOnRow(typeof(Entities.SupplierRow), CheckNames = true)]
    public class SupplierForm
    {
        public String Code { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
        public String Contacts { get; set; }
        public String Mobile { get; set; }
    }
}