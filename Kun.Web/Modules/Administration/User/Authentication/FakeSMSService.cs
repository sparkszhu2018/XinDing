using Microsoft.AspNetCore.Hosting;
using Serenity;
using System;
using System.IO;
using System.Web.Hosting;

namespace Kun.Administration
{
    public class FakeSMSService : ISMSService
    {
        private readonly IWebHostEnvironment hostingEnvironment;

        public FakeSMSService(IWebHostEnvironment hostingEnvironment)
        {
            this.hostingEnvironment = hostingEnvironment;
        }

        public void Send(string phoneNumber, string text, string reason)
        {
            Check.NotNullOrWhiteSpace(phoneNumber, "phoneNumber");

            var path = Path.Combine(hostingEnvironment.ContentRootPath, @"App_Data\SMS");
            Directory.CreateDirectory(path);

            var fileName = Path.Combine(path, phoneNumber + ".txt");
            File.AppendAllLines(fileName, new string[]
            {
                DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss") + ": " +
                text,
                ""
            });
        }
    }
}