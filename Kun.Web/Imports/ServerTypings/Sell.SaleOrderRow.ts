namespace Kun.Sell {
    export interface SaleOrderRow {
        Id?: string;
        BillNo?: string;
        BillType?: number;
        Status?: number;
        Date?: string;
        CustomerId?: string;
        SettleCustomerId?: string;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
    }

    export namespace SaleOrderRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Sell.SaleOrder';
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
            CustomerId = "CustomerId",
            SettleCustomerId = "SettleCustomerId",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate"
        }
    }
}
