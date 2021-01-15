using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serenity.ComponentModel
{
    public partial class SingleLineTextFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Serenity.SingleLineTextFormatter";

        public SingleLineTextFormatterAttribute()
            : base(Key)
        {
        }
    }
}

