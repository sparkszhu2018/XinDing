
namespace Kun.Sys.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DocumentCodeConfigRow))]
    public class DocumentCodeConfigController : Controller
    {
        [Route("Sys/DocumentCodeConfig")]
        public ActionResult Index()
        {
            return View("~/Modules/Sys/DocumentCodeConfig/DocumentCodeConfigIndex.cshtml");
        }
    }
}