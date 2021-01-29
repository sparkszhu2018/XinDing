namespace Kun.Basic {
    export interface BizTypeForm {
        Name: Serenity.StringEditor;
    }

    export class BizTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.BizType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BizTypeForm.init)  {
                BizTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BizTypeForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
