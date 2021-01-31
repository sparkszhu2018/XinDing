namespace Kun.Project {
    export interface BizBillRow {
        Id?: string;
        BillNo?: string;
        BillType?: number;
        Status?: Project.Enums.BillStatus;
        Date?: string;
        ProjectId?: string;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
        ApproverName?: string;
        ProjectName?: string;
        ProjectBillNo?: string;
        Items?: BizItemRow[];
    }

    export namespace BizBillRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Project.BizBill';
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
            ApproverDate = "ApproverDate",
            ApproverName = "ApproverName",
            ProjectName = "ProjectName",
            ProjectBillNo = "ProjectBillNo",
            Items = "Items"
        }
    }
}
