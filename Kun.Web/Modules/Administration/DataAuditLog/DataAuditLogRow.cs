
namespace Kun.Administration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Administration"), TableName("DataAuditLog")]
    [DisplayName("Data Audit Logs"), InstanceName("Data Audit Log"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    public sealed class DataAuditLogRow : Row, IIdRow
    {
        [DisplayName("Log Id"), Identity]
        public Int32? LogId
        {
            get { return Fields.LogId[this]; }
            set { Fields.LogId[this] = value; }
        }

        [DisplayName("Log Type"), NotNull, QuickFilter]
        public DataAuditLogType? LogType
        {
            get { return Fields.LogType[this]; }
            set { Fields.LogType[this] = value; }
        }

        [DisplayName("Log Date"), NotNull, DateTimeKind(DateTimeKind.Utc), QuickFilter]
        public DateTime? LogDate
        {
            get { return Fields.LogDate[this]; }
            set { Fields.LogDate[this] = value; }
        }

        [DisplayName("User Id"), ForeignKey(typeof(UserRow)), LeftJoin("jUser"), TextualField("Username")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Table"), Size(255), NotNull, DistinctValuesEditor, QuickFilter, Column("TableName")]
        public String Tablename
        {
            get { return Fields.Tablename[this]; }
            set { Fields.Tablename[this] = value; }
        }

        [DisplayName("Record ID"), QuickSearch]
        public String RecordId
        {
            get { return Fields.RecordId[this]; }
            set { Fields.RecordId[this] = value; }
        }

        [DisplayName("Field"), Size(255), DistinctValuesEditor, QuickFilter]
        public String FieldName
        {
            get { return Fields.FieldName[this]; }
            set { Fields.FieldName[this] = value; }
        }

        [DisplayName("Old Value"), QuickSearch]
        public String OldValue
        {
            get { return Fields.OldValue[this]; }
            set { Fields.OldValue[this] = value; }
        }

        [DisplayName("New Value"), QuickSearch]
        public String NewValue
        {
            get { return Fields.NewValue[this]; }
            set { Fields.NewValue[this] = value; }
        }

        [DisplayName("Username"), Expression("jUser.[Username]"), QuickSearch]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String UserDisplayName
        {
            get { return Fields.UserDisplayName[this]; }
            set { Fields.UserDisplayName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.LogId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DataAuditLogRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LogId;
            public EnumField<DataAuditLogType> LogType;
            public DateTimeField LogDate;
            public Int32Field UserId;
            public StringField Tablename;
            public StringField RecordId;
            public StringField FieldName;
            public StringField OldValue;
            public StringField NewValue;

            public StringField Username;
            public StringField UserDisplayName;
        }
    }
}