
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.LotRow))]
    public class LotController : Controller
    {
        [Route("Basic/Lot")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Lot/LotIndex.cshtml");
        }
    }
}