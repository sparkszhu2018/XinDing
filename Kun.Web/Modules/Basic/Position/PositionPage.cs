
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PositionRow))]
    public class PositionController : Controller
    {
        [Route("Basic/Position")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Position/PositionIndex.cshtml");
        }
    }
}