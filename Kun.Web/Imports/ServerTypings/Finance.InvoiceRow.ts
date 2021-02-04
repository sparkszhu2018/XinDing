namespace Kun.Finance {
    export interface InvoiceRow {
        Id?: string;
        BillNo?: string;
        BillType?: number;
        Status?: number;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
    }

    export namespace InvoiceRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Finance.Invoice';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            BillNo = "BillNo",
            BillType = "BillType",
            Status = "Status",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate"
        }
    }
}
