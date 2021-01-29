
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BizTypeRow))]
    public class BizTypeController : Controller
    {
        [Route("Basic/BizType")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/BizType/BizTypeIndex.cshtml");
        }
    }
}