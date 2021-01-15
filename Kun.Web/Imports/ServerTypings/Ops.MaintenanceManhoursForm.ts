namespace Kun.Ops {
    export interface MaintenanceManhoursForm {
        Serial: Serenity.IntegerEditor;
        ManhourId: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        Note: Serenity.StringEditor;
    }

    export class MaintenanceManhoursForm extends Serenity.PrefixedContext {
        static formKey = 'Ops.MaintenanceManhours';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaintenanceManhoursForm.init)  {
                MaintenanceManhoursForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(MaintenanceManhoursForm, [
                    'Serial', w0,
                    'ManhourId', w1,
                    'Price', w2,
                    'Qty', w2,
                    'Amount', w2,
                    'Note', w3
                ]);
            }
        }
    }
}
