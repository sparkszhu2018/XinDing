﻿
namespace Kun.Project.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Project.ServiceBill")]
    [BasedOnRow(typeof(Entities.ServiceBillRow), CheckNames = true)]
    public class ServiceBillColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid Id { get; set; }
        [EditLink]
        public String BillNo { get; set; }
        public Int32 BillType { get; set; }
        public Int32 Status { get; set; }
        public DateTime Date { get; set; }
        public Guid ProjectId { get; set; }
        public String Note { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }
    }
}