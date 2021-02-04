
namespace Kun.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InvoiceItemRow))]
    public class InvoiceItemController : Controller
    {
        [Route("Finance/InvoiceItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Finance/InvoiceItem/InvoiceItemIndex.cshtml");
        }
    }
}