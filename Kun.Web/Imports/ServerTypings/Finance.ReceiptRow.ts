namespace Kun.Finance {
    export interface ReceiptRow {
        Id?: string;
        BillNo?: string;
        Date?: string;
        BillType?: number;
        Status?: number;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
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
            BillNo = "BillNo",
            Date = "Date",
            BillType = "BillType",
            Status = "Status",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate"
        }
    }
}
