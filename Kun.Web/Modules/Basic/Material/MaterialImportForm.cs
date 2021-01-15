namespace Kun.Basic.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;
    using System.ComponentModel;

    [FormScript("Basic.MaterialImportForm")]
    public class MaterialImportForm
    {
        [FileUploadEditor, Required][DisplayName("文件")]
        public String FileName { get; set; }
    }
}
