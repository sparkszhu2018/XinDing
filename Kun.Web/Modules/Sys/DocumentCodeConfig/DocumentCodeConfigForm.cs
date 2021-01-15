
namespace Kun.Sys.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sys.DocumentCodeConfig")]
    [BasedOnRow(typeof(Entities.DocumentCodeConfigRow), CheckNames = true)]
    public class DocumentCodeConfigForm
    {
        public Int16 DocumentKind { get; set; }
        public String DocumentCodePrefix { get; set; }
    }
}