
namespace Kun.Sys.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sys.DocumentCodeConfig")]
    [BasedOnRow(typeof(Entities.DocumentCodeConfigRow), CheckNames = true)]
    public class DocumentCodeConfigColumns
    {
        [EditLink]
        public Int16 DocumentKind { get; set; }
        [EditLink]
        public String DocumentCodePrefix { get; set; }
    }
}