
namespace Kun.Project.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ServiceBillRow))]
    public class ServiceBillController : Controller
    {
        [Route("Project/ServiceBill")]
        public ActionResult Index()
        {
            return View("~/Modules/Project/ServiceBill/ServiceBillIndex.cshtml");
        }
    }
}