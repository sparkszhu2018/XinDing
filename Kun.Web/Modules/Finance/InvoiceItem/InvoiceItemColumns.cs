﻿
namespace Kun.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.InvoiceItem")]
    [BasedOnRow(typeof(Entities.InvoiceItemRow), CheckNames = true)]
    public class InvoiceItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid Id { get; set; }
        public Guid ProjectId { get; set; }
        public Guid HeadId { get; set; }
        public Int32 Serial { get; set; }
        public Int32 SourceDocumentType { get; set; }
        public Guid SourceDocumentId { get; set; }
        [EditLink]
        public String SourceDocumentNo { get; set; }
        public Guid SourceItemId { get; set; }
        public Int32 SourceItemSerial { get; set; }
        public String Name { get; set; }
        public String UnitName { get; set; }
        public Decimal Price { get; set; }
        public Decimal Qty { get; set; }
        public Decimal Amount { get; set; }
        public Decimal InvoiceAmount { get; set; }
        public Decimal TaxRate { get; set; }
        public String InvoiceNo { get; set; }
        public String Note { get; set; }
    }
}