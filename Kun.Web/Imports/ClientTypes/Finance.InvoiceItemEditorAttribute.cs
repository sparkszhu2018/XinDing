using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Kun.Finance
{
    public partial class InvoiceItemEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Kun.Finance.InvoiceItemEditor";

        public InvoiceItemEditorAttribute()
            : base(Key)
        {
        }
    }
}
