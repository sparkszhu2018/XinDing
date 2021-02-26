namespace Kun.Finance {
    export interface ReceiptForm {
        BillNo: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        InsertUserId: Serenity.LookupEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        Note: Serenity.StringEditor;
        Items: ReceiptItemEditor;
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
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = ReceiptItemEditor;

                Q.initFormType(ReceiptForm, [
                    'BillNo', w0,
                    'Status', w1,
                    'Date', w2,
                    'InsertUserId', w3,
                    'ApproverId', w3,
                    'ApproverDate', w2,
                    'Note', w0,
                    'Items', w4
                ]);
            }
        }
    }
}
