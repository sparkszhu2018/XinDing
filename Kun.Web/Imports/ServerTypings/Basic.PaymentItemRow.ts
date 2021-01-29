namespace Kun.Basic {
    export interface PaymentItemRow {
        Id?: string;
        Name?: string;
    }

    export namespace PaymentItemRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Basic.PaymentItem';
        export const lookupKey = 'Basic.PaymentItem';

        export function getLookup(): Q.Lookup<PaymentItemRow> {
            return Q.getLookup<PaymentItemRow>('Basic.PaymentItem');
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
