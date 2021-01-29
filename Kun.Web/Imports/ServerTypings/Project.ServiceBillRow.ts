namespace Kun.Project {
    export interface ServiceBillRow {
        Id?: string;
        BillNo?: string;
        BillType?: number;
        Status?: number;
        Date?: string;
        ProjectId?: string;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
    }

    export namespace ServiceBillRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Project.ServiceBill';
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
            ProjectId = "ProjectId",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate"
        }
    }
}
