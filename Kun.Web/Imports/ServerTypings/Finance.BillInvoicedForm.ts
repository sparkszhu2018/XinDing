
namespace Kun.Finance {
    export class BillInvoicedForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.BillInvoiced';
    }

    export interface BillInvoicedForm {
        SourceDocumentType: Serenity.IntegerEditor;
        SourceDocumentId: Serenity.StringEditor;
        SourceDocumentNo: Serenity.StringEditor;
        SourceItemId: Serenity.StringEditor;
        SourceItemSerial: Serenity.IntegerEditor;
        Amount: Serenity.DecimalEditor;
        InvoiceAmount: Serenity.DecimalEditor;
    }

    [,
        ['SourceDocumentType', () => Serenity.IntegerEditor],
        ['SourceDocumentId', () => Serenity.StringEditor],
        ['SourceDocumentNo', () => Serenity.StringEditor],
        ['SourceItemId', () => Serenity.StringEditor],
        ['SourceItemSerial', () => Serenity.IntegerEditor],
        ['Amount', () => Serenity.DecimalEditor],
        ['InvoiceAmount', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(BillInvoicedForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}