
namespace Kun.Stock.Entities
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
    using static Kun.Stock.Enums.StockEnums;

    [ConnectionKey("Kun"), Module("Stock"), TableName("[dbo].[Stock_InStock]")]
    [DisplayName("入库单"), InstanceName("入库单")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class InStockRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("单据编号"), Size(50), ReadOnly(true), QuickSearch, QuickFilter]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("单据类型"), NotNull]

        [DefaultValue(InStockBillType.PuchaseInstock)]
        public InStockBillType? BillType
        {
            get { return (InStockBillType?)Fields.BillType[this]; }
            set { Fields.BillType[this] = (Int32)value; }
        }

        [DisplayName("状态"), Size(50), QuickFilter,
         DefaultValue(BillStatus.Edit), NotNull, ReadOnly(true)]
        public BillStatus? Status
        {
            get { return (BillStatus?)Fields.Status[this]; }
            set { Fields.Status[this] = (Int32)value; }
        }

        [DisplayName("单据日期"), NotNull, DefaultValue("Now"), QuickFilter]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("备注"), Size(256)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("审核人"), LookupEditor(typeof(UserRow)), ReadOnly(true),
             ForeignKey("[dbo].[Users]", "UserId"),LeftJoin("jApprover"), TextualField("ApproverName")
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

        [DisplayName("物料明细"), NotMapped, 
         MasterDetailRelation(foreignKey: "HeadId"
            ,IncludeColumns = "BillNo,MaterialCode,MaterialName,UnitName,SupplierName,LotCode,HeadStatus,ApplicantName")]
        public List<InStockItemRow> Items
        {
            get { return Fields.Items[this]; }
            set { Fields.Items[this] = value; }
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

        public InStockRow()
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
            public StringField Note;
            public Int64Field ApproverId;
            public DateTimeField ApproverDate;
            public StringField ApproverName;
            public RowListField<InStockItemRow> Items;


        }
    }
}
