
namespace Kun.Stock.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stock.InStockItemEditorColumns")]
    [BasedOnRow(typeof(Entities.InStockItemRow), CheckNames = true)]
    public class InStockItemEditorColumns
    {
       
        [EditLink]
        public Int32 Serial { get; set; }
        [EditLink]
        public String MaterialCode { get; set; }
        public String MaterialName { get; set; }
        public String UnitName { get; set; }
        //public Decimal DeliveryQty { get; set; }
        public Decimal ConfirmQty { get; set; }
        public String SupplierName { get; set; }
        public String LotCode { get; set; }
        public String WarehouseName { get; set; }
        public String PositionName { get; set; }
        public String InvoiceType { get; set; }
        public String Specification { get; set; }
        public Decimal BuyPrice { get; set; }
        public Decimal BuyAmount { get; set; }
        public Decimal SalePrice { get; set; }
        public Decimal SaleAmount { get; set; }  
        public String ApplicantName { get; set; }
    }
}