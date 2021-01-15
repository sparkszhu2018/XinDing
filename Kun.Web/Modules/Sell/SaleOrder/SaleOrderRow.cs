
namespace Kun.Sell.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Sell"), TableName("[dbo].[Sell_SaleOrder]")]
    [DisplayName("销售订单"), InstanceName("销售订单")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class SaleOrderRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
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

        [DisplayName("Settle Customer Id"), NotNull]
        public Guid? SettleCustomerId
        {
            get { return Fields.SettleCustomerId[this]; }
            set { Fields.SettleCustomerId[this] = value; }
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

        public SaleOrderRow()
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
            public GuidField CustomerId;
            public GuidField SettleCustomerId;
            public StringField Note;
            public Int64Field ApproverId;
            public DateTimeField ApproverDate;
        }
    }
}
