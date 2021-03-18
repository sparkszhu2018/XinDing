
namespace Kun.Finance.Entities
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
    using static Kun.Finance.Enums.FinanceEnums;

    [ConnectionKey("Kun"), Module("Finance"), TableName("[dbo].[Finance_Receipt]")]
    [DisplayName("回款单"), InstanceName("回款单")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class ReceiptRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("单据编号"), Size(50), QuickSearch, ReadOnly(true), QuickFilter,SortOrder(1,true)]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        } 
        

        [DisplayName("状态"), NotNull, DefaultValue(BillStatus.Edit), ReadOnly(true), QuickFilter]
        public BillStatus? Status
        {
            get { return (BillStatus?)Fields.Status[this]; }
            set { Fields.Status[this] = (Int32)value; }
        }

        [DisplayName("回款日期"), NotNull, DefaultValue("Now"), QuickFilter]
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

        [DisplayName("发票号"), LookupEditor(typeof(InvoiceNoLookup))]
        public String  InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
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

        //[DisplayName("回款明细"), NotMapped,
        //MasterDetailRelation(foreignKey: "HeadId"
        //   , IncludeColumns = "HeadStatus")]
        //public List<ReceiptItemRow> Items
        //{
        //    get { return Fields.Items[this]; }
        //    set { Fields.Items[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BillNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReceiptRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public DateTimeField Date;
            public StringField BillNo; 
            public Int32Field Status;
            public StringField Note;
            public Int64Field ApproverId;
            public DateTimeField ApproverDate;
            public StringField ApproverName;
            // public RowListField<ReceiptItemRow> Items;

            public StringField InvoiceNo;
            
            public DecimalField InvoiceAmount;
            public DecimalField BalanceAmount;
            public DecimalField ReceiptAmount;



        }
    }
}
