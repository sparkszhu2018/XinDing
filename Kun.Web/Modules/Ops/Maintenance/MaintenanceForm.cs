
namespace Kun.Ops.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Kun.Ops.Entities;

    [FormScript("Ops.Maintenance")]
    [BasedOnRow(typeof(Entities.MaintenanceRow), CheckNames = true)]
    public class MaintenanceForm
    {
        [Category("基本信息")]
        [OneThirdWidth(UntilNext = true), LabelWidth(100, UntilNext = true)]
        public String BillNo { get; set; }
        public Int32 BillType { get; set; }
        public Int32 Status { get; set; }
        public DateTime Date { get; set; } 
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }

        [Category("业务信息")]
        public Guid VendorId { get; set; }
        public String Reporter { get; set; }
        public String ReporterPhone { get; set; }
        public DateTime ReportDate { get; set; }
        public Guid ReportCustomerId { get; set; }
        public Guid SettleCustomerId { get; set; } 

        public GuidField TypeId { get; set; }
        [TwoThirdWidth]
        public String Address { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Description { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Content { get; set; }
        [OneThirdWidth]
        public Guid CommonExpression { get; set; } 

        [Category("用料信息")] 
        public Boolean ChangeDevice { get; set; }

        [FullWidth, MaintenanceMaterialsEditor] 
        public List<MaintenanceMaterialsRow> Materials { get; set; }

        [Category("劳务费")]
        [FullWidth, MaintenanceManhoursEditor]
        public List<MaintenanceManhoursRow> Manhours { get; set; }
        [OneThirdWidth]
        public Decimal ServicerCost { get; set; }

        [Category("其他信息")]
        [TwoThirdWidth]
        public String Note { get; set; }

        [OneThirdWidth]
        public Int32 ResponsibleId { get; set; } 

    }
}