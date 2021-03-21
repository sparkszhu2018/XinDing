
namespace Kun.Ops.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ops.MaintenanceCheckColumns")]
    [BasedOnRow(typeof(Entities.MaintenanceRow), CheckNames = true)]
    public class MaintenanceCheckColumns
    { 
        public String BillNo { get; set; }
        public Int32 BillType { get; set; }
        public Int32 Status { get; set; }

        [DisplayFormat("yyyy-MM-dd")]
        public DateTime Date { get; set; }

        public String VendorName { get; set; }
        public String Reporter { get; set; }
        public String ReporterPhone { get; set; }

        public DateTime ReportDate { get; set; }
        public String ReportCustomerName { get; set; }
        public String SettleCustomerName { get; set; }
        public String TypeName { get; set; }
        public String Description { get; set; }
        public String Content { get; set; }
        public Boolean ChangeDevice { get; set; } 
        public String Note { get; set; } 
        public Decimal TotalCost { get; set; } 
        public Decimal TotalSales { get; set; }
        public Decimal  MaterialsAmount { get; set; }
        public Decimal  ManAmount { get; set; }

        public Decimal InvoicedAmount { get; set; }  
        public Decimal UnInvoicedAmount { get; set; }
        public String MateiralDetail { get; set; } 
         
        public String ResponsibleName { get; set; }
         

    }
}