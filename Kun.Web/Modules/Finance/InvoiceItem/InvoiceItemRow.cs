
namespace Kun.Finance.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Finance"), TableName("[dbo].[Finance_InvoiceItem]")]
    [DisplayName("Invoice Item"), InstanceName("Invoice Item")]
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

        [DisplayName("Project Id")]
        public Guid? ProjectId
        {
            get { return Fields.ProjectId[this]; }
            set { Fields.ProjectId[this] = value; }
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

        [DisplayName("Unit Name"), Size(10)]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }

        [DisplayName("Price"), Size(18), Scale(2)]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Qty"), Size(10), Scale(2)]
        public Decimal? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
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

        [DisplayName("Tax Rate"), Size(5), Scale(2)]
        public Decimal? TaxRate
        {
            get { return Fields.TaxRate[this]; }
            set { Fields.TaxRate[this] = value; }
        }

        [DisplayName("Invoice No"), Size(50)]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
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

        public InvoiceItemRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public GuidField ProjectId;
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
        }
    }
}
