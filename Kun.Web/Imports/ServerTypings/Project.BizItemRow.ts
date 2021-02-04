namespace Kun.Project {
    export interface BizItemRow {
        Id?: string;
        ProjectId?: string;
        HeadId?: string;
        Serial?: number;
        Name?: string;
        BizType?: string;
        Amount?: number;
        Note?: string;
        BillNo?: string;
        HeadStatus?: Project.Enums.BillStatus;
        ProjectName?: string;
        ProjectBillNo?: string;
        BizTypeName?: string;
        HeadProjectId?: string;
    }

    export namespace BizItemRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Project.BizItem';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            ProjectId = "ProjectId",
            HeadId = "HeadId",
            Serial = "Serial",
            Name = "Name",
            BizType = "BizType",
            Amount = "Amount",
            Note = "Note",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus",
            ProjectName = "ProjectName",
            ProjectBillNo = "ProjectBillNo",
            BizTypeName = "BizTypeName",
            HeadProjectId = "HeadProjectId"
        }
    }
}
