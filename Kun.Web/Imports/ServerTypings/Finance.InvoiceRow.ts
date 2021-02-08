namespace Kun.Finance {
    export interface InvoiceRow {
        Id?: string;
        Date?: string;
        BillNo?: string;
        BillType?: Finance.Enums.InvoiceBillType;
        Status?: Finance.Enums.BillStatus;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
        ApproverName?: string;
        Items?: InvoiceItemRow[];
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
            Date = "Date",
            BillNo = "BillNo",
            BillType = "BillType",
            Status = "Status",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate",
            ApproverName = "ApproverName",
            Items = "Items"
        }
    }
}
