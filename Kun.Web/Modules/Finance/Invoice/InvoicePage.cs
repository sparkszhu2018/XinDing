
namespace Kun.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InvoiceRow))]
    public class InvoiceController : Controller
    {
        [Route("Finance/Invoice")]
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Invoice/InvoiceIndex.cshtml");
        }
    }
}