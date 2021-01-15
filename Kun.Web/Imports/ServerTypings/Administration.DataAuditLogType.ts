namespace Kun.Administration {
    export enum DataAuditLogType {
        Insert = 1,
        Update = 2,
        Delete = 3
    }
    Serenity.Decorators.registerEnumType(DataAuditLogType, 'Kun.Administration.DataAuditLogType');
}

