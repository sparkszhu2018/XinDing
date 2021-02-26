namespace Kun.Finance {
    export interface ReceiptItemForm {
        Serial: Serenity.IntegerEditor;
        SourceDocumentNo: Serenity.StringEditor;
        SourceItemSerial: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        InvoiceAmount: Serenity.DecimalEditor;
        BalanceAmount: Serenity.DecimalEditor;
        ReceiptAmount: Serenity.DecimalEditor;
        Note: Serenity.StringEditor;
    }

    export class ReceiptItemForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.ReceiptItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReceiptItemForm.init)  {
                ReceiptItemForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ReceiptItemForm, [
                    'Serial', w0,
                    'SourceDocumentNo', w1,
                    'SourceItemSerial', w0,
                    'Name', w1,
                    'InvoiceAmount', w2,
                    'BalanceAmount', w2,
                    'ReceiptAmount', w2,
                    'Note', w1
                ]);
            }
        }
    }
}
