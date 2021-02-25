namespace Kun.Finance {
    export interface InvoiceItemRow {
        Id?: string;
        HeadId?: string;
        Serial?: number;
        SourceDocumentType?: Finance.Enums.InvoiceBillType;
        SourceDocumentId?: string;
        SourceDocumentNo?: string;
        SourceItemId?: string;
        SourceItemSerial?: number;
        Name?: string;
        UnitName?: string;
        Price?: number;
        Qty?: number;
        Amount?: number;
        InvoiceAmount?: number;
        TaxRate?: number;
        InvoiceNo?: string;
        Note?: string;
        BillNo?: string;
        HeadStatus?: Finance.Enums.BillStatus;
        HeadDate?: string;
        Kind?: Finance.Enums.InvoiceItemKind;
        ReceiptAmount?: number;
    }

    export namespace InvoiceItemRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'SourceDocumentNo';
        export const localTextPrefix = 'Finance.InvoiceItem';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            HeadId = "HeadId",
            Serial = "Serial",
            SourceDocumentType = "SourceDocumentType",
            SourceDocumentId = "SourceDocumentId",
            SourceDocumentNo = "SourceDocumentNo",
            SourceItemId = "SourceItemId",
            SourceItemSerial = "SourceItemSerial",
            Name = "Name",
            UnitName = "UnitName",
            Price = "Price",
            Qty = "Qty",
            Amount = "Amount",
            InvoiceAmount = "InvoiceAmount",
            TaxRate = "TaxRate",
            InvoiceNo = "InvoiceNo",
            Note = "Note",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus",
            HeadDate = "HeadDate",
            Kind = "Kind",
            ReceiptAmount = "ReceiptAmount"
        }
    }
}
