namespace Serenity.EmailClient {
    export interface EmailMoveRequest extends Serenity.ServiceRequest {
        SourceFolder?: string;
        UniqueIds?: number[];
        TargetFolder?: string;
    }
}
