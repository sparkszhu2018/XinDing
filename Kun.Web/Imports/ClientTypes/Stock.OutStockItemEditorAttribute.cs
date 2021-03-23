using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Kun.Stock
{
    public partial class OutStockItemEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Kun.Stock.OutStockItemEditor";

        public OutStockItemEditorAttribute()
            : base(Key)
        {
        }
    }
}
