namespace Kun.Basic {
    export interface VendorRow {
        Id?: string;
        Code?: string;
        Name?: string;
        Description?: string;
        Contacts?: string;
        Mobile?: string;
    }

    export namespace VendorRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Basic.Vendor';
        export const lookupKey = 'Basic.Vendor';

        export function getLookup(): Q.Lookup<VendorRow> {
            return Q.getLookup<VendorRow>('Basic.Vendor');
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
