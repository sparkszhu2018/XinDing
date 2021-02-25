﻿
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
        public DateTimeField HeadDate { get; set; }
        public StringField  HeadStatus { get; set; }
        public StringField CustomerName { get; set; }
        
        public Int32Field Serial { get; set; }
        [EditLink]
        public StringField MaterialCode { get; set; }
        public StringField MaterialName { get; set; }
        public StringField UnitName { get; set; }
        public Decimal Qty { get; set; }
        public StringField LotCode { get; set; }
        public StringField WarehouseName { get; set; }
        public StringField PositionName { get; set; }
        public Decimal SalePrice { get; set; }
        public Decimal SaleAmount { get; set; }
        public String Specification { get; set; } 
        public Decimal BuyPrice { get; set; }
        public Decimal BuyAmount { get; set; }
        public Decimal InvoicedAmount { get; set; }
        public Decimal InvoicedQty { get; set; } 

    }
}