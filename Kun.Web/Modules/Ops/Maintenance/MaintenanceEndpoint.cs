
namespace Kun.Ops.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.MaintenanceRepository;
    using MyRow = Entities.MaintenanceRow;
    using System;
    using static Kun.Ops.Enums.OpsEnums;
    using Serenity.Reporting;
    using Serenity.Web;

    [Route("Services/Ops/Maintenance/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class MaintenanceController : ServiceEndpoint
    {
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Commit(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().ChangeStatus(uow, new Guid(request.EntityId.ToString()), BillStatus.Commited);
        }
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Audit(IUnitOfWork uow, SaveRequest<MyRow> request)
        { 
            return new MyRepository().ChangeStatus(uow, new Guid(request.EntityId.ToString()), BillStatus.Audited);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Reject(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().ChangeStatus(uow, new Guid(request.EntityId.ToString()), BillStatus.Reject);
        }
        public SaveResponse UnAudit(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().ChangeStatus(uow, new Guid(request.EntityId.ToString()), BillStatus.UnAudited);
        }

      
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(ListRequest request)
        {
            var connection = SqlConnections.NewFor<MyRow>();
            var data = new MyRepository().List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.MaintenanceColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "维保单_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
