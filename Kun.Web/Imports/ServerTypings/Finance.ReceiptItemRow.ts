namespace Kun.Finance {
    export interface ReceiptItemRow {
        Id?: string;
        HeadId?: string;
        Serial?: number;
        SourceDocumentId?: string;
        SourceDocumentNo?: string;
        SourceItemId?: string;
        SourceItemSerial?: number;
        Name?: string;
        InvoiceAmount?: number;
        BalanceAmount?: number;
        ReceiptAmount?: number;
        Note?: string;
        BillNo?: string;
        HeadStatus?: Finance.Enums.BillStatus;
        HeadDate?: string;
    }

    export namespace ReceiptItemRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'SourceDocumentNo';
        export const localTextPrefix = 'Finance.ReceiptItem';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            HeadId = "HeadId",
            Serial = "Serial",
            SourceDocumentId = "SourceDocumentId",
            SourceDocumentNo = "SourceDocumentNo",
            SourceItemId = "SourceItemId",
            SourceItemSerial = "SourceItemSerial",
            Name = "Name",
            InvoiceAmount = "InvoiceAmount",
            BalanceAmount = "BalanceAmount",
            ReceiptAmount = "ReceiptAmount",
            Note = "Note",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus",
            HeadDate = "HeadDate"
        }
    }
}
