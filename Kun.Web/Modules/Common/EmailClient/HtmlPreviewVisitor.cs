
namespace Serenity.EmailClient
{
    using MimeKit;
    using MimeKit.Text;
    using MimeKit.Tnef;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// Visits a MimeMessage and generates HTML suitable to be rendered in a browser.
    /// </summary>
    internal class EmailPreviewVisitor : MimeVisitor
    {
        List<MultipartRelated> stack = new List<MultipartRelated>();
        Func<MimeEntity, string, string> handleAttachment;
        private MimeMessage message;
        string body;
        private bool forReply;

        /// <summary>
        /// Creates a new HtmlPreviewVisitor.
        /// </summary>
        /// <param name="tempDirectory">A temporary directory used for storing image files.</param>
        public EmailPreviewVisitor(MimeMessage message, Func<MimeEntity, string, string> handleAttachment, bool forReply)
        {
            this.message = message;
            this.handleAttachment = handleAttachment;
            this.forReply = forReply;
        }

        static string GetOnDateSenderWrote(MimeMessage message)
        {
            var sender = message.Sender != null ? message.Sender : message.From.Mailboxes.FirstOrDefault();
            var name = sender != null ? (!string.IsNullOrEmpty(sender.Name) ? sender.Name : sender.Address) : "bilinmeyen bir gönderici";

            return string.Format("{0} tarihinde, {1} yazdı:", message.Date.ToString("f"), name);
        }

        /// <summary>
        /// The HTML string that can be set on the BrowserControl.
        /// </summary>
        public string HtmlBody
        {
            get { return body ?? string.Empty; }
        }

        protected override void VisitMultipartAlternative(MultipartAlternative alternative)
        {
            // walk the multipart/alternative children backwards from greatest level of faithfulness to the least faithful
            for (int i = alternative.Count - 1; i >= 0 && body == null; i--)
                alternative[i].Accept(this);
        }

        protected override void VisitMultipartRelated(MultipartRelated related)
        {
            var root = related.Root;

            // push this multipart/related onto our stack
            stack.Add(related);

            // visit the root document
            root.Accept(this);

            // pop this multipart/related off our stack
            stack.RemoveAt(stack.Count - 1);
        }

        // look up the image based on the img src url within our multipart/related stack
        bool TryGetImage(string url, out MimePart image)
        {
            UriKind kind;
            int index;
            Uri uri;

            if (Uri.IsWellFormedUriString(url, UriKind.Absolute))
                kind = UriKind.Absolute;
            else if (Uri.IsWellFormedUriString(url, UriKind.Relative))
                kind = UriKind.Relative;
            else
                kind = UriKind.RelativeOrAbsolute;

            try
            {
                uri = new Uri(url, kind);
            }
            catch
            {
                image = null;
                return false;
            }

            for (int i = stack.Count - 1; i >= 0; i--)
            {
                if ((index = stack[i].IndexOf(uri)) == -1)
                    continue;

                image = stack[i][index] as MimePart;
                return image != null;
            }

            image = null;

            return false;
        }

