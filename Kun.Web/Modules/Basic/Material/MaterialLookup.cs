using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kun.Basic.Entities
{

    [LookupScript("Basic.MaterialLookup")]
    public class MaterialLookup : RowLookupScript<MaterialRow>
    {
        public MaterialLookup()
        {
            IdField = MaterialRow.Fields.Id.Name;
            TextField = MaterialRow.Fields.CodeName.Name;           
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = MaterialRow.Fields;
            query.Select(fld.Id)
                .Select(fld.Code)
                .Select(fld.UnitId)
                .Select(fld.Name)
                .Select(fld.CodeName)
                .Where(new Criteria(fld.IsActive) ==1);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            query.OrderBy(MaterialRow.Fields.Code);
        }
    }
}
