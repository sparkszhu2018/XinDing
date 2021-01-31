using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Kun.Project
{
    public partial class BizItemEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Kun.Project.BizItemEditor";

        public BizItemEditorAttribute()
            : base(Key)
        {
        }
    }
}
