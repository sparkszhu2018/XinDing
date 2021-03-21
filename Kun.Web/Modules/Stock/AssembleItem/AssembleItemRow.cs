
namespace Kun.Stock.Entities
{
    using Kun.Basic.Entities; 
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;
    using static Kun.Stock.Enums.StockEnums;

    [ConnectionKey("Kun"), Module("Stock"), TableName("[dbo].[Stock_Assemble_Item]")]
    [DisplayName("组装单明细"), InstanceName("组装单明细")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class AssembleItemRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Head Id"), NotNull, ForeignKey("[dbo].[Stock_Assemble]", "Id"), LeftJoin("jHead"), Updatable(false)]
        public Guid? HeadId
        {
            get { return Fields.HeadId[this]; }
            set { Fields.HeadId[this] = value; }
        }

        [DisplayName("单据编号"), Expression("jHead.[BillNo]"), ReadOnly(true), QuickFilter]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("状态"), Expression("jHead.[Status]"), MinSelectLevel(SelectLevel.Always), QuickFilter]
        public BillStatus? HeadStatus
        {
            get { return (BillStatus?)Fields.HeadStatus[this]; }
            set { Fields.HeadStatus[this] = (Int32)value; }
        }

        [DisplayName("单据日期"), Expression("jHead.[Date]"), QuickFilter]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd")]
        public DateTime? HeadDate
        {
            get { return Fields.HeadDate[this]; }
            set { Fields.HeadDate[this] = value; }
        }

        [DisplayName("行号"), NotNull, SortOrder(1), ReadOnly(true)]
        public Int32? Serial
        {
            get { return Fields.Serial[this]; }
            set { Fields.Serial[this] = value; }
        }

        [DisplayName("Status"), Size(50), DefaultValue("")]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("物料"), NotNull, LookupEditor(typeof(MaterialLookup)), QuickFilter,
              ForeignKey("[dbo].[Basic_Material]", "Id"), LeftJoin("jMaterial"), TextualField("MaterialName")]
        public Guid? MaterialId
        {
            get { return Fields.MaterialId[this]; }
            set { Fields.MaterialId[this] = value; }
        }

        [DisplayName("物料号"), Expression("jMaterial.[Code]"), ReadOnly(true)]
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

        [DisplayName("数量"), Size(18), Scale(2), NotNull]
        public Decimal? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
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


        [DisplayName("Stock Data Id"), NotNull]
        public Guid? StockDataId
        {
            get { return Fields.StockDataId[this]; }
            set { Fields.StockDataId[this] = value; }
        }

        [DisplayName("采购单价"), Size(18), Scale(2), NotNull]
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

     
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Status; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssembleItemRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public GuidField HeadId;
            public Int32Field Serial;
            public StringField Status;
            public GuidField MaterialId;
            public GuidField UnitId;
            public DecimalField Qty;
            public GuidField LotId;
            public GuidField WarehouseId;
            public GuidField PositionId;
            public StringField Specification;
            public GuidField StockDataId;
            public DecimalField BuyPrice;
            public DecimalField BuyAmount;

            public StringField BillNo;
            public Int32Field HeadStatus;
            public DateTimeField HeadDate;

            public StringField UnitName;
            public StringField MaterialCode;
            public StringField MaterialName; 
            public StringField LotCode;
            public StringField WarehouseName; 
            public StringField PositionName;

        }
    }
}
