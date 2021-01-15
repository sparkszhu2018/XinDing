namespace Kun.Administration.Entities
{ 
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System; 
    using System.ComponentModel;

    /// <summary>
    /// This is a sample base class for rows that does insert/update date and user audit logging automatically.
    /// It is recommended to create your own base class, if your auditing field names are different than these.
    /// You should implement IInsertLogRow and/or IUpdateLogRow interfaces. ILoggingRow is a combination of these
    /// two. There is also an optional IDeleteLogRow interface that supports auditing on delete but for it to work
    /// you need to also implement IIsActiveDeletedRow so that your rows aren't actually deleted.
    /// </summary>
    public abstract class LoggingAllRow : Row, ILoggingRow, IDeleteLogRow, IIsActiveRow, IIsActiveDeletedRow
    {
        protected LoggingAllRow(RowFieldsBase fields)
          : base(fields)
        {
            loggingFields = (LoggingAllRowFields)fields;
        }

        [DisplayName("创建者"), NotNull]
        [ForeignKey("Users", "UserId"), LeftJoin("jInsertUser")]
        [Updatable(false),Insertable(false)]
        public Int64? InsertUserId
        {
            get { return loggingFields.InsertUserId[this]; }
            set { loggingFields.InsertUserId[this] = value; }
        }
        [DisplayName("创建者"), Expression("jInsertUser.Username")]
        [ReadOnly(true)]
        public String InsertUserName
        {
            get { return loggingFields.InsertUserName[this]; }
            set { loggingFields.InsertUserName[this] = value; }
        }
        [DisplayName("创建者"), Expression("jInsertUser.DisplayName")]
        [ReadOnly(true)]
        public String InsertUserDisplayName
        {
            get { return loggingFields.InsertUserDisplayName[this]; }
            set { loggingFields.InsertUserDisplayName[this] = value; }
        }
        [NotNull]
        [DisplayName("创建日期")]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd HH:mm")]
        [Insertable(false),ReadOnly(true)]
        public DateTime? InsertDate
        {
            get { return loggingFields.InsertDate[this]; }
            set { loggingFields.InsertDate[this] = value; }
        }
        [DisplayName("更新者"),ForeignKey("Users", "UserId"), LeftJoin("jUpateUser")]
        [ReadOnly(true),Insertable(false)]
        public Int32? UpdateUserId
        {
            get { return loggingFields.UpdateUserId[this]; }
            set { loggingFields.UpdateUserId[this] = value; }
        }
        [DisplayName("更新者"), Expression("jUpateUser.DisplayName")]
        [ReadOnly(true)]
        public String UpdateUserDisplayName
        {
            get { return loggingFields.UpdateUserDisplayName[this]; }
            set { loggingFields.UpdateUserDisplayName[this] = value; }
        }
        [DisplayName("更新日期")]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd HH:mm")]
        [ReadOnly(true), Insertable(false)]
        public DateTime? UpdateDate
        {
            get { return loggingFields.UpdateDate[this]; }
            set { loggingFields.UpdateDate[this] = value; }
        }
        [ForeignKey("Users", "UserId"), LeftJoin("jDeleteUser")]
        [Insertable(false), Updatable(false)]
        public Int32? DeleteUserId
        {
            get { return loggingFields.UpdateUserId[this]; }
            set { loggingFields.UpdateUserId[this] = value; }
        }
        [DisplayName("删除者"), Expression("jDeleteUser.DisplayName")]
        [ReadOnly(true)]
        public String DeleteUserDisplayName
        {
            get { return loggingFields.DeleteUserDisplayName[this]; }
            set { loggingFields.DeleteUserDisplayName[this] = value; }
        }
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd HH:mm")]
        [DisplayName("删除日期")]
        [Insertable(false), Updatable(false)]
        public DateTime? DeleteDate
        {
            get { return loggingFields.DeleteDate[this]; }
            set { loggingFields.DeleteDate[this] = value; }
        }

        [DisplayName("是否删除"), NotNull, DefaultValue(ActiveStatus.Active)]
        [LookupInclude]
        [Insertable(false), Updatable(false)]
        public ActiveStatus? IsActive
        {
            get { return (ActiveStatus?)loggingFields.IsActive[this]; }
            set { loggingFields.IsActive[this] = (Int16?)value; }
        }


        IIdField IInsertLogRow.InsertUserIdField
        {
            get { return loggingFields.InsertUserId; }
        }

        IIdField IUpdateLogRow.UpdateUserIdField
        {
            get { return loggingFields.UpdateUserId; }
        }
        IIdField IDeleteLogRow.DeleteUserIdField
        {
            get { return loggingFields.DeleteUserId; }
        }
        DateTimeField IInsertLogRow.InsertDateField
        {
            get { return loggingFields.InsertDate; }
        }

        DateTimeField IUpdateLogRow.UpdateDateField
        {
            get { return loggingFields.UpdateDate; }
        }
        DateTimeField IDeleteLogRow.DeleteDateField
        {
            get { return loggingFields.DeleteDate; }
        }
        Int16Field IIsActiveRow.IsActiveField
        {
            get { return loggingFields.IsActive; }
        }

        private LoggingAllRowFields loggingFields;
       

    }
    public class LoggingAllRowFields : RowFieldsBase
    {
        public Int64Field InsertUserId;
        public StringField InsertUserDisplayName;
        public StringField InsertUserName;
        public DateTimeField InsertDate;
        public Int32Field UpdateUserId;
        public StringField UpdateUserDisplayName;
        public DateTimeField UpdateDate;
        public Int32Field DeleteUserId;
        public StringField DeleteUserDisplayName;
        public DateTimeField DeleteDate;

        public Int16Field IsActive;

        public LoggingAllRowFields(string tableName = null, string fieldPrefix = null)
            : base(tableName, fieldPrefix)
        {
        }
    }

}