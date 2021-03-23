namespace Kun.Stock {
    export interface OutStockForm {
        BillNo: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        InsertDate: Serenity.DateEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        Note: Serenity.StringEditor;
        Materials: OutStockItemEditor;
    }

    export class OutStockForm extends Serenity.PrefixedContext {
        static formKey = 'Stock.OutStock';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutStockForm.init)  {
                OutStockForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = OutStockItemEditor;

                Q.initFormType(OutStockForm, [
                    'BillNo', w0,
                    'Status', w1,
                    'Date', w2,
                    'InsertDate', w2,
                    'ApproverId', w3,
                    'ApproverDate', w2,
                    'Note', w0,
                    'Materials', w4
                ]);
            }
        }
    }
}
