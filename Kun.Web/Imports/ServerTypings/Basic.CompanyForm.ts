namespace Kun.Basic {
    export interface CompanyForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class CompanyForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Company';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CompanyForm.init)  {
                CompanyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CompanyForm, [
                    'Code', w0,
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}
