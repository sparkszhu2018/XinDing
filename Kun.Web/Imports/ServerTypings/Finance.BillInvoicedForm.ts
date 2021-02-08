namespace Kun.Finance {
    export interface BillInvoicedForm {
        SourceDocumentType: Serenity.EnumEditor;
        SourceDocumentId: Serenity.StringEditor;
        SourceDocumentNo: Serenity.StringEditor;
        SourceItemId: Serenity.StringEditor;
        SourceItemSerial: Serenity.IntegerEditor;
        Amount: Serenity.DecimalEditor;
        InvoiceAmount: Serenity.DecimalEditor;
    }

    export class BillInvoicedForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.BillInvoiced';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BillInvoicedForm.init)  {
                BillInvoicedForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(BillInvoicedForm, [
                    'SourceDocumentType', w0,
                    'SourceDocumentId', w1,
                    'SourceDocumentNo', w1,
                    'SourceItemId', w1,
                    'SourceItemSerial', w2,
                    'Amount', w3,
                    'InvoiceAmount', w3
                ]);
            }
        }
    }
}
