
namespace Kun.Ops.Entities
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
    using static Kun.Ops.Enums.OpsEnums; 

    [ConnectionKey("Kun"), Module("Ops"), TableName("[dbo].[OPS_Maintenance]")]
    [DisplayName("维保单"), InstanceName("维保单")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class MaintenanceRow : Kun.Administration.Entities.LoggingAllRow, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("单据编号"), Size(50), QuickSearch,ReadOnly(true)]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("业务类型"), NotNull]

        [DefaultValue(MaintenanceBillType.NormalMaintenance)]
        public MaintenanceBillType? BillType
        {
            get { return (MaintenanceBillType)Fields.BillType[this]; }
            set { Fields.BillType[this] = (Int32)value; }
        }

        [DisplayName("状态"), Size(50),
          DefaultValue(BillStatus.Edit), NotNull, ReadOnly(true)]
        public BillStatus? Status
        {
            get { return (BillStatus)Fields.Status[this]; }
            set { Fields.Status[this] = (Int32)value; }
        }
          
        [DisplayName("单据日期"), NotNull, DefaultValue("Now")]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("服务商"), NotNull, LookupEditor(typeof(VendorRow)),
             ForeignKey("[dbo].[Basic_Vendor]", "Id"), LeftJoin("jVendor"), TextualField("VendorName")
           ]
        public Guid? VendorId
        {
            get { return Fields.VendorId[this]; }
            set { Fields.VendorId[this] = value; }
        }

        [DisplayName("服务商"), Expression("jVendor.[Name]"), ReadOnly(true)]
        public String VendorName
        {
            get { return Fields.VendorName[this]; }
            set { Fields.VendorName[this] = value; }
        } 

        [DisplayName("报修人"), Size(50)]
        public String Reporter
        {
            get { return Fields.Reporter[this]; }
            set { Fields.Reporter[this] = value; }
        }

        [DisplayName("报修时间"), NotNull, DefaultValue("Now")]
        [DateTimeFormatter(DisplayFormat = "yyyy-MM-dd")]
        public DateTime? ReportDate
        {
            get { return Fields.ReportDate[this]; }
            set { Fields.ReportDate[this] = value; }
        }

        [DisplayName("报修部门"), NotNull, LookupEditor(typeof(CustomerRow)),
             ForeignKey("[dbo].[Basic_Customer]", "Id"), LeftJoin("jReportCustomer"), TextualField("ReportCustomerName")
           ]
        public Guid? ReportCustomerId
        {
            get { return Fields.ReportCustomerId[this]; }
            set { Fields.ReportCustomerId[this] = value; }
        }

        [DisplayName("报修部门"), Expression("jReportCustomer.[Name]"), ReadOnly(true)]
        public String ReportCustomerName
        {
            get { return Fields.ReportCustomerName[this]; }
            set { Fields.ReportCustomerName[this] = value; }
        }

        [DisplayName("结算部门"), NotNull, LookupEditor(typeof(CustomerRow)),
             ForeignKey("[dbo].[Basic_Customer]", "Id"), LeftJoin("jSettleCustomer"), TextualField("SettleCustomerName")
           ]
        public Guid? SettleCustomerId
        {
            get { return Fields.SettleCustomerId[this]; }
            set { Fields.SettleCustomerId[this] = value; }
        }

        [DisplayName("结算部门"), Expression("jSettleCustomer.[Name]"), ReadOnly(true)]
        public String SettleCustomerName 
        {
            get { return Fields.SettleCustomerName[this]; }
            set { Fields.SettleCustomerName[this] = value; }
        }

        [DisplayName("维保分类"), NotNull, LookupEditor(typeof(MaintenanceTypeRow)),
            ForeignKey("[dbo].[OPS_Maintenance_Type]", "Id"), LeftJoin("jType"), TextualField("TypeName")
          ]
        public Guid? TypeId
        {
            get { return Fields.TypeId[this]; }
            set { Fields.TypeId[this] = value; }
        }

        [DisplayName("维保分类"), Expression("jType.[Name]"), ReadOnly(true)]
        public String TypeName
        {
            get { return Fields.TypeName[this]; }
            set { Fields.TypeName[this] = value; }
        } 


        [DisplayName("地址"), Size(100)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        //[DisplayName("分类"), NotNull]
        //public MaintClassify? Classify
        //{
        //    get { return (MaintClassify)Fields.Classify[this]; }
        //    set { Fields.Classify[this] = (Int32)value; }
        //}

        [DisplayName("故障描述"), Size(500)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("处理结果"), Size(500)]
        public String Content
        {
            get { return Fields.Content[this]; }
            set { Fields.Content[this] = value; }
        }


        [DisplayName("更换硬件"), NotNull, DefaultValue(true)]
        [ReadPermission(PermissionKeys.MaintenanceResponsible)]
        public Boolean? ChangeDevice
        {
            get { return Fields.ChangeDevice[this]; }
            set { Fields.ChangeDevice[this] = value; }
        }

        [DisplayName("Reporter Comment"), Size(500)]
        public String ReporterComment
        {
            get { return Fields.ReporterComment[this]; }
            set { Fields.ReporterComment[this] = value; }
        }

        [DisplayName("Reporter Confirm Date")]
        public DateTime? ReporterConfirmDate
        {
            get { return Fields.ReporterConfirmDate[this]; }
            set { Fields.ReporterConfirmDate[this] = value; }
        }

        [DisplayName("Customer Comment"), Size(500)]
        public String CustomerComment
        {
            get { return Fields.CustomerComment[this]; }
            set { Fields.CustomerComment[this] = value; }
        }

        [DisplayName("Customer Confirm Date")]
        public DateTime? CustomerConfirmDate
        {
            get { return Fields.CustomerConfirmDate[this]; }
            set { Fields.CustomerConfirmDate[this] = value; }
        }

        [DisplayName("备注"), Size(500)]

        [ReadPermission(PermissionKeys.MaintenanceResponsible)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("服务商费用"), Size(10), Scale(2)]
        [ReadPermission(PermissionKeys.MaintenanceResponsible)]
        public Decimal? ServicerCost
        {
            get { return Fields.ServicerCost[this]; }
            set { Fields.ServicerCost[this] = value; }
        } 

        [DisplayName("维保人"), LookupEditor(typeof(UserRow)),
             ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jResponsible"), TextualField("ResponsibleName")
           ]
        public Int32? ResponsibleId
        {
            get { return Fields.ResponsibleId[this]; }
            set { Fields.ResponsibleId[this] = value; }
        }

        [DisplayName("维保人"), Expression("jResponsible.[DisplayName]"), ReadOnly(true)]
        public String ResponsibleName
        {
            get { return Fields.ResponsibleName[this]; }
            set { Fields.ResponsibleName[this] = value; }
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


        [DisplayName("用料明细"), NotMapped,MasterDetailRelation(foreignKey: "HeadId",
            IncludeColumns = "MaterialCode,MaterialName,UnitName,WarehouseName,PositionName,LotCode,HeadStatus")] 
        [ReadPermission(PermissionKeys.MaintenanceResponsible)]
        public List<MaintenanceMaterialsRow> Materials
        {
            get { return Fields.Materials[this]; }
            set { Fields.Materials[this] = value; }
        }

        [DisplayName("劳务明细"), NotMapped, MasterDetailRelation(foreignKey: "HeadId", IncludeColumns = "ManhourName,HeadStatus")]
        [ReadPermission(PermissionKeys.MaintenanceResponsible)]
        public List<MaintenanceManhoursRow> Manhours
        {
            get { return Fields.Manhours[this]; }
            set { Fields.Manhours[this] = value; }
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

        public MaintenanceRow()
            : base(Fields)
        {
        }

        public class RowFields : Kun.Administration.Entities.LoggingAllRowFields
        {
            public GuidField Id;
            public StringField BillNo;
            public Int32Field BillType;
            public Int32Field Status;
            public DateTimeField Date;
            public GuidField VendorId;
            public StringField Reporter;
            public DateTimeField ReportDate;
            public GuidField ReportCustomerId;
            public GuidField SettleCustomerId;
            public StringField Address;
            // public Int32Field Classify;
            public StringField Description;
            public StringField Content;
            
            public BooleanField ChangeDevice;
            public StringField ReporterComment;
            public DateTimeField ReporterConfirmDate;
            public StringField CustomerComment;
            public DateTimeField CustomerConfirmDate;
            public StringField Note;
            public Int32Field ResponsibleId;
            public Int64Field ApproverId;
            public DateTimeField ApproverDate; 
            public RowListField<MaintenanceMaterialsRow> Materials;
            public RowListField<MaintenanceManhoursRow> Manhours;
            
            public StringField VendorName;
            public StringField ReportCustomerName;
            public StringField SettleCustomerName;
            public StringField ResponsibleName;
            public StringField ApproverName;
            public DecimalField ServicerCost;


            public GuidField TypeId;
            public StringField TypeName;
            


        }
    }
}
