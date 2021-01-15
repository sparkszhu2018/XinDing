namespace Kun.Administration {
    export interface DataAuditLogForm {
        LogType: Serenity.EnumEditor;
        LogDate: Serenity.DateTimeEditor;
        UserId: Serenity.IntegerEditor;
        Tablename: Serenity.LookupEditor;
        RecordId: Serenity.StringEditor;
        FieldName: Serenity.LookupEditor;
        OldValue: Serenity.StringEditor;
        NewValue: Serenity.StringEditor;
    }

    export class DataAuditLogForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.DataAuditLog';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DataAuditLogForm.init)  {
                DataAuditLogForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.DateTimeEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.LookupEditor;
                var w4 = s.StringEditor;

                Q.initFormType(DataAuditLogForm, [
                    'LogType', w0,
                    'LogDate', w1,
                    'UserId', w2,
                    'Tablename', w3,
                    'RecordId', w4,
                    'FieldName', w3,
                    'OldValue', w4,
                    'NewValue', w4
                ]);
            }
        }
    }
}

