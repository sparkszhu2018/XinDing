
namespace Kun.Project.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Kun.Administration.Entities;
    using Kun.Project.Entities;

    [FormScript("Project.ProjectInfo")]
    [BasedOnRow(typeof(Entities.ProjectInfoRow), CheckNames = true)]
    public class ProjectInfoForm
    {
        [Category("基本信息")]
        [OneThirdWidth(UntilNext = true), LabelWidth(100, UntilNext = true)]
        public String BillNo { get; set; }
        public DateTime Date { get; set; } 
        public Boolean IsClosed { get; set; }
        [LookupEditor(typeof(UserRow))]
        public Int64 InsertUserId { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }

        [Category("业务信息")]
        public String Name { get; set; }
        public Decimal BudgetAmount { get; set; }
        public Decimal ActualAmount { get; set; }

        public Guid CustomerId { get; set; }
        public String Contact { get; set; }
        public String PhoneNo { get; set; } 

        public Guid Payment { get; set; }
        [TwoThirdWidth(UntilNext = true)]
        public String Address { get; set; } 
        [OneThirdWidth(UntilNext = true)]
        public DateTime RetentionDueDate { get; set; }
        [TwoThirdWidth(UntilNext = true)]
        public String Note { get; set; }

        [Category("用料明细")] 
        [FullWidth, MaterialsItemViewEditor] 
        public List<MaterialsItemRow> Materials { get; set; }

        [Category("商务明细")]
        [FullWidth, BizItemViewEditor]
        public List<BizItemRow> BizItems { get; set; }

        [Category("服务明细")]
        [FullWidth, ServiceItemViewEditor]
        public List<ServiceItemRow> ServiceItems { get; set; }
    }
}