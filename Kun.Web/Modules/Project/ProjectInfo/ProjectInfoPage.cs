
namespace Kun.Project.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProjectInfoRow))]
    public class ProjectInfoController : Controller
    {
        [Route("Project/ProjectInfo")]
        public ActionResult Index()
        {
            return View("~/Modules/Project/ProjectInfo/ProjectInfoIndex.cshtml");
        }
    }
}