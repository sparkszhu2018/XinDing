namespace Kun.Basic {
    export interface LotForm {
        Code: Serenity.StringEditor;
        MaterialId: Serenity.StringEditor;
    }

    export class LotForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Lot';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LotForm.init)  {
                LotForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LotForm, [
                    'Code', w0,
                    'MaterialId', w0
                ]);
            }
        }
    }
}
