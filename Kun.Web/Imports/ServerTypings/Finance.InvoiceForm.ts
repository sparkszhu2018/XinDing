namespace Kun.Finance {
    export interface InvoiceForm {
        BillNo: Serenity.StringEditor;
        BillType: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        Note: Serenity.StringEditor;
        ApproverId: Serenity.StringEditor;
        ApproverDate: Serenity.DateEditor;
    }

    export class InvoiceForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Invoice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceForm.init)  {
                InvoiceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(InvoiceForm, [
                    'BillNo', w0,
                    'BillType', w1,
                    'Status', w1,
                    'Note', w0,
                    'ApproverId', w0,
                    'ApproverDate', w2
                ]);
            }
        }
    }
}
