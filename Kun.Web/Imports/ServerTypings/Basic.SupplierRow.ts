namespace Kun.Basic {
    export interface SupplierRow {
        Id?: string;
        Code?: string;
        Name?: string;
        Description?: string;
        Contacts?: string;
        Mobile?: string;
    }

    export namespace SupplierRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Basic.Supplier';
        export const lookupKey = 'Basic.Supplier';

        export function getLookup(): Q.Lookup<SupplierRow> {
            return Q.getLookup<SupplierRow>('Basic.Supplier');
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
