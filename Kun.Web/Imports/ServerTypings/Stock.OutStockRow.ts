namespace Kun.Stock {
    export interface OutStockRow {
        Id?: string;
        BillNo?: string;
        Status?: Stock.Enums.BillStatus;
        Date?: string;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
        ApproverName?: string;
        Materials?: OutStockItemRow[];
    }

    export namespace OutStockRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Stock.OutStock';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            BillNo = "BillNo",
            Status = "Status",
            Date = "Date",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate",
            ApproverName = "ApproverName",
            Materials = "Materials"
        }
    }
}
