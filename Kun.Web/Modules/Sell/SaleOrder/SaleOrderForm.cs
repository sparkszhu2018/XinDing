
namespace Kun.Sell.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Kun.Sell.Entities;

    [FormScript("Sell.SaleOrder")]
    [BasedOnRow(typeof(Entities.SaleOrderRow), CheckNames = true)]
    public class SaleOrderForm
    {
        [Category("基本信息")]
        [OneThirdWidth(UntilNext = true), LabelWidth(100, UntilNext = true)]
        public String BillNo { get; set; }
        public Int32 BillType { get; set; }
        public Int32 Status { get; set; }
        public DateTime Date { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }
        [TwoThirdWidth]
        public Int64 CustomerId { get; set; }
        [Hidden]
        public Int64 SettleCustomerId { get; set; }
        [OneThirdWidth]
        public String Note { get; set; }

        [Category("明细信息")] 
        [FullWidth, SaleOrderItemEditor]
        public List<SaleOrderItemRow> Materials { get; set; }
    }
}