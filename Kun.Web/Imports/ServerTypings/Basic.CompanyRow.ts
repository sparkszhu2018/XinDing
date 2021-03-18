namespace Kun.Basic {
    export interface CompanyRow {
        Id?: string;
        Code?: string;
        Name?: string;
        Description?: string;
    }

    export namespace CompanyRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Basic.Company';
        export const lookupKey = 'Basic.Company';

        export function getLookup(): Q.Lookup<CompanyRow> {
            return Q.getLookup<CompanyRow>('Basic.Company');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            Description = "Description"
        }
    }
}
