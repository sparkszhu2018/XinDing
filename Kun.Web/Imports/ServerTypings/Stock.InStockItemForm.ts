namespace Kun.Stock {
    export interface InStockItemForm {
        MaterialId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Specification: Serenity.StringEditor;
        ConfirmQty: Serenity.DecimalEditor;
        SupplierId: Serenity.LookupEditor;
        InvoiceType: Serenity.EnumEditor;
        BuyPrice: Serenity.DecimalEditor;
        BuyAmount: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
        SaleAmount: Serenity.DecimalEditor;
        LotId: Serenity.LookupEditor;
        WarehouseId: Serenity.LookupEditor;
        PositionId: Serenity.LookupEditor;
    }

    export class InStockItemForm extends Serenity.PrefixedContext {
        static formKey = 'Stock.InStockItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InStockItemForm.init)  {
                InStockItemForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.EnumEditor;

                Q.initFormType(InStockItemForm, [
                    'MaterialId', w0,
                    'UnitId', w0,
                    'Specification', w1,
                    'ConfirmQty', w2,
                    'SupplierId', w0,
                    'InvoiceType', w3,
                    'BuyPrice', w2,
                    'BuyAmount', w2,
                    'SalePrice', w2,
                    'SaleAmount', w2,
                    'LotId', w0,
                    'WarehouseId', w0,
                    'PositionId', w0
                ]);
            }
        }
    }
}
