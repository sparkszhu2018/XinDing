namespace Kun.Project {
    export interface MaterialsBillForm {
        BillNo: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        InsertUserId: Serenity.LookupEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        ProjectId: Serenity.LookupEditor;
        Note: Serenity.StringEditor;
        Materials: MaterialsItemEditor;
    }

    export class MaterialsBillForm extends Serenity.PrefixedContext {
        static formKey = 'Project.MaterialsBill';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaterialsBillForm.init)  {
                MaterialsBillForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = MaterialsItemEditor;

                Q.initFormType(MaterialsBillForm, [
                    'BillNo', w0,
                    'Status', w1,
                    'Date', w2,
                    'InsertUserId', w3,
                    'ApproverId', w3,
                    'ApproverDate', w2,
                    'ProjectId', w3,
                    'Note', w0,
                    'Materials', w4
                ]);
            }
        }
    }
}
