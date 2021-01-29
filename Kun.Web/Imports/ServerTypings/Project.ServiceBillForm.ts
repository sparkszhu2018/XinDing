namespace Kun.Project {
    export interface ServiceBillForm {
        BillNo: Serenity.StringEditor;
        BillType: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProjectId: Serenity.StringEditor;
        Note: Serenity.StringEditor;
        ApproverId: Serenity.StringEditor;
        ApproverDate: Serenity.DateEditor;
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
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ServiceBillForm, [
                    'BillNo', w0,
                    'BillType', w1,
                    'Status', w1,
                    'Date', w2,
                    'ProjectId', w0,
                    'Note', w0,
                    'ApproverId', w0,
                    'ApproverDate', w2
                ]);
            }
        }
    }
}
