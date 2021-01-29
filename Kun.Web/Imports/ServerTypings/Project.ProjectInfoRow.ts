namespace Kun.Project {
    export interface ProjectInfoRow {
        Id?: string;
        BillNo?: string;
        BillType?: number;
        Status?: number;
        Name?: string;
        BudgetAmount?: number;
        ActualAmount?: number;
        Date?: string;
        CustomerId?: string;
        Contact?: string;
        PhoneNo?: string;
        Address?: string;
        RetentionDueDate?: string;
        Payment?: string;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
    }

    export namespace ProjectInfoRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Project.ProjectInfo';
        export const lookupKey = 'Project.ProjectInfo';

        export function getLookup(): Q.Lookup<ProjectInfoRow> {
            return Q.getLookup<ProjectInfoRow>('Project.ProjectInfo');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            BillNo = "BillNo",
            BillType = "BillType",
            Status = "Status",
            Name = "Name",
            BudgetAmount = "BudgetAmount",
            ActualAmount = "ActualAmount",
            Date = "Date",
            CustomerId = "CustomerId",
            Contact = "Contact",
            PhoneNo = "PhoneNo",
            Address = "Address",
            RetentionDueDate = "RetentionDueDate",
            Payment = "Payment",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate"
        }
    }
}
