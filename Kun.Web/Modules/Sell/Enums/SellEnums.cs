using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Kun.Sell.Enums
{
    public class SellEnums
    {

        [EnumKey("SellEnums.Status")]
        public enum BillStatus
        {
            [Description("维护中")]
            Edit = 10,
            [Description("已拒绝")]
            Reject = 20,
            [Description("已提交")]
            Commited = 30,
            [Description("已审核")]
            Audited = 50,
            [Description("重新审核")]
            UnAudited = 60,
        }

        [EnumKey("SellEnums.SaleOrder")]
        public enum SaleOrderBillType
        {
            [Description("普通销售订单")]
            NormalSaleOrder = 1
        }
 

    }
}
