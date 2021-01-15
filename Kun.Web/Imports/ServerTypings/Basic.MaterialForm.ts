namespace Kun.Basic {
    export interface MaterialForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        UnitId: Serenity.LookupEditor;
        SafetyStock: Serenity.DecimalEditor;
        IsBatch: Serenity.BooleanEditor;
        GroupId: Serenity.LookupEditor;
    }

    export class MaterialForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Material';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaterialForm.init)  {
                MaterialForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(MaterialForm, [
                    'Code', w0,
                    'Name', w0,
                    'UnitId', w1,
                    'SafetyStock', w2,
                    'IsBatch', w3,
                    'GroupId', w1
                ]);
            }
        }
    }
}
