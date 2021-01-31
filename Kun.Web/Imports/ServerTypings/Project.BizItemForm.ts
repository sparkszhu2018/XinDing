namespace Kun.Project {
    export interface BizItemForm {
        Serial: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        BizType: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class BizItemForm extends Serenity.PrefixedContext {
        static formKey = 'Project.BizItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BizItemForm.init)  {
                BizItemForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(BizItemForm, [
                    'Serial', w0,
                    'Name', w1,
                    'BizType', w2,
                    'Amount', w3
                ]);
            }
        }
    }
}
