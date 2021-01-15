namespace Kun.Basic {
    export interface CustomerForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Contacts: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
    }

    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Customer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerForm.init)  {
                CustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CustomerForm, [
                    'Code', w0,
                    'Name', w0,
                    'Description', w0,
                    'Contacts', w0,
                    'Mobile', w0
                ]);
            }
        }
    }
}
