
using Serenity.Extensibility;
using System.ComponentModel;

namespace Kun.Stock
{
    [NestedPermissionKeys]
    [DisplayName("库存管理")]
    public class PermissionKeys
    {  
        [Description("入库单审核")]
        public const string InStockApprove = "Stock:InStock:Approve";
        [Description("入库单反审核")]
        public const string InStockUnApprove = "Stock:InStock:UnApprove";
        [Description("移库单审核")]
        public const string ChangeStockApprove = "Stock:ChangeStock:Approve";
        [Description("移库单反审核")]
        public const string ChangeStockUnApprove = "Stock:ChangeStock:UnApprove";
        [Description("组装单审核")]
        public const string AssembleApprove = "Stock:Assemble:Approve";
        [Description("组装单反审核")]
        public const string AssembleUnApprove = "Stock:Assemble:UnApprove";

        [Description("其他出库单审核")]
        public const string OutStockApprove = "Stock:OutStock:Approve";
        [Description("其他出库单反审核")]
        public const string OutStockUnApprove = "Stock:OutStock:UnApprove";


    }
}
