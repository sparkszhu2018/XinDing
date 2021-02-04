namespace Kun.Project {
    export interface ServiceItemRow {
        Id?: string;
        ProjectId?: string;
        HeadId?: string;
        Serial?: number;
        Name?: string;
        Price?: number;
        Qty?: number;
        Amount?: number;
        Note?: string;
        BillNo?: string;
        HeadStatus?: Project.Enums.BillStatus;
        ProjectName?: string;
        ProjectBillNo?: string;
        HeadProjectId?: string;
    }

    export namespace ServiceItemRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Project.ServiceItem';
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
            Price = "Price",
            Qty = "Qty",
            Amount = "Amount",
            Note = "Note",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus",
            ProjectName = "ProjectName",
            ProjectBillNo = "ProjectBillNo",
            HeadProjectId = "HeadProjectId"
        }
    }
}
