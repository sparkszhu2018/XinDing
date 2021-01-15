
namespace Serenity.EmailClient
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System.ComponentModel;

    [FormScript("Serenity.EmailClient.EmailCompose")]
    public class EmailComposeRequest : ServiceRequest
    {
        [DisplayName("To"), Required(true), EmailSuggestEditor]
        public string To { get; set; }
        [DisplayName("CC"), EmailSuggestEditor]
        public string Cc { get; set; }
        [DisplayName("BCC"), EmailSuggestEditor]
        public string Bcc { get; set; }
        [DisplayName("Subject"), Required(true)]
        public string Subject { get; set; }
        [DisplayName("Message"), EmailContentEditor(Rows = 10)]
        public string BodyHtml { get; set; }
        [DisplayName("Attachments"), MultipleFileUploadEditor]
        public string Attachments { get; set; }
        [Hidden]
        public string ReplyToFolder { get; set; }
        [Hidden]
        public uint? ReplyToUniqueId { get; set; }
    }
}