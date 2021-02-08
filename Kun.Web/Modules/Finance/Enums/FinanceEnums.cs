using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Kun.Finance.Enums
{
    public class FinanceEnums
    {

        [EnumKey("FinanceEnums.Status")]
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

        [EnumKey("FinanceEnums.InvoiceBillType")]
        public enum InvoiceBillType
        {
            [Description("销售订单发票")]
            SaleOrder = 10,
            [Description("维保单发票")]
            Maintenance = 20,
            [Description("项目发票")]
            Project = 30,
        }

        [EnumKey("FinanceEnums.InvoiceItemKind")]
        public enum InvoiceItemKind
        {
            [Description("销售订单")]
            SaleOrderItem = 10,
            [Description("维保")]
            Maintenance = 20, 
            //[Description("维保劳务")]
            //MaintenanceManhours = 21,
            [Description("项目")]
            Project = 30,
        } 

    }
}
