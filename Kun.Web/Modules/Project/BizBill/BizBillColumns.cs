
namespace Kun.Project.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Project.BizBill")]
    [BasedOnRow(typeof(Entities.BizBillRow), CheckNames = true)]
    public class BizBillColumns
    { 
        [EditLink]
        public String BillNo { get; set; } 
        public Int32 Status { get; set; }
        public DateTime Date { get; set; }
        public String ProjectName { get; set; }
        public String Note { get; set; }

        public String InsertUserDisplayName { get; set; }
        public DateTime? InsertDate { get; set; }
        public String ApproverName { get; set; }
        public DateTime? ApproverDate { get; set; }
    }
}