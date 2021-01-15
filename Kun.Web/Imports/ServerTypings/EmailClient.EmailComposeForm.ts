namespace Serenity.EmailClient {
    export interface EmailComposeForm {
        Subject: StringEditor;
        Attachments: MultipleImageUploadEditor;
        ReplyToFolder: StringEditor;
        ReplyToUniqueId: StringEditor;
    }

    export class EmailComposeForm extends Serenity.PrefixedContext {
        static formKey = 'Serenity.EmailClient.EmailCompose';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmailComposeForm.init)  {
                EmailComposeForm.init = true;

                var s = Serenity;
                var w0 = StringEditor;
                var w1 = MultipleImageUploadEditor;

                Q.initFormType(EmailComposeForm, [
                    'Subject', w0,
                    'Attachments', w1,
                    'ReplyToFolder', w0,
                    'ReplyToUniqueId', w0
                ]);
            }
        }
    }
}
