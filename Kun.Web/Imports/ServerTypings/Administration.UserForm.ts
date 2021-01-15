namespace Kun.Administration {
    export interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        MobilePhoneNumber: Serenity.StringEditor;
        MobilePhoneVerified: Serenity.BooleanEditor;
        TwoFactorAuth: Serenity.EnumEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }

    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserForm.init)  {
                UserForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.EnumEditor;
                var w4 = s.ImageUploadEditor;
                var w5 = s.PasswordEditor;

                Q.initFormType(UserForm, [
                    'Username', w0,
                    'DisplayName', w0,
                    'Email', w1,
                    'MobilePhoneNumber', w0,
                    'MobilePhoneVerified', w2,
                    'TwoFactorAuth', w3,
                    'UserImage', w4,
                    'Password', w5,
                    'PasswordConfirm', w5,
                    'Source', w0
                ]);
            }
        }
    }
}
