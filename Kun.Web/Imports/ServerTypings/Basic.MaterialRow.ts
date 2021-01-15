namespace Kun.Basic {
    export interface MaterialRow {
        Id?: string;
        Code?: string;
        Name?: string;
        OldCode?: string;
        UnitId?: string;
        SafetyStock?: number;
        IsBatch?: boolean;
        GroupId?: string;
        CodeName?: string;
        UnitCode?: string;
        GroupName?: string;
        IsVirtual?: boolean;
    }

    export namespace MaterialRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CodeName';
        export const localTextPrefix = 'Basic.Material';
        export const lookupKey = 'Basic.MaterialLookup';

        export function getLookup(): Q.Lookup<MaterialRow> {
            return Q.getLookup<MaterialRow>('Basic.MaterialLookup');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            OldCode = "OldCode",
            UnitId = "UnitId",
            SafetyStock = "SafetyStock",
            IsBatch = "IsBatch",
            GroupId = "GroupId",
            CodeName = "CodeName",
            UnitCode = "UnitCode",
            GroupName = "GroupName",
            IsVirtual = "IsVirtual"
        }
    }
}
