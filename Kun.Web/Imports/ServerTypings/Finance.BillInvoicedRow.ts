namespace Kun.Finance {
    export interface BillInvoicedRow {
        Id?: string;
        SourceDocumentType?: Finance.Enums.InvoiceBillType;
        SourceDocumentId?: string;
        SourceDocumentNo?: string;
        SourceItemId?: string;
        SourceItemSerial?: number;
        Amount?: number;
        InvoiceAmount?: number;
        Qty?: number;
        Kind?: Finance.Enums.InvoiceItemKind;
    }

    export namespace BillInvoicedRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'SourceDocumentNo';
        export const localTextPrefix = 'Finance.BillInvoiced';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            SourceDocumentType = "SourceDocumentType",
            SourceDocumentId = "SourceDocumentId",
            SourceDocumentNo = "SourceDocumentNo",
            SourceItemId = "SourceItemId",
            SourceItemSerial = "SourceItemSerial",
            Amount = "Amount",
            InvoiceAmount = "InvoiceAmount",
            Qty = "Qty",
            Kind = "Kind"
        }
    }
}
