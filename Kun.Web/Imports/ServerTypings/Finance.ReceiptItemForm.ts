namespace Kun.Finance {
    export interface ReceiptItemForm {
        HeadId: Serenity.StringEditor;
        Serial: Serenity.IntegerEditor;
        SourceDocumentType: Serenity.IntegerEditor;
        SourceDocumentId: Serenity.StringEditor;
        SourceDocumentNo: Serenity.StringEditor;
        SourceItemId: Serenity.StringEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ReceiptItemForm, [
                    'HeadId', w0,
                    'Serial', w1,
                    'SourceDocumentType', w1,
                    'SourceDocumentId', w0,
                    'SourceDocumentNo', w0,
                    'SourceItemId', w0,
                    'SourceItemSerial', w1,
                    'Name', w0,
                    'InvoiceAmount', w2,
                    'BalanceAmount', w2,
                    'ReceiptAmount', w2,
                    'Note', w0
                ]);
            }
        }
    }
}
