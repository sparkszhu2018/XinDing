namespace Kun.Sell {
    export interface SaleOrderForm {
        BillNo: Serenity.StringEditor;
        BillType: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        CustomerId: Serenity.StringEditor;
        SettleCustomerId: Serenity.StringEditor;
        Note: Serenity.StringEditor;
        ApproverId: Serenity.StringEditor;
        ApproverDate: Serenity.DateEditor;
    }

    export class SaleOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Sell.SaleOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SaleOrderForm.init)  {
                SaleOrderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(SaleOrderForm, [
                    'BillNo', w0,
                    'BillType', w1,
                    'Status', w1,
                    'Date', w2,
                    'CustomerId', w0,
                    'SettleCustomerId', w0,
                    'Note', w0,
                    'ApproverId', w0,
                    'ApproverDate', w2
                ]);
            }
        }
    }
}
