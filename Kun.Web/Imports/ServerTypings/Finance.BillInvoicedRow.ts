
namespace Kun.Finance {
    export interface BillInvoicedRow {
        Id?: string;
        SourceDocumentType?: number;
        SourceDocumentId?: string;
        SourceDocumentNo?: string;
        SourceItemId?: string;
        SourceItemSerial?: number;
        Amount?: number;
        InvoiceAmount?: number;
    }

    export namespace BillInvoicedRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SourceDocumentNo';
        export const localTextPrefix = 'Finance.BillInvoiced';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export namespace Fields {
            export declare const Id;
            export declare const SourceDocumentType;
            export declare const SourceDocumentId;
            export declare const SourceDocumentNo;
            export declare const SourceItemId;
            export declare const SourceItemSerial;
            export declare const Amount;
            export declare const InvoiceAmount;
        }

        [
            'Id',
            'SourceDocumentType',
            'SourceDocumentId',
            'SourceDocumentNo',
            'SourceItemId',
            'SourceItemSerial',
            'Amount',
            'InvoiceAmount'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}