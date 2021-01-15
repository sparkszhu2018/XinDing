namespace Kun.Basic {
    export interface PositionRow {
        Id?: string;
        WarehouseId?: string;
        Code?: string;
        Name?: string;
        WarehouseName?: string;
    }

    export namespace PositionRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Basic.Position';
        export const lookupKey = 'Basic.Position';

        export function getLookup(): Q.Lookup<PositionRow> {
            return Q.getLookup<PositionRow>('Basic.Position');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            WarehouseId = "WarehouseId",
            Code = "Code",
            Name = "Name",
            WarehouseName = "WarehouseName"
        }
    }
}
