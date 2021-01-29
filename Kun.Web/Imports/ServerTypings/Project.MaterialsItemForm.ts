namespace Kun.Project {
    export interface MaterialsItemForm {
        ProjectId: Serenity.StringEditor;
        HeadId: Serenity.StringEditor;
        Serial: Serenity.IntegerEditor;
        StockDataId: Serenity.StringEditor;
        MaterialId: Serenity.StringEditor;
        MaterialName: Serenity.StringEditor;
        UnitId: Serenity.StringEditor;
        UnitName: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        BuyPrice: Serenity.DecimalEditor;
        BuyAmount: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
        SaleAmount: Serenity.DecimalEditor;
        LotId: Serenity.StringEditor;
        WarehouseId: Serenity.StringEditor;
        PositionId: Serenity.StringEditor;
        Specification: Serenity.StringEditor;
    }

    export class MaterialsItemForm extends Serenity.PrefixedContext {
        static formKey = 'Project.MaterialsItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaterialsItemForm.init)  {
                MaterialsItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(MaterialsItemForm, [
                    'ProjectId', w0,
                    'HeadId', w0,
                    'Serial', w1,
                    'StockDataId', w0,
                    'MaterialId', w0,
                    'MaterialName', w0,
                    'UnitId', w0,
                    'UnitName', w0,
                    'Qty', w2,
                    'BuyPrice', w2,
                    'BuyAmount', w2,
                    'SalePrice', w2,
                    'SaleAmount', w2,
                    'LotId', w0,
                    'WarehouseId', w0,
                    'PositionId', w0,
                    'Specification', w0
                ]);
            }
        }
    }
}
