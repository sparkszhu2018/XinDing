
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MaterialRow))]
    public class MaterialController : Controller
    {
        [Route("Basic/Material")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Material/MaterialIndex.cshtml");
        }
    }
}