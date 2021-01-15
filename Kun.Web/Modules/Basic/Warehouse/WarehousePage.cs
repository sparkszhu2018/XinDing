
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.WarehouseRow))]
    public class WarehouseController : Controller
    {
        [Route("Basic/Warehouse")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Warehouse/WarehouseIndex.cshtml");
        }
    }
}