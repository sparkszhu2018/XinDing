
namespace Kun.Ops.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MaintenanceRow))]
    public class MaintenanceController : Controller
    {
        [Route("Ops/Maintenance")]
        public ActionResult Index()
        {
            return View("~/Modules/Ops/Maintenance/MaintenanceIndex.cshtml");
        }
    }
}