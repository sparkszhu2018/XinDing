namespace Kun.Sell {
    export interface SaleOrderForm {
        BillNo: Serenity.StringEditor;
        BillType: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        SettleCustomerId: Serenity.LookupEditor;
        Note: Serenity.StringEditor;
        Materials: SaleOrderItemEditor;
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
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = SaleOrderItemEditor;

                Q.initFormType(SaleOrderForm, [
                    'BillNo', w0,
                    'BillType', w1,
                    'Status', w1,
                    'Date', w2,
                    'ApproverId', w3,
                    'ApproverDate', w2,
                    'CustomerId', w3,
                    'SettleCustomerId', w3,
                    'Note', w0,
                    'Materials', w4
                ]);
            }
        }
    }
}
