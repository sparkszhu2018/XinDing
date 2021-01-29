
namespace Kun.Project.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MaterialsBillRow))]
    public class MaterialsBillController : Controller
    {
        [Route("Project/MaterialsBill")]
        public ActionResult Index()
        {
            return View("~/Modules/Project/MaterialsBill/MaterialsBillIndex.cshtml");
        }
    }
}