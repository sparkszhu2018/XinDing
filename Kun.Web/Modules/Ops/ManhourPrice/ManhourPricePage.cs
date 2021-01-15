
namespace Kun.Ops.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ManhourPriceRow))]
    public class ManhourPriceController : Controller
    {
        [Route("Ops/ManhourPrice")]
        public ActionResult Index()
        {
            return View("~/Modules/Ops/ManhourPrice/ManhourPriceIndex.cshtml");
        }
    }
}