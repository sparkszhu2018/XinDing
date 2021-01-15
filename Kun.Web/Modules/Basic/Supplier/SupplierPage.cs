
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SupplierRow))]
    public class SupplierController : Controller
    {
        [Route("Basic/Supplier")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Supplier/SupplierIndex.cshtml");
        }
    }
}