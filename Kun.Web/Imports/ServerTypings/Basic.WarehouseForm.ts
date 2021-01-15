namespace Kun.Basic {
    export interface WarehouseForm {
        Code: Serenity.MaskedEditor;
        Name: Serenity.StringEditor;
        UsePosition: Serenity.BooleanEditor;
        Description: Serenity.StringEditor;
    }

    export class WarehouseForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Warehouse';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WarehouseForm.init)  {
                WarehouseForm.init = true;

                var s = Serenity;
                var w0 = s.MaskedEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(WarehouseForm, [
                    'Code', w0,
                    'Name', w1,
                    'UsePosition', w2,
                    'Description', w1
                ]);
            }
        }
    }
}
