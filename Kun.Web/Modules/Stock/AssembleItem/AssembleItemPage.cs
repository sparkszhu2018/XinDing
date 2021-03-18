
namespace Kun.Stock.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AssembleItemRow))]
    public class AssembleItemController : Controller
    {
        [Route("Stock/AssembleItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Stock/AssembleItem/AssembleItemIndex.cshtml");
        }
    }
}