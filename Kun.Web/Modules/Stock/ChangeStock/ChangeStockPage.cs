
namespace Kun.Stock.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ChangeStockRow))]
    public class ChangeStockController : Controller
    {
        [Route("Stock/ChangeStock")]
        public ActionResult Index()
        {
            return View("~/Modules/Stock/ChangeStock/ChangeStockIndex.cshtml");
        }
    }
}