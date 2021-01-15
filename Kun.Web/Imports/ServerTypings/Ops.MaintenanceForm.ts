namespace Kun.Ops {
    export interface MaintenanceForm {
        BillNo: Serenity.StringEditor;
        BillType: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        VendorId: Serenity.LookupEditor;
        Reporter: Serenity.StringEditor;
        ReportDate: Serenity.DateEditor;
        ReportCustomerId: Serenity.LookupEditor;
        SettleCustomerId: Serenity.LookupEditor;
        TypeId: Serenity.LookupEditor;
        Address: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
        Content: Serenity.TextAreaEditor;
        ChangeDevice: Serenity.BooleanEditor;
        Materials: MaintenanceMaterialsEditor;
        Manhours: MaintenanceManhoursEditor;
        ServicerCost: Serenity.DecimalEditor;
        Note: Serenity.StringEditor;
        ResponsibleId: Serenity.LookupEditor;
    }

    export class MaintenanceForm extends Serenity.PrefixedContext {
        static formKey = 'Ops.Maintenance';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaintenanceForm.init)  {
                MaintenanceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.BooleanEditor;
                var w6 = MaintenanceMaterialsEditor;
                var w7 = MaintenanceManhoursEditor;
                var w8 = s.DecimalEditor;

                Q.initFormType(MaintenanceForm, [
                    'BillNo', w0,
                    'BillType', w1,
                    'Status', w1,
                    'Date', w2,
                    'ApproverId', w3,
                    'ApproverDate', w2,
                    'VendorId', w3,
                    'Reporter', w0,
                    'ReportDate', w2,
                    'ReportCustomerId', w3,
                    'SettleCustomerId', w3,
                    'TypeId', w3,
                    'Address', w4,
                    'Description', w4,
                    'Content', w4,
                    'ChangeDevice', w5,
                    'Materials', w6,
                    'Manhours', w7,
                    'ServicerCost', w8,
                    'Note', w0,
                    'ResponsibleId', w3
                ]);
            }
        }
    }
}
