namespace Serenity.EmailClient {
    export interface EmailDeleteRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueIds?: number[];
    }
}
