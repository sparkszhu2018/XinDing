
namespace Kun.Stock.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OutStockItemRow))]
    public class OutStockItemController : Controller
    {
        [Route("Stock/OutStockItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Stock/OutStockItem/OutStockItemIndex.cshtml");
        }
    }
}