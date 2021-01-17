using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Kun.Sell
{
    public partial class SaleOrderItemEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Kun.Sell.SaleOrderItemEditor";

        public SaleOrderItemEditorAttribute()
            : base(Key)
        {
        }
    }
}
