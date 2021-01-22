namespace Kun.Stock {
    export interface ChangeStockForm {
        BillNo: Serenity.StringEditor;
        InsertUserId: Serenity.LookupEditor;
        InsertDate: Serenity.DateEditor;
        Status: Serenity.EnumEditor;
        UpdateUserId: Serenity.LookupEditor;
        UpdateDate: Serenity.DateEditor;
        Date: Serenity.DateEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        Note: Serenity.StringEditor;
        Items: ChangeStockItemEditor;
    }

    export class ChangeStockForm extends Serenity.PrefixedContext {
        static formKey = 'Stock.ChangeStock';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ChangeStockForm.init)  {
                ChangeStockForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.EnumEditor;
                var w4 = ChangeStockItemEditor;

                Q.initFormType(ChangeStockForm, [
                    'BillNo', w0,
                    'InsertUserId', w1,
                    'InsertDate', w2,
                    'Status', w3,
                    'UpdateUserId', w1,
                    'UpdateDate', w2,
                    'Date', w2,
                    'ApproverId', w1,
                    'ApproverDate', w2,
                    'Note', w0,
                    'Items', w4
                ]);
            }
        }
    }
}
