
namespace Serenity.EmailClient.Endpoints
{
    using MailKit;
    using MailKit.Net.Imap;
    using MailKit.Net.Smtp;
    using MailKit.Search;
    using MimeKit;
    using MimeKit.Utils;
    using Microsoft.AspNetCore.Mvc;
    using Serenity;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Web;
    using Microsoft.AspNetCore.DataProtection;
    using System.Net;
    using Microsoft.AspNetCore.Http;

    [ServiceAuthorize]
    [Route("Services/Common/Email/[action]")]
    public class EmailController : ServiceEndpoint
    {
        static EmailController()
        {
        }

        public ServiceResponse Login(EmailLoginRequest request)
        {
            var client = new ImapClient();
            try
            {
                var loginInfo = request.LoginInfo;
                client.Connect(loginInfo.ImapHost, loginInfo.ImapPort, MailKit.Security.SecureSocketOptions.SslOnConnect);
                client.Authenticate(loginInfo.ImapUsername, loginInfo.ImapPassword);

                byte[] bytes;
                using (var ms = new MemoryStream())
                using (var bw = new BinaryWriter(ms))
                {
                    bw.Write(DateTime.UtcNow.AddDays(30).ToBinary());
                    bw.Write(Serenity.Authorization.Username);
                    bw.Write(loginInfo.ImapHost);
                    bw.Write(loginInfo.ImapPort);
                    bw.Write(loginInfo.ImapUsername);
                    bw.Write(loginInfo.ImapPassword);
                    bw.Write(loginInfo.SmtpHost);
                    bw.Write(loginInfo.SmtpPort);
                    bw.Write(loginInfo.SmtpUsername);
                    bw.Write(loginInfo.SmtpPassword);
                    bw.Flush();
                    bytes = ms.ToArray();
                }

                var token = Convert.ToBase64String(HttpContext.RequestServices
                    .GetDataProtector("EmailClientAuth").Protect(bytes));
                Response.Cookies.Append("EmailClientLogin_" + Serenity.Authorization.UserId, token,
                    new Microsoft.AspNetCore.Http.CookieOptions
                    {
                        Expires = DateTime.UtcNow.AddDays(30)
                    });

                return new ServiceResponse();
            }
            finally
            {
                client.Disconnect(true);
            }
        }

        public ServiceResponse Signout(ServiceRequest request)
        {
            Response.Cookies.Append("EmailClientLogin_" + Serenity.Authorization.UserId, "",
                    new Microsoft.AspNetCore.Http.CookieOptions
                    {
                        Expires = DateTime.UtcNow.AddYears(-1)
                    });

            return new ServiceResponse();
        }

        private static EmailLoginInfo GetLoginInfo(HttpRequest request)
        {
            var cookie = request.Cookies["EmailClientLogin_" + Serenity.Authorization.UserId];
            if (string.IsNullOrEmpty(cookie))
                throw new ValidationError("UnauthorizedAccess", "You need to login e-mail client first!");

            var protector = request.HttpContext.RequestServices
                    .GetDataProtector("EmailClientAuth");

            using (var ms = new MemoryStream(protector.Unprotect(Convert.FromBase64String(cookie))))
            using (var br = new BinaryReader(ms))
            {
                var dt = DateTime.FromBinary(br.ReadInt64());
                if (dt < DateTime.UtcNow)
                    throw new ValidationError("UnauthorizedAccess", "Your e-mail authentication ticket has expired!");

                var username = br.ReadString();
                if (username != Serenity.Authorization.Username)
                    throw new ValidationError("UnauthorizedAccess", "E-mail authentication ticket is not intended for current user!");

                var result = new EmailLoginInfo();
                result.ImapHost = br.ReadString();
                result.ImapPort = br.ReadInt32();
                result.ImapUsername = br.ReadString();
                result.ImapPassword = br.ReadString();
                result.SmtpHost = br.ReadString();
                result.SmtpPort = br.ReadInt32();
                result.SmtpUsername = br.ReadString();
                result.SmtpPassword = br.ReadString();
                return result;
            }
        }

