namespace Kun.Basic {
    export interface MaterialGroupForm {
        Code: Serenity.MaskedEditor;
        Name: Serenity.StringEditor;
    }

    export class MaterialGroupForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.MaterialGroup';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaterialGroupForm.init)  {
                MaterialGroupForm.init = true;

                var s = Serenity;
                var w0 = s.MaskedEditor;
                var w1 = s.StringEditor;

                Q.initFormType(MaterialGroupForm, [
                    'Code', w0,
                    'Name', w1
                ]);
            }
        }
    }
}
