namespace Kun.Basic {
    export interface CommonExpressionForm {
        Content: Serenity.StringEditor;
    }

    export class CommonExpressionForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.CommonExpression';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CommonExpressionForm.init)  {
                CommonExpressionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CommonExpressionForm, [
                    'Content', w0
                ]);
            }
        }
    }
}
