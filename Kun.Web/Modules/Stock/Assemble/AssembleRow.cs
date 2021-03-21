
namespace Kun.Stock.Entities
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
    using static Kun.Stock.Enums.StockEnums;

    [ConnectionKey("Kun"), Module("Stock"), TableName("[dbo].[Stock_Assemble]")]
    [DisplayName("组装单"), InstanceName("组装单")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class AssembleRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("单据编号"), Size(50), ReadOnly(true), QuickSearch]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
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

        [DisplayName("物料"), NotNull, LookupEditor(typeof(MaterialLookup)), QuickFilter,
            ForeignKey("[dbo].[Basic_Material]", "Id"), LeftJoin("jMaterial"), TextualField("MaterialName")]
        public Guid? ToMaterialId
        {
            get { return Fields.ToMaterialId[this]; }
            set { Fields.ToMaterialId[this] = value; }
        }

        [DisplayName("物料号"), Expression("jMaterial.[Code]"), ReadOnly(true)]
        public String ToMaterialCode
        {
            get { return Fields.ToMaterialCode[this]; }
            set { Fields.ToMaterialCode[this] = value; }
        }

        [DisplayName("物料名称"), QuickFilter, Expression("jMaterial.[Name]"), ReadOnly(true)]
        public String ToMaterialName
        {
            get { return Fields.ToMaterialName[this]; }
            set { Fields.ToMaterialName[this] = value; }
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
         
        [DisplayName("数量"), Size(18), Scale(2),NotNull]
        public Decimal? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("成本单价"), Size(18), Scale(4)]
        public Decimal? BuyPrice
        {
            get { return Fields.BuyPrice[this]; }
            set { Fields.BuyPrice[this] = value; }
        }

        [DisplayName("成本金额"), Size(18), Scale(4)]
        public Decimal? BuyAmount
        {
            get { return Fields.BuyAmount[this]; }
            set { Fields.BuyAmount[this] = value; }
        }

        [DisplayName("Stock Data Id")]
        public Guid? StockDataId
        {
            get { return Fields.StockDataId[this]; }
            set { Fields.StockDataId[this] = value; }
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

        [DisplayName("用料明细"), NotMapped, MasterDetailRelation(foreignKey: "HeadId", 
            IncludeColumns = "HeadStatus,MaterialCode,MaterialName,LotCode,WarehouseName,PositionName,UnitName")]
        public List<AssembleItemRow> Items
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

        public AssembleRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public StringField BillNo; 
            public Int32Field Status;
            public DateTimeField Date;
            public GuidField ToMaterialId;
            public GuidField UnitId;
            public DecimalField Qty;
            public DecimalField BuyPrice;
            public DecimalField BuyAmount;
            public GuidField StockDataId;
            public StringField Note;
            public Int64Field ApproverId;
            public DateTimeField ApproverDate;
            public StringField ApproverName; 
            public StringField ToMaterialCode; 
            public StringField ToMaterialName;
            public StringField UnitName;
            public GuidField LotId;
            public GuidField WarehouseId;
            public GuidField PositionId;

            public StringField LotCode;
            public StringField WarehouseName;
            public StringField PositionName;

            public RowListField<AssembleItemRow> Items; 

        }
    }
}
