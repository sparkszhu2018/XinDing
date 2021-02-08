
namespace Kun.Ops.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ops.Maintenance")]
    [BasedOnRow(typeof(Entities.MaintenanceRow), CheckNames = true)]
    public class MaintenanceColumns
    { 
        [EditLink]
        public String BillNo { get; set; }
        public Int32 BillType { get; set; }
        public Int32 Status { get; set; }
        public DateTime Date { get; set; }

        public String VendorName { get; set; }
        public String Reporter { get; set; }
        public String ReporterPhone { get; set; } 
        
        public DateTime ReportDate { get; set; } 
        public String ReportCustomerName { get; set; }
        public String SettleCustomerName { get; set; } 
        public String TypeName { get; set; } 
        public String Description { get; set; }
        public Boolean ChangeDevice { get; set; }
        //public String ReporterComment { get; set; }
        //public DateTime ReporterConfirmDate { get; set; }
        //public String CustomerComment { get; set; }
        //public DateTime CustomerConfirmDate { get; set; }
        public String Note { get; set; }
        public Decimal TotalCost { get; set; }
        
        public String ResponsibleName { get; set; }
        public String ApproverName { get; set; }
        public DateTime ApproverDate { get; set; }


         
    }
}