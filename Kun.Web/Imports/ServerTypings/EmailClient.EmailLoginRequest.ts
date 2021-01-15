namespace Serenity.EmailClient {
    export interface EmailLoginRequest extends Serenity.ServiceRequest {
        LoginInfo?: EmailLoginInfo;
    }
}
