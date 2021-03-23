
namespace Kun.Stock.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Kun.Stock.Entities;
    using Kun.Administration.Entities;

    [FormScript("Stock.OutStock")]
    [BasedOnRow(typeof(Entities.OutStockRow), CheckNames = true)]
    public class OutStockForm
    {
        [Category("基本信息")]
        [OneThirdWidth(UntilNext = true), LabelWidth(100, UntilNext = true)]
        public String BillNo { get; set; } 
        public Int32 Status { get; set; }
        public DateTime Date { get; set; }
         
        [ReadOnly(true)]
        public DateTime InsertDate { get; set; } 
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }  
        [FullWidth]
        public String Note { get; set; }

        [Category("明细信息")]
        [FullWidth, OutStockItemEditor]
        public List<OutStockItemRow> Materials { get; set; }
    }
}