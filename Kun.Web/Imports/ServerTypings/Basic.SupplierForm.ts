namespace Kun.Basic {
    export interface SupplierForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Contacts: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
    }

    export class SupplierForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Supplier';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SupplierForm.init)  {
                SupplierForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SupplierForm, [
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
