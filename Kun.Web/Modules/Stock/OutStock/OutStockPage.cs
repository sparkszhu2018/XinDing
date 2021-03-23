
namespace Kun.Stock.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OutStockRow))]
    public class OutStockController : Controller
    {
        [Route("Stock/OutStock")]
        public ActionResult Index()
        {
            return View("~/Modules/Stock/OutStock/OutStockIndex.cshtml");
        }
    }
}