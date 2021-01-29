
namespace Kun.Project.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ServiceItemRow))]
    public class ServiceItemController : Controller
    {
        [Route("Project/ServiceItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Project/ServiceItem/ServiceItemIndex.cshtml");
        }
    }
}