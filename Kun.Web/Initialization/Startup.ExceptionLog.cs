namespace Kun
{
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Serenity;
    using Serenity.Abstractions;
    using StackExchange.Exceptional;
    using System;
    using System.Collections.Specialized;

    public partial class Startup
    {
        private void InitializeExceptionLog(IServiceCollection services, IConfiguration configuration)
        {
            services.AddExceptional(settings =>
            {
                settings.Store.ApplicationName = "Kun";
                settings.Store.ConnectionString = configuration.GetValue<string>("Data:Default:ConnectionString");
                settings.DefaultStore = new SqlErrorStore(settings.Store, configuration.GetValue<string>("Data:Default:ProviderName"));

                settings.GetCustomData = (exception, data) =>
                {
                    foreach (var key in exception.Data.Keys)
                    {
                        var s = key as string;
                        if (s != null && s.StartsWith("log:", StringComparison.OrdinalIgnoreCase))
                        {
                            string v;
                            var value = exception.Data[key];
                            if (value == null)
                                v = "[null]";
                            else
                                v = value.ToString();

                            data.Add(s.Substring(4), v);
                        }
                    }
                };

                settings.OnBeforeLog += (sender, args) =>
                {
                    if (args.Error.Exception != null && args.Error is INotLoggedException)
                        args.Abort = true;

                    if (args.Error.Cookies != null)
                        args.Error.Cookies.Remove(".AspNetAuth");

                    ReplaceKey(args.Error.Form, "Password");
                    ReplaceKey(args.Error.Form, "PasswordConfirm");
                    ReplaceKey(args.Error.Form, "PasswordConfirm");
                    ReplaceKey(args.Error.Form, "SmtpUsername");
                    ReplaceKey(args.Error.Form, "SmtpPassword");
                    ReplaceKey(args.Error.Form, "ImapUsername");
                    ReplaceKey(args.Error.Form, "ImapPassword");
                };
            });

            services.AddSingleton<IExceptionLogger, ErrorStoreLogger>();
        }

        private static void ReplaceKey(NameValueCollection collection, string key)
        {
            if (collection == null)
                return;

            var item = collection[key];
            if (item != null)
                collection[item] = "***";
        }

        private class ErrorStoreLogger : IExceptionLogger
        {
            private IHttpContextAccessor httpContextAccessor;

            public ErrorStoreLogger(IHttpContextAccessor httpContextAccessor)
            {
                this.httpContextAccessor = httpContextAccessor;
            }

            public void Log(Exception exception)
            {
                exception.Log(this.httpContextAccessor.HttpContext);
            }
        }
    }
}