
using Serenity.Extensibility;
using System.ComponentModel;

namespace Kun.Project
{
    [NestedPermissionKeys]
    [DisplayName("项目管理")]
    public class PermissionKeys
    {

        [Description("项目用料单审核")]
        public const string MaterialsBillApprove = "Project:MaterialsBill:Approve";
        [Description("项目用料单反审核")]
        public const string MaterialsBillUnApprove = "Project:MaterialsBill:UnApprove";

        [Description("项目服务费审核")]
        public const string ServiceBillApprove = "Project:ServiceBill:Approve";
        [Description("项目服务费反审核")]
        public const string ServiceBillUnApprove = "Project:ServiceBill:UnApprove";

        [Description("项目商务费审核")]
        public const string BizBillApprove = "Project:BizBill:Approve";
        [Description("项目商务费反审核")]
        public const string BizBillUnApprove = "Project:BizBill:UnApprove";

    }
}
