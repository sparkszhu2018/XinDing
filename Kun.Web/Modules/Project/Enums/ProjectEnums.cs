using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Kun.Project.Enums
{
    public class ProjectEnums
    {

        [EnumKey("ProjectEnums.Status")]
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

        //[EnumKey("OpsEnums.MaintenanceBillType")]
        //public enum MaintenanceBillType
        //{
        //    [Description("普通维保单")]
        //    NormalMaintenance = 1
        //}

         

    }
}
