using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Kun.Finance
{
    public partial class ReceiptItemEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Kun.Finance.ReceiptItemEditor";

        public ReceiptItemEditorAttribute()
            : base(Key)
        {
        }
    }
}
