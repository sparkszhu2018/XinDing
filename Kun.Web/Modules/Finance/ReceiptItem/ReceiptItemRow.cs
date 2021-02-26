
namespace Kun.Finance.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using static Kun.Finance.Enums.FinanceEnums;

    [ConnectionKey("Kun"), Module("Finance"), TableName("[dbo].[Finance_ReceiptItem]")]
    [DisplayName("回款明细"), InstanceName("回款明细")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class ReceiptItemRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Head Id"), NotNull, ForeignKey("[dbo].[Finance_Receipt]", "Id"), LeftJoin("jHead"),
            Updatable(false)]
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

        [DisplayName("单据日期"), Expression("jHead.[Date]")]
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
       
        [DisplayName("Source Document Id")]
        public Guid? SourceDocumentId
        {
            get { return Fields.SourceDocumentId[this]; }
            set { Fields.SourceDocumentId[this] = value; }
        }

        [DisplayName("源单单号"), Size(50), QuickSearch]
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

        [DisplayName("本次回款"), Size(18), Scale(2)]
        public Decimal? ReceiptAmount
        {
            get { return Fields.ReceiptAmount[this]; }
            set { Fields.ReceiptAmount[this] = value; }
        }

        [DisplayName("发票金额"), Size(18), Scale(2)]
        public Decimal? InvoiceAmount
        {
            get { return Fields.InvoiceAmount[this]; }
            set { Fields.InvoiceAmount[this] = value; }
        }

        [DisplayName("待收金额"), Size(18), Scale(2)]
        public Decimal? BalanceAmount
        {
            get { return Fields.BalanceAmount[this]; }
            set { Fields.BalanceAmount[this] = value; }
        } 
         

        [DisplayName("备注"), Size(200)]
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
            get { return Fields.SourceDocumentNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReceiptItemRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public GuidField HeadId;
            public Int32Field Serial; 
            public GuidField SourceDocumentId;
            public StringField SourceDocumentNo;
            public GuidField SourceItemId;
            public Int32Field SourceItemSerial;
            public StringField Name;
            public DecimalField InvoiceAmount;
            public DecimalField BalanceAmount;
            public DecimalField ReceiptAmount;
            public StringField Note;


            public StringField BillNo;
            public Int32Field HeadStatus;
            public DateTimeField HeadDate;
        }
    }
}
