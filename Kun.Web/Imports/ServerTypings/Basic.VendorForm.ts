namespace Kun.Basic {
    export interface VendorForm {
        Code: Serenity.MaskedEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Contacts: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
    }

    export class VendorForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Vendor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VendorForm.init)  {
                VendorForm.init = true;

                var s = Serenity;
                var w0 = s.MaskedEditor;
                var w1 = s.StringEditor;

                Q.initFormType(VendorForm, [
                    'Code', w0,
                    'Name', w1,
                    'Description', w1,
                    'Contacts', w1,
                    'Mobile', w1
                ]);
            }
        }
    }
}
