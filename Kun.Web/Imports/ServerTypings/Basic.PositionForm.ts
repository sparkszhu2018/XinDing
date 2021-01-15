namespace Kun.Basic {
    export interface PositionForm {
        WarehouseId: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
    }

    export class PositionForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Position';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PositionForm.init)  {
                PositionForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(PositionForm, [
                    'WarehouseId', w0,
                    'Code', w1,
                    'Name', w1
                ]);
            }
        }
    }
}
