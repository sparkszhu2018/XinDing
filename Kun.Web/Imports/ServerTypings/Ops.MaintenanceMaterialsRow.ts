namespace Kun.Ops {
    export interface MaintenanceMaterialsRow {
        Id?: string;
        HeadId?: string;
        Serial?: number;
        StockDataId?: string;
        MaterialId?: string;
        UnitId?: string;
        Qty?: number;
        SalePrice?: number;
        SaleAmount?: number;
        LotId?: string;
        WarehouseId?: string;
        PositionId?: string;
        Specification?: string;
        BillNo?: string;
        HeadStatus?: Ops.Enums.BillStatus;
        UnitName?: string;
        MaterialCode?: string;
        MaterialName?: string;
        LotCode?: string;
        WarehouseName?: string;
        PositionName?: string;
        BuyPrice?: number;
        BuyAmount?: number;
    }

    export namespace MaintenanceMaterialsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'MaterialCode';
        export const localTextPrefix = 'Ops.MaintenanceMaterials';
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
            UnitId = "UnitId",
            Qty = "Qty",
            SalePrice = "SalePrice",
            SaleAmount = "SaleAmount",
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            PositionId = "PositionId",
            Specification = "Specification",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus",
            UnitName = "UnitName",
            MaterialCode = "MaterialCode",
            MaterialName = "MaterialName",
            LotCode = "LotCode",
            WarehouseName = "WarehouseName",
            PositionName = "PositionName",
            BuyPrice = "BuyPrice",
            BuyAmount = "BuyAmount"
        }
    }
}
