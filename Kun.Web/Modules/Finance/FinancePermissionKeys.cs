
using Serenity.Extensibility;
using System.ComponentModel;

namespace Kun.Finance
{
    [NestedPermissionKeys]
    [DisplayName("财务管理")]
    public class PermissionKeys
    {
        [Description("发票审核")]
        public const string FinanceInvoiceApprove = "Finance:Invoice:Approve";
        [Description("发票反审核")]
        public const string FinanceInvoiceUnApprove = "Finance:Invoice:UnApprove";

        [Description("回款单审核")]
        public const string FinanceReceiptApprove = "Finance:Receipt:Approve";
        [Description("回款单反审核")]
        public const string FinanceReceiptUnApprove = "Finance:Receipt:UnApprove";

    }
}
