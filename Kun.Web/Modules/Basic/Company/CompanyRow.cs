
namespace Kun.Basic.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Basic"), TableName("[dbo].[Basic_Company]")]
    [DisplayName("公司"), InstanceName("公司")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    [LookupScript]
    public sealed class CompanyRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("代码"), Size(50),NotNull, QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("名称"), NotNull, Size(100)]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CompanyRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public StringField Code;
            public StringField Name;
            public StringField Description;
        }
    }
}
