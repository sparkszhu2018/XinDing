
namespace Kun.Project.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Project.ServiceItem")]
    [BasedOnRow(typeof(Entities.ServiceItemRow), CheckNames = true)]
    public class ServiceItemForm
    {
        public Guid ProjectId { get; set; }
        public Guid HeadId { get; set; }
        public Int32 Serial { get; set; }
        public String Name { get; set; }
        public Decimal SalePrice { get; set; }
        public Decimal Qty { get; set; }
        public Decimal SaleAmount { get; set; }
    }
}