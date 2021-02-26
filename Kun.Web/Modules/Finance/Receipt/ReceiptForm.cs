
namespace Kun.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Kun.Administration.Entities;
    using Kun.Finance.Entities;

    [FormScript("Finance.Receipt")]
    [BasedOnRow(typeof(Entities.ReceiptRow), CheckNames = true)]
    public class ReceiptForm
    {
        [Category("基本信息")]
        [OneThirdWidth(UntilNext = true), LabelWidth(100, UntilNext = true)]
        public String BillNo { get; set; }
        public Int32 Status { get; set; }
        public DateTime Date { get; set; }

        [LookupEditor(typeof(UserRow))]
        public Int64 InsertUserId { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }

        [Category("业务信息")] 
        [FullWidth(UntilNext = true)]
        public String Note { get; set; }

        [Category("明细信息")]
        [FullWidth, ReceiptItemEditor]
        public List<ReceiptItemRow> Items { get; set; }


    }
}