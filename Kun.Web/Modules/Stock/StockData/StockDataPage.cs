
namespace Kun.Stock.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StockDataRow))]
    public class StockDataController : Controller
    {
        [Route("Stock/StockData")]
        public ActionResult Index()
        {
            return View("~/Modules/Stock/StockData/StockDataIndex.cshtml");
        }
    }
}