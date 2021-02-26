
namespace Kun.Ops.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using static Kun.Ops.Enums.OpsEnums;

    [ConnectionKey("Kun"), Module("Ops"), TableName("[dbo].[OPS_Maintenance_Manhours]")]
    [DisplayName("Maintenance Manhours"), InstanceName("Maintenance Manhours")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class MaintenanceManhoursRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Head Id"), NotNull, ForeignKey("[dbo].[OPS_Maintenance]", "Id"), LeftJoin("jHead"), Updatable(false)]
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

        [DisplayName("状态"), Expression("jHead.[Status]"), QuickFilter]
        public BillStatus? HeadStatus
        {
            get { return (BillStatus?)Fields.HeadStatus[this]; }
            set { Fields.HeadStatus[this] = (Int32)value; }
        }

        [DisplayName("行号"), NotNull]
        public Int32? Serial
        {
            get { return Fields.Serial[this]; }
            set { Fields.Serial[this] = value; }
        }

        [DisplayName("工时标准"), NotNull, LookupEditor(typeof(ManhourPriceRow)),
           ForeignKey("[dbo].[OPS_Manhour_Price]", "Id"), LeftJoin("jManhour"), TextualField("ManhourName")]
        public Guid? ManhourId
        {
            get { return Fields.ManhourId[this]; }
            set { Fields.ManhourId[this] = value; }
        }
         
        [DisplayName("工时标准"), Expression("jManhour.[Name]"), ReadOnly(true)]
        public String ManhourName
        {
            get { return Fields.ManhourName[this]; }
            set { Fields.ManhourName[this] = value; }
        }

        [DisplayName("单价"), Size(10), Scale(2), NotNull]
        public Decimal? Price
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("数量"), Size(10), Scale(2), NotNull]
        public Decimal? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        } 

        [DisplayName("金额"), Size(10), Scale(2), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("备注"), Size(500), QuickSearch]
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
            get { return Fields.Note; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaintenanceManhoursRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public GuidField HeadId;
            public Int32Field Serial;
            public GuidField ManhourId;
            public DecimalField Qty;
            public DecimalField Price;
            public DecimalField Amount;
            public StringField Note;
            public StringField ManhourName;

            public StringField BillNo;
            public Int32Field HeadStatus;

        }
    }
}
