namespace Kun.Project {
    export interface ServiceItemForm {
        Serial: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class ServiceItemForm extends Serenity.PrefixedContext {
        static formKey = 'Project.ServiceItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiceItemForm.init)  {
                ServiceItemForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ServiceItemForm, [
                    'Serial', w0,
                    'Name', w1,
                    'Price', w2,
                    'Qty', w2,
                    'Amount', w2
                ]);
            }
        }
    }
}
