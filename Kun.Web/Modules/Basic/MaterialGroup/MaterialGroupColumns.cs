
namespace Kun.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.MaterialGroup")]
    [BasedOnRow(typeof(Entities.MaterialGroupRow), CheckNames = true)]
    public class MaterialGroupColumns
    {
       
        [EditLink,SortOrder(0,true)]
        [MaskedEditor(Mask = "9999")]
        public String Code { get; set; }
        public String Name { get; set; }
    }
}