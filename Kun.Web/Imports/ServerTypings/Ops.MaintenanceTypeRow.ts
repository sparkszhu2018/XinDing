namespace Kun.Ops {
    export interface MaintenanceTypeRow {
        Id?: string;
        Name?: string;
        Sort?: number;
    }

    export namespace MaintenanceTypeRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Ops.MaintenanceType';
        export const lookupKey = 'Basic.MaintenanceTypeLookup';

        export function getLookup(): Q.Lookup<MaintenanceTypeRow> {
            return Q.getLookup<MaintenanceTypeRow>('Basic.MaintenanceTypeLookup');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Sort = "Sort"
        }
    }
}
