namespace Kun.Project {
    export interface ProjectInfoForm {
        BillNo: Serenity.StringEditor;
        BillType: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        BudgetAmount: Serenity.DecimalEditor;
        ActualAmount: Serenity.DecimalEditor;
        Date: Serenity.DateEditor;
        CustomerId: Serenity.StringEditor;
        Contact: Serenity.StringEditor;
        PhoneNo: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        RetentionDueDate: Serenity.DateEditor;
        Payment: Serenity.StringEditor;
        Note: Serenity.StringEditor;
        ApproverId: Serenity.StringEditor;
        ApproverDate: Serenity.DateEditor;
    }

    export class ProjectInfoForm extends Serenity.PrefixedContext {
        static formKey = 'Project.ProjectInfo';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProjectInfoForm.init)  {
                ProjectInfoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(ProjectInfoForm, [
                    'BillNo', w0,
                    'BillType', w1,
                    'Status', w1,
                    'Name', w0,
                    'BudgetAmount', w2,
                    'ActualAmount', w2,
                    'Date', w3,
                    'CustomerId', w0,
                    'Contact', w0,
                    'PhoneNo', w0,
                    'Address', w0,
                    'RetentionDueDate', w3,
                    'Payment', w0,
                    'Note', w0,
                    'ApproverId', w0,
                    'ApproverDate', w3
                ]);
            }
        }
    }
}
