
namespace Kun.Stock.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AssembleRow))]
    public class AssembleController : Controller
    {
        [Route("Stock/Assemble")]
        public ActionResult Index()
        {
            return View("~/Modules/Stock/Assemble/AssembleIndex.cshtml");
        }
    }
}