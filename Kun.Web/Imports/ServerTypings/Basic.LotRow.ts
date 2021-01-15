namespace Kun.Basic {
    export interface LotRow {
        Id?: string;
        Code?: string;
        MaterialId?: string;
    }

    export namespace LotRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Basic.Lot';
        export const lookupKey = 'Basic.Lot';

        export function getLookup(): Q.Lookup<LotRow> {
            return Q.getLookup<LotRow>('Basic.Lot');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            MaterialId = "MaterialId"
        }
    }
}
