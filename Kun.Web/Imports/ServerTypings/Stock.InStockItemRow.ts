﻿namespace Kun.Stock {
    export interface InStockItemRow {
        Id?: string;
        HeadId?: string;
        Status?: string;
        MaterialId?: string;
        UnitId?: string;
        DeliveryQty?: number;
        ConfirmQty?: number;
        SupplierId?: string;
        BuyPrice?: number;
        BuyAmount?: number;
        SalePrice?: number;
        SaleAmount?: number;
        LotId?: string;
        WarehouseId?: string;
        InvoiceType?: Stock.Enums.InvoiceType;
        Specification?: string;
        BillNo?: string;
        HeadType?: Stock.Enums.InStockBillType;
        HeadStatus?: Stock.Enums.BillStatus;
        HeadDate?: string;
        ApproverId?: number;
        ApproverDate?: string;
        UnitName?: string;
        MaterialCode?: string;
        MaterialName?: string;
        SupplierName?: string;
        LotCode?: string;
        WarehouseName?: string;
        ApproverName?: string;
        InvoiceTypeName?: string;
        PositionId?: string;
        PositionName?: string;
    }

    export namespace InStockItemRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Stock.InStockItem';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            HeadId = "HeadId",
            Status = "Status",
            MaterialId = "MaterialId",
            UnitId = "UnitId",
            DeliveryQty = "DeliveryQty",
            ConfirmQty = "ConfirmQty",
            SupplierId = "SupplierId",
            BuyPrice = "BuyPrice",
            BuyAmount = "BuyAmount",
            SalePrice = "SalePrice",
            SaleAmount = "SaleAmount",
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            InvoiceType = "InvoiceType",
            Specification = "Specification",
            BillNo = "BillNo",
            HeadType = "HeadType",
            HeadStatus = "HeadStatus",
            HeadDate = "HeadDate",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate",
            UnitName = "UnitName",
            MaterialCode = "MaterialCode",
            MaterialName = "MaterialName",
            SupplierName = "SupplierName",
            LotCode = "LotCode",
            WarehouseName = "WarehouseName",
            ApproverName = "ApproverName",
            InvoiceTypeName = "InvoiceTypeName",
            PositionId = "PositionId",
            PositionName = "PositionName"
        }
    }
}
