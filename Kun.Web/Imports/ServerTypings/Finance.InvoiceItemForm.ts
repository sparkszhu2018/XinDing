namespace Kun.Finance {
    export interface InvoiceItemForm {
        ProjectId: Serenity.StringEditor;
        HeadId: Serenity.StringEditor;
        Serial: Serenity.IntegerEditor;
        SourceDocumentType: Serenity.IntegerEditor;
        SourceDocumentId: Serenity.StringEditor;
        SourceDocumentNo: Serenity.StringEditor;
        SourceItemId: Serenity.StringEditor;
        SourceItemSerial: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        UnitName: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        InvoiceAmount: Serenity.DecimalEditor;
        TaxRate: Serenity.DecimalEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(InvoiceItemForm, [
                    'ProjectId', w0,
                    'HeadId', w0,
                    'Serial', w1,
                    'SourceDocumentType', w1,
                    'SourceDocumentId', w0,
                    'SourceDocumentNo', w0,
                    'SourceItemId', w0,
                    'SourceItemSerial', w1,
                    'Name', w0,
                    'UnitName', w0,
                    'Price', w2,
                    'Qty', w2,
                    'Amount', w2,
                    'InvoiceAmount', w2,
                    'TaxRate', w2,
                    'InvoiceNo', w0,
                    'Note', w0
                ]);
            }
        }
    }
}
