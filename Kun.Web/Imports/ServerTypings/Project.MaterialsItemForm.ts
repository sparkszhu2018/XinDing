namespace Kun.Project {
    export interface MaterialsItemForm {
        MaterialId: Serenity.LookupEditor;
        MaterialName: Serenity.StringEditor;
        Serial: Serenity.IntegerEditor;
        UnitId: Serenity.LookupEditor;
        UnitName: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
        SaleAmount: Serenity.DecimalEditor;
        BuyPrice: Serenity.DecimalEditor;
        BuyAmount: Serenity.DecimalEditor;
        Specification: Serenity.StringEditor;
        LotId: Serenity.LookupEditor;
        WarehouseId: Serenity.LookupEditor;
        PositionId: Serenity.LookupEditor;
        Note: Serenity.StringEditor;
    }

    export class MaterialsItemForm extends Serenity.PrefixedContext {
        static formKey = 'Project.MaterialsItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaterialsItemForm.init)  {
                MaterialsItemForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(MaterialsItemForm, [
                    'MaterialId', w0,
                    'MaterialName', w1,
                    'Serial', w2,
                    'UnitId', w0,
                    'UnitName', w1,
                    'Qty', w3,
                    'SalePrice', w3,
                    'SaleAmount', w3,
                    'BuyPrice', w3,
                    'BuyAmount', w3,
                    'Specification', w1,
                    'LotId', w0,
                    'WarehouseId', w0,
                    'PositionId', w0,
                    'Note', w1
                ]);
            }
        }
    }
}
