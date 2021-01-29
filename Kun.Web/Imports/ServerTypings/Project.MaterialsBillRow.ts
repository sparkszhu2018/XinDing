namespace Kun.Project {
    export interface MaterialsBillRow {
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

    export namespace MaterialsBillRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Project.MaterialsBill';
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
