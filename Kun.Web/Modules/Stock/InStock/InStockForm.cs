
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

    [FormScript("Stock.InStock")]
    [BasedOnRow(typeof(Entities.InStockRow), CheckNames = true)]
    public class InStockForm
    {
        [OneThirdWidth(UntilNext =true),LabelWidth(100,UntilNext =true)]
        public String BillNo { get; set; }
        public Int32 BillType { get; set; }
        public Int32 Status { get; set; }
        
        public DateTime Date { get; set; }
        public String Note { get; set; }

        [LookupEditor(typeof(UserRow))]
        public Int64 InsertUserId { get; set; }
        [ReadOnly(true)]
        public DateTime InsertDate { get; set; }


        [LookupEditor(typeof(UserRow))]
        public Int64 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }

        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }


        [FullWidth,InStockItemEditor]
        public List<InStockItemRow> Items { get; set; }
    }
}