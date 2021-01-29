
namespace Kun.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.PaymentItem")]
    [BasedOnRow(typeof(Entities.PaymentItemRow), CheckNames = true)]
    public class PaymentItemForm
    {
        public String Name { get; set; }
    }
}