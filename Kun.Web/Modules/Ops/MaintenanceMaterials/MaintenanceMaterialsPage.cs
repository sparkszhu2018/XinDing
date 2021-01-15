
namespace Kun.Ops.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MaintenanceMaterialsRow))]
    public class MaintenanceMaterialsController : Controller
    {
        [Route("Ops/MaintenanceMaterials")]
        public ActionResult Index()
        {
            return View("~/Modules/Ops/MaintenanceMaterials/MaintenanceMaterialsIndex.cshtml");
        }
    }
}