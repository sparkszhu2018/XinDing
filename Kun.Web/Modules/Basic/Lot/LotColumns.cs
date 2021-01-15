
namespace Kun.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Lot")]
    [BasedOnRow(typeof(Entities.LotRow), CheckNames = true)]
    public class LotColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid Id { get; set; }
        [EditLink]
        public String Code { get; set; }
        public Guid MaterialId { get; set; }
    }
}