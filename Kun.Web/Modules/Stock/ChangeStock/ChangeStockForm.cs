
namespace Kun.Stock.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Kun.Administration.Entities;
    using Kun.Stock.Entities;

    [FormScript("Stock.ChangeStock")]
    [BasedOnRow(typeof(Entities.ChangeStockRow), CheckNames = true)]
    public class ChangeStockForm
    {
        [OneThirdWidth(UntilNext = true), LabelWidth(100, UntilNext = true)]
        [ReadOnly(true)]
        public String BillNo { get; set; }
        [LookupEditor(typeof(UserRow))]
        public Int64 InsertUserId { get; set; }
        [ReadOnly(true)]
        public DateTime InsertDate { get; set; }

        public Int32 Status { get; set; }
        [LookupEditor(typeof(UserRow))]
        public Int64 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }


        public DateTime Date { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }

        [FullWidth]
        public String Note { get; set; }



        [FullWidth, ChangeStockItemEditor]
        public List<ChangeStockItemRow> Items { get; set; }
    }
}