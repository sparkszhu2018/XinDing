
namespace Kun.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.PaymentItem")]
    [BasedOnRow(typeof(Entities.PaymentItemRow), CheckNames = true)]
    public class PaymentItemColumns
    { 
        [EditLink]
        public String Name { get; set; }
    }
}