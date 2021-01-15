namespace Kun.Stock {
    export interface StockDataForm {
        MaterialId: Serenity.LookupEditor;
        Qty: Serenity.DecimalEditor;
        ReservedQty: Serenity.DecimalEditor;
        AvailableQty: Serenity.DecimalEditor;
        UnitId: Serenity.LookupEditor;
        LotId: Serenity.LookupEditor;
        WarehouseId: Serenity.StringEditor;
        BuyPrice: Serenity.DecimalEditor;
        BuyAmount: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
        SaleAmount: Serenity.DecimalEditor;
        Specification: Serenity.StringEditor;
    }

    export class StockDataForm extends Serenity.PrefixedContext {
        static formKey = 'Stock.StockData';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StockDataForm.init)  {
                StockDataForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;

                Q.initFormType(StockDataForm, [
                    'MaterialId', w0,
                    'Qty', w1,
                    'ReservedQty', w1,
                    'AvailableQty', w1,
                    'UnitId', w0,
                    'LotId', w0,
                    'WarehouseId', w2,
                    'BuyPrice', w1,
                    'BuyAmount', w1,
                    'SalePrice', w1,
                    'SaleAmount', w1,
                    'Specification', w2
                ]);
            }
        }
    }
}
