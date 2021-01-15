
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.UnitRow))]
    public class UnitController : Controller
    {
        [Route("Basic/Unit")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Unit/UnitIndex.cshtml");
        }
    }
}