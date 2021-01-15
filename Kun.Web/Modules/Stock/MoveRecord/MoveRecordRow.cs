
namespace Kun.Stock.Entities
{
    using Kun.Basic.Entities;
    using Kun.Sys.Enum;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using static Kun.Stock.Enums.MoveRecordEnums;

    [ConnectionKey("Kun"), Module("Stock"), TableName("[dbo].[Stock_MoveRecord]")]
    [DisplayName("出入库记录"), InstanceName("出入库记录")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class MoveRecordRow : Kun.Administration.Entities.LoggingAllRow, IIdRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("移动类型"), NotNull]
        public MoveType? MovCode
        {
            get { return (MoveType)Fields.MovCode[this]; }
            set { Fields.MovCode[this] = (Int32)value; }
        }

        [DisplayName("From Stock Id")]
        public Guid? FromStockId
        {
            get { return Fields.FromStockId[this]; }
            set { Fields.FromStockId[this] = value; }
        }

        [DisplayName("From Material Id"), LookupEditor(typeof(MaterialLookup)),
          ForeignKey("[dbo].[Basic_Material]", "Id"), LeftJoin("jFromMaterial"), TextualField("FromMaterialName")]
        public Guid? FromMaterialId
        {
            get { return Fields.FromMaterialId[this]; }
            set { Fields.FromMaterialId[this] = value; }
        }
          
        [DisplayName("原物料号"), Expression("jFromMaterial.[Code]"),QuickSearch]
        public String FromMaterialCode
        {
            get { return Fields.FromMaterialCode[this]; }
            set { Fields.FromMaterialCode[this] = value; }
        }

        [DisplayName("原物料名"), Expression("jFromMaterial.[Name]"),QuickSearch]
        public String FromMaterialName
        {
            get { return Fields.FromMaterialName[this]; }
            set { Fields.FromMaterialName[this] = value; }
        }
          
        [DisplayName("From Unit Id"), LookupEditor(typeof(UnitRow)),
                       ForeignKey("[dbo].[Basic_Unit]", "Id"), LeftJoin("jFromUnit"), TextualField("FromUnitName")]
        public Guid? FromUnitId
        {
            get { return Fields.FromUnitId[this]; }
            set { Fields.FromUnitId[this] = value; }
        }  

        [DisplayName("原单位"), Expression("jFromUnit.[Name]") ]
        public String FromUnitName
        {
            get { return Fields.FromUnitName[this]; }
            set { Fields.FromUnitName[this] = value; }
        }

        [DisplayName("From Warehouse Id"), ForeignKey("[dbo].[Basic_Warehouse]", "Id"),
                    LeftJoin("jFromWarehouse"), TextualField("FromWarehouseName")]
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


        [DisplayName("From Position Id"), ForeignKey("[dbo].[Basic_Position]", "Id"),
                LeftJoin("jFromPosition"), TextualField("FromPositionName")]
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

        [DisplayName("From Lot Id"), LookupEditor(typeof(LotRow)), ReadOnly(true),
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


        [DisplayName("To Material Id"), LookupEditor(typeof(MaterialLookup)),
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

        [DisplayName("To Unit Id"), LookupEditor(typeof(UnitRow)),
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

        [DisplayName("To Warehouse Id"), ForeignKey("[dbo].[Basic_Warehouse]", "Id"),
                    LeftJoin("jToWarehouse"), TextualField("ToWarehouseName")]
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


        [DisplayName("To Position Id"), ForeignKey("[dbo].[Basic_Position]", "Id"),
                LeftJoin("jToPosition"), TextualField("ToPositionName")]
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

        [DisplayName("To Lot Id"), LookupEditor(typeof(LotRow)), ReadOnly(true),
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

        [DisplayName("业务单据"), NotNull]
        public DocumentKind? BizBillType
        {
            get { return (DocumentKind?)Fields.BizBillType[this]; }
            set { Fields.BizBillType[this] = (Int32)value; }
        }

        [DisplayName("Biz Bill Id"), NotNull]
        public Guid? BizBillId
        {
            get { return Fields.BizBillId[this]; }
            set { Fields.BizBillId[this] = value; }
        }

        [DisplayName("Biz Item Id"), NotNull]
        public Guid? BizItemId
        {
            get { return Fields.BizItemId[this]; }
            set { Fields.BizItemId[this] = value; }
        }

        [DisplayName("Status"), NotNull]
        public  Status? Status
        {
            get { return (Status)Fields.Status[this]; }
            set { Fields.Status[this] = (Int32)value; }
        }

        [DisplayName("业务单据号"), QuickSearch]
        public String BizBillCode
        {
            get { return Fields.ToLotCode[this]; }
            set { Fields.ToLotCode[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MoveRecordRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public Int32Field MovCode;
            public GuidField FromStockId;
            public GuidField FromMaterialId;
            public GuidField FromUnitId;
            public GuidField FromWarehouseId;
            public GuidField FromPositionId;
            public GuidField FromLotId;
             
            public StringField FromMaterialCode;
            public StringField FromMaterialName;
            public StringField FromUnitName;
            public StringField FromWarehouseName;
            public StringField FromPositionName;
            public StringField FromLotCode;

            public DecimalField Qty;
            public GuidField ToStockId;
            public GuidField ToMaterialId;
            public GuidField ToUnitId;
            public GuidField ToWarehouseId;
            public GuidField ToPositionId;
            public GuidField ToLotId;
             
            public StringField ToMaterialCode;
            public StringField ToMaterialName;
            public StringField ToUnitName;
            public StringField ToWarehouseName;
            public StringField ToPositionName;
            public StringField ToLotCode;

            public Int32Field BizBillType;
            public GuidField BizBillId;
            public GuidField BizItemId;
            public Int32Field Status;
            public StringField BizBillCode;
        }
    }
}