        public static void UsingClient(HttpRequest request, Action<ImapClient> action)
        {
            var client = new ImapClient();
            try
            {
                var loginInfo = GetLoginInfo(request);
                client.Connect(loginInfo.ImapHost, loginInfo.ImapPort, MailKit.Security.SecureSocketOptions.SslOnConnect);
                client.Authenticate(loginInfo.ImapUsername, loginInfo.ImapPassword);

                action(client);
            }
            finally
            {
                client.Disconnect(true);
            }
        }

        public EmailUnreadCountResponse UnreadCount(EmailUnreadCountRequest request)
        {
            var response = new EmailUnreadCountResponse();

            response.UnreadCount = LocalCache.Get<object>("LeftNavigationModel:UnreadMailCount:" +
                (Serenity.Authorization.UserId ?? "-1") + ":", TimeSpan.FromMinutes(1), () =>
                {
                    try
                    {
                        int unread = 0;
                        UsingClient(Request, client =>
                        {
                            client.Inbox.Status(MailKit.StatusItems.Unread);
                            unread = client.Inbox.Unread;
                        });

                        return unread;
                    }
                    catch (Exception ex)
                    {
                        ex.Log();
                        return 0;
                    }
                }) as Int32? ?? 0;

            return response;
        }

        public static void UsingSmtp(HttpRequest request, Action<SmtpClient> action)
        {
            var client = new SmtpClient();
            try
            {
                var loginInfo = GetLoginInfo(request);
                client.Connect(loginInfo.SmtpHost, loginInfo.SmtpPort, MailKit.Security.SecureSocketOptions.SslOnConnect);
                client.Authenticate(loginInfo.SmtpUsername, loginInfo.SmtpPassword);
                action(client);
            }
            finally
            {
                client.Disconnect(true);
            }
        }

        public EmailSuggestResponse Suggest(EmailSuggestRequest request)
        {
            request.CheckNotNull();

            var addressList = TwoLevelCache.Get("EmailSuggestList:" + Serenity.Authorization.UserId,
                TimeSpan.FromHours(1), TimeSpan.FromHours(1), "Email",
                () =>
                {
                    var list = new List<MailboxAddress>();
                    list.AddRange(ListAddresses("INBOX"));
                    return list.ToLookup(x => (x.Address ?? "").ToLowerInvariant())
                                    .Where(x => !string.IsNullOrWhiteSpace(x.Key))
                                    .Select(x => x.First());
                });

            if (!string.IsNullOrWhiteSpace(request.ContainsText))
            {
                var term = request.ContainsText.TrimToEmpty().ToLowerInvariant();

                addressList = addressList.Where(x => StringHelper.RemoveDiacritics(x.ToString() ?? "").ToLowerInvariant()
                    .Contains(term));
            }

            var response = new EmailSuggestResponse();
            response.Suggestions = addressList.Take(10).Select(x => x.ToString()).ToList();

            return response;
        }

        private IEnumerable<MailboxAddress> ListAddresses(string folderPath, int take = 1000)
        {
            var addressList = new List<MailboxAddress>();

            UsingClient(Request, client =>
            {
                var folder = client.GetFolder(folderPath);
                folder.Open(FolderAccess.ReadOnly);

                var headers = new HashSet<MimeKit.HeaderId>
                {
                    MimeKit.HeaderId.From,
                    MimeKit.HeaderId.To,
                    MimeKit.HeaderId.Cc,
                    MimeKit.HeaderId.Bcc
                };

                IEnumerable<IMessageSummary> messages;

                var totalCount = folder.Count;
                int messageStart = Math.Max(totalCount - take, 0);
                int messageEnd = Math.Max(Math.Min(messageStart + take - 1, totalCount - 1), 0);
                messages = folder.Fetch(messageStart, messageEnd, MessageSummaryItems.Envelope, headers).Reverse();

                foreach (var message in messages)
                {
                    addressList.AddRange(message.Envelope.From.OfType<MailboxAddress>());
                    addressList.AddRange(message.Envelope.To.OfType<MailboxAddress>());
                    addressList.AddRange(message.Envelope.Cc.OfType<MailboxAddress>());
                    addressList.AddRange(message.Envelope.Bcc.OfType<MailboxAddress>());
                }
            });

            return addressList.ToLookup(x => (x.Address ?? "").ToLowerInvariant())
                .Where(x => !string.IsNullOrWhiteSpace(x.Key))
                .Select(x => x.First());
        }

