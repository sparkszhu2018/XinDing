namespace Serenity.EmailClient {
    export namespace EmailService {
        export const baseUrl = 'Common/Email';

        export declare function Login(request: EmailLoginRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Signout(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UnreadCount(request: EmailUnreadCountRequest, onSuccess?: (response: EmailUnreadCountResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Suggest(request: EmailSuggestRequest, onSuccess?: (response: EmailSuggestResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Reply(request: EmailReplyRequest, onSuccess?: (response: EmailReplyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Compose(request: EmailComposeRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function DeleteMessages(request: EmailDeleteRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ToggleSeen(request: EmailToggleSeenRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Move(request: EmailMoveRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListMessages(request: EmailListRequest, onSuccess?: (response: Serenity.ListResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListFolders(request: ServiceRequest, onSuccess?: (response: Serenity.ListResponse<EmailFolder>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function RetrieveMessage(request: EmailRetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Login = "Common/Email/Login",
            Signout = "Common/Email/Signout",
            UnreadCount = "Common/Email/UnreadCount",
            Suggest = "Common/Email/Suggest",
            Reply = "Common/Email/Reply",
            Compose = "Common/Email/Compose",
            DeleteMessages = "Common/Email/DeleteMessages",
            ToggleSeen = "Common/Email/ToggleSeen",
            Move = "Common/Email/Move",
            ListMessages = "Common/Email/ListMessages",
            ListFolders = "Common/Email/ListFolders",
            RetrieveMessage = "Common/Email/RetrieveMessage"
        }

        [
            'Login', 
            'Signout', 
            'UnreadCount', 
            'Suggest', 
            'Reply', 
            'Compose', 
            'DeleteMessages', 
            'ToggleSeen', 
            'Move', 
            'ListMessages', 
            'ListFolders', 
            'RetrieveMessage'
        ].forEach(x => {
            (<any>EmailService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
