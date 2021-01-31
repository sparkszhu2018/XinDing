using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Kun.Project
{
    public partial class ServiceItemViewEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Kun.Project.ServiceItemViewEditor";

        public ServiceItemViewEditorAttribute()
            : base(Key)
        {
        }
    }
}
