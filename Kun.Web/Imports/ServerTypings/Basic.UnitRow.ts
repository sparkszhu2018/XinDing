namespace Kun.Basic {
    export interface UnitRow {
        Id?: string;
        Code?: string;
        Name?: string;
        Decim?: boolean;
    }

    export namespace UnitRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Basic.Unit';
        export const lookupKey = 'Basic.UnitLookup';

        export function getLookup(): Q.Lookup<UnitRow> {
            return Q.getLookup<UnitRow>('Basic.UnitLookup');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            Decim = "Decim"
        }
    }
}
