namespace Kun.Ops {
    export interface MaintenanceTypeForm {
        Name: Serenity.StringEditor;
        Sort: Serenity.IntegerEditor;
    }

    export class MaintenanceTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Ops.MaintenanceType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaintenanceTypeForm.init)  {
                MaintenanceTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(MaintenanceTypeForm, [
                    'Name', w0,
                    'Sort', w1
                ]);
            }
        }
    }
}
