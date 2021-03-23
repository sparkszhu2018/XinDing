namespace Kun.Stock {
    export interface OutStockItemRow {
        Id?: string;
        HeadId?: string;
        Serial?: number;
        StockDataId?: string;
        MaterialId?: string;
        MaterialName?: string;
        UnitId?: string;
        UnitName?: string;
        Qty?: number;
        LotId?: string;
        WarehouseId?: string;
        PositionId?: string;
        Specification?: string;
        BillNo?: string;
        HeadStatus?: Stock.Enums.BillStatus;
        HeadDate?: string;
        MaterialCode?: string;
        LotCode?: string;
        WarehouseName?: string;
        PositionName?: string;
        BuyPrice?: number;
        BuyAmount?: number;
        StockQty?: number;
    }

    export namespace OutStockItemRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'MaterialName';
        export const localTextPrefix = 'Stock.OutStockItem';
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
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            PositionId = "PositionId",
            Specification = "Specification",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus",
            HeadDate = "HeadDate",
            MaterialCode = "MaterialCode",
            LotCode = "LotCode",
            WarehouseName = "WarehouseName",
            PositionName = "PositionName",
            BuyPrice = "BuyPrice",
            BuyAmount = "BuyAmount",
            StockQty = "StockQty"
        }
    }
}
