using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Kun.Ops
{
    public partial class MaintenanceManhoursEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Kun.Ops.MaintenanceManhoursEditor";

        public MaintenanceManhoursEditorAttribute()
            : base(Key)
        {
        }
    }
}
