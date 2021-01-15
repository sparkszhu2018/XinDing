namespace Serenity.EmailClient {
    export interface EmailRetrieveRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
    }
}
