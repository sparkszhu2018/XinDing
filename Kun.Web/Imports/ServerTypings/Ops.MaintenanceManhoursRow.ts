namespace Kun.Ops {
    export interface MaintenanceManhoursRow {
        Id?: string;
        HeadId?: string;
        Serial?: number;
        ManhourId?: string;
        Qty?: number;
        Price?: number;
        Amount?: number;
        Note?: string;
        ManhourName?: string;
        BillNo?: string;
        HeadStatus?: Ops.Enums.BillStatus;
    }

    export namespace MaintenanceManhoursRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Note';
        export const localTextPrefix = 'Ops.MaintenanceManhours';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            HeadId = "HeadId",
            Serial = "Serial",
            ManhourId = "ManhourId",
            Qty = "Qty",
            Price = "Price",
            Amount = "Amount",
            Note = "Note",
            ManhourName = "ManhourName",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus"
        }
    }
}
