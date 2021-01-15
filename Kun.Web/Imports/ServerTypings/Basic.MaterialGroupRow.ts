namespace Kun.Basic {
    export interface MaterialGroupRow {
        Id?: string;
        Code?: string;
        Name?: string;
    }

    export namespace MaterialGroupRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Basic.MaterialGroup';
        export const lookupKey = 'Basic.MaterialGroup';

        export function getLookup(): Q.Lookup<MaterialGroupRow> {
            return Q.getLookup<MaterialGroupRow>('Basic.MaterialGroup');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name"
        }
    }
}
