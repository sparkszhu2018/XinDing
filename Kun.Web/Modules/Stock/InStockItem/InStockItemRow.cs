
namespace Kun.Stock.Entities
{
    using Kun.Administration.Entities;
    using Kun.Basic.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO; 
    using static Kun.Stock.Enums.StockEnums;

    [ConnectionKey("Kun"), Module("Stock"), TableName("[dbo].[Stock_InStock_Item]")]
    [DisplayName("入库明细"), InstanceName("入库明细")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class InStockItemRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Head Id"), NotNull, ForeignKey("[dbo].[Stock_InStock]", "Id"), LeftJoin("jHead"), Updatable(false)]
        public Guid? HeadId
        {
            get { return Fields.HeadId[this]; }
            set { Fields.HeadId[this] = value; }
        }

        [DisplayName("单据编号"), Expression("jHead.[BillNo]"), MinSelectLevel(SelectLevel.Always), ReadOnly(true), QuickFilter]
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

        [DisplayName("行号"), NotNull, SortOrder(1), ReadOnly(true)]
        public Int32? Serial
        {
            get { return Fields.Serial[this]; }
            set { Fields.Serial[this] = value; }
        }

        [DisplayName("单据日期"), Expression("jHead.[Date]"), QuickFilter]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd")]
        public DateTime? HeadDate
        {
            get { return Fields.HeadDate[this]; }
            set { Fields.HeadDate[this] = value; }
        }
 
        [DisplayName("审核人"), LookupEditor(typeof(UserRow)), ReadOnly(true),Expression("jHead.[ApproverId]"),
            ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jApprover"), TextualField("ApproverName")]
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

        [DisplayName("审核日期"), ReadOnly(true), Expression("jHead.[ApproverDate]")]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd HH:mm")]
        public DateTime? ApproverDate
        {
            get { return Fields.ApproverDate[this]; }
            set { Fields.ApproverDate[this] = value; }
        } 

        [DisplayName("Status"), DefaultValue("")]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }
         
        [DisplayName("物料"), NotNull, LookupEditor(typeof(MaterialLookup)),  
            ForeignKey("[dbo].[Basic_Material]", "Id"), LeftJoin("jMaterial"), TextualField("MaterialName")]
        public Guid? MaterialId
        {
            get { return Fields.MaterialId[this]; }
            set { Fields.MaterialId[this] = value; }
        }

        [DisplayName("物料号"), Expression("jMaterial.[Code]"),ReadOnly(true)]
        public String MaterialCode
        {
            get { return Fields.MaterialCode[this]; }
            set { Fields.MaterialCode[this] = value; }
        }

        [DisplayName("物料名称"), Expression("jMaterial.[Name]"), ReadOnly(true)]
        public String MaterialName
        {
            get { return Fields.MaterialName[this]; }
            set { Fields.MaterialName[this] = value; }
        }

        [DisplayName("规格"), Size(500)]
        public String Specification
        {
            get { return Fields.Specification[this]; }
            set { Fields.Specification[this] = value; }
        }

        [DisplayName("申请人"), LookupEditor(typeof(UserRow)),
         ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jApplicant"), TextualField("ApplicantName")]
        public Int64? ApplicantId
        {
            get { return Fields.ApplicantId[this]; }
            set { Fields.ApplicantId[this] = value; }
        }

        [DisplayName("申请人"), Expression("jApplicant.[DisplayName]"), ReadOnly(true)]
        public String ApplicantName
        {
            get { return Fields.ApplicantName[this]; }
            set { Fields.ApplicantName[this] = value; }
        }

        //[DisplayName("申请人"),NotNull, Size(50)]
        //public String Applicant
        //{
        //    get { return Fields.Applicant[this]; }
        //    set { Fields.Applicant[this] = value; }
        //}
        

        [DisplayName("单位"), NotNull, LookupEditor(typeof(UnitRow)), ReadOnly(true),
                   ForeignKey("[dbo].[Basic_Unit]", "Id"), LeftJoin("jUnit"), TextualField("UnitName")]
        public Guid? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("单位"), Expression("jUnit.[Name]"), ReadOnly(true)]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }

        [DisplayName("到货数量"), Size(18), Scale(2), DefaultValue(0.0)]
        public Decimal? DeliveryQty
        {
            get { return Fields.DeliveryQty[this]; }
            set { Fields.DeliveryQty[this] = value; }
        }

        [DisplayName("确认数量"), Size(18), Scale(2), NotNull]
        public Decimal? ConfirmQty
        {
            get { return Fields.ConfirmQty[this]; }
            set { Fields.ConfirmQty[this] = value; }
        }

