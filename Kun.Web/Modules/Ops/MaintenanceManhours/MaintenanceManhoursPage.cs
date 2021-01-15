
namespace Kun.Ops.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MaintenanceManhoursRow))]
    public class MaintenanceManhoursController : Controller
    {
        [Route("Ops/MaintenanceManhours")]
        public ActionResult Index()
        {
            return View("~/Modules/Ops/MaintenanceManhours/MaintenanceManhoursIndex.cshtml");
        }
    }
}