
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomerRow))]
    public class CustomerController : Controller
    {
        [Route("Basic/Customer")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Customer/CustomerIndex.cshtml");
        }
    }
}