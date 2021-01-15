
namespace Kun.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Lot")]
    [BasedOnRow(typeof(Entities.LotRow), CheckNames = true)]
    public class LotForm
    {
        public String Code { get; set; }
        public Guid MaterialId { get; set; }
    }
}