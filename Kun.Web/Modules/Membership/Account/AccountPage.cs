
namespace Kun.Membership.Pages
{
    using Serenity;
    using Serenity.Services;
    using System;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Abstractions;
    using System.Security.Cryptography;
    using System.Linq;
    using System.Text;
    using Kun.Administration.Repositories;
    using Kun.Common;
    using Microsoft.AspNetCore.DataProtection;
    using System.IO;

    [Route("Account/[action]")]
    public partial class AccountController : Controller
    {
        public static bool UseAdminLTELoginBox = false;

        [HttpGet]
        public ActionResult Login(int? denied, string activated, string returnUrl)
        {
            if (denied == 1)
                return View(MVC.Views.Errors.AccessDenied,
                    (object)("~/Account/Login?returnUrl=" + Uri.EscapeDataString(returnUrl)));

            ViewData["Activated"] = activated;
            ViewData["HideLeftNavigation"] = true;

            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.AccountLogin_AdminLTE);
            else
                return View(MVC.Views.Membership.Account.AccountLogin);
        }

        [HttpGet]
        public ActionResult AccessDenied(string returnURL)
        {
            ViewData["HideLeftNavigation"] = !Authorization.IsLoggedIn;

            return View(MVC.Views.Errors.AccessDenied, (object)returnURL);
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> Login(LoginRequest request)
        {
            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Username))
                    throw new ArgumentNullException("username");

                var username = request.Username;

                if (Dependency.Resolve<IAuthenticationService>().Validate(ref username, request.Password))
                {
                    CheckTwoFactorAuthentication(username, request);
                    WebSecurityHelper.SetAuthenticationTicket(username, false);
                    return new ServiceResponse();
                }

                throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);
            });
        }

        [Serializable]
        private class TwoFactorData
        {
            public string Username { get; set; }
            public int RetryCount { get; set; }
            public int TwoFactorCode { get; set; }
        }

        private void CheckTwoFactorAuthentication(string username, LoginRequest request)
        {
            bool isTwoFactorReq = !string.IsNullOrEmpty(request.TwoFactorGuid) || request.TwoFactorCode != null;

            if (isTwoFactorReq)
            {
                Check.NotNullOrEmpty(request.TwoFactorGuid, "twoFactorGuid");
                Check.NotNull(request.TwoFactorCode, "twoFactorCode");

                var key = "TwoFactorAuth:" + request.TwoFactorGuid;
                var data = DistributedCache.Get<TwoFactorData>(key);
                if (data == null || data.Username == null || data.Username != username)
                    throw new ValidationError("Can't validate credentials. Please try login again!");

                data.RetryCount++;
                if (data.RetryCount > 3)
                {
                    DistributedCache.Set<TwoFactorData>(key, null);
                    throw new ValidationError("Can't validate credentials. Please try login again!");
                }
                else
                {
                    DistributedCache.Set(key, data);
                }

                if (data.TwoFactorCode != request.TwoFactorCode)
                    throw new ValidationError("Validation code is invalid. Please check and try again.");

                // login success. clear to not let same two factor guid/two factor code two be reused later
                DistributedCache.Set<TwoFactorData>(key, null);

                return;
            }

            var user = Dependency.Resolve<IUserRetrieveService>().ByUsername(username) as UserDefinition;
            if (user != null &&
                ((user.TwoFactorAuth == Administration.TwoFactorAuthType.SMS &&
                  user.MobilePhoneVerified &&
                  UserRepository.IsValidPhone(user.MobilePhoneNumber)) ||
                 (user.TwoFactorAuth == Administration.TwoFactorAuthType.Email)))
            {
                var env = Config.Get<EnvironmentSettings>();

                // you may disable two factor auth when <compilation debug="true" /> in web.config, by uncommenting lines below
                // if (HttpContext.IsDebuggingEnabled)
                //    return;

                var md5 = new MD5CryptoServiceProvider().ComputeHash(Encoding.UTF8.GetBytes(request.Password ?? ""));
                var data = new TwoFactorData
                {
                    RetryCount = 0,
                    Username = username,
                    TwoFactorCode = new Random().Next(9000) + 1000
                };

                // this is to prevent users from sending too many SMS in a certain time interval
                var throttler = new Throttler("TwoFactorAuthThrottle:" + username, TimeSpan.FromMinutes(5), 10);
                if (!throttler.Check())
                    throw new ValidationError("Can't proceed with two factor authentication. You are over your validation limit!");

                var twoFactorGuid = Guid.NewGuid().ToString("N");

                string authenticationMessage;
                if (user.TwoFactorAuth == Administration.TwoFactorAuthType.SMS)
                {
                    var mobile = user.MobilePhoneNumber.Trim();
                    Dependency.Resolve<Administration.ISMSService>().Send(
                        phoneNumber: mobile,
                        text: "Please use code " + data.TwoFactorCode + " for Kun login.",
                        reason: "Sent by Kun system for two factor authenication by SMS (" + user.Username + ")");

                    // mask mobile number
                    mobile = mobile.Substring(0, 2) + new string('*', mobile.Length - 4) + mobile.Substring(mobile.Length - 2, 2);
                    authenticationMessage = "Please enter code sent to your mobile phone with number " + mobile + " in <span class='counter'>{0}</span> seconds." +
                        ((Dependency.Resolve<Administration.ISMSService>() is Administration.FakeSMSService) ?
                            " (You can find a text file under App_Data/SMS directory, as you haven't configured SMS service yet)" : "");
                }
                else
                {
                    EmailHelper.Send(
                        address: user.Email,
                        subject: "Your two-factor authentication code for Kun login",
                        body: "Please use code " + data.TwoFactorCode + " for Kun login.");
                    authenticationMessage = "Please enter code sent to your e-mail adress in {0} seconds." +
                        " (If you didn't configure an SMTP server, you can find e-mails under App_Data/Mail directory";
                }

                DistributedCache.Set("TwoFactorAuth:" + twoFactorGuid, data, TimeSpan.FromMinutes(2));
                throw new ValidationError("TwoFactorAuthenticationRequired",
                    authenticationMessage + "|" + twoFactorGuid, "Two factor authentication is required!");
            }
        }

        public ActionResult ImpersonateAs(string token)
        {
            var bytes = HttpContext.RequestServices.GetDataProtector("ImpersonateAs")
                .Unprotect(Convert.FromBase64String(token));

            using (var ms = new MemoryStream(bytes))
            using (var br = new BinaryReader(ms))
            {
                var dt = DateTime.FromBinary(br.ReadInt64());
                if (dt < DateTime.UtcNow)
                    return new ContentResult { Content = "Your impersonation token is expired. Please refresh the page you were using and try again." };

                var loginAsUser = br.ReadString();

                if (String.Compare(loginAsUser, "admin", StringComparison.OrdinalIgnoreCase) != 0)
                    return new ContentResult { Content = "Only admin can use impersonation functionality!" };

                var loginAs = br.ReadString();

                if (String.Compare(loginAs, "admin", StringComparison.OrdinalIgnoreCase) == 0)
                    return new ContentResult { Content = "Can't impersonate as admin!" };

                var currentClientId = Request.Headers["User-Agent"] + "|" + HttpContext.Connection.RemoteIpAddress;
                using (var md5 = new MD5CryptoServiceProvider())
                {
                    var currentHash = md5.ComputeHash(Encoding.UTF8.GetBytes(currentClientId));
                    if (!currentHash.SequenceEqual(br.ReadBytes(currentHash.Length)))
                        return new ContentResult { Content = "Invalid token! User-agent mismatch!" };
                }

                var user = Dependency.Resolve<IUserRetrieveService>().ByUsername(loginAs) as UserDefinition;
                if (user == null)
                    return new ContentResult { Content = loginAs + " is not a valid username!" };

                if (Authorization.Username == loginAsUser)
                    return new ContentResult
                    {
                        Content = "Please use Incognito mode by right clicking the impersonation link! " +
                            "If you are already in Incognito mode, signout or close all Incognito browser windows and try again."
                    };

                WebSecurityHelper.SetAuthenticationTicket(loginAs, false);

                return new RedirectResult("~/");
            }
        }

        private ActionResult Error(string message)
        {
            return View(MVC.Views.Errors.ValidationError,
                new ValidationError(Texts.Validation.InvalidResetToken));
        }

        public string KeepAlive()
        {
            return "OK";
        }

        public ActionResult Signout()
        {
            WebSecurityHelper.LogOut();
            return new RedirectResult("~/");
        }
    }
}