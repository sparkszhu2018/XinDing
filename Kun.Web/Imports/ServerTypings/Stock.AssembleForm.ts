namespace Kun.Stock {
    export interface AssembleForm {
        BillNo: Serenity.StringEditor;
        InsertUserId: Serenity.LookupEditor;
        InsertDate: Serenity.DateEditor;
        Status: Serenity.EnumEditor;
        UpdateUserId: Serenity.LookupEditor;
        UpdateDate: Serenity.DateEditor;
        Date: Serenity.DateEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        ToMaterialId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Qty: Serenity.DecimalEditor;
        BuyPrice: Serenity.DecimalEditor;
        BuyAmount: Serenity.DecimalEditor;
        WarehouseId: Serenity.LookupEditor;
        PositionId: Serenity.LookupEditor;
        LotId: Serenity.LookupEditor;
        Note: Serenity.StringEditor;
        Items: AssembleItemEditor;
    }

    export class AssembleForm extends Serenity.PrefixedContext {
        static formKey = 'Stock.Assemble';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssembleForm.init)  {
                AssembleForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.EnumEditor;
                var w4 = s.DecimalEditor;
                var w5 = AssembleItemEditor;

                Q.initFormType(AssembleForm, [
                    'BillNo', w0,
                    'InsertUserId', w1,
                    'InsertDate', w2,
                    'Status', w3,
                    'UpdateUserId', w1,
                    'UpdateDate', w2,
                    'Date', w2,
                    'ApproverId', w1,
                    'ApproverDate', w2,
                    'ToMaterialId', w1,
                    'UnitId', w1,
                    'Qty', w4,
                    'BuyPrice', w4,
                    'BuyAmount', w4,
                    'WarehouseId', w1,
                    'PositionId', w1,
                    'LotId', w1,
                    'Note', w0,
                    'Items', w5
                ]);
            }
        }
    }
}
