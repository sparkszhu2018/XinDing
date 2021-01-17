namespace Kun.Sell {
    export interface SaleOrderRow {
        Id?: string;
        BillNo?: string;
        BillType?: Sell.Enums.SaleOrderBillType;
        Status?: Sell.Enums.BillStatus;
        Date?: string;
        CustomerId?: string;
        SettleCustomerId?: string;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
        CustomerName?: string;
        SettleCustomerName?: string;
        ApproverName?: string;
        Materials?: SaleOrderItemRow[];
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
            ApproverDate = "ApproverDate",
            CustomerName = "CustomerName",
            SettleCustomerName = "SettleCustomerName",
            ApproverName = "ApproverName",
            Materials = "Materials"
        }
    }
}
