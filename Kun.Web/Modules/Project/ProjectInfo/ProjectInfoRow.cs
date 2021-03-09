
namespace Kun.Project.Entities
{
    using Kun.Administration.Entities;
    using Kun.Basic.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;
    using static Kun.Project.Enums.ProjectEnums;

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

        [DisplayName("项目编号"), Size(50), QuickSearch, ReadOnly(true)]
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

        [DisplayName("状态"), DefaultValue(BillStatus.Edit), ReadOnly(true)]
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

        [DisplayName("名称"), Size(200)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("预算金额"), Size(18), Scale(2), NotNull]
        public Decimal? BudgetAmount
        {
            get { return Fields.BudgetAmount[this]; }
            set { Fields.BudgetAmount[this] = value; }
        }

        [DisplayName("中标金额"), Size(18), Scale(2), NotNull]
        public Decimal? ActualAmount
        {
            get { return Fields.ActualAmount[this]; }
            set { Fields.ActualAmount[this] = value; }
        }

        [DisplayName("客户"), NotNull, LookupEditor(typeof(CustomerRow)),
     ForeignKey("[dbo].[Basic_Customer]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        public Guid? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("客户"), Expression("jCustomer.[Name]"), ReadOnly(true)]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("联系人"), Size(20)]
        public String Contact
        {
            get { return Fields.Contact[this]; }
            set { Fields.Contact[this] = value; }
        }

        [DisplayName("联系电话"), Size(20)]
        public String PhoneNo
        {
            get { return Fields.PhoneNo[this]; }
            set { Fields.PhoneNo[this] = value; }
        }

        [DisplayName("地址"), Size(200)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("质保金到期日"), NotNull] 
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd")]
        public DateTime? RetentionDueDate
        {
            get { return Fields.RetentionDueDate[this]; }
            set { Fields.RetentionDueDate[this] = value; }
        }

        [DisplayName("付款方式"), NotNull, LookupEditor(typeof(PaymentItemRow)),
            ForeignKey("[dbo].[Basic_PaymentItem]", "Id"), LeftJoin("jPayment"), 
            TextualField("PaymentName")]
        public Guid? Payment
        {
            get { return Fields.Payment[this]; }
            set { Fields.Payment[this] = value; }
        }

        [DisplayName("付款方式"), Expression("jPayment.[Name]"), ReadOnly(true)]
        public String PaymentName
        {
            get { return Fields.PaymentName[this]; }
            set { Fields.PaymentName[this] = value; }
        }

        [DisplayName("备注"), Size(500)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("审核人"), LookupEditor(typeof(UserRow)), ReadOnly(true),
            ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jApprover"), TextualField("ApproverName")]
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

        [DisplayName("是否关闭"), DefaultValue(false),ReadOnly(true)]
        public Boolean? IsClosed
        {
            get { return Fields.IsClosed[this]; }
            set { Fields.IsClosed[this] = value; }
        }

        [DisplayName("物料明细"), NotMapped, 
            MasterDetailRelation(foreignKey: "ProjectId",
            IncludeColumns = "MaterialCode,MaterialName,UnitName,WarehouseName,PositionName,LotCode,HeadStatus,BillNo")
        ]
        public List<MaterialsItemRow> Materials
        {
            get { return Fields.Materials[this]; }
            set { Fields.Materials[this] = value; }
        }

        [DisplayName("商务明细"), NotMapped, MasterDetailRelation(foreignKey: "ProjectId", IncludeColumns = "BizTypeName,HeadStatus,BillNo")]
        public List<BizItemRow> BizItems
        {
            get { return Fields.BizItems[this]; }
            set { Fields.BizItems[this] = value; }
        }

        [DisplayName("服务明细"), NotMapped, MasterDetailRelation(foreignKey: "ProjectId", IncludeColumns = "HeadStatus,BillNo")]
        public List<ServiceItemRow> ServiceItems
        {
            get { return Fields.ServiceItems[this]; }
            set { Fields.ServiceItems[this] = value; }
        }

        [DisplayName("已开票金额"), Expression("isnull((select top 1 InvoiceAmount from [dbo].[Finance_BillInvoiced] where isActive = 1 " +
           "and Kind = 30 and SourceDocumentId = t0.Id),0)")]
        public Decimal? InvoicedAmount
        {
            get { return Fields.InvoicedAmount[this]; }
            set { Fields.InvoicedAmount[this] = value; }
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
            public BooleanField IsClosed;

            public StringField CustomerName;
            public StringField PaymentName;
            public StringField ApproverName;

            public RowListField<MaterialsItemRow> Materials;
            public RowListField<BizItemRow> BizItems;
            public RowListField<ServiceItemRow> ServiceItems;
            public DecimalField InvoicedAmount;
        }
    }
}
