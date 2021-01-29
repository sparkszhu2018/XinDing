namespace Kun.Project {
    export interface ServiceItemForm {
        ProjectId: Serenity.StringEditor;
        HeadId: Serenity.StringEditor;
        Serial: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        SalePrice: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        SaleAmount: Serenity.DecimalEditor;
    }

    export class ServiceItemForm extends Serenity.PrefixedContext {
        static formKey = 'Project.ServiceItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiceItemForm.init)  {
                ServiceItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ServiceItemForm, [
                    'ProjectId', w0,
                    'HeadId', w0,
                    'Serial', w1,
                    'Name', w0,
                    'SalePrice', w2,
                    'Qty', w2,
                    'SaleAmount', w2
                ]);
            }
        }
    }
}
