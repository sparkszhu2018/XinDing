namespace Kun.Finance {
    export interface ReceiptForm {
        BillNo: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        BillType: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        Note: Serenity.StringEditor;
        ApproverId: Serenity.StringEditor;
        ApproverDate: Serenity.DateEditor;
    }

    export class ReceiptForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Receipt';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReceiptForm.init)  {
                ReceiptForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(ReceiptForm, [
                    'BillNo', w0,
                    'Date', w1,
                    'BillType', w2,
                    'Status', w2,
                    'Note', w0,
                    'ApproverId', w0,
                    'ApproverDate', w1
                ]);
            }
        }
    }
}
