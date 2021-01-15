
namespace Kun.Ops.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MaintenanceTypeRow))]
    public class MaintenanceTypeController : Controller
    {
        [Route("Ops/MaintenanceType")]
        public ActionResult Index()
        {
            return View("~/Modules/Ops/MaintenanceType/MaintenanceTypeIndex.cshtml");
        }
    }
}