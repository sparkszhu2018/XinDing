
namespace Kun.Project.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BizBillRow))]
    public class BizBillController : Controller
    {
        [Route("Project/BizBill")]
        public ActionResult Index()
        {
            return View("~/Modules/Project/BizBill/BizBillIndex.cshtml");
        }
    }
}