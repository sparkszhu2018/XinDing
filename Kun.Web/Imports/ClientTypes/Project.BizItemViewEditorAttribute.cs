using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Kun.Project
{
    public partial class BizItemViewEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Kun.Project.BizItemViewEditor";

        public BizItemViewEditorAttribute()
            : base(Key)
        {
        }
    }
}
