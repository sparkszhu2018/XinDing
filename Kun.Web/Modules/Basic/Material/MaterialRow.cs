
namespace Kun.Basic.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kun"), Module("Basic"), TableName("[dbo].[Basic_Material]")]
    [DisplayName("物料"), InstanceName("物料")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    [LookupScript(typeof(MaterialLookup))]
    public sealed class MaterialRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
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

        [DisplayName("名称"), Size(250), QuickSearch, NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("编码名称"), Expression("(T0.Code + ' ' + T0.Name)")]
        public String CodeName
        {
            get { return Fields.CodeName[this]; }
            set { Fields.CodeName[this] = value; }
        }

        [DisplayName("旧物料号"), Size(50)]
        public String OldCode
        {
            get { return Fields.OldCode[this]; }
            set { Fields.OldCode[this] = value; }
        }

        [DisplayName("单位"), NotNull, LookupEditor(typeof(UnitRow)),LookupInclude,
            ForeignKey("[dbo].[Basic_Unit]", "Id"), LeftJoin("jUnit"), TextualField("UnitCode")]
        public Guid? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        } 

        [DisplayName("单位"), Expression("jUnit.[Code]")]
        public String UnitCode
        {
            get { return Fields.UnitCode[this]; }
            set { Fields.UnitCode[this] = value; }
        }

        [DisplayName("安全库存"), Size(18), Scale(2)]
        public Decimal? SafetyStock
        {
            get { return Fields.SafetyStock[this]; }
            set { Fields.SafetyStock[this] = value; }
        }

        [DisplayName("批次管理")]
        public Boolean? IsBatch
        {
            get { return Fields.IsBatch[this]; }
            set { Fields.IsBatch[this] = value; }
        }

        [DisplayName("虚拟"), DefaultValue(false)]
        public Boolean? IsVirtual
        {
            get { return Fields.IsVirtual[this]; }
            set { Fields.IsVirtual[this] = value; }
        }
        
        [DisplayName("物料组"), NotNull, LookupEditor(typeof(MaterialGroupRow)),
            ForeignKey("[dbo].[Basic_Material_Group]", "Id"), LeftJoin("jGroup"), TextualField("GroupName")]
        public Guid? GroupId
        {
            get { return Fields.GroupId[this]; }
            set { Fields.GroupId[this] = value; }
        }

        [DisplayName("物料组"), Expression("jGroup.[Name]")]
        public String GroupName
        {
            get { return Fields.GroupName[this]; }
            set { Fields.GroupName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CodeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaterialRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public StringField Code;
            public StringField Name;
            public StringField OldCode;
            public GuidField UnitId;
            public DecimalField SafetyStock;
            public BooleanField IsBatch;
            public GuidField GroupId;
            public StringField CodeName;

            public StringField UnitCode;
            public StringField GroupName;
            public BooleanField IsVirtual;
        }
    }
}
