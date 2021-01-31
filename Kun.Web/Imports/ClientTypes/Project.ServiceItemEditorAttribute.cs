using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Kun.Project
{
    public partial class ServiceItemEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Kun.Project.ServiceItemEditor";

        public ServiceItemEditorAttribute()
            : base(Key)
        {
        }
    }
}
