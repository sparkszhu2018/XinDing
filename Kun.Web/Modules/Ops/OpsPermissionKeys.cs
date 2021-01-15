
using Serenity.Extensibility;
using System.ComponentModel;

namespace Kun.Ops
{
    [NestedPermissionKeys]
    [DisplayName("保养维保")]
    public class PermissionKeys
    {

        [Description("维保单维修权限")]
        public const string MaintenanceResponsible = "Ops:Maintenance:Responsible";
        [Description("维保单维审核权限")]
        public const string MaintenanceApprove = "Ops:Maintenance:Approve";

    }
}
