namespace Kun.Stock {
    export interface InStockItemForm {
        Serial: Serenity.IntegerEditor;
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
        Applicant: Serenity.StringEditor;
    }

    export class InStockItemForm extends Serenity.PrefixedContext {
        static formKey = 'Stock.InStockItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InStockItemForm.init)  {
                InStockItemForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.EnumEditor;

                Q.initFormType(InStockItemForm, [
                    'Serial', w0,
                    'MaterialId', w1,
                    'UnitId', w1,
                    'Specification', w2,
                    'ConfirmQty', w3,
                    'SupplierId', w1,
                    'InvoiceType', w4,
                    'BuyPrice', w3,
                    'BuyAmount', w3,
                    'SalePrice', w3,
                    'SaleAmount', w3,
                    'LotId', w1,
                    'WarehouseId', w1,
                    'PositionId', w1,
                    'Applicant', w2
                ]);
            }
        }
    }
}
