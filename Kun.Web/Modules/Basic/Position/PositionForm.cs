
namespace Kun.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Position")]
    [BasedOnRow(typeof(Entities.PositionRow), CheckNames = true)]
    public class PositionForm
    {
        public Guid WarehouseId { get; set; }
        public String Code { get; set; }
        public String Name { get; set; }
    }
}