        [DisplayName("供应商"), NotNull, LookupEditor(typeof(SupplierRow)), QuickFilter,
                   ForeignKey("[dbo].[Basic_Supplier]", "Id"), LeftJoin("jSupplier"), TextualField("SupplierName")]
        public Guid? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("供应商"), Expression("jSupplier.[Name]"), ReadOnly(true)]
        public String SupplierName
        {
            get { return Fields.SupplierName[this]; }
            set { Fields.SupplierName[this] = value; }
        }

        [DisplayName("采购单价"), Size(18), Scale(2),NotNull]
        public Decimal? BuyPrice
        {
            get { return Fields.BuyPrice[this]; }
            set { Fields.BuyPrice[this] = value; }
        }

        [DisplayName("采购金额"), Size(18), Scale(2), NotNull]
        public Decimal? BuyAmount
        {
            get { return Fields.BuyAmount[this]; }
            set { Fields.BuyAmount[this] = value; }
        }

        [DisplayName("销售单价"), Size(18), Scale(2)]
        public Decimal? SalePrice
        {
            get { return Fields.SalePrice[this]; }
            set { Fields.SalePrice[this] = value; }
        }

        [DisplayName("销售金额"), Size(18), Scale(2)]
        public Decimal? SaleAmount
        {
            get { return Fields.SaleAmount[this]; }
            set { Fields.SaleAmount[this] = value; }
        }

        [DisplayName("批次"), LookupEditor(typeof(LotRow)), ReadOnly(true),
            ForeignKey("[dbo].[Basic_Lot]", "Id"), LeftJoin("jLot"), TextualField("LotCode")]
        public Guid? LotId
        {
            get { return Fields.LotId[this]; }
            set { Fields.LotId[this] = value; }
        }
        [DisplayName("批次"), Expression("jLot.[Code]"), ReadOnly(true)]
        public String LotCode
        {
            get { return Fields.LotCode[this]; }
            set { Fields.LotCode[this] = value; }
        } 

        [DisplayName("仓库"), LookupEditor(typeof(WarehouseRow)), QuickFilter, ForeignKey("[dbo].[Basic_Warehouse]", "Id"), 
            LeftJoin("jWarehouse"), TextualField("WarehouseName")]
        public Guid? WarehouseId
        {
            get { return Fields.WarehouseId[this]; }
            set { Fields.WarehouseId[this] = value; }
        }

        [DisplayName("仓库"), Expression("jWarehouse.[Name]")]
        public String WarehouseName
        {
            get { return Fields.WarehouseName[this]; }
            set { Fields.WarehouseName[this] = value; }
        }

        [DisplayName("仓位"), LookupEditor(typeof(PositionRow), CascadeFrom = "WarehouseId", CascadeField = "WarehouseId"), ForeignKey("[dbo].[Basic_Position]", "Id"),
           LeftJoin("jPosition"), TextualField("PositionName")]
        public Guid? PositionId
        {
            get { return Fields.PositionId[this]; }
            set { Fields.PositionId[this] = value; }
        }

        [DisplayName("仓位"), Expression("jPosition.[Name]")]
        public String PositionName
        {
            get { return Fields.PositionName[this]; }
            set { Fields.PositionName[this] = value; }
        }

        [DisplayName("发票类型"),NotNull]
        public InvoiceType? InvoiceType
        {
            get { return (InvoiceType?)Fields.InvoiceType[this]; }
            set { Fields.InvoiceType[this] = (Int32)value; }
        }

        [DisplayName("发票类型"), NotMapped]
        public String InvoiceTypeName
        {
            get { return Fields.InvoiceTypeName[this]; }
            set { Fields.InvoiceTypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Status; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InStockItemRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public GuidField HeadId;
            public StringField Status;
            public Int32Field Serial; 
            public GuidField MaterialId;
            public GuidField UnitId;
            public DecimalField DeliveryQty;
            public DecimalField ConfirmQty;
            public GuidField SupplierId;
            public DecimalField BuyPrice;
            public DecimalField BuyAmount;
            public DecimalField SalePrice;
            public DecimalField SaleAmount;
            public GuidField LotId;
            public GuidField WarehouseId;
            public Int32Field InvoiceType;
            public StringField Specification;

            public StringField BillNo; 
            public Int32Field HeadStatus;
            public DateTimeField HeadDate;
            public Int64Field ApproverId;
            public DateTimeField ApproverDate;

            public StringField UnitName;
            public StringField MaterialCode;
            public StringField MaterialName;
            public StringField SupplierName;
            public StringField LotCode;
            public StringField WarehouseName;
            public StringField ApproverName;

            public StringField InvoiceTypeName;

            public GuidField PositionId;
            public StringField PositionName;

            public Int64Field ApplicantId;
            public StringField ApplicantName;








        }
    }
}
