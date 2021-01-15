using Kun.Ops.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kun.Ops.Entities
{

    [LookupScript("Basic.MaintenanceTypeLookup")]
    public class MaintenanceTypeLookup : RowLookupScript<MaintenanceTypeRow>
    {
        public MaintenanceTypeLookup()
        {
            IdField = MaintenanceTypeRow.Fields.Id.Name;
            TextField = MaintenanceTypeRow.Fields.Name.Name;           
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = MaintenanceTypeRow.Fields;
            query.Select(fld.Id) 
                .Select(fld.Name)
                .Select(fld.Sort)
                .Where(new Criteria(fld.IsActive) ==1);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            query.OrderBy(MaintenanceTypeRow.Fields.Sort);
        }
    }
}
