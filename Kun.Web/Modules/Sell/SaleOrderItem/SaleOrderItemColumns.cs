
namespace Kun.Sell.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sell.SaleOrderItem")]
    [BasedOnRow(typeof(Entities.SaleOrderItemRow), CheckNames = true)]
    public class SaleOrderItemColumns
    {
        public StringField BillNo { get; set; }
        [DateFormatter(DisplayFormat ="yyyy-MM-dd") ]
        public DateTime HeadDate { get; set; }
        public String  HeadStatus { get; set; }
        public String CustomerName { get; set; }
        
        public Int32Field Serial { get; set; }
        [EditLink]
        public String MaterialCode { get; set; }
        public String MaterialName { get; set; }
        public String UnitName { get; set; }
        public Decimal Qty { get; set; }
        public String LotCode { get; set; }
        public String WarehouseName { get; set; }
        public String PositionName { get; set; }
        public Decimal SalePrice { get; set; }
        public Decimal SaleAmount { get; set; }
        public String Specification { get; set; } 
        public Decimal BuyPrice { get; set; }
        public Decimal BuyAmount { get; set; }
        public Decimal InvoicedAmount { get; set; }
        public Decimal InvoicedQty { get; set; }  
        
        public Guid? CustomerId { get; set; }

    }
}