
namespace Kun.Project.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Project"), TableName("[dbo].[Project_Info]")]
    [DisplayName("项目列表"), InstanceName("项目列表")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    [LookupScript]
    public sealed class ProjectInfoRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Bill No"), Size(50), QuickSearch]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("Bill Type"), NotNull]
        public Int32? BillType
        {
            get { return Fields.BillType[this]; }
            set { Fields.BillType[this] = value; }
        }

        [DisplayName("Status"), NotNull]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Name"), Size(200)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Budget Amount"), Size(18), Scale(4), NotNull]
        public Decimal? BudgetAmount
        {
            get { return Fields.BudgetAmount[this]; }
            set { Fields.BudgetAmount[this] = value; }
        }

        [DisplayName("Actual Amount"), Size(18), Scale(4), NotNull]
        public Decimal? ActualAmount
        {
            get { return Fields.ActualAmount[this]; }
            set { Fields.ActualAmount[this] = value; }
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Customer Id"), NotNull]
        public Guid? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Contact"), Size(20)]
        public String Contact
        {
            get { return Fields.Contact[this]; }
            set { Fields.Contact[this] = value; }
        }

        [DisplayName("Phone No"), Size(20)]
        public String PhoneNo
        {
            get { return Fields.PhoneNo[this]; }
            set { Fields.PhoneNo[this] = value; }
        }

        [DisplayName("Address"), Size(20)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Retention Due Date"), NotNull]
        public DateTime? RetentionDueDate
        {
            get { return Fields.RetentionDueDate[this]; }
            set { Fields.RetentionDueDate[this] = value; }
        }

        [DisplayName("Payment"), NotNull]
        public Guid? Payment
        {
            get { return Fields.Payment[this]; }
            set { Fields.Payment[this] = value; }
        }

        [DisplayName("Note"), Size(500)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Approver Id")]
        public Int64? ApproverId
        {
            get { return Fields.ApproverId[this]; }
            set { Fields.ApproverId[this] = value; }
        }

        [DisplayName("Approver Date")]
        public DateTime? ApproverDate
        {
            get { return Fields.ApproverDate[this]; }
            set { Fields.ApproverDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BillNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProjectInfoRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public StringField BillNo;
            public Int32Field BillType;
            public Int32Field Status;
            public StringField Name;
            public DecimalField BudgetAmount;
            public DecimalField ActualAmount;
            public DateTimeField Date;
            public GuidField CustomerId;
            public StringField Contact;
            public StringField PhoneNo;
            public StringField Address;
            public DateTimeField RetentionDueDate;
            public GuidField Payment;
            public StringField Note;
            public Int64Field ApproverId;
            public DateTimeField ApproverDate;
        }
    }
}
