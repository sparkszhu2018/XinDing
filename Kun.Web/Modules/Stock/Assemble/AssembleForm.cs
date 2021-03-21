
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

    [FormScript("Stock.Assemble")]
    [BasedOnRow(typeof(Entities.AssembleRow), CheckNames = true)]
    public class AssembleForm
    {

        [Category("基本信息")]
        [OneThirdWidth(UntilNext = true), LabelWidth(100, UntilNext = true)]
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

        [Category("成品信息")]
       
        public Guid ToMaterialId { get; set; } 
        public Guid UnitId { get; set; }

        public Decimal Qty { get; set; }
        [ReadOnly(true)]
        public Decimal BuyPrice { get; set; }
        [ReadOnly(true)]
        public Decimal BuyAmount { get; set; }
        public Guid WarehouseId { get; set; }

        public Guid PositionId { get; set; }

        public Guid LotId { get; set; } 

        [FullWidth]
        public String Note { get; set; }


        [Category("组件物料")]
        [FullWidth, AssembleItemEditor]
        public List<AssembleItemRow> Items { get; set; }








    }
}