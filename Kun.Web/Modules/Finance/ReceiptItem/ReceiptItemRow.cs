
namespace Kun.Finance.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Finance"), TableName("[dbo].[Finance_ReceiptItem]")]
    [DisplayName("Receipt Item"), InstanceName("Receipt Item")]
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

        [DisplayName("Head Id"), NotNull]
        public Guid? HeadId
        {
            get { return Fields.HeadId[this]; }
            set { Fields.HeadId[this] = value; }
        }

        [DisplayName("Serial"), NotNull]
        public Int32? Serial
        {
            get { return Fields.Serial[this]; }
            set { Fields.Serial[this] = value; }
        }

        [DisplayName("Source Document Type")]
        public Int32? SourceDocumentType
        {
            get { return Fields.SourceDocumentType[this]; }
            set { Fields.SourceDocumentType[this] = value; }
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

        [DisplayName("Name"), Size(50)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Invoice Amount"), Size(18), Scale(4)]
        public Decimal? InvoiceAmount
        {
            get { return Fields.InvoiceAmount[this]; }
            set { Fields.InvoiceAmount[this] = value; }
        }

        [DisplayName("Balance Amount"), Size(18), Scale(4)]
        public Decimal? BalanceAmount
        {
            get { return Fields.BalanceAmount[this]; }
            set { Fields.BalanceAmount[this] = value; }
        }

        [DisplayName("Receipt Amount"), Size(18), Scale(4)]
        public Decimal? ReceiptAmount
        {
            get { return Fields.ReceiptAmount[this]; }
            set { Fields.ReceiptAmount[this] = value; }
        }

        [DisplayName("Note"), Size(200)]
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
            public Int32Field SourceDocumentType;
            public GuidField SourceDocumentId;
            public StringField SourceDocumentNo;
            public GuidField SourceItemId;
            public Int32Field SourceItemSerial;
            public StringField Name;
            public DecimalField InvoiceAmount;
            public DecimalField BalanceAmount;
            public DecimalField ReceiptAmount;
            public StringField Note;
        }
    }
}
