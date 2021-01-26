
using Serenity.Extensibility;
using System.ComponentModel;

namespace Kun.Ops
{
    [NestedPermissionKeys]
    [DisplayName("维保管理")]
    public class PermissionKeys
    {

        [Description("维保单维修")]
        public const string MaintenanceResponsible = "Ops:Maintenance:Responsible";
        [Description("维保单服务商费用")]
        public const string MaintenanceVendorCost = "Ops:Maintenance:VendorCost";
        [Description("维保单维审核")]
        public const string MaintenanceApprove = "Ops:Maintenance:Approve";
        [Description("维保单维反审核")]
        public const string MaintenanceUnApprove = "Ops:Maintenance:UnApprove";

    }
}
