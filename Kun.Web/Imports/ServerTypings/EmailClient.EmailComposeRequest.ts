namespace Serenity.EmailClient {
    export interface EmailComposeRequest extends Serenity.ServiceRequest {
        To?: string;
        Cc?: string;
        Bcc?: string;
        Subject?: string;
        BodyHtml?: string;
        Attachments?: string;
        ReplyToFolder?: string;
        ReplyToUniqueId?: number;
    }
}
