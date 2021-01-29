namespace Kun.Basic {
    export interface BizTypeRow {
        Id?: string;
        Name?: string;
    }

    export namespace BizTypeRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Basic.BizType';
        export const lookupKey = 'Basic.BizType';

        export function getLookup(): Q.Lookup<BizTypeRow> {
            return Q.getLookup<BizTypeRow>('Basic.BizType');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
