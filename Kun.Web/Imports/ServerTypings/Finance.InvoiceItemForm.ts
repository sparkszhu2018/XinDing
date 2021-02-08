namespace Kun.Finance {
    export interface InvoiceItemForm {
        Serial: Serenity.IntegerEditor;
        SourceDocumentType: Serenity.EnumEditor;
        SourceDocumentNo: Serenity.StringEditor;
        SourceItemSerial: Serenity.IntegerEditor;
        Kind: Serenity.EnumEditor;
        Name: Serenity.StringEditor;
        UnitName: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        InvoiceAmount: Serenity.DecimalEditor;
        InvoiceNo: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }

    export class InvoiceItemForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.InvoiceItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceItemForm.init)  {
                InvoiceItemForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.EnumEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(InvoiceItemForm, [
                    'Serial', w0,
                    'SourceDocumentType', w1,
                    'SourceDocumentNo', w2,
                    'SourceItemSerial', w0,
                    'Kind', w1,
                    'Name', w2,
                    'UnitName', w2,
                    'Price', w3,
                    'Qty', w3,
                    'Amount', w3,
                    'InvoiceAmount', w3,
                    'InvoiceNo', w2,
                    'Note', w2
                ]);
            }
        }
    }
}
