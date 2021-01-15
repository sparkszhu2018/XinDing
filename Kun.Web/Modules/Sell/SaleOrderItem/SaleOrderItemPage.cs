
namespace Kun.Sell.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SaleOrderItemRow))]
    public class SaleOrderItemController : Controller
    {
        [Route("Sell/SaleOrderItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Sell/SaleOrderItem/SaleOrderItemIndex.cshtml");
        }
    }
}