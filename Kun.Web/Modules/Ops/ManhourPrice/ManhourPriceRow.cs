
namespace Kun.Ops.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Ops"), TableName("[dbo].[OPS_Manhour_Price]")]
    [DisplayName("工时标准"), InstanceName("工时标准")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    [LookupScript]
    public sealed class ManhourPriceRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("名称"), Size(250), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("单价"), Size(10), Scale(2), NotNull]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
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

        public ManhourPriceRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public StringField Name;
            public DecimalField Price;
        }
    }
}
