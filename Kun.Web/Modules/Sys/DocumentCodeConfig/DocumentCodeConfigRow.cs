
namespace Kun.Sys.Entities
{
    using Kun.Sys.Enum;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Sys"), TableName("[dbo].[Sys_DocumentCodeConfig]")]
    [DisplayName("单据编号配置"), InstanceName("单据编号配置")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class DocumentCodeConfigRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("单据"), NotNull]
        public DocumentKind? DocumentKind
        {
            get { return (DocumentKind)Fields.DocumentKind[this]; }
            set { Fields.DocumentKind[this] = (Int16)value; }
        }

        [DisplayName("单据编号前缀"), Size(20), NotNull, QuickSearch]
        public String DocumentCodePrefix
        {
            get { return Fields.DocumentCodePrefix[this]; }
            set { Fields.DocumentCodePrefix[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DocumentCodePrefix; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DocumentCodeConfigRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public Int16Field DocumentKind;
            public StringField DocumentCodePrefix;
        }
    }
}
