
namespace Kun.Project.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Project"), TableName("[dbo].[Project_MaterialsItem]")]
    [DisplayName("Materials Item"), InstanceName("Materials Item")]
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

        [DisplayName("Project Id"), NotNull]
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

        [DisplayName("Stock Data Id")]
        public Guid? StockDataId
        {
            get { return Fields.StockDataId[this]; }
            set { Fields.StockDataId[this] = value; }
        }

        [DisplayName("Material Id"), NotNull]
        public Guid? MaterialId
        {
            get { return Fields.MaterialId[this]; }
            set { Fields.MaterialId[this] = value; }
        }

        [DisplayName("Material Name"), Size(200), QuickSearch]
        public String MaterialName
        {
            get { return Fields.MaterialName[this]; }
            set { Fields.MaterialName[this] = value; }
        }

        [DisplayName("Unit Id"), NotNull]
        public Guid? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("Unit Name"), Size(50)]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }

        [DisplayName("Qty"), Size(18), Scale(4), NotNull]
        public Decimal? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("Buy Price"), Size(18), Scale(2)]
        public Decimal? BuyPrice
        {
            get { return Fields.BuyPrice[this]; }
            set { Fields.BuyPrice[this] = value; }
        }

        [DisplayName("Buy Amount"), Size(18), Scale(2)]
        public Decimal? BuyAmount
        {
            get { return Fields.BuyAmount[this]; }
            set { Fields.BuyAmount[this] = value; }
        }

        [DisplayName("Sale Price"), Size(18), Scale(2), NotNull]
        public Decimal? SalePrice
        {
            get { return Fields.SalePrice[this]; }
            set { Fields.SalePrice[this] = value; }
        }

        [DisplayName("Sale Amount"), Size(18), Scale(2), NotNull]
        public Decimal? SaleAmount
        {
            get { return Fields.SaleAmount[this]; }
            set { Fields.SaleAmount[this] = value; }
        }

        [DisplayName("Lot Id")]
        public Guid? LotId
        {
            get { return Fields.LotId[this]; }
            set { Fields.LotId[this] = value; }
        }

        [DisplayName("Warehouse Id")]
        public Guid? WarehouseId
        {
            get { return Fields.WarehouseId[this]; }
            set { Fields.WarehouseId[this] = value; }
        }

        [DisplayName("Position Id")]
        public Guid? PositionId
        {
            get { return Fields.PositionId[this]; }
            set { Fields.PositionId[this] = value; }
        }

        [DisplayName("Specification"), Size(500)]
        public String Specification
        {
            get { return Fields.Specification[this]; }
            set { Fields.Specification[this] = value; }
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
        }
    }
}