        private IEnumerable<InternetAddress> ParseMulti(string s, bool ignore = false)
        {
            if (string.IsNullOrWhiteSpace(s))
                return new List<InternetAddress>();

            var parts = s.Split(new char[] { ',', ';', '\t' }, StringSplitOptions.RemoveEmptyEntries);
            return parts.Where(x => !string.IsNullOrWhiteSpace(x))
                .Select(x =>
                {
                    MailboxAddress m;
                    if (!MailboxAddress.TryParse(x, out m))
                    {
                        if (ignore)
                            return null;

                        throw new ValidationError(x + " geçerli bir e-posta adresi değil!");
                    }

                    return (InternetAddress)m;
                }).Where(x => x != null).ToList();
        }

        private string AttachEmbeddedImages(BodyBuilder builder, string body)
        {
            int start = 0;
            int index;
            var src = "src=\"";
            string search = src + VirtualPathUtility.ToAbsolute("~/upload/");
            while ((index = body.IndexOf(search + "temporary/", start)) >= 0)
            {
                var end = body.IndexOf('"', index + search.Length);
                var url = HttpUtility.HtmlDecode(body.Substring(index + search.Length, end - index - search.Length));
                UploadHelper.CheckFileNameSecurity(url);
                var path = UploadHelper.DbFilePath(url);

                if (!System.IO.File.Exists(path))
                    throw new Exception(url + " geçici dosyası bulunamadı!");

                string originalName;
                var origFile = System.IO.Path.ChangeExtension(path, ".orig");
                if (System.IO.File.Exists(origFile))
                {
                    using (var sr = new System.IO.StreamReader(System.IO.File.OpenRead(origFile)))
                        originalName = sr.ReadLine();
                }
                else
                    originalName = "embed" + (builder.LinkedResources.Count + 1) + System.IO.Path.GetExtension(path);

                var image = builder.LinkedResources.Add(originalName, System.IO.File.ReadAllBytes(path));
                image.ContentId = MimeUtils.GenerateMessageId();
                url = "cid:" + image.ContentId;


                url = HttpUtility.HtmlEncode(url);
                body = body.Substring(0, index + src.Length) + url + body.Substring(end);
                start = index + url.Length + 1;
            }

            return body;
        }

        private string AttachReplyImages(BodyBuilder builder, string body)
        {
            int start = 0;
            int index;
            var src = "src=\"";
            string search = src + VirtualPathUtility.ToAbsolute("~/Common/Mailbox/Attachment/");
            var loadedMessages = new Dictionary<string, AttachmentList>();

            while ((index = body.IndexOf(search, start)) >= 0)
            {
                var end = body.IndexOf('"', index + search.Length);
                var url = HttpUtility.HtmlDecode(body.Substring(index + search.Length, end - index - search.Length));

                uint uniqueId;
                int imgidx;
                var parts = url.Split('/');
                if (parts.Length < 3 ||
                    (!uint.TryParse(parts[1], out uniqueId)) ||
                    (!int.TryParse(parts[2], out imgidx)))
                    continue;

                AttachmentList attachments;
                var messageKey = parts[0] + "/" + parts[1];
                if (!loadedMessages.TryGetValue(messageKey, out attachments))
                {
                    UsingClient(Request, client =>
                    {
                        var folder = client.GetFolder(parts[0]);
                        folder.Open(FolderAccess.ReadOnly);
                        var message = folder.GetMessage(new UniqueId(uniqueId));
                        attachments = GetAttachmentList(message, parts[0], uniqueId, false);
                        loadedMessages[messageKey] = attachments;
                    });
                }

                AttachmentInfo attachment;
                if (!attachments.ByIndex.TryGetValue(imgidx, out attachment))
                    continue;

                builder.LinkedResources.Add(attachment.Mime);
                attachment.Mime.ContentId = attachment.Mime.ContentId ?? MimeUtils.GenerateMessageId();
                url = "cid:" + attachment.Mime.ContentId;

                url = HttpUtility.HtmlEncode(url);
                body = body.Substring(0, index + src.Length) + url + body.Substring(end);
                start = index + url.Length + 1;
            }

            return body;
        }

