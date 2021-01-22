namespace Kun.Stock {
    export interface ChangeStockRow {
        Id?: string;
        BillNo?: string;
        BillType?: number;
        Status?: Stock.Enums.BillStatus;
        Date?: string;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
        ApproverName?: string;
        Items?: ChangeStockItemRow[];
    }

    export namespace ChangeStockRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Stock.ChangeStock';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            BillNo = "BillNo",
            BillType = "BillType",
            Status = "Status",
            Date = "Date",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate",
            ApproverName = "ApproverName",
            Items = "Items"
        }
    }
}
