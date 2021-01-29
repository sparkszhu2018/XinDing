
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PaymentItemRow))]
    public class PaymentItemController : Controller
    {
        [Route("Basic/PaymentItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/PaymentItem/PaymentItemIndex.cshtml");
        }
    }
}