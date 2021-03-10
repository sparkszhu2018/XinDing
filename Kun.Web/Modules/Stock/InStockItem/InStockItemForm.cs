
namespace Kun.Stock.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Stock.InStockItem")]
    [BasedOnRow(typeof(Entities.InStockItemRow), CheckNames = true)]
    public class InStockItemForm
    {
        [HalfWidth(UntilNext = true)]
        [LabelWidth(100, UntilNext = true)] 
        public Int32 Serial { get; set; }
        public Guid MaterialId { get; set; } 
       
        public Guid UnitId { get; set; }
        public String Specification { get; set; }
        //public Decimal DeliveryQty { get; set; }
        public Decimal ConfirmQty { get; set; }
        public Guid SupplierId { get; set; }
        public Int32 InvoiceType { get; set; }
        public Decimal BuyPrice { get; set; }
        public Decimal BuyAmount { get; set; }
        public Decimal SalePrice { get; set; }
        public Decimal SaleAmount { get; set; }
        public Guid LotId { get; set; }

        public Guid WarehouseId { get; set; }

        public Guid PositionId { get; set; }

        public String Applicant { get; set; }
    }
}