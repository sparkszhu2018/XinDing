
namespace Kun.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CommonExpressionRow))]
    public class CommonExpressionController : Controller
    {
        [Route("Basic/CommonExpression")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/CommonExpression/CommonExpressionIndex.cshtml");
        }
    }
}