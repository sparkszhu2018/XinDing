
namespace Kun.Administration.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DataAuditLogRow))]
    public class DataAuditLogController : Controller
    {
        [Route("Administration/DataAuditLog")]
        public ActionResult Index()
        {

            return View("~/Modules/Administration/DataAuditLog/DataAuditLogIndex.cshtml");
        }
    }
}
