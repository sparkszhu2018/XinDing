
namespace Kun.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ReceiptRow))]
    public class ReceiptController : Controller
    {
        [Route("Finance/Receipt")]
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Receipt/ReceiptIndex.cshtml");
        }
    }
}