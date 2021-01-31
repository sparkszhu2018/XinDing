namespace Kun.Project {
    export interface BizBillForm {
        BillNo: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        InsertUserId: Serenity.LookupEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        ProjectId: Serenity.LookupEditor;
        Note: Serenity.StringEditor;
        Items: BizItemEditor;
    }

    export class BizBillForm extends Serenity.PrefixedContext {
        static formKey = 'Project.BizBill';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BizBillForm.init)  {
                BizBillForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = BizItemEditor;

                Q.initFormType(BizBillForm, [
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
