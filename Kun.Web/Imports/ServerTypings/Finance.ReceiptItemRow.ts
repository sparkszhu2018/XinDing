
namespace Kun.Finance {
    export interface ReceiptItemRow {
        Id?: string;
        HeadId?: string;
        Serial?: number;
        SourceDocumentType?: number;
        SourceDocumentId?: string;
        SourceDocumentNo?: string;
        SourceItemId?: string;
        SourceItemSerial?: number;
        Name?: string;
        InvoiceAmount?: number;
        BalanceAmount?: number;
        ReceiptAmount?: number;
        Note?: string;
    }

    export namespace ReceiptItemRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SourceDocumentNo';
        export const localTextPrefix = 'Finance.ReceiptItem';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export namespace Fields {
            export declare const Id;
            export declare const HeadId;
            export declare const Serial;
            export declare const SourceDocumentType;
            export declare const SourceDocumentId;
            export declare const SourceDocumentNo;
            export declare const SourceItemId;
            export declare const SourceItemSerial;
            export declare const Name;
            export declare const InvoiceAmount;
            export declare const BalanceAmount;
            export declare const ReceiptAmount;
            export declare const Note;
        }

        [
            'Id',
            'HeadId',
            'Serial',
            'SourceDocumentType',
            'SourceDocumentId',
            'SourceDocumentNo',
            'SourceItemId',
            'SourceItemSerial',
            'Name',
            'InvoiceAmount',
            'BalanceAmount',
            'ReceiptAmount',
            'Note'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}