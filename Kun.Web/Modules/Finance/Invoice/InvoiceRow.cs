
namespace Kun.Finance.Entities
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
    using static Kun.Finance.Enums.FinanceEnums;

    [ConnectionKey("Kun"), Module("Finance"), TableName("[dbo].[Finance_Invoice]")]
    [DisplayName("发票"), InstanceName("发票")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class InvoiceRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("单据编号"), Size(50), QuickSearch, ReadOnly(true),]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("业务类型"), NotNull] 
        public InvoiceBillType? BillType
        {
            get { return (InvoiceBillType?)Fields.BillType[this]; }
            set { Fields.BillType[this] = (Int32)value; }
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

        [DisplayName("开票明细"), NotMapped,
        MasterDetailRelation(foreignKey: "HeadId"
           , IncludeColumns = "HeadStatus")]
        public List<InvoiceItemRow> Items
        {
            get { return Fields.Items[this]; }
            set { Fields.Items[this] = value; }
        }


        [DisplayName("开票公司"), LookupEditor(typeof(CompanyRow)),NotNull,
        ForeignKey("[dbo].[Basic_Company]", "Id"), LeftJoin("jCompany"), TextualField("CompanyName")]
        public Guid? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("开票公司"), Expression("jCompany.[Name]"), ReadOnly(true)]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("发票编号"), NotNull, Size(50)]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
        } 
         
        [DisplayName("开票金额"), Expression("isnull((select sum(InvoiceAmount) from Finance_InvoiceItem where isActive = 1 and headId = t0.Id),0)")]
        public Decimal? InvoiceAmount
        {
            get { return Fields.InvoiceAmount[this]; }
            set { Fields.InvoiceAmount[this] = value; }
        }

        [DisplayName("回款金额"), Expression("isnull((select sum(ReceiptAmount) from Finance_Receipt where isActive =1 and InvoiceNo = t0.InvoiceNo),0)")]
        public Decimal? ReceiptAmount
        {
            get { return Fields.ReceiptAmount[this]; }
            set { Fields.ReceiptAmount[this] = value; }
        }

        [DisplayName("待回款额"), Expression("(isnull((select sum(InvoiceAmount) from Finance_InvoiceItem where isActive =1 and headId = t0.Id),0) " +
            "- isnull((select sum(ReceiptAmount) from Finance_Receipt where isActive =1 and InvoiceNo = t0.InvoiceNo),0))")]
        public Decimal? UnReceiptAmount
        {
            get { return Fields.UnReceiptAmount[this]; }
            set { Fields.UnReceiptAmount[this] = value; }
        }


        [DisplayName("客户"), NotNull, LookupEditor(typeof(CustomerRow)), ForeignKey("[dbo].[Basic_Customer]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
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


        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BillNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public DateTimeField Date;
            public StringField BillNo;
            public Int32Field BillType;
            public Int32Field Status;
            public StringField Note;
            public Int64Field ApproverId;
            public DateTimeField ApproverDate;
            public StringField ApproverName;
            public RowListField<InvoiceItemRow> Items;

            public GuidField CompanyId;
            public StringField CompanyName;
            public StringField InvoiceNo; 
            public DecimalField InvoiceAmount;
            public DecimalField ReceiptAmount;
            public DecimalField UnReceiptAmount;

            public GuidField CustomerId;
            public StringField CustomerName;



        }
    }
}
