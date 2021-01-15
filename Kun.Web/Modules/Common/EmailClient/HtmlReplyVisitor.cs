

namespace Serenity.EmailClient
{
    using MimeKit;
    using MimeKit.Text;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;

    public class HtmlReplyVisitor : MimeVisitor
    {
        readonly Stack<Multipart> stack = new Stack<Multipart>();
        MimeMessage original;
        MimeEntity reply;

        /// <summary>
        /// Creates a new ReplyVisitor.
        /// </summary>
        public HtmlReplyVisitor()
        {
        }

        /// <summary>
        /// Gets the reply.
        /// </summary>
        /// <value>The reply.</value>
        public MimeEntity Reply
        {
            get { return reply; }
        }

        void Push(MimeEntity entity)
        {
            var multipart = entity as Multipart;


            if (reply == null)
            {
                reply = entity;
            }
            else
            {
                var parent = stack.Peek();
                parent.Add(entity);
            }

            if (multipart != null)
                stack.Push(multipart);
        }

        void Pop()
        {
            stack.Pop();
        }

        static string GetOnDateSenderWrote(MimeMessage message)
        {
            var sender = message.Sender != null ? message.Sender : message.From.Mailboxes.FirstOrDefault();
            var name = sender != null ? (!string.IsNullOrEmpty(sender.Name) ? sender.Name : sender.Address) : "bilinmeyen bir gönderici";

            return string.Format("{0} tarihinde, {1} yazdı:", message.Date.ToString("f"), name);
        }

        /// <summary>
        /// Visit the specified message.
        /// </summary>
        /// <param name="message">The message.</param>
        public override void Visit(MimeMessage message)
        {
            original = message;
            stack.Clear();
            base.Visit(message);
        }

        /// <summary>
        /// Visit the specified entity.
        /// </summary>
        /// <param name="entity">The MIME entity.</param>
        /// <exception cref="System.NotSupportedException">
        /// Only Visit(MimeMessage) is supported.
        /// </exception>
        public override void Visit(MimeEntity entity)
        {
            throw new NotSupportedException();
        }

        protected override void VisitMultipartAlternative(MultipartAlternative alternative)
        {
            var multipart = new MultipartAlternative();

            Push(multipart);

            for (int i = 0; i < alternative.Count; i++)
                alternative[i].Accept(this);

            Pop();
        }

        protected override void VisitMultipartRelated(MultipartRelated related)
        {
            var multipart = new MultipartRelated();
            var root = related.Root;

            Push(multipart);

            root.Accept(this);

            for (int i = 0; i < related.Count; i++)
            {
                if (related[i] != root)
                    related[i].Accept(this);
            }

            Pop();
        }

        protected override void VisitMultipart(Multipart multipart)
        {
            foreach (var part in multipart)
            {
                if (part is MultipartAlternative)
                    part.Accept(this);
                else if (part is MultipartRelated)
                    part.Accept(this);
                else if (part is TextPart)
                    part.Accept(this);
            }
        }

        private bool insideBody;

        void HtmlTagCallback(HtmlTagContext ctx, HtmlWriter htmlWriter)
        {
            if (ctx.TagId == HtmlTagId.Body && !ctx.IsEmptyElementTag)
            {
                if (ctx.IsEndTag)
                {
                    insideBody = false;

                    // end our opening <blockquote>
                    htmlWriter.WriteEndTag(HtmlTagId.BlockQuote);

                    // pass the </body> tag through to the output
                    // ctx.WriteTag(htmlWriter, true);
                }
                else
                {
                    insideBody = true;

                    // pass the <body> tag through to the output
                    // ctx.WriteTag(htmlWriter, true);

                    // prepend the HTML reply with "On {DATE}, {SENDER} wrote:"
                    htmlWriter.WriteStartTag(HtmlTagId.P);
                    htmlWriter.WriteText(GetOnDateSenderWrote(original));
                    htmlWriter.WriteEndTag(HtmlTagId.P);

                    // Wrap the original content in a <blockquote>
                    htmlWriter.WriteStartTag(HtmlTagId.BlockQuote);
                    htmlWriter.WriteAttribute(HtmlAttributeId.Style, "border-left: 1px #ccc solid; margin: 0 0 0 .8ex; padding-left: 1ex;");

                    ctx.InvokeCallbackForEndTag = true;
                }
            }
            else if (insideBody)
            {
                // pass the tag through to the output
                ctx.WriteTag(htmlWriter, true);
            }
        }

        string QuoteText(string text)
        {
            using (var quoted = new StringWriter())
            {
                quoted.WriteLine(GetOnDateSenderWrote(original));

                using (var reader = new StringReader(text))
                {
                    string line;

                    while ((line = reader.ReadLine()) != null)
                    {
                        quoted.Write("> ");
                        quoted.WriteLine(line);
                    }
                }

                return quoted.ToString();
            }
        }

        protected override void VisitTextPart(TextPart entity)
        {
            string text;

            if (entity.IsHtml)
            {
                var converter = new HtmlToHtml
                {
                    HtmlTagCallback = HtmlTagCallback
                };

                text = converter.Convert(entity.Text);
            }
            else if (entity.IsFlowed)
            {
                var converter = new FlowedToText();

                text = converter.Convert(entity.Text);
                text = QuoteText(text);
            }
            else
            {
                // quote the original message text
                text = QuoteText(entity.Text);
            }

            var part = new TextPart(entity.ContentType.MediaSubtype.ToLowerInvariant())
            {
                Text = text
            };

            Push(part);
        }

        protected override void VisitMessagePart(MessagePart entity)
        {
            // don't descend into message/rfc822 parts
        }
    }
}
