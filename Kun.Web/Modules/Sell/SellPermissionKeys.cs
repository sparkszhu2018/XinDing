
using Serenity.Extensibility;
using System.ComponentModel;

namespace Kun.Sell
{
    [NestedPermissionKeys]
    [DisplayName("销售管理")]
    public class PermissionKeys
    {  
        [Description("销售订单审核")]
        public const string SaleOrderApprove = "Sell:SaleOrder:Approve";
        [Description("销售订单反审核")]
        public const string SaleOrderUnApprove = "Sell:SaleOrder:UnApprove";

    }
}
