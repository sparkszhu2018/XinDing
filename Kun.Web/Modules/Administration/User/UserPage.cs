
namespace Kun.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using StackExchange.Exceptional;

    [PageAuthorize(typeof(Entities.UserRow))]
    public class UserController : Controller
    {
        [Route("Administration/User")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.User.UserIndex);
        }

        [Route("Administration/ExceptionLog/{*pathInfo}"), IgnoreAntiforgeryToken]
        public async Task ExceptionLog()
        {
            await ExceptionalMiddleware.HandleRequestAsync(HttpContext).ConfigureAwait(false);
        }
    }
}