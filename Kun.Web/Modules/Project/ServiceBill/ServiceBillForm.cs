
namespace Kun.Project.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Kun.Project.Entities;
    using Kun.Administration.Entities;

    [FormScript("Project.ServiceBill")]
    [BasedOnRow(typeof(Entities.ServiceBillRow), CheckNames = true)]
    public class ServiceBillForm
    {
        [Category("基本信息")]
        [OneThirdWidth(UntilNext = true), LabelWidth(100, UntilNext = true)]
        public String BillNo { get; set; }
        public Int32 Status { get; set; }
        public DateTime Date { get; set; }

        [LookupEditor(typeof(UserRow))]
        public Int64 InsertUserId { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }


        public Guid ProjectId { get; set; }
        [TwoThirdWidth(UntilNext = true)]
        public String Note { get; set; }

        [Category("费用明细")]

        [FullWidth,ServiceItemEditor]
        public List<ServiceItemRow> Items { get; set; }
    }
}