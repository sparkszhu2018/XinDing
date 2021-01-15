namespace Kun.Basic {
    export interface WarehouseRow {
        Id?: string;
        Code?: string;
        Name?: string;
        Description?: string;
        UsePosition?: boolean;
    }

    export namespace WarehouseRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Basic.Warehouse';
        export const lookupKey = 'Basic.Warehouse';

        export function getLookup(): Q.Lookup<WarehouseRow> {
            return Q.getLookup<WarehouseRow>('Basic.Warehouse');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            Description = "Description",
            UsePosition = "UsePosition"
        }
    }
}
