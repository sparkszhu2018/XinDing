

namespace Serenity.EmailClient.Pages
{
    using MailKit;
    using Microsoft.AspNetCore.Mvc;
    using MimeKit;
    using Serenity;
    using Serenity.Web;
    using System.IO;

    public class EmailController : Controller
    {
        [Route("Common/Mailbox")]
        public ActionResult Index()
        {
            LocalCache.Remove("LeftNavigationModel:UnreadMailCount:" + (Authorization.UserId ?? "-1"));

            return View("~/Modules/Common/EmailClient/EmailIndex.cshtml");
        }

        [PageAuthorize]
        [Route("Common/Mailbox/Attachment/{folder}/{uniqueId}/{index}/{downloadName}")]
        public ActionResult Attachment(string folder, uint uniqueId, int index, string downloadName)
        {
            Endpoints.EmailController.AttachmentInfo attachment = null;

            Endpoints.EmailController.UsingClient(Request, client =>
            {
                var emailFolder = client.GetFolder(folder);
                emailFolder.Open(FolderAccess.ReadOnly);
                var message = emailFolder.GetMessage(new UniqueId(uniqueId));

                var attachments = Endpoints.EmailController.GetAttachmentList(message, folder, uniqueId, false);
                if (!attachments.ByIndex.TryGetValue(index, out attachment))
                    attachment = null;
            });

            if (attachment == null)
                return NotFound();

            var mime = attachment.Mime;

            string fileName;
            using (var ms = new MemoryStream())
            {
                if (mime is MessagePart)
                {
                    fileName = mime.ContentDisposition?.FileName ?? (mime.ContentType.Name ?? "attached.eml");
                    var rfc822 = (MessagePart)mime;
                    rfc822.Message.WriteTo(ms);
                }
                else
                {
                    var part = (MimePart)mime;
                    fileName = part.FileName;
                    part.Content.DecodeTo(ms);
                }

                if (!string.IsNullOrEmpty(downloadName))
                    fileName = downloadName;

                return File(ms.ToArray(), mime.ContentType?.ToString() ?? "application/octet-stream",
                    fileName);
            }
        }
    }
}