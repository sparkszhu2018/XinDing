
namespace Kun.Project.Entities
{
    using Kun.Basic.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using static Kun.Project.Enums.ProjectEnums;

    [ConnectionKey("Kun"), Module("Project"), TableName("[dbo].[Project_BizItem]")]
    [DisplayName("商务费明细"), InstanceName("商务费明细")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class BizItemRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("项目"),  LookupEditor(typeof(ProjectInfoRow)),
            ForeignKey("[dbo].[Project_Info]", "Id"), LeftJoin("jProject")]
        public Guid? ProjectId
        {
            get { return Fields.ProjectId[this]; }
            set { Fields.ProjectId[this] = value; }
        }

        [DisplayName("项目"), Expression("jProject.[Name]")]
        public String ProjectName
        {
            get { return Fields.ProjectName[this]; }
            set { Fields.ProjectName[this] = value; }
        }

        [DisplayName("项目编码"), Expression("jProject.[BillNo]")]
        public String ProjectBillNo
        {
            get { return Fields.ProjectBillNo[this]; }
            set { Fields.ProjectBillNo[this] = value; }
        }

        [DisplayName("Head Id"),  ForeignKey("[dbo].[Project_BizBill]", "Id"), LeftJoin("jHead"), Updatable(false)]
        public Guid? HeadId
        {
            get { return Fields.HeadId[this]; }
            set { Fields.HeadId[this] = value; }
        }

        [DisplayName("单据编号"), Expression("jHead.[BillNo]"), ReadOnly(true)]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("状态"), Expression("jHead.[Status]")]
        public BillStatus? HeadStatus
        {
            get { return (BillStatus?)Fields.HeadStatus[this]; }
            set { Fields.HeadStatus[this] = (Int32)value; }
        }

        [DisplayName("Head Project Id"), Expression("jHead.[ProjectId]"), MinSelectLevel(SelectLevel.Always)]
        public Guid? HeadProjectId
        {
            get { return Fields.HeadProjectId[this]; }
            set { Fields.HeadProjectId[this] = value; }
        }


        [DisplayName("行号"), NotNull,ReadOnly(true)]
        public Int32? Serial
        {
            get { return Fields.Serial[this]; }
            set { Fields.Serial[this] = value; }
        }

        [DisplayName("名称"), Size(200), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("类型"), NotNull, LookupEditor(typeof(BizTypeRow)), ForeignKey("[dbo].[Basic_BizType]", "Id"), 
            LeftJoin("jBizType")]
        public Guid? BizType
        {
            get { return Fields.BizType[this]; }
            set { Fields.BizType[this] = value; }
        }

        [DisplayName("类型"), Expression("jBizType.[Name]")]
        public String BizTypeName
        {
            get { return  Fields.BizTypeName[this]; }
            set { Fields.BizTypeName[this] = value; }
        } 

        [DisplayName("金额"), Size(18), Scale(2), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }


        [DisplayName("备注"), Size(200), QuickSearch]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BizItemRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public GuidField ProjectId;
            public GuidField HeadId;
            public Int32Field Serial;
            public StringField Name;
            public GuidField BizType;
            public DecimalField Amount;
            public StringField Note;

            public StringField BillNo;
            public Int32Field HeadStatus;
            public StringField ProjectName;
            public StringField ProjectBillNo;
            public StringField BizTypeName;
            public GuidField HeadProjectId;


        }
    }
}
