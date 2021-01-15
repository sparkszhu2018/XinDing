namespace Serenity.EmailClient {
    export interface EmailToggleSeenRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueIds?: number[];
        Seen?: boolean;
    }
}
