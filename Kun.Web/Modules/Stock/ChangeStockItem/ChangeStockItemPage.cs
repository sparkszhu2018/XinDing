
namespace Kun.Stock.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ChangeStockItemRow))]
    public class ChangeStockItemController : Controller
    {
        [Route("Stock/ChangeStockItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Stock/ChangeStockItem/ChangeStockItemIndex.cshtml");
        }
    }
}