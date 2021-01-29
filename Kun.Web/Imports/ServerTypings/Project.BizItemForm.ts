namespace Kun.Project {
    export interface BizItemForm {
        ProjectId: Serenity.StringEditor;
        HeadId: Serenity.StringEditor;
        Serial: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        BizType: Serenity.StringEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(BizItemForm, [
                    'ProjectId', w0,
                    'HeadId', w0,
                    'Serial', w1,
                    'Name', w0,
                    'BizType', w0,
                    'Amount', w2
                ]);
            }
        }
    }
}
