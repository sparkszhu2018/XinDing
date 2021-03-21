
namespace Kun.Sell.Entities
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
    using static Kun.Sell.Enums.SellEnums;

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

        [DisplayName("单据编号"), Size(50), QuickSearch, ReadOnly(true), QuickFilter]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("单据类型"), NotNull]
        [DefaultValue(SaleOrderBillType.NormalSaleOrder)]
        public SaleOrderBillType? BillType
        {
            get { return (SaleOrderBillType?)Fields.BillType[this]; }
            set { Fields.BillType[this] = (Int32)value; }
        }

        [DisplayName("状态"), NotNull, DefaultValue(BillStatus.Edit), ReadOnly(true), QuickFilter]
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

        [DisplayName("客户"), NotNull, LookupEditor(typeof(CustomerRow)), QuickFilter,
     ForeignKey("[dbo].[Basic_Customer]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName") ]
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

        [DisplayName("结算客户"), NotNull, LookupEditor(typeof(CustomerRow)), QuickFilter,
    ForeignKey("[dbo].[Basic_Customer]", "Id"), LeftJoin("jSettleCustomer"), TextualField("SettleCustomerName")]
        public Guid? SettleCustomerId
        {
            get { return Fields.SettleCustomerId[this]; }
            set { Fields.SettleCustomerId[this] = value; }
        }

        [DisplayName("结算客户"), Expression("jSettleCustomer.[Name]"), ReadOnly(true)]
        public String SettleCustomerName
        {
            get { return Fields.SettleCustomerName[this]; }
            set { Fields.SettleCustomerName[this] = value; }
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


        [DisplayName("销售明细"), NotMapped, MasterDetailRelation(foreignKey: "HeadId",
            IncludeColumns = "MaterialCode,MaterialName,UnitName,WarehouseName,PositionName,LotCode,HeadStatus,BillNo")] 
        public List<SaleOrderItemRow> Materials
        {
            get { return Fields.Materials[this]; }
            set { Fields.Materials[this] = value; }
        }

        [DisplayName("总成本"), Expression("isnull((select sum(BuyAmount) from Sell_SaleOrder_Item where isActive =1 and headId = t0.Id),0)")]
        public Decimal? TotalCost
        {
            get { return Fields.TotalCost[this]; }
            set { Fields.TotalCost[this] = value; }
        } 

        [DisplayName("总金额"), Expression("isnull((select sum(SaleAmount) from Sell_SaleOrder_Item where isActive =1 and headId = t0.Id),0)")]
        public Decimal? TotalSales
        {
            get { return Fields.TotalSales[this]; }
            set { Fields.TotalSales[this] = value; }
        }

        [DisplayName("已开票金额"), Expression("isnull((select top 1 InvoiceAmount from [dbo].[Finance_BillInvoiced] where isActive = 1 " +
           "and Kind = 10 and SourceDocumentId = t0.Id),0)")]
        public Decimal? InvoicedAmount
        {
            get { return Fields.InvoicedAmount[this]; }
            set { Fields.InvoicedAmount[this] = value; }
        }

        [DisplayName("未开票金额"), Expression("(isnull((select sum(SaleAmount) from Sell_SaleOrder_Item where isActive =1 and headId = t0.Id),0) - " +
            "isnull((select top 1 InvoiceAmount from [dbo].[Finance_BillInvoiced] where isActive = 1 and Kind = 10 and SourceDocumentId = t0.Id),0) )")]
        public Decimal? UnInvoicedAmount
        {
            get { return Fields.UnInvoicedAmount[this]; }
            set { Fields.UnInvoicedAmount[this] = value; }
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
            public GuidField SettleCustomerId;
            public StringField Note;
            public Int64Field ApproverId;
            public DateTimeField ApproverDate;
            public GuidField CustomerId;
            public StringField CustomerName;
            public StringField SettleCustomerName;
            public StringField ApproverName;
            public RowListField<SaleOrderItemRow> Materials;
            public DecimalField TotalSales;
            public DecimalField TotalCost;            
            public DecimalField InvoicedAmount;
            public DecimalField UnInvoicedAmount; 


        }
    }
}
