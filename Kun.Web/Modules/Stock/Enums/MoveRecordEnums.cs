using Serenity.ComponentModel;
using System.ComponentModel;

namespace Kun.Stock.Enums
{
    public class MoveRecordEnums
    {
        [EnumKey("MoveRecordEnums.MoveType")]
        public enum MoveType
        {
            [Description("采购入库")]
            Purchase = 10, 
            [Description("销售出库")]
            Sale = 30,
            [Description("维保领料")]
            Maint = 31,
            [Description("其他出库")]
            OutStock = 35,
            [Description("移库")]
            ChangeStock = 50,
            [Description("项目领料")]
            ProjectOut = 60,

            [Description("组装入库")]
            AssembleIn = 70,
            [Description("组装出库")]
            AssembleOut = 71
        }

        [EnumKey("MoveRecordEnums.Status")]
        public enum  Status
        {
            [Description("正常")]
            Normal = 10, 
        }
 
    }
}
