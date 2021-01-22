namespace Kun.Stock {
    export interface ChangeStockItemForm {
        FromMaterialId: Serenity.LookupEditor;
        ToMaterialId: Serenity.LookupEditor;
        Serial: Serenity.IntegerEditor;
        Qty: Serenity.DecimalEditor;
        FromUnitId: Serenity.LookupEditor;
        ToUnitId: Serenity.LookupEditor;
        FromWarehouseId: Serenity.LookupEditor;
        ToWarehouseId: Serenity.LookupEditor;
        FromPositionId: Serenity.LookupEditor;
        ToPositionId: Serenity.LookupEditor;
        FromLotId: Serenity.LookupEditor;
        ToLotId: Serenity.LookupEditor;
        FromBuyPrice: Serenity.DecimalEditor;
        ToBuyPrice: Serenity.DecimalEditor;
        FromSalePrice: Serenity.DecimalEditor;
        ToSalePrice: Serenity.DecimalEditor;
        FromSpecification: Serenity.StringEditor;
        ToSpecification: Serenity.StringEditor;
    }

    export class ChangeStockItemForm extends Serenity.PrefixedContext {
        static formKey = 'Stock.ChangeStockItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ChangeStockItemForm.init)  {
                ChangeStockItemForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(ChangeStockItemForm, [
                    'FromMaterialId', w0,
                    'ToMaterialId', w0,
                    'Serial', w1,
                    'Qty', w2,
                    'FromUnitId', w0,
                    'ToUnitId', w0,
                    'FromWarehouseId', w0,
                    'ToWarehouseId', w0,
                    'FromPositionId', w0,
                    'ToPositionId', w0,
                    'FromLotId', w0,
                    'ToLotId', w0,
                    'FromBuyPrice', w2,
                    'ToBuyPrice', w2,
                    'FromSalePrice', w2,
                    'ToSalePrice', w2,
                    'FromSpecification', w3,
                    'ToSpecification', w3
                ]);
            }
        }
    }
}
