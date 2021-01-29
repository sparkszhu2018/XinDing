
namespace Kun.Project.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Project.ProjectInfo")]
    [BasedOnRow(typeof(Entities.ProjectInfoRow), CheckNames = true)]
    public class ProjectInfoForm
    {
        public String BillNo { get; set; }
        public Int32 BillType { get; set; }
        public Int32 Status { get; set; }
        public String Name { get; set; }
        public Decimal BudgetAmount { get; set; }
        public Decimal ActualAmount { get; set; }
        public DateTime Date { get; set; }
        public Guid CustomerId { get; set; }
        public String Contact { get; set; }
        public String PhoneNo { get; set; }
        public String Address { get; set; }
        public DateTime RetentionDueDate { get; set; }
        public Guid Payment { get; set; }
        public String Note { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }
    }
}