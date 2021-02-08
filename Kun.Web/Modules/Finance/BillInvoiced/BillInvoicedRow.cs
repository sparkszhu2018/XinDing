
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

    [ConnectionKey("Kun"), Module("Finance"), TableName("[dbo].[Finance_BillInvoiced]")]
    [DisplayName("Bill Invoiced"), InstanceName("Bill Invoiced")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class BillInvoicedRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Source Document Type")]
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

        [DisplayName("Source Document No"), Size(50), QuickSearch]
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

        [DisplayName("Source Item Serial")]
        public Int32? SourceItemSerial
        {
            get { return Fields.SourceItemSerial[this]; }
            set { Fields.SourceItemSerial[this] = value; }
        }

        [DisplayName("Amount"), Size(18), Scale(4)]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Invoice Amount"), Size(18), Scale(4)]
        public Decimal? InvoiceAmount
        {
            get { return Fields.InvoiceAmount[this]; }
            set { Fields.InvoiceAmount[this] = value; }
        }
        [DisplayName("Qty"), Size(18), Scale(4)]
        public Decimal? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("Kind")]
        public InvoiceItemKind? Kind
        {
            get { return (InvoiceItemKind?)Fields.Kind[this]; }
            set { Fields.Kind[this] = (Int32)value; }
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

        public BillInvoicedRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public Int32Field SourceDocumentType;
            public GuidField SourceDocumentId;
            public StringField SourceDocumentNo;
            public GuidField SourceItemId;
            public Int32Field SourceItemSerial;
            public DecimalField Amount;
            public DecimalField InvoiceAmount;
            public DecimalField Qty;
            public Int32Field Kind;
        }
    }
}
