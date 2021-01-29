
namespace Kun.Project.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Project.BizItem")]
    [BasedOnRow(typeof(Entities.BizItemRow), CheckNames = true)]
    public class BizItemForm
    {
        public Guid ProjectId { get; set; }
        public Guid HeadId { get; set; }
        public Int32 Serial { get; set; }
        public String Name { get; set; }
        public Guid BizType { get; set; }
        public Decimal Amount { get; set; }
    }
}