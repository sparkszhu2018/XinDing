
namespace Kun.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ReceiptItemRow))]
    public class ReceiptItemController : Controller
    {
        [Route("Finance/ReceiptItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Finance/ReceiptItem/ReceiptItemIndex.cshtml");
        }
    }
}