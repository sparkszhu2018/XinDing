
namespace Kun.Basic.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Basic"), TableName("[dbo].[Basic_Unit]")]
    [DisplayName("计量单位"), InstanceName("计量单位")]
    [ReadPermission("*")]
    [ModifyPermission("*")]

    [LookupScript(typeof(UnitLookup))]
    public sealed class UnitRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("编码"), Size(50), QuickSearch, NotNull]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("名称"), Size(250), NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("小数")]
        public Boolean? Decim
        {
            get { return Fields.Decim[this]; }
            set { Fields.Decim[this] = value; }
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

        public UnitRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public StringField Code;
            public StringField Name;
            public BooleanField Decim;

            
        }
    }
}
