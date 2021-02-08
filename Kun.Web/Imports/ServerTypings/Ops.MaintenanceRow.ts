namespace Kun.Ops {
    export interface MaintenanceRow {
        Id?: string;
        BillNo?: string;
        BillType?: Ops.Enums.MaintenanceBillType;
        Status?: Ops.Enums.BillStatus;
        Date?: string;
        VendorId?: string;
        Reporter?: string;
        ReporterPhone?: string;
        ReportDate?: string;
        ReportCustomerId?: string;
        SettleCustomerId?: string;
        Address?: string;
        Description?: string;
        Content?: string;
        ChangeDevice?: boolean;
        ReporterComment?: string;
        ReporterConfirmDate?: string;
        CustomerComment?: string;
        CustomerConfirmDate?: string;
        Note?: string;
        ResponsibleId?: number;
        ApproverId?: number;
        ApproverDate?: string;
        Materials?: MaintenanceMaterialsRow[];
        Manhours?: MaintenanceManhoursRow[];
        VendorName?: string;
        ReportCustomerName?: string;
        SettleCustomerName?: string;
        ResponsibleName?: string;
        ApproverName?: string;
        ServicerCost?: number;
        TypeId?: string;
        TypeName?: string;
        TotalCost?: number;
    }

    export namespace MaintenanceRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Ops.Maintenance';
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
            VendorId = "VendorId",
            Reporter = "Reporter",
            ReporterPhone = "ReporterPhone",
            ReportDate = "ReportDate",
            ReportCustomerId = "ReportCustomerId",
            SettleCustomerId = "SettleCustomerId",
            Address = "Address",
            Description = "Description",
            Content = "Content",
            ChangeDevice = "ChangeDevice",
            ReporterComment = "ReporterComment",
            ReporterConfirmDate = "ReporterConfirmDate",
            CustomerComment = "CustomerComment",
            CustomerConfirmDate = "CustomerConfirmDate",
            Note = "Note",
            ResponsibleId = "ResponsibleId",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate",
            Materials = "Materials",
            Manhours = "Manhours",
            VendorName = "VendorName",
            ReportCustomerName = "ReportCustomerName",
            SettleCustomerName = "SettleCustomerName",
            ResponsibleName = "ResponsibleName",
            ApproverName = "ApproverName",
            ServicerCost = "ServicerCost",
            TypeId = "TypeId",
            TypeName = "TypeName",
            TotalCost = "TotalCost"
        }
    }
}
