namespace Kun.Finance {
    export interface ReceiptForm {
        BillNo: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        InsertUserId: Serenity.LookupEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        InvoiceNo: Serenity.LookupEditor;
        InvoiceAmount: Serenity.DecimalEditor;
        BalanceAmount: Serenity.DecimalEditor;
        ReceiptAmount: Serenity.DecimalEditor;
        Note: Serenity.StringEditor;
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
                var w4 = s.DecimalEditor;

                Q.initFormType(ReceiptForm, [
                    'BillNo', w0,
                    'Status', w1,
                    'Date', w2,
                    'InsertUserId', w3,
                    'ApproverId', w3,
                    'ApproverDate', w2,
                    'InvoiceNo', w3,
                    'InvoiceAmount', w4,
                    'BalanceAmount', w4,
                    'ReceiptAmount', w4,
                    'Note', w0
                ]);
            }
        }
    }
}
