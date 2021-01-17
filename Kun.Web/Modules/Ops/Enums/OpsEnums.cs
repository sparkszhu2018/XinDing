using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Kun.Ops.Enums
{
    public class OpsEnums
    {

        [EnumKey("OpsEnums.Status")]
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
        }

        [EnumKey("OpsEnums.MaintenanceBillType")]
        public enum MaintenanceBillType
        {
            [Description("普通维保单")]
            NormalMaintenance = 1
        }

        [EnumKey("OpsEnums.MaintClassify")]

        public enum MaintClassify
        {
            [Description("监控")]
            WJ = 10,
            [Description("网络")]
            WL = 20,
            [Description("打印机")]
            DYJ = 30,
            [Description("电脑")]
            DN = 40,
            [Description("多媒体")]
            DMT = 50,
            [Description("运维保障")]
            YWBZ = 60,
            [Description("其它")]
            QT = 100,
        }

    }
}
