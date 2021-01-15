
namespace Kun.Stock.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InStockItemRow))]
    public class InStockItemController : Controller
    {
        [Route("Stock/InStockItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Stock/InStockItem/InStockItemIndex.cshtml");
        }
    }
}