namespace Kun.Project {
    export interface ServiceItemRow {
        Id?: string;
        ProjectId?: string;
        HeadId?: string;
        Serial?: number;
        Name?: string;
        SalePrice?: number;
        Qty?: number;
        SaleAmount?: number;
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
            SalePrice = "SalePrice",
            Qty = "Qty",
            SaleAmount = "SaleAmount"
        }
    }
}
