
namespace Kun.Basic.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Basic"), TableName("[dbo].[Basic_Warehouse]")]
    [DisplayName("仓库"), InstanceName("仓库")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    [LookupScript]
    public sealed class WarehouseRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("编码"), Size(50), QuickSearch,NotNull]
        [MaskedEditor(Mask = "9999")]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("名称"), Size(250)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("备注"), Size(500)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("启用仓位")]
        public Boolean? UsePosition
        {
            get { return Fields.UsePosition[this]; }
            set { Fields.UsePosition[this] = value; }
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

        public WarehouseRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public StringField Code;
            public StringField Name;
            public StringField Description;
            public BooleanField UsePosition;
        }
    }
}
