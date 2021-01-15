
namespace Kun.Stock.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InStockRow))]
    public class InStockController : Controller
    {
        [Route("Stock/InStock")]
        public ActionResult Index()
        {
            return View("~/Modules/Stock/InStock/InStockIndex.cshtml");
        }
    }
}