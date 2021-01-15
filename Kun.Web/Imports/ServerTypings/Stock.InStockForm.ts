namespace Kun.Stock {
    export interface InStockForm {
        BillNo: Serenity.StringEditor;
        BillType: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        Note: Serenity.StringEditor;
        InsertUserId: Serenity.LookupEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.LookupEditor;
        UpdateDate: Serenity.DateEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        Items: InStockItemEditor;
    }

    export class InStockForm extends Serenity.PrefixedContext {
        static formKey = 'Stock.InStock';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InStockForm.init)  {
                InStockForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = InStockItemEditor;

                Q.initFormType(InStockForm, [
                    'BillNo', w0,
                    'BillType', w1,
                    'Status', w1,
                    'Date', w2,
                    'Note', w0,
                    'InsertUserId', w3,
                    'InsertDate', w2,
                    'UpdateUserId', w3,
                    'UpdateDate', w2,
                    'ApproverId', w3,
                    'ApproverDate', w2,
                    'Items', w4
                ]);
            }
        }
    }
}
