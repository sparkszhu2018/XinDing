
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.VendorRow))]
    public class VendorController : Controller
    {
        [Route("Basic/Vendor")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Vendor/VendorIndex.cshtml");
        }
    }
}