        private void AttachFiles(BodyBuilder builder, string attachments)
        {
            if (string.IsNullOrEmpty(attachments))
                return;

            var list = JSON.Parse<UploadedFile[]>(attachments);
            foreach (var att in list)
            {
                if (!att.Filename.ToLowerInvariant().StartsWith("temporary/"))
                    throw new InvalidOperationException("Only temporary files can be used for upload!");

                UploadHelper.CheckFileNameSecurity(att.Filename);

                var path = UploadHelper.DbFilePath(att.Filename);

                string originalName;
                var origFile = System.IO.Path.ChangeExtension(path, ".orig");
                if (System.IO.File.Exists(origFile))
                {
                    using (var sr = new System.IO.StreamReader(System.IO.File.OpenRead(origFile)))
                        originalName = sr.ReadLine();
                }
                else
                    originalName = "att" + (builder.Attachments.Count + 1) + System.IO.Path.GetExtension(path);

                var attachment = builder.Attachments.Add(originalName, System.IO.File.ReadAllBytes(path));
                Parameter param;
                if (attachment.ContentDisposition.Parameters.TryGetValue("filename", out param))
                    param.EncodingMethod = ParameterEncodingMethod.Rfc2047;
            }
        }

        private List<MailboxAddress> DistinctMailbox(IEnumerable<MailboxAddress> list)
        {
            return list.ToLookup(x => (x.Address ?? "").ToLowerInvariant())
                .Where(x => !string.IsNullOrWhiteSpace(x.Key))
                .Select(x => x.First())
                .ToList();
        }

        public EmailReplyResponse Reply(EmailReplyRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.Folder, "folder");
            Check.NotNull(request.UniqueId, "uniqueId");

            var response = new EmailReplyResponse();
            var user = Serenity.Authorization.UserDefinition;

            UsingClient(Request, client =>
            {
                var folderName = request.Folder ?? "INBOX";
                var folder = client.GetFolder(folderName);
                folder.Open(FolderAccess.ReadOnly);
                var message = folder.GetMessage(new UniqueId(request.UniqueId.Value));

                if (!request.Forward)
                {
                    var to = new List<MailboxAddress>();
                    var cc = new List<MailboxAddress>();

                    if (message.ReplyTo.Count > 0)
                    {
                        to.AddRange(message.ReplyTo.Mailboxes);
                    }
                    else if (message.From.Count > 0)
                    {
                        to.AddRange(message.From.Mailboxes);
                    }
                    else if (message.Sender != null)
                    {
                        to.Add(message.Sender);
                    }

                    if (request.ReplyToAll)
                    {
                        to.AddRange(message.To.Mailboxes);
                        cc.AddRange(message.Cc.Mailboxes);
                    }

                    response.To = String.Join("; ", DistinctMailbox(to.Where(x => (x.Address ?? "").ToLowerInvariant() != user.Email)));
                    response.Cc = String.Join("; ", DistinctMailbox(cc.Where(x => (x.Address ?? "").ToLowerInvariant() != user.Email)));
                }

                string[] preList;
                if (request.Forward)
                    preList = new string[] { "Fwd:", "Fw:", "İlt:", "ilt:", "Yön:" };
                else
                    preList = new string[] { "Re:", "Ynt:", "Cvp:" };

                if (!preList.Any(x => message.Subject.StartsWith(x)))
                    response.Subject = preList[0] + " " + message.Subject;
                else
                    response.Subject = message.Subject;

                if (!string.IsNullOrEmpty(message.HtmlBody))
                {
                    var attachments = GetAttachmentList(message, folderName, request.UniqueId.Value, true);
                    response.ReplyBody = attachments.HtmlBody;
                    if (request.Forward)
                    {
                        response.Attachments = attachments.InOrder.Where(x => !x.IsEmbedded).Select((x, idx) =>
                        {
                            string fileName, tempFileName, tempFilePath;
                            var mime = x.Mime;
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

                                tempFileName = Guid.NewGuid().ToString("N") + Path.GetExtension(fileName);
                                tempFilePath = Path.Combine(UploadHelper.TemporaryPath, tempFileName);
                                System.IO.File.WriteAllBytes(tempFilePath, ms.ToArray());
                                var origFile = System.IO.Path.ChangeExtension(tempFilePath, ".orig");
                                System.IO.File.WriteAllLines(origFile, new string[] { fileName });
                            }

                            return new EmailAttachment
                            {
                                FileName = fileName,
                                DownloadUrl = "temporary/" + tempFileName
                            };
                        }).ToList();
                    }
                }
                else
                    response.ReplyBody = QuoteTextBody(message);
            });

