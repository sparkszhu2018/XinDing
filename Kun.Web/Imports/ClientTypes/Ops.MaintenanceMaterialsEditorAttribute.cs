using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Kun.Ops
{
    public partial class MaintenanceMaterialsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Kun.Ops.MaintenanceMaterialsEditor";

        public MaintenanceMaterialsEditorAttribute()
            : base(Key)
        {
        }
    }
}
