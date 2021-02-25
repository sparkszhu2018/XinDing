
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
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Finance.Receipt';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export namespace Fields {
            export declare const Id;
            export declare const BillNo;
            export declare const Date;
            export declare const BillType;
            export declare const Status;
            export declare const Note;
            export declare const ApproverId;
            export declare const ApproverDate;
        }

        [
            'Id',
            'BillNo',
            'Date',
            'BillType',
            'Status',
            'Note',
            'ApproverId',
            'ApproverDate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}