            return response;
        }

        public ServiceResponse Compose(EmailComposeRequest request)
        {
            Check.NotNullOrWhiteSpace(request.To, "to");

            var message = new MimeMessage();

            if (!request.ReplyToFolder.IsEmptyOrNull())
            {
                UsingClient(Request, client =>
                {
                    var folder = client.GetFolder(request.ReplyToFolder);
                    folder.Open(FolderAccess.ReadOnly);
                    var replyTo = folder.GetMessage(new UniqueId(request.ReplyToUniqueId.Value));

                    if (!string.IsNullOrEmpty(replyTo.MessageId))
                    {
                        message.InReplyTo = replyTo.MessageId;
                        foreach (var id in replyTo.References)
                            message.References.Add(id);
                        message.References.Add(replyTo.MessageId);
                    }
                });
            }

            var user = Serenity.Authorization.UserDefinition;
            message.From.Add(new MailboxAddress(user.DisplayName, user.Email));
            message.To.AddRange(ParseMulti(request.To));
            if (!string.IsNullOrWhiteSpace(request.Cc))
                message.Cc.AddRange(ParseMulti(request.Cc));
            if (!string.IsNullOrWhiteSpace(request.Bcc))
                message.Bcc.AddRange(ParseMulti(request.Bcc));

            message.Subject = request.Subject;
            var bodyBuilder = new BodyBuilder();
            var body = request.BodyHtml ?? "";
            if (body.IndexOf("</html>") < 0)
                body = "<html><title>" + HttpUtility.HtmlEncode(request.Subject) +
                    "</title><body>" + body + "</body></html>";

            body = AttachEmbeddedImages(bodyBuilder, body);
            body = AttachReplyImages(bodyBuilder, body);
            AttachFiles(bodyBuilder, request.Attachments);
            bodyBuilder.HtmlBody = body;
            message.Body = bodyBuilder.ToMessageBody();

            UsingSmtp(Request, client =>
            {
                client.Send(message);
            });

            UsingClient(Request, client =>
            {
                try
                {
                    IMailFolder folder;
                    try
                    {
                        folder = client.GetFolder(SpecialFolder.Sent);
                    }
                    catch
                    {
                        folder = client.GetFolder("Sent");
                    }

                    folder.Append(message, MessageFlags.Seen);
                }
                catch (Exception ex)
                {
                    ex.Log();
                }
            });

            return new ServiceResponse();
        }

        public ServiceResponse DeleteMessages(EmailDeleteRequest request)
        {
            request.CheckNotNull();
            Check.NotNull(request.UniqueIds, "uniqueIds");

            UsingClient(Request, client =>
            {
                var folder = client.GetFolder(request.Folder ?? "INBOX");
                folder.Open(FolderAccess.ReadWrite);
                var uniqueIds = request.UniqueIds.Select(x => new UniqueId(x)).ToList();
                if (folder.Attributes.HasFlag(FolderAttributes.Trash) ||
                    string.Compare(folder.FullName, "Trash", StringComparison.OrdinalIgnoreCase) == 0)
                {
                    folder.AddFlags(uniqueIds, MessageFlags.Deleted, true);
                    folder.Expunge();
                }
                else
                {
                    IMailFolder trash;
                    try
                    {
                        trash = client.GetFolder(SpecialFolder.Trash);
                    }
                    catch
                    {
                        trash = client.GetFolder("Trash");
                    }

                    folder.MoveTo(uniqueIds, trash);
                }
            });

            return new ServiceResponse();
        }

        public ServiceResponse ToggleSeen(EmailToggleSeenRequest request)
        {
            request.CheckNotNull();
            Check.NotNull(request.UniqueIds, "uniqueIds");

            UsingClient(Request, client =>
            {
                var folder = client.GetFolder(request.Folder ?? "INBOX");
                folder.Open(FolderAccess.ReadWrite);
                var uniqueIds = request.UniqueIds.Select(x => new UniqueId(x)).ToList();
                if (request.Seen)
                    folder.AddFlags(uniqueIds, MessageFlags.Seen, true);
                else
                    folder.RemoveFlags(uniqueIds, MessageFlags.Seen, true);
            });

            return new ServiceResponse();
        }

        public ServiceResponse Move(EmailMoveRequest request)
        {
            request.CheckNotNull();
            Check.NotNull(request.UniqueIds, "uniqueIds");
            Check.NotNullOrEmpty(request.SourceFolder, "sourceFolder");
            Check.NotNullOrEmpty(request.TargetFolder, "sourceFolder");

            UsingClient(Request, client =>
            {
                var sourceFolder = client.GetFolder(request.SourceFolder);
                sourceFolder.Open(FolderAccess.ReadWrite);
                var uniqueIds = request.UniqueIds.Select(x => new UniqueId(x)).ToList();
                sourceFolder.MoveTo(uniqueIds, client.GetFolder(request.TargetFolder));
            });

            return new ServiceResponse();
        }

        public ListResponse<EmailItem> ListMessages(EmailListRequest request)
        {
            var response = new ListResponse<EmailItem>
            {
                Entities = new List<EmailItem>()
            };

            UsingClient(Request, client =>
            {
                var summaryItems = MessageSummaryItems.UniqueId | MessageSummaryItems.Fast |
                    MessageSummaryItems.BodyStructure | MessageSummaryItems.Envelope;

                var take = request.Take;
                if (take == 0 || take > 100)
                    take = 100;
                var skip = request.Skip;
                if (skip < 0)
                    skip = 0;

                var folder = client.GetFolder(request.Folder ?? "INBOX");
                folder.Open(FolderAccess.ReadOnly);

                var headers = new HashSet<MimeKit.HeaderId>
                {
                    MimeKit.HeaderId.Subject,
                    MimeKit.HeaderId.From,
                    MimeKit.HeaderId.Date
                };

                IEnumerable<IMessageSummary> messages;

                if (!string.IsNullOrWhiteSpace(request.ContainsText))
                {
                    var ct = request.ContainsText.Trim();
                    var uniqueIds = folder.Search(SearchOptions.All,
                        SearchQuery.SubjectContains(ct)
                        .Or(SearchQuery.BodyContains(ct))
                        .Or(SearchQuery.FromContains(ct))
                        .Or(SearchQuery.ToContains(ct)));
                    response.TotalCount = uniqueIds.Count;
                    int messageStart = Math.Max(response.TotalCount - skip - take, 0);
                    int messageEnd = Math.Max(Math.Min(messageStart + take - 1, response.TotalCount - 1), 0);
                    var uniqueIdList = uniqueIds.UniqueIds.Skip(messageStart).Take(messageEnd - messageStart).ToList();
                    if (uniqueIdList.Any())
                        messages = folder.Fetch(uniqueIdList, summaryItems, headers).Reverse();
                    else
                        messages = new List<IMessageSummary>();
                }
                else
                {
                    response.TotalCount = folder.Count;
                    int messageStart = Math.Max(response.TotalCount - skip - take, 0);
                    int messageEnd = Math.Max(Math.Min(messageStart + take - 1, response.TotalCount - 1), 0);

                    messages = folder.Fetch(messageStart, messageEnd, summaryItems, headers).Reverse();
                }

                foreach (var message in messages)
                {
                    response.Entities.Add(new EmailItem
                    {
                        UniqueId = message.UniqueId.Id,
                        Subject = message.NormalizedSubject,
                        Date = message.Date.LocalDateTime,
                        From = string.Join(", ", message.Envelope.From.Select(x => x.ToString())),
                        HasAttachments = message.Attachments.Any(),
                        Size = (int)(message.Size ?? (uint)0),
                        Deleted = (message.Flags ?? MessageFlags.None).HasFlag(MessageFlags.Deleted),
                        Important = (message.Flags ?? MessageFlags.None).HasFlag(MessageFlags.Flagged),
                        Seen = (message.Flags ?? MessageFlags.None).HasFlag(MessageFlags.Seen)
                    });
                }
            });

            return response;
        }

        public ListResponse<EmailFolder> ListFolders()
        {
            var response = new ListResponse<EmailFolder>();
            response.Entities = new List<EmailFolder>();

            UsingClient(Request, client =>
            {
                var personal = client.GetFolder(client.PersonalNamespaces[0]);

                var parent = new EmailFolder();
                parent.SubFolders = new List<EmailFolder>();
                LoadChildFolders(parent, personal);

                if (parent.SubFolders != null)
                    response.Entities.AddRange(parent.SubFolders);
            });

            return response;
        }

        public class AttachmentInfo
        {
            public int Key;
            public MimeEntity Mime;
            public string Filename;
            public string Url;
            public bool IsEmbedded { get; set; }
        }

        public class AttachmentList
        {
            public Dictionary<int, AttachmentInfo> ByIndex;
            public List<AttachmentInfo> InOrder;
            public string HtmlBody;
        }

        public static AttachmentList GetAttachmentList(MimeMessage message, string folderName, uint uniqueId, bool forReply)
        {
            var result = new AttachmentList();
            result.ByIndex = new Dictionary<int, AttachmentInfo>();

            var absolute = VirtualPathUtility.ToAbsolute("~/Common/Mailbox/Attachment/");
            result.InOrder = new List<AttachmentInfo>();
            var attachmentNumber = 0;
            var visitor = new EmailPreviewVisitor(message, (mime, embedUrl) =>
            {
                var sameAttachment = result.InOrder.FirstOrDefault(x => x.Mime == mime);
                if (sameAttachment != null)
                {
                    sameAttachment.IsEmbedded = sameAttachment.IsEmbedded || embedUrl != null;
                    return sameAttachment.Url;
                }
                ++attachmentNumber;
                string fileName;
                if (mime is MessagePart)
                    fileName = mime.ContentDisposition?.FileName ?? (mime.ContentType.Name ?? "attached" + attachmentNumber + ".eml");
                else
                    fileName = ((MimePart)mime).FileName ?? "file" + attachmentNumber + ".dat";
                var downUrl = absolute + Uri.EscapeUriString(folderName) +
                    "/" + uniqueId +
                    "/" + attachmentNumber +
                    "/" + Uri.EscapeUriString(fileName);

                var info = new AttachmentInfo
                {
                    Key = attachmentNumber,
                    Filename = fileName,
                    Mime = mime,
                    Url = downUrl,
                    IsEmbedded = embedUrl != null
                };

                result.ByIndex[attachmentNumber] = info;
                result.InOrder.Add(info);
                return downUrl;

            }, forReply);

            message.Accept(visitor);
            result.HtmlBody = visitor.HtmlBody;

            return result;
        }

        public RetrieveResponse<EmailItem> RetrieveMessage(EmailRetrieveRequest request)
        {
            request.CheckNotNull();
            Check.NotNull(request.UniqueId, "entityId");

            var response = new RetrieveResponse<EmailItem>();

            UsingClient(Request, client =>
            {
                var folderName = request.Folder ?? "INBOX";
                var folder = client.GetFolder(folderName);
                folder.Open(FolderAccess.ReadOnly);
                var message = folder.GetMessage(new UniqueId(request.UniqueId.Value));
                var attachments = GetAttachmentList(message, folderName, request.UniqueId.Value, false);

                response.Entity = new EmailItem
                {
                    UniqueId = request.UniqueId.Value,
                    Subject = message.Subject,
                    Date = message.Date.LocalDateTime,
                    From = string.Join("; ", message.From.Select(x => x.ToString())),
                    To = string.Join("; ", message.To.Select(x => x.ToString())),
                    Cc = string.Join("; ", message.Cc.Select(x => x.ToString())),
                    HasAttachments = attachments.InOrder.Count > 0,
                    HtmlBody = attachments.HtmlBody,
                    Attachments = attachments.InOrder.Where(x => !x.IsEmbedded).Select((x, idx) => new EmailAttachment
                    {
                        Key = idx,
                        FileName = x.Filename,
                        DownloadUrl = x.Url
                    }).ToList()
                };
            });

            return response;
        }

        private static Dictionary<string, int> folderKindOrder = new Dictionary<string, int>
        {
            { "inbox", 1 },
            { "archive", 2 },
            { "sent", 3 },
            { "junk", 4 },
            { "trash", 5 },
            { "drafts", 6 }
        };

        private string QuoteTextBody(MimeMessage message)
        {
            using (var quoted = new System.IO.StringWriter())
            {
                var sender = message.Sender ?? message.From.Mailboxes.FirstOrDefault();

                quoted.WriteLine("<p></p><div class=\"moz-cite-prefix\">{0} tarihinde, {1} yazdı:</div><br/><blockquote><pre>",
                    message.Date.ToString("f"), !string.IsNullOrEmpty(sender.Name) ? sender.Name : sender.Address);

                using (var reader = new System.IO.StringReader(message.TextBody))
                {
                    string line;

                    while ((line = reader.ReadLine()) != null)
                    {
                        quoted.Write("> ");
                        quoted.WriteLine(HttpUtility.HtmlEncode(line));
                    }
                }

                quoted.WriteLine("</pre></blockquote>");

                return quoted.ToString();
            }
        }

        private void LoadChildFolders(EmailFolder parent, IMailFolder folder)
        {
            foreach (var child in folder.GetSubfolders(StatusItems.Unread))
            {
                parent.SubFolders = parent.SubFolders ?? new List<EmailFolder>();
                var childFolder = new EmailFolder();
                parent.SubFolders.Add(childFolder);
                childFolder.Name = child.Name;
                childFolder.FullName = child.FullName;
                childFolder.UnreadCount = child.Unread;

                if (child.Attributes.HasFlag(FolderAttributes.Inbox))
                    childFolder.Kind = "inbox";
                else if (child.Attributes.HasFlag(FolderAttributes.Archive) || child.FullName == "Archive")
                    childFolder.Kind = "archive";
                else if (child.Attributes.HasFlag(FolderAttributes.Junk) || child.FullName == "Junk")
                    childFolder.Kind = "junk";
                else if (child.Attributes.HasFlag(FolderAttributes.Sent) || child.FullName == "Sent")
                    childFolder.Kind = "sent";
                else if (child.Attributes.HasFlag(FolderAttributes.Trash) || child.FullName == "Trash")
                    childFolder.Kind = "trash";
                else if (child.Attributes.HasFlag(FolderAttributes.Drafts) || child.FullName == "Drafts")
                    childFolder.Kind = "drafts";

                if (child.Attributes.HasFlag(FolderAttributes.NonExistent) &&
                    child.Attributes.HasFlag(FolderAttributes.NoSelect))
                    continue;

                if (!child.Attributes.HasFlag(FolderAttributes.HasChildren))
                    continue;

                LoadChildFolders(childFolder, child);
            }

            if (parent.SubFolders != null)
                parent.SubFolders.Sort((x, y) =>
                {
                    var ix = x.Kind != null && folderKindOrder.ContainsKey(x.Kind) ? folderKindOrder[x.Kind] : 0;
                    var iy = y.Kind != null && folderKindOrder.ContainsKey(y.Kind) ? folderKindOrder[y.Kind] : 0;
                    if (ix > 0 && iy > 0)
                        return ix.CompareTo(iy);

                    if (ix > 0)
                        return -1;

                    if (iy > 0)
                        return 1;

                    return x.Name.CompareTo(y.Name);
                });
        }
    }
}