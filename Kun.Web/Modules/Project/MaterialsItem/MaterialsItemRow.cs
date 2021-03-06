
namespace Kun.Project.Entities
{
    using Kun.Basic.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using static Kun.Project.Enums.ProjectEnums;

    [ConnectionKey("Kun"), Module("Project"), TableName("[dbo].[Project_MaterialsItem]")]
    [DisplayName("物料信息"), InstanceName("物料信息")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class MaterialsItemRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("项目"), LookupEditor(typeof(ProjectInfoRow)),
            ForeignKey("[dbo].[Project_Info]", "Id"), LeftJoin("jProject")]
        public Guid? ProjectId
        {
            get { return Fields.ProjectId[this]; }
            set { Fields.ProjectId[this] = value; }
        }

        [DisplayName("项目"), Expression("jProject.[Name]") ]
        public String ProjectName
        {
            get { return Fields.ProjectName[this]; }
            set { Fields.ProjectName[this] = value; }
        }

        [DisplayName("项目编码"), Expression("jProject.[BillNo]")]
        public String ProjectBillNo
        {
            get { return Fields.ProjectBillNo[this]; }
            set { Fields.ProjectBillNo[this] = value; }
        }

        [DisplayName("Head Id"), NotNull, ForeignKey("[dbo].[Project_MaterialsBill]", "Id"), LeftJoin("jHead"), Updatable(false)]
        public Guid? HeadId
        {
            get { return Fields.HeadId[this]; }
            set { Fields.HeadId[this] = value; }
        }

        [DisplayName("单据编号"), Expression("jHead.[BillNo]"), MinSelectLevel(SelectLevel.Always), ReadOnly(true)]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("Head Project Id"), Expression("jHead.[ProjectId]"),MinSelectLevel(SelectLevel.Always)]
        public Guid? HeadProjectId
        {
            get { return Fields.HeadProjectId[this]; }
            set { Fields.HeadProjectId[this] = value; }
        }

        [DisplayName("状态"), Expression("jHead.[Status]")]
        public BillStatus? HeadStatus
        {
            get { return (BillStatus?)Fields.HeadStatus[this]; }
            set { Fields.HeadStatus[this] = (Int32)value; }
        }

        [DisplayName("行号"), NotNull, SortOrder(1)]
        public Int32? Serial
        {
            get { return Fields.Serial[this]; }
            set { Fields.Serial[this] = value; }
        }

        [DisplayName("StockDataId")]
        public Guid? StockDataId
        {
            get { return Fields.StockDataId[this]; }
            set { Fields.StockDataId[this] = value; }
        }

        [DisplayName("物料"), NotNull, LookupEditor(typeof(MaterialLookup)),
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

        [DisplayName("物料名称")]
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

        [DisplayName("单位")]
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

        [DisplayName("单价"), Size(18), Scale(2), NotNull]
        public Decimal? SalePrice
        {
            get { return Fields.SalePrice[this]; }
            set { Fields.SalePrice[this] = value; }
        }

        [DisplayName("金额"), Size(18), Scale(2), NotNull]
        public Decimal? SaleAmount
        {
            get { return Fields.SaleAmount[this]; }
            set { Fields.SaleAmount[this] = value; }
        }

        [DisplayName("成本单价"), Size(18), Scale(2)]
        public Decimal? BuyPrice
        {
            get { return Fields.BuyPrice[this]; }
            set { Fields.BuyPrice[this] = value; }
        }

        [DisplayName("成本"), Size(18), Scale(2)]
        public Decimal? BuyAmount
        {
            get { return Fields.BuyAmount[this]; }
            set { Fields.BuyAmount[this] = value; }
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

        [DisplayName("仓库"), ReadOnly(true), LookupEditor(typeof(WarehouseRow)), ForeignKey("[dbo].[Basic_Warehouse]", "Id"),
            LeftJoin("jWarehouse"), TextualField("WarehouseName"), QuickFilter]
        public Guid? WarehouseId
        {
            get { return Fields.WarehouseId[this]; }
            set { Fields.WarehouseId[this] = value; }
        }

        [DisplayName("仓库"), ReadOnly(true), Expression("jWarehouse.[Name]")]
        public String WarehouseName
        {
            get { return Fields.WarehouseName[this]; }
            set { Fields.WarehouseName[this] = value; }
        }

        [DisplayName("仓位"), ReadOnly(true), LookupEditor(typeof(PositionRow)), ForeignKey("[dbo].[Basic_Position]", "Id"),
           LeftJoin("jPosition"), TextualField("PositionName")]
        public Guid? PositionId
        {
            get { return Fields.PositionId[this]; }
            set { Fields.PositionId[this] = value; }
        }

        [DisplayName("仓位"), ReadOnly(true), Expression("jPosition.[Name]")]
        public String PositionName
        {
            get { return Fields.PositionName[this]; }
            set { Fields.PositionName[this] = value; }
        }

        [DisplayName("备注"), Size(200), QuickSearch]
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
            get { return Fields.MaterialName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaterialsItemRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public GuidField ProjectId;
            public GuidField HeadId;
            public Int32Field Serial;
            public GuidField StockDataId;
            public GuidField MaterialId;
            public StringField MaterialName;
            public GuidField UnitId;
            public StringField UnitName;
            public DecimalField Qty;
            public DecimalField BuyPrice;
            public DecimalField BuyAmount;
            public DecimalField SalePrice;
            public DecimalField SaleAmount;
            public GuidField LotId;
            public GuidField WarehouseId;
            public GuidField PositionId;
            public StringField Specification;
            public StringField Note;

            public StringField BillNo;
            public Int32Field HeadStatus;
            public StringField ProjectName;
            public StringField ProjectBillNo; 
             
            public StringField MaterialCode; 
            public StringField LotCode;
            public StringField WarehouseName;
            public StringField PositionName;


            public GuidField HeadProjectId;


        }
    }
}
