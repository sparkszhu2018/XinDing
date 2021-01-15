using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kun.Basic.Entities
{

    [LookupScript("Basic.UnitLookup")]
    public class UnitLookup : RowLookupScript<UnitRow>
    {
        public UnitLookup()
        {
            IdField = UnitRow.Fields.Id.Name;
            TextField = UnitRow.Fields.Name.Name;           
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = UnitRow.Fields;
            query.Select(fld.Id)
                .Select(fld.Code) 
                .Select(fld.Name)
                .Select(fld.Decim)
                .Where(new Criteria(fld.IsActive) ==1);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            query.OrderBy(UnitRow.Fields.Code);
        }
    }
}
