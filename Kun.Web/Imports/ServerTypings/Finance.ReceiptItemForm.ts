
namespace Kun.Finance {
    export class ReceiptItemForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.ReceiptItem';
    }

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

    [,
        ['HeadId', () => Serenity.StringEditor],
        ['Serial', () => Serenity.IntegerEditor],
        ['SourceDocumentType', () => Serenity.IntegerEditor],
        ['SourceDocumentId', () => Serenity.StringEditor],
        ['SourceDocumentNo', () => Serenity.StringEditor],
        ['SourceItemId', () => Serenity.StringEditor],
        ['SourceItemSerial', () => Serenity.IntegerEditor],
        ['Name', () => Serenity.StringEditor],
        ['InvoiceAmount', () => Serenity.DecimalEditor],
        ['BalanceAmount', () => Serenity.DecimalEditor],
        ['ReceiptAmount', () => Serenity.DecimalEditor],
        ['Note', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ReceiptItemForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}