namespace Kun.Basic {
    export interface CustomerRow {
        Id?: string;
        Code?: string;
        Name?: string;
        Description?: string;
        Contacts?: string;
        Mobile?: string;
    }

    export namespace CustomerRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Basic.Customer';
        export const lookupKey = 'Basic.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('Basic.Customer');
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
            Contacts = "Contacts",
            Mobile = "Mobile"
        }
    }
}
