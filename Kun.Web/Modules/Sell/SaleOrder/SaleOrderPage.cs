
namespace Kun.Sell.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SaleOrderRow))]
    public class SaleOrderController : Controller
    {
        [Route("Sell/SaleOrder")]
        public ActionResult Index()
        {
            return View("~/Modules/Sell/SaleOrder/SaleOrderIndex.cshtml");
        }
    }
}