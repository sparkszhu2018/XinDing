
namespace Kun.Sell.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sell.SaleOrder")]
    [BasedOnRow(typeof(Entities.SaleOrderRow), CheckNames = true)]
    public class SaleOrderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid Id { get; set; }
        [EditLink]
        public String BillNo { get; set; }
        public Int32 BillType { get; set; }
        public Int32 Status { get; set; }
        public DateTime Date { get; set; }
        public Guid CustomerId { get; set; }
        public Guid SettleCustomerId { get; set; }
        public String Note { get; set; }
        public Int64 ApproverId { get; set; }
        public DateTime ApproverDate { get; set; }
    }
}