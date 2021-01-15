
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MaterialGroupRow))]
    public class MaterialGroupController : Controller
    {
        [Route("Basic/MaterialGroup")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/MaterialGroup/MaterialGroupIndex.cshtml");
        }
    }
}