namespace Kun.Project {
    export interface ServiceBillForm {
        BillNo: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        InsertUserId: Serenity.LookupEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        ProjectId: Serenity.LookupEditor;
        Note: Serenity.StringEditor;
        Items: ServiceItemEditor;
    }

    export class ServiceBillForm extends Serenity.PrefixedContext {
        static formKey = 'Project.ServiceBill';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiceBillForm.init)  {
                ServiceBillForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = ServiceItemEditor;

                Q.initFormType(ServiceBillForm, [
                    'BillNo', w0,
                    'Status', w1,
                    'Date', w2,
                    'InsertUserId', w3,
                    'ApproverId', w3,
                    'ApproverDate', w2,
                    'ProjectId', w3,
                    'Note', w0,
                    'Items', w4
                ]);
            }
        }
    }
}
