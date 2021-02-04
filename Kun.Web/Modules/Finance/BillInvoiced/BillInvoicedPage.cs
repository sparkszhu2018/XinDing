
namespace Kun.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BillInvoicedRow))]
    public class BillInvoicedController : Controller
    {
        [Route("Finance/BillInvoiced")]
        public ActionResult Index()
        {
            return View("~/Modules/Finance/BillInvoiced/BillInvoicedIndex.cshtml");
        }
    }
}