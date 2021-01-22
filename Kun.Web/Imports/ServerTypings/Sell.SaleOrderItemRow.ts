namespace Kun.Sell {
    export interface SaleOrderItemRow {
        Id?: string;
        HeadId?: string;
        Serial?: number;
        StockDataId?: string;
        MaterialId?: string;
        MaterialName?: string;
        UnitId?: string;
        UnitName?: string;
        Qty?: number;
        SalePrice?: number;
        SaleAmount?: number;
        LotId?: string;
        WarehouseId?: string;
        PositionId?: string;
        Specification?: string;
        BillNo?: string;
        HeadStatus?: Sell.Enums.BillStatus;
        MaterialCode?: string;
        LotCode?: string;
        WarehouseName?: string;
        PositionName?: string;
        BuyPrice?: number;
        BuyAmount?: number;
        HeadDate?: string;
    }

    export namespace SaleOrderItemRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'MaterialName';
        export const localTextPrefix = 'Sell.SaleOrderItem';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            HeadId = "HeadId",
            Serial = "Serial",
            StockDataId = "StockDataId",
            MaterialId = "MaterialId",
            MaterialName = "MaterialName",
            UnitId = "UnitId",
            UnitName = "UnitName",
            Qty = "Qty",
            SalePrice = "SalePrice",
            SaleAmount = "SaleAmount",
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            PositionId = "PositionId",
            Specification = "Specification",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus",
            MaterialCode = "MaterialCode",
            LotCode = "LotCode",
            WarehouseName = "WarehouseName",
            PositionName = "PositionName",
            BuyPrice = "BuyPrice",
            BuyAmount = "BuyAmount",
            HeadDate = "HeadDate"
        }
    }
}
