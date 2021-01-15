
namespace Kun.Stock.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MoveRecordRow))]
    public class MoveRecordController : Controller
    {
        [Route("Stock/MoveRecord")]
        public ActionResult Index()
        {
            return View("~/Modules/Stock/MoveRecord/MoveRecordIndex.cshtml");
        }
    }
}