        // Replaces <img src=...> urls that refer to images embedded within the message with
        // "file://" urls that the browser control will actually be able to load.
        void HtmlTagCallback(HtmlTagContext ctx, HtmlWriter htmlWriter)
        {
            if (ctx.TagId == HtmlTagId.A && !ctx.IsEndTag)
            {
                ctx.WriteTag(htmlWriter, false);
                foreach (var attribute in ctx.Attributes)
                {
                    if (attribute.Id != HtmlAttributeId.Target)
                        htmlWriter.WriteAttribute(attribute);
                }

                htmlWriter.WriteAttribute(HtmlAttributeId.Target, "_blank");
                return;
            }

            if (ctx.TagId == HtmlTagId.Image && !ctx.IsEndTag && stack.Count > 0)
            {
                ctx.WriteTag(htmlWriter, false);

                // replace the src attribute with a file:// URL
                foreach (var attribute in ctx.Attributes)
                {
                    if (attribute.Id == HtmlAttributeId.Src)
                    {
                        MimePart image;
                        string url;

                        if (!TryGetImage(attribute.Value, out image))
                        {
                            htmlWriter.WriteAttribute(attribute);
                            continue;
                        }

                        url = handleAttachment(image, attribute.Value);

                        htmlWriter.WriteAttributeName(attribute.Name);
                        htmlWriter.WriteAttributeValue(url);
                    }
                    else
                    {
                        htmlWriter.WriteAttribute(attribute);
                    }
                }
            }
            else if (forReply)
            {
                if (ctx.TagId == HtmlTagId.Body && !ctx.IsEmptyElementTag)
                {
                    if (ctx.IsEndTag)
                    {
                        // end our opening <blockquote>
                        htmlWriter.WriteEndTag(HtmlTagId.BlockQuote);

                        // pass the </body> tag through to the output
                        ctx.WriteTag(htmlWriter, true);
                    }
                    else
                    {
                        //pass the <body> tag through to the output
                        ctx.WriteTag(htmlWriter, true);

                        // prepend the HTML reply with "On {DATE}, {SENDER} wrote:"
                        htmlWriter.WriteStartTag(HtmlTagId.P);
                        htmlWriter.WriteEndTag(HtmlTagId.P);
                        htmlWriter.WriteStartTag(HtmlTagId.P);
                        htmlWriter.WriteText(GetOnDateSenderWrote(message));
                        htmlWriter.WriteEndTag(HtmlTagId.P);

                        // Wrap the original content in a <blockquote>
                        htmlWriter.WriteStartTag(HtmlTagId.BlockQuote);
                        htmlWriter.WriteAttribute(HtmlAttributeId.Style, "border-left: 1px #ccc solid; margin: 0 0 0 .8ex; padding-left: 1ex;");

                        ctx.InvokeCallbackForEndTag = true;
                    }
                }
                else
                    ctx.WriteTag(htmlWriter, true);
            }
            else if (ctx.TagId == HtmlTagId.Body && !ctx.IsEndTag)
            {
                ctx.WriteTag(htmlWriter, false);

                // add and/or replace oncontextmenu="return false;"
                foreach (var attribute in ctx.Attributes)
                {
                    if (attribute.Name.ToLowerInvariant() == "oncontextmenu")
                        continue;

                    htmlWriter.WriteAttribute(attribute);
                }
            }
            else
            {
                // pass the tag through to the output
                ctx.WriteTag(htmlWriter, true);
            }
        }

        protected override void VisitTextPart(TextPart entity)
        {
            TextConverter converter;

            if (body != null)
            {
                // since we've already found the body, treat this as an attachment
                handleAttachment(entity, null);
                return;
            }

            if (entity.IsHtml)
            {
                converter = new HtmlToHtml
                {
                    HtmlTagCallback = HtmlTagCallback,
                };


            }
            else if (entity.IsFlowed)
            {
                var flowed = new FlowedToHtml();
                string delsp;

                if (entity.ContentType.Parameters.TryGetValue("delsp", out delsp))
                    flowed.DeleteSpace = delsp.ToLowerInvariant() == "yes";

                converter = flowed;
            }
            else
            {
                converter = new TextToHtml();
            }

            body = converter.Convert(entity.Text);
        }

        protected override void VisitTnefPart(TnefPart entity)
        {
            // extract any attachments in the MS-TNEF part
            foreach (var attachment in entity.ExtractAttachments())
                handleAttachment(attachment, null);
        }

        protected override void VisitMessagePart(MessagePart entity)
        {
            // treat message/rfc822 parts as attachments
            handleAttachment(entity, null);
        }

        protected override void VisitMimePart(MimePart entity)
        {
            // realistically, if we've gotten this far, then we can treat this as an attachment
            // even if the IsAttachment property is false.
            handleAttachment(entity, null);
        }

        /// <summary>
        /// Visit the specified message.
        /// </summary>
        /// <param name="message">The message.</param>
        public override void Visit(MimeMessage message)
        {
            this.message = message;
            base.Visit(message);
        }
    }
}
