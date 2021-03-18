
namespace Kun.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Company")]
    [BasedOnRow(typeof(Entities.CompanyRow), CheckNames = true)]
    public class CompanyForm
    {
        public String Code { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
    }
}