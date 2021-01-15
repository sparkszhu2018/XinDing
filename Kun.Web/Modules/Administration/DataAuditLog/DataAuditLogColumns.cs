
namespace Kun.Administration.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Administration.DataAuditLog")]
    [BasedOnRow(typeof(Entities.DataAuditLogRow))]
    public class DataAuditLogColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(1, descending: true)]
        public Int32 LogId { get; set; }
        [Width(90)]
        public DataAuditLogType LogType { get; set; }
        [Width(150)]
        public DateTime LogDate { get; set; }
        [Width(150)]
        public String Username { get; set; }
        [EditLink]
        public String Tablename { get; set; }
        [EditLink]
        public String RecordId { get; set; }
        public String FieldName { get; set; }
        public String OldValue { get; set; }
        public String NewValue { get; set; }
    }
}