namespace Kun.Basic {
    export interface UnitForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Decim: Serenity.BooleanEditor;
    }

    export class UnitForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Unit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UnitForm.init)  {
                UnitForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(UnitForm, [
                    'Code', w0,
                    'Name', w0,
                    'Decim', w1
                ]);
            }
        }
    }
}
