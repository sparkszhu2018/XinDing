namespace Kun.Ops {
    export interface ManhourPriceRow {
        Id?: string;
        Name?: string;
        Price?: number;
    }

    export namespace ManhourPriceRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Ops.ManhourPrice';
        export const lookupKey = 'Ops.ManhourPrice';

        export function getLookup(): Q.Lookup<ManhourPriceRow> {
            return Q.getLookup<ManhourPriceRow>('Ops.ManhourPrice');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Price = "Price"
        }
    }
}
