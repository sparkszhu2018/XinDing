using Serenity.ComponentModel;
using System.ComponentModel;

namespace Kun.Stock.Enums
{
    public class StockEnums
    {
        [EnumKey("StockEnums.InStockBillType")]
        public enum InStockBillType
        {
            [Description("采购入库单")]
            PuchaseInstock = 1,
            [Description("其他入库单")]
            OtherInStock = 9
        }


        [EnumKey("StockEnums.Status")]
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

        [EnumKey("InStockEnums.InvoiceType")]

        public enum InvoiceType
        {
            [Description("专票")]
            ZP = 10,
            [Description("普票")]
            PP = 20,
            [Description("收据")]
            SJ = 30,
            [Description("无")]
            WU = 0,
        } 

    }
}
