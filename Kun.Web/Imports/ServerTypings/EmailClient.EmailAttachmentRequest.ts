namespace Serenity.EmailClient {
    export interface EmailAttachmentRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
        Key?: string;
    }
}
