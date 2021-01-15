namespace Serenity.EmailClient {
    export interface EmailFolder {
        Kind?: string;
        Name?: string;
        FullName?: string;
        UnreadCount?: number;
        SubFolders?: EmailFolder[];
    }
}
