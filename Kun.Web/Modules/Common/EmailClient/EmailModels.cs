namespace Serenity.EmailClient
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;

    public class EmailLoginInfo
    {
        public string ImapHost { get; set; }
        public int ImapPort { get; set; }
        public string ImapUsername { get; set; }
        public string ImapPassword { get; set; }
        public string SmtpHost { get; set; }
        public int SmtpPort { get; set; }
        public string SmtpUsername { get; set; }
        public string SmtpPassword { get; set; }
    }

    public class EmailLoginRequest : ServiceRequest
    {
        public EmailLoginInfo LoginInfo { get; set; }
    }

    public class EmailRetrieveRequest : ServiceRequest
    {
        public string Folder { get; set; }
        public uint? UniqueId { get; set; }
    }

    public class EmailUnreadCountRequest : ServiceRequest
    {
    }

    public class EmailUnreadCountResponse : ServiceResponse
    {
        public int UnreadCount { get; set; }
    }

    public class EmailAttachmentRequest : ServiceRequest
    {
        public string Folder { get; set; }
        public uint? UniqueId { get; set; }
        public string Key { get; set; }
    }

    public class EmailListRequest : ListRequest
    {
        public string Folder { get; set; }
    }

    public class EmailReplyRequest : ServiceRequest
    {
        public string Folder { get; set; }
        public uint? UniqueId { get; set; }
        public bool ReplyToAll { get; set; }
        public bool Forward { get; set; }
    }

    public class EmailReplyResponse : ServiceResponse
    {
        public string Subject { get; set; }
        public string To { get; set; }
        public string Cc { get; set; }
        public string ReplyBody { get; set; }
        public List<EmailAttachment> Attachments { get; set; }
    }

    public class EmailDeleteRequest : ServiceRequest
    {
        public string Folder { get; set; }
        public List<uint> UniqueIds { get; set; }
    }

    public class EmailToggleSeenRequest : ServiceRequest
    {
        public string Folder { get; set; }
        public List<uint> UniqueIds { get; set; }
        public bool Seen { get; set; }
    }

    public class EmailMoveRequest : ServiceRequest
    {
        public string SourceFolder { get; set; }
        public List<uint> UniqueIds { get; set; }
        public string TargetFolder { get; set; }
    }

    public class EmailSuggestRequest : ServiceRequest
    {
        public string ContainsText { get; set; }
    }

    public class EmailSuggestResponse : ServiceResponse
    {
        public List<string> Suggestions { get; set; }
    }

    public class EmailItem
    {
        public uint UniqueId { get; set; }
        public string Subject { get; set; }
        public DateTime? Date { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string Cc { get; set; }
        public bool Seen { get; set; }
        public bool Important { get; set; }
        public bool Deleted { get; set; }
        public bool HasAttachments { get; set; }
        public int Size { get; set; }
        public string HtmlBody { get; set; }
        public List<EmailAttachment> Attachments { get; set; }
    }

    public class EmailAttachment
    {
        public int Key { get; set; }
        public string FileName { get; set; }
        public string DownloadUrl { get; set; }
        public int Size { get; set; }
    }

    public class EmailFolder
    {
        public string Kind { get; set; }
        public string Name { get; set; }
        public string FullName { get; set; }
        public int UnreadCount { get; set; }
        public List<EmailFolder> SubFolders { get; set; }
    }

    public class EmailSuggestEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serenity.EmailClient.EmailSuggestEditor";

        public EmailSuggestEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class EmailContentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serenity.EmailClient.EmailContentEditor";

        public EmailContentEditorAttribute()
            : base(Key)
        {
        }

        public object Cols
        {
            get { return GetOption<object>("cols"); }
            set { SetOption("cols", value); }
        }

        public object Rows
        {
            get { return GetOption<object>("rows"); }
            set { SetOption("rows", value); }
        }
    }
}