
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CompanyRow))]
    public class CompanyController : Controller
    {
        [Route("Basic/Company")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Company/CompanyIndex.cshtml");
        }
    }
}