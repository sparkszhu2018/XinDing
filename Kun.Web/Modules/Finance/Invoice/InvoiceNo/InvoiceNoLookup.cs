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
            TextField = InvoiceRow.Fields.InvoiceNo.Name;           
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = InvoiceRow.Fields;
            query.Select(fld.InvoiceNo).Distinct(true) 
                .Where(new Criteria(fld.IsActive) ==1);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            query.OrderBy(InvoiceRow.Fields.InvoiceNo);
        }
    }
}
