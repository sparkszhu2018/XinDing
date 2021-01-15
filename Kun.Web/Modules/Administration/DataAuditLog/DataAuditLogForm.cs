
namespace Kun.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Administration.DataAuditLog")]
    [BasedOnRow(typeof(Entities.DataAuditLogRow))]
    public class DataAuditLogForm
    {
        public DataAuditLogType LogType { get; set; }
        [DateTimeEditor]
        public DateTime LogDate { get; set; }
        public Int32 UserId { get; set; }
        public String Tablename { get; set; }
        [StringEditor]
        public Int32 RecordId { get; set; }
        public String FieldName { get; set; }
        public String OldValue { get; set; }
        public String NewValue { get; set; }
    }
}