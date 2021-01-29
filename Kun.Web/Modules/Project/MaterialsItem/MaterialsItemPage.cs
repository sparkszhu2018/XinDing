
namespace Kun.Project.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MaterialsItemRow))]
    public class MaterialsItemController : Controller
    {
        [Route("Project/MaterialsItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Project/MaterialsItem/MaterialsItemIndex.cshtml");
        }
    }
}