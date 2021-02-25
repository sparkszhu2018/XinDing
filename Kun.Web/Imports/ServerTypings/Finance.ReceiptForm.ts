
namespace Kun.Finance {
    export class ReceiptForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Receipt';
    }

    export interface ReceiptForm {
        BillNo: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        BillType: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        Note: Serenity.StringEditor;
        ApproverId: Serenity.IntegerEditor;
        ApproverDate: Serenity.DateEditor;
    }

    [,
        ['BillNo', () => Serenity.StringEditor],
        ['Date', () => Serenity.DateEditor],
        ['BillType', () => Serenity.IntegerEditor],
        ['Status', () => Serenity.IntegerEditor],
        ['Note', () => Serenity.StringEditor],
        ['ApproverId', () => Serenity.IntegerEditor],
        ['ApproverDate', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(ReceiptForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}