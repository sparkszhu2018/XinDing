using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kun.Finance.Entities
{

    [LookupScript("Finance.InvoiceNoLookup")]
    public class InvoiceNoLookup : RowLookupScript<InvoiceRow>
    {
        public InvoiceNoLookup()
        {
            IdField = InvoiceRow.Fields.InvoiceNo.Name;
            TextField = InvoiceRow.Fields.InvoiceNoWthAmount.Name;           
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = InvoiceRow.Fields;
            query.Select(fld.InvoiceNo).Select(fld.InvoiceNoWthAmount)
                .Where(new Criteria(fld.IsActive) == 1 && new Criteria(fld.UnReceiptAmount) <= 0);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            query.OrderBy(InvoiceRow.Fields.InvoiceNo);
        }
    }
}
