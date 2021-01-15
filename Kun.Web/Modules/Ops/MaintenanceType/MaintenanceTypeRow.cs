
namespace Kun.Ops.Entities
{ 
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Ops"), TableName("[dbo].[OPS_Maintenance_Type]")]
    [DisplayName("维保分类"), InstanceName("维保分类")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    [LookupScript(typeof(MaintenanceTypeLookup))]
    public sealed class MaintenanceTypeRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("名称"), Size(250), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("排序"), NotNull, DefaultValue(0)]
        [SortOrder(1)]
        public Int32? Sort
        {
            get { return Fields.Sort[this]; }
            set { Fields.Sort[this] = value; }
        } 

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaintenanceTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public StringField Name;
            public Int32Field Sort;
        }
    }
}
