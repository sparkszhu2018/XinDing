
namespace Kun.Project.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BizItemRow))]
    public class BizItemController : Controller
    {
        [Route("Project/BizItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Project/BizItem/BizItemIndex.cshtml");
        }
    }
}