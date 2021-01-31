
namespace Kun.Project.Entities
{
    using Kun.Administration.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;
    using static Kun.Project.Enums.ProjectEnums;

    [ConnectionKey("Kun"), Module("Project"), TableName("[dbo].[Project_BizBill]")]
    [DisplayName("项目商务"), InstanceName("项目商务")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class BizBillRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("单据编号"), Size(50), QuickSearch, ReadOnly(true)]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("Bill Type"), DefaultValue(0)]
        public Int32? BillType
        {
            get { return Fields.BillType[this]; }
            set { Fields.BillType[this] = value; }
        }

        [DisplayName("状态"), NotNull, DefaultValue(BillStatus.Edit), ReadOnly(true)]
        public BillStatus? Status
        {
            get { return (BillStatus?)Fields.Status[this]; }
            set { Fields.Status[this] = (Int32)value; }
        }

        [DisplayName("单据日期"), NotNull, DefaultValue("Now")]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("所属项目"), NotNull, LookupEditor(typeof(ProjectInfoRow)), ForeignKey("[dbo].[Project_Info]", "Id"),
            LeftJoin("jProjectInfo"), TextualField("ProjectName")]
        public Guid? ProjectId
        {
            get { return Fields.ProjectId[this]; }
            set { Fields.ProjectId[this] = value; }
        }

        [DisplayName("所属项目"), Expression("jProjectInfo.[Name]"), ReadOnly(true)]
        public String ProjectName
        {
            get { return Fields.ProjectName[this]; }
            set { Fields.ProjectName[this] = value; }
        }

        [DisplayName("项目编码"), Expression("jProjectInfo.[BillNo]")]
        public String ProjectBillNo
        {
            get { return Fields.ProjectBillNo[this]; }
            set { Fields.ProjectBillNo[this] = value; }
        }

        [DisplayName("备注"), Size(500)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("审核人"), LookupEditor(typeof(UserRow)), ReadOnly(true),
               ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jApprover"), TextualField("ApproverName")
             ]
        public Int64? ApproverId
        {
            get { return Fields.ApproverId[this]; }
            set { Fields.ApproverId[this] = value; }
        }

        [DisplayName("审核人"), Expression("jApprover.[DisplayName]"), ReadOnly(true)]
        public String ApproverName
        {
            get { return Fields.ApproverName[this]; }
            set { Fields.ApproverName[this] = value; }
        }

        [DisplayName("审核日期"), ReadOnly(true)]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd HH:mm")]
        public DateTime? ApproverDate
        {
            get { return Fields.ApproverDate[this]; }
            set { Fields.ApproverDate[this] = value; }
        }
        [DisplayName("商务成本"), NotMapped, MasterDetailRelation(foreignKey: "HeadId", IncludeColumns = "BizTypeName,HeadStatus")]
        public List<BizItemRow> Items
        {
            get { return Fields.Items[this]; }
            set { Fields.Items[this] = value; }
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

        public BizBillRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public StringField BillNo;
            public Int32Field BillType;
            public Int32Field Status;
            public DateTimeField Date;
            public GuidField ProjectId;
            public StringField Note;
            public Int64Field ApproverId;
            public DateTimeField ApproverDate;
            public StringField ApproverName;
            public StringField ProjectName;
            public StringField ProjectBillNo;
            public RowListField<BizItemRow> Items;
        }
    }
}
