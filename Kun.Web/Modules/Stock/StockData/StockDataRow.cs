
namespace Kun.Stock.Entities
{
    using Kun.Basic.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Stock"), TableName("[dbo].[Stock_Data]")]
    [DisplayName("即时库存"), InstanceName("即时库存")]
    [ReadPermission("*")]
    [ModifyPermission("*")] 
    [LookupScript]
    public sealed class StockDataRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("物料"), NotNull, LookupEditor(typeof(MaterialLookup)),
            ForeignKey("[dbo].[Basic_Material]", "Id"), LeftJoin("jMaterial"), TextualField("MaterialName")]
        public Guid? MaterialId
        {
            get { return Fields.MaterialId[this]; }
            set { Fields.MaterialId[this] = value; }
        }

        [DisplayName("物料号"), Expression("jMaterial.[Code]"), ReadOnly(true), QuickSearch]
        public String MaterialCode
        {
            get { return Fields.MaterialCode[this]; }
            set { Fields.MaterialCode[this] = value; }
        }

        [DisplayName("物料名称"), Expression("jMaterial.[Name]"), ReadOnly(true), QuickSearch]
        public String MaterialName
        {
            get { return Fields.MaterialName[this]; }
            set { Fields.MaterialName[this] = value; }
        }


        [DisplayName("库存数量"), Size(18), Scale(4), NotNull]
        public Decimal? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("预留数量"), Size(18), Scale(4), NotNull]
        public Decimal? ReservedQty
        {
            get { return Fields.ReservedQty[this]; }
            set { Fields.ReservedQty[this] = value; }
        }

        [DisplayName("可用数量"), Size(18), Scale(4), LookupInclude]
        public Decimal? AvailableQty
        {
            get { return Fields.AvailableQty[this]; }
            set { Fields.AvailableQty[this] = value; }
        }
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

        [DisplayName("批次"), LookupEditor(typeof(LotRow)), ReadOnly(true),
                   ForeignKey("[dbo].[Basic_Lot]", "Id"), LeftJoin("jLot"), TextualField("LotCode")]
        public Guid? LotId
        {
            get { return Fields.LotId[this]; }
            set { Fields.LotId[this] = value; }
        }
        [DisplayName("批次"), Expression("jLot.[Code]"), ReadOnly(true), QuickSearch]
        public String LotCode
        {
            get { return Fields.LotCode[this]; }
            set { Fields.LotCode[this] = value; }
        }

        [DisplayName("仓库"), ForeignKey("[dbo].[Basic_Warehouse]", "Id"),
            LeftJoin("jWarehouse"), TextualField("WarehouseName")]
        public Guid? WarehouseId
        {
            get { return Fields.WarehouseId[this]; }
            set { Fields.WarehouseId[this] = value; }
        }

        [DisplayName("仓库"), Expression("jWarehouse.[Name]"), ReadOnly(true)]
        public String WarehouseName
        {
            get { return Fields.WarehouseName[this]; }
            set { Fields.WarehouseName[this] = value; }
        }

        [DisplayName("仓位"), ForeignKey("[dbo].[Basic_Position]", "Id"),
         LeftJoin("jPosition"), TextualField("PositionName")]
        public Guid? PositionId
        {
            get { return Fields.PositionId[this]; }
            set { Fields.PositionId[this] = value; }
        }

        [DisplayName("仓位"), Expression("jPosition.[Name]"), ReadOnly(true)]
        public String PositionName
        {
            get { return Fields.PositionName[this]; }
            set { Fields.PositionName[this] = value; }
        }

        [DisplayName("采购单价"), Size(18), Scale(2)]
        public Decimal? BuyPrice
        {
            get { return Fields.BuyPrice[this]; }
            set { Fields.BuyPrice[this] = value; }
        }

        [DisplayName("采购金额"), Size(18), Scale(2)]
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

        [DisplayName("规格"), Size(500), QuickSearch]
        public String Specification
        {
            get { return Fields.Specification[this]; }
            set { Fields.Specification[this] = value; }
        }

        [DisplayName("申请人"), Size(50)]
        public String Applicant
        {
            get { return Fields.Applicant[this]; }
            set { Fields.Applicant[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Specification; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StockDataRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public GuidField MaterialId;
            public DecimalField Qty;
            public DecimalField ReservedQty;
            public DecimalField AvailableQty;
            public GuidField UnitId;
            public GuidField LotId;
            public GuidField WarehouseId;
            public DecimalField BuyPrice;
            public DecimalField BuyAmount;
            public DecimalField SalePrice;
            public DecimalField SaleAmount;
            public StringField Specification;

            public StringField UnitName;
            public StringField MaterialCode;
            public StringField MaterialName;
            public StringField LotCode;



            public GuidField PositionId;
            public StringField PositionName;
            public StringField WarehouseName;
            public StringField Applicant;
        }
    }
}
