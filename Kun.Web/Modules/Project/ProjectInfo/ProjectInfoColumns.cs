
namespace Kun.Project.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Project.ProjectInfo")]
    [BasedOnRow(typeof(Entities.ProjectInfoRow), CheckNames = true)]
    public class ProjectInfoColumns
    { 
        [EditLink]
        public String BillNo { get; set; }
        public DateTime Date { get; set; }
        public Int32 Status { get; set; }
        public String Name { get; set; }
        public Decimal BudgetAmount { get; set; }
        public Decimal ActualAmount { get; set; } 
        public String CustomerName { get; set; }
        public String Contact { get; set; }
        public String PhoneNo { get; set; }
        public String Address { get; set; }

        public Decimal InvoicedAmount { get; set; }

        public Boolean  IsClosed { get; set; }
        public String InsertUserName { get; set; }
        public DateTime? InsertDate { get; set; }
        public String ApproverName { get; set; }
        public DateTime? ApproverDate { get; set; }

    }
}