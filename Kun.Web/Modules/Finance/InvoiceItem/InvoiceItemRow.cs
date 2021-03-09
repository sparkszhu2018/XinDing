
namespace Kun.Finance.Entities
{
    using Kun.Basic.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using static Kun.Finance.Enums.FinanceEnums;

    [ConnectionKey("Kun"), Module("Finance"), TableName("[dbo].[Finance_InvoiceItem]")]
    [DisplayName("开票明细"), InstanceName("开票明细")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class InvoiceItemRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }


        [DisplayName("Head Id"), NotNull, ForeignKey("[dbo].[Finance_Invoice]", "Id"), LeftJoin("jHead"), 
            Updatable(false)] 
        public Guid? HeadId
        {
            get { return Fields.HeadId[this]; }
            set { Fields.HeadId[this] = value; }
        }


        [DisplayName("单据编号"), Expression("jHead.[BillNo]"), ReadOnly(true), QuickFilter]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("状态"), Expression("jHead.[Status]"), QuickFilter]
        public BillStatus? HeadStatus
        {
            get { return (BillStatus?)Fields.HeadStatus[this]; }
            set { Fields.HeadStatus[this] = (Int32)value; }
        }

        [DisplayName("单据日期"), Expression("jHead.[Date]"), QuickFilter]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd")]
        public DateTime? HeadDate
        {
            get { return Fields.HeadDate[this]; }
            set { Fields.HeadDate[this] = value; }
        }

        [DisplayName("行号"), NotNull, SortOrder(1)]
        public Int32? Serial
        {
            get { return Fields.Serial[this]; }
            set { Fields.Serial[this] = value; }
        } 

        [DisplayName("源单类型"), QuickFilter]
        public InvoiceBillType? SourceDocumentType
        {
            get { return (InvoiceBillType?)Fields.SourceDocumentType[this]; }
            set { Fields.SourceDocumentType[this] = (Int32)value; }
        }

        [DisplayName("Source Document Id")]
        public Guid? SourceDocumentId
        {
            get { return Fields.SourceDocumentId[this]; }
            set { Fields.SourceDocumentId[this] = value; }
        }

        [DisplayName("源单单号"), Size(50), QuickSearch, QuickFilter]
        public String SourceDocumentNo
        {
            get { return Fields.SourceDocumentNo[this]; }
            set { Fields.SourceDocumentNo[this] = value; }
        }

        [DisplayName("Source Item Id")]
        public Guid? SourceItemId
        {
            get { return Fields.SourceItemId[this]; }
            set { Fields.SourceItemId[this] = value; }
        }

        [DisplayName("源单行")]
        public Int32? SourceItemSerial
        {
            get { return Fields.SourceItemSerial[this]; }
            set { Fields.SourceItemSerial[this] = value; }
        }

        [DisplayName("名称"), Size(50)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("单位"), Size(10)]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }

        [DisplayName("单价"), Size(18), Scale(2)]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("数量"), Size(10), Scale(2)]
        public Decimal? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("金额"), Size(18), Scale(2)]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("开票金额"), Size(18), Scale(2)]
        public Decimal? InvoiceAmount
        {
            get { return Fields.InvoiceAmount[this]; }
            set { Fields.InvoiceAmount[this] = value; }
        }

        [DisplayName("回款金额"), Size(18), Scale(2)]
        public Decimal? ReceiptAmount
        {
            get { return Fields.ReceiptAmount[this]; }
            set { Fields.ReceiptAmount[this] = value; }
        } 

        [DisplayName("税率"), Size(5), Scale(2)]
        public Decimal? TaxRate
        {
            get { return Fields.TaxRate[this]; }
            set { Fields.TaxRate[this] = value; }
        }

        [DisplayName("发票编号"), Size(50)]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
        }

        [DisplayName("备注"), Size(200)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("类别")]
        public InvoiceItemKind? Kind
        {
            get { return (InvoiceItemKind?)Fields.Kind[this]; }
            set { Fields.Kind[this] = (Int32)value; }
        }

        [DisplayName("开票单位"), LookupEditor(typeof(VendorRow)),
           ForeignKey("[dbo].[Basic_Vendor]", "Id"), LeftJoin("jVendor"), TextualField("VendorName")
         ]
        public Guid? VendorId
        {
            get { return Fields.VendorId[this]; }
            set { Fields.VendorId[this] = value; }
        }

        [DisplayName("开票单位"), Expression("jVendor.[Name]"), ReadOnly(true)]
        public String VendorName
        {
            get { return Fields.VendorName[this]; }
            set { Fields.VendorName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SourceDocumentNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceItemRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id; 
            public GuidField HeadId;
            public Int32Field Serial;
            public Int32Field SourceDocumentType;
            public GuidField SourceDocumentId;
            public StringField SourceDocumentNo;
            public GuidField SourceItemId;
            public Int32Field SourceItemSerial;
            public StringField Name;
            public StringField UnitName;
            public DecimalField Price;
            public DecimalField Qty;
            public DecimalField Amount;
            public DecimalField InvoiceAmount;
            public DecimalField TaxRate;
            public StringField InvoiceNo;
            public StringField Note;


            public StringField BillNo;
            public Int32Field HeadStatus;
            public DateTimeField HeadDate;
            public Int32Field Kind; 
            public DecimalField ReceiptAmount;

            public GuidField VendorId;
            public StringField VendorName;
        }
    }
}
