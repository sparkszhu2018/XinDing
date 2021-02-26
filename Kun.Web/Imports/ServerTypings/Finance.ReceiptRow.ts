namespace Kun.Finance {
    export interface ReceiptRow {
        Id?: string;
        Date?: string;
        BillNo?: string;
        Status?: Finance.Enums.BillStatus;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
        ApproverName?: string;
        Items?: ReceiptItemRow[];
    }

    export namespace ReceiptRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Finance.Receipt';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Date = "Date",
            BillNo = "BillNo",
            Status = "Status",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate",
            ApproverName = "ApproverName",
            Items = "Items"
        }
    }
}
