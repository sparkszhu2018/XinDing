
namespace Kun.Basic.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Basic"), TableName("[dbo].[Basic_Supplier]")]
    [DisplayName("供应商"), InstanceName("供应商")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    [LookupScript]
    public sealed class SupplierRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("编号"), Size(50), QuickSearch, ReadOnly(true)]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("名称"), Size(100), QuickSearch, NotNull]
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

        [DisplayName("联系人"), QuickSearch, Size(50)]
        public String Contacts
        {
            get { return Fields.Contacts[this]; }
            set { Fields.Contacts[this] = value; }
        }

        [DisplayName("电话"), Size(50)]
        public String Mobile
        {
            get { return Fields.Mobile[this]; }
            set { Fields.Mobile[this] = value; }
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

        public SupplierRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public StringField Code;
            public StringField Name;
            public StringField Description;
            public StringField Contacts;
            public StringField Mobile;
        }
    }
}
