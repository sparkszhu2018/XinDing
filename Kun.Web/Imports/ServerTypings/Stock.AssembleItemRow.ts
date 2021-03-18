namespace Kun.Stock {
    export interface AssembleItemRow {
        Id?: string;
        HeadId?: string;
        Serial?: number;
        Status?: string;
        MaterialId?: string;
        UnitId?: string;
        Qty?: number;
        LotId?: string;
        WarehouseId?: string;
        PositionId?: string;
        Specification?: string;
        StockDataId?: string;
        BuyPrice?: number;
        BuyAmount?: number;
        BillNo?: string;
        HeadStatus?: Stock.Enums.BillStatus;
        HeadDate?: string;
        UnitName?: string;
        MaterialCode?: string;
        MaterialName?: string;
        LotCode?: string;
        WarehouseName?: string;
        PositionName?: string;
    }

    export namespace AssembleItemRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Stock.AssembleItem';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            HeadId = "HeadId",
            Serial = "Serial",
            Status = "Status",
            MaterialId = "MaterialId",
            UnitId = "UnitId",
            Qty = "Qty",
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            PositionId = "PositionId",
            Specification = "Specification",
            StockDataId = "StockDataId",
            BuyPrice = "BuyPrice",
            BuyAmount = "BuyAmount",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus",
            HeadDate = "HeadDate",
            UnitName = "UnitName",
            MaterialCode = "MaterialCode",
            MaterialName = "MaterialName",
            LotCode = "LotCode",
            WarehouseName = "WarehouseName",
            PositionName = "PositionName"
        }
    }
}
