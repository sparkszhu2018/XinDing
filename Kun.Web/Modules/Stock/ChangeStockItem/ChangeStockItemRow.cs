
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
    using static Kun.Stock.Enums.StockEnums;

    [ConnectionKey("Kun"), Module("Stock"), TableName("[dbo].[Stock_ChangeStock_Item]")]
    [DisplayName("移库明细"), InstanceName("移库明细")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class ChangeStockItemRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Head Id"), NotNull, ForeignKey("[dbo].[Stock_ChangeStock]", "Id"), LeftJoin("jHead"), Updatable(false)]
        public Guid? HeadId
        {
            get { return Fields.HeadId[this]; }
            set { Fields.HeadId[this] = value; }
        }

        [DisplayName("单据编号"), Expression("jHead.[BillNo]"), ReadOnly(true)]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("状态"), Expression("jHead.[Status]"),MinSelectLevel(SelectLevel.Always)]
        public BillStatus? HeadStatus
        {
            get { return (BillStatus?)Fields.HeadStatus[this]; }
            set { Fields.HeadStatus[this] = (Int32)value; }
        }

        [DisplayName("单据日期"), Expression("jHead.[Date]")]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd")]
        public DateTime? HeadDate
        {
            get { return Fields.HeadDate[this]; }
            set { Fields.HeadDate[this] = value; }
        }


        [DisplayName("行号"), NotNull, SortOrder(1)]
        public Int32? Serial
        {
            get { return Fields.Serial[this]; }
            set { Fields.Serial[this] = value; }
        }


        [DisplayName("Status"), Size(50), QuickSearch]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Change Code"), Size(10),DefaultValue("0000000000")]
        public String ChangeCode
        {
            get { return Fields.ChangeCode[this]; }
            set { Fields.ChangeCode[this] = value; }
        }

        [DisplayName("From Stock Id")]
        public Guid? FromStockId
        {
            get { return Fields.FromStockId[this]; }
            set { Fields.FromStockId[this] = value; }
        }

        [DisplayName("原物料号"), LookupEditor(typeof(MaterialLookup)),
          ForeignKey("[dbo].[Basic_Material]", "Id"), LeftJoin("jFromMaterial"), TextualField("FromMaterialName")]
        public Guid? FromMaterialId
        {
            get { return Fields.FromMaterialId[this]; }
            set { Fields.FromMaterialId[this] = value; }
        }

        [DisplayName("原物料号"), Expression("jFromMaterial.[Code]"), QuickSearch]
        public String FromMaterialCode
        {
            get { return Fields.FromMaterialCode[this]; }
            set { Fields.FromMaterialCode[this] = value; }
        }

        [DisplayName("原物料名"), Expression("jFromMaterial.[Name]"), QuickSearch]
        public String FromMaterialName
        {
            get { return Fields.FromMaterialName[this]; }
            set { Fields.FromMaterialName[this] = value; }
        }

        [DisplayName("原单位"), LookupEditor(typeof(UnitRow)),
                       ForeignKey("[dbo].[Basic_Unit]", "Id"), LeftJoin("jFromUnit"), TextualField("FromUnitName")]
        public Guid? FromUnitId
        {
            get { return Fields.FromUnitId[this]; }
            set { Fields.FromUnitId[this] = value; }
        }

        [DisplayName("原单位"), Expression("jFromUnit.[Name]")]
        public String FromUnitName
        {
            get { return Fields.FromUnitName[this]; }
            set { Fields.FromUnitName[this] = value; }
        }

        [DisplayName("原仓库"), ForeignKey("[dbo].[Basic_Warehouse]", "Id"),
                    LeftJoin("jFromWarehouse"), TextualField("FromWarehouseName"), LookupEditor(typeof(WarehouseRow))]
        public Guid? FromWarehouseId
        {
            get { return Fields.FromWarehouseId[this]; }
            set { Fields.FromWarehouseId[this] = value; }
        }

        [DisplayName("原仓库"), Expression("jFromWarehouse.[Name]")]
        public String FromWarehouseName
        {
            get { return Fields.FromWarehouseName[this]; }
            set { Fields.FromWarehouseName[this] = value; }
        }


        [DisplayName("原仓位"), ForeignKey("[dbo].[Basic_Position]", "Id"),
                LeftJoin("jFromPosition"), TextualField("FromPositionName"), LookupEditor(typeof(PositionRow))]
        public Guid? FromPositionId
        {
            get { return Fields.FromPositionId[this]; }
            set { Fields.FromPositionId[this] = value; }
        }

        [DisplayName("原仓位"), Expression("jFromPosition.[Name]")]
        public String FromPositionName
        {
            get { return Fields.FromPositionName[this]; }
            set { Fields.FromPositionName[this] = value; }
        }

        [DisplayName("原批次"), LookupEditor(typeof(LotRow)), ReadOnly(true),
                ForeignKey("[dbo].[Basic_Lot]", "Id"), LeftJoin("jFromLot"), TextualField("FromLotCode")]
        public Guid? FromLotId
        {
            get { return Fields.FromLotId[this]; }
            set { Fields.FromLotId[this] = value; }
        }

        [DisplayName("原批次"), Expression("jFromLot.[Code]"), QuickSearch]
        public String FromLotCode
        {
            get { return Fields.FromLotCode[this]; }
            set { Fields.FromLotCode[this] = value; }
        }


        [DisplayName("数量"), Size(18), Scale(4), NotNull]
        public Decimal? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("To Stock Id")]
        public Guid? ToStockId
        {
            get { return Fields.ToStockId[this]; }
            set { Fields.ToStockId[this] = value; }
        }


        [DisplayName("现物料号"), LookupEditor(typeof(MaterialLookup)),
          ForeignKey("[dbo].[Basic_Material]", "Id"), LeftJoin("jToMaterial"), TextualField("ToMaterialName")]
        public Guid? ToMaterialId
        {
            get { return Fields.ToMaterialId[this]; }
            set { Fields.ToMaterialId[this] = value; }
        }

        [DisplayName("现物料号"), Expression("jToMaterial.[Code]"), QuickSearch]
        public String ToMaterialCode
        {
            get { return Fields.ToMaterialCode[this]; }
            set { Fields.ToMaterialCode[this] = value; }
        }

        [DisplayName("现物料名"), Expression("jToMaterial.[Name]"), QuickSearch]
        public String ToMaterialName
        {
            get { return Fields.ToMaterialName[this]; }
            set { Fields.ToMaterialName[this] = value; }
        }

        [DisplayName("现单位"), LookupEditor(typeof(UnitRow)),
                       ForeignKey("[dbo].[Basic_Unit]", "Id"), LeftJoin("jToUnit"), TextualField("ToUnitName")]
        public Guid? ToUnitId
        {
            get { return Fields.ToUnitId[this]; }
            set { Fields.ToUnitId[this] = value; }
        }

        [DisplayName("现单位"), Expression("jToUnit.[Name]")]
        public String ToUnitName
        {
            get { return Fields.ToUnitName[this]; }
            set { Fields.ToUnitName[this] = value; }
        }

        [DisplayName("现仓库"), ForeignKey("[dbo].[Basic_Warehouse]", "Id"),
                    LeftJoin("jToWarehouse"), TextualField("ToWarehouseName"), LookupEditor(typeof(WarehouseRow))]
        public Guid? ToWarehouseId
        {
            get { return Fields.ToWarehouseId[this]; }
            set { Fields.ToWarehouseId[this] = value; }
        }

        [DisplayName("现仓库"), Expression("jToWarehouse.[Name]")]
        public String ToWarehouseName
        {
            get { return Fields.ToWarehouseName[this]; }
            set { Fields.ToWarehouseName[this] = value; }
        } 

        [DisplayName("现仓位"), ForeignKey("[dbo].[Basic_Position]", "Id"),
                LeftJoin("jToPosition"), TextualField("ToPositionName"), 
            LookupEditor(typeof(PositionRow), CascadeFrom = "ToWarehouseId", CascadeField = "WarehouseId")]
        public Guid? ToPositionId
        {
            get { return Fields.ToPositionId[this]; }
            set { Fields.ToPositionId[this] = value; }
        }

        [DisplayName("现仓位"), Expression("jToPosition.[Name]")]
        public String ToPositionName
        {
            get { return Fields.ToPositionName[this]; }
            set { Fields.ToPositionName[this] = value; }
        }

        [DisplayName("现批次"), LookupEditor(typeof(LotRow), CascadeFrom = "ToMaterialId", CascadeField = "MaterialId"),
        ForeignKey("[dbo].[Basic_Lot]", "Id"), LeftJoin("jToLot"), TextualField("ToLotCode")]
        public Guid? ToLotId
        {
            get { return Fields.ToLotId[this]; }
            set { Fields.ToLotId[this] = value; }
        }

        [DisplayName("现批次"), Expression("jToLot.[Code]"), QuickSearch]
        public String ToLotCode
        {
            get { return Fields.ToLotCode[this]; }
            set { Fields.ToLotCode[this] = value; }
        }

        [DisplayName("原采购单价"), Size(18), Scale(2), NotNull]
        public Decimal? FromBuyPrice
        {
            get { return Fields.FromBuyPrice[this]; }
            set { Fields.FromBuyPrice[this] = value; }
        }

        [DisplayName("原销售单价"), Size(18), Scale(2), NotNull]
        public Decimal? FromSalePrice
        {
            get { return Fields.FromSalePrice[this]; }
            set { Fields.FromSalePrice[this] = value; }
        }

        [DisplayName("原规格"), Size(500)]
        public String FromSpecification
        {
            get { return Fields.FromSpecification[this]; }
            set { Fields.FromSpecification[this] = value; }
        }

        [DisplayName("现采购单价"), Size(18), Scale(2), NotNull]
        public Decimal? ToBuyPrice
        {
            get { return Fields.ToBuyPrice[this]; }
            set { Fields.ToBuyPrice[this] = value; }
        }

        [DisplayName("现销售单价"), Size(18), Scale(2), NotNull]
        public Decimal? ToSalePrice
        {
            get { return Fields.FromSalePrice[this]; }
            set { Fields.FromSalePrice[this] = value; }
        }

        [DisplayName("现规格"), Size(500)]
        public String ToSpecification
        {
            get { return Fields.FromSpecification[this]; }
            set { Fields.FromSpecification[this] = value; }
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

        public ChangeStockItemRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public Int32Field Serial;
            public GuidField HeadId;
            public StringField Status;
            public StringField ChangeCode;
            public GuidField FromStockId;
            public GuidField FromMaterialId;
            public GuidField FromUnitId;
            public GuidField FromWarehouseId;
            public GuidField FromPositionId;
            public GuidField FromLotId;
            public DecimalField FromBuyPrice;
            public DecimalField FromSalePrice;
            public StringField FromSpecification;
            public DecimalField Qty;
            public GuidField ToStockId;
            public GuidField ToMaterialId;
            public GuidField ToUnitId;
            public GuidField ToWarehouseId;
            public GuidField ToPositionId;
            public GuidField ToLotId;
            public DecimalField ToBuyPrice;
            public DecimalField ToSalePrice;
            public StringField ToSpecification; 

            public StringField FromMaterialCode;
            public StringField FromMaterialName;
            public StringField FromUnitName;
            public StringField FromWarehouseName;
            public StringField FromPositionName;
            public StringField FromLotCode;


            public StringField ToMaterialCode;
            public StringField ToMaterialName;
            public StringField ToUnitName;
            public StringField ToWarehouseName;
            public StringField ToPositionName;
            public StringField ToLotCode;

            public StringField BillNo;
            public Int32Field HeadStatus;
            public DateTimeField HeadDate;
        }
    }
}
