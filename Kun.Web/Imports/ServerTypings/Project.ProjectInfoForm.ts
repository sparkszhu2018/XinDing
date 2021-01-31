namespace Kun.Project {
    export interface ProjectInfoForm {
        BillNo: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Status: Serenity.EnumEditor;
        InsertUserId: Serenity.LookupEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        Name: Serenity.StringEditor;
        BudgetAmount: Serenity.DecimalEditor;
        ActualAmount: Serenity.DecimalEditor;
        CustomerId: Serenity.LookupEditor;
        Contact: Serenity.StringEditor;
        PhoneNo: Serenity.StringEditor;
        Payment: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        RetentionDueDate: Serenity.DateEditor;
        Note: Serenity.StringEditor;
        Materials: MaterialsItemViewEditor;
        BizItems: BizItemViewEditor;
        ServiceItems: ServiceItemViewEditor;
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
                var w1 = s.DateEditor;
                var w2 = s.EnumEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DecimalEditor;
                var w5 = MaterialsItemViewEditor;
                var w6 = BizItemViewEditor;
                var w7 = ServiceItemViewEditor;

                Q.initFormType(ProjectInfoForm, [
                    'BillNo', w0,
                    'Date', w1,
                    'Status', w2,
                    'InsertUserId', w3,
                    'ApproverId', w3,
                    'ApproverDate', w1,
                    'Name', w0,
                    'BudgetAmount', w4,
                    'ActualAmount', w4,
                    'CustomerId', w3,
                    'Contact', w0,
                    'PhoneNo', w0,
                    'Payment', w3,
                    'Address', w0,
                    'RetentionDueDate', w1,
                    'Note', w0,
                    'Materials', w5,
                    'BizItems', w6,
                    'ServiceItems', w7
                ]);
            }
        }
    }
}
