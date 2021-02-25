
namespace Kun.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.Receipt")]
    [BasedOnRow(typeof(Entities.ReceiptRow), CheckNames = true)]
    public class ReceiptColumns
    { 
        [EditLink]
        public String BillNo { get; set; }
        public DateTime Date { get; set; } 
        public Int32 Status { get; set; }
        public String Note { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }
    }
}