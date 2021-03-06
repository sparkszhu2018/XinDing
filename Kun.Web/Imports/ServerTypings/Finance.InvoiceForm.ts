namespace Kun.Finance {
    export interface InvoiceForm {
        BillNo: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        InsertUserId: Serenity.LookupEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        CompanyId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        InvoiceAmount: Serenity.DecimalEditor;
        ItemInvoiceAmount: Serenity.DecimalEditor;
        Note: Serenity.StringEditor;
        Items: InvoiceItemEditor;
    }

    export class InvoiceForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Invoice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceForm.init)  {
                InvoiceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DecimalEditor;
                var w5 = InvoiceItemEditor;

                Q.initFormType(InvoiceForm, [
                    'BillNo', w0,
                    'Status', w1,
                    'Date', w2,
                    'InsertUserId', w3,
                    'ApproverId', w3,
                    'ApproverDate', w2,
                    'InvoiceNo', w0,
                    'CompanyId', w3,
                    'CustomerId', w3,
                    'InvoiceAmount', w4,
                    'ItemInvoiceAmount', w4,
                    'Note', w0,
                    'Items', w5
                ]);
            }
        }
    }
}
