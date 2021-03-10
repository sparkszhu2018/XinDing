namespace Kun.Stock {
    export interface StockDataRow {
        Id?: string;
        MaterialId?: string;
        Qty?: number;
        ReservedQty?: number;
        AvailableQty?: number;
        UnitId?: string;
        LotId?: string;
        WarehouseId?: string;
        BuyPrice?: number;
        BuyAmount?: number;
        SalePrice?: number;
        SaleAmount?: number;
        Specification?: string;
        UnitName?: string;
        MaterialCode?: string;
        MaterialName?: string;
        LotCode?: string;
        PositionId?: string;
        PositionName?: string;
        WarehouseName?: string;
        Applicant?: string;
    }

    export namespace StockDataRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Specification';
        export const localTextPrefix = 'Stock.StockData';
        export const lookupKey = 'Stock.StockData';

        export function getLookup(): Q.Lookup<StockDataRow> {
            return Q.getLookup<StockDataRow>('Stock.StockData');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            MaterialId = "MaterialId",
            Qty = "Qty",
            ReservedQty = "ReservedQty",
            AvailableQty = "AvailableQty",
            UnitId = "UnitId",
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            BuyPrice = "BuyPrice",
            BuyAmount = "BuyAmount",
            SalePrice = "SalePrice",
            SaleAmount = "SaleAmount",
            Specification = "Specification",
            UnitName = "UnitName",
            MaterialCode = "MaterialCode",
            MaterialName = "MaterialName",
            LotCode = "LotCode",
            PositionId = "PositionId",
            PositionName = "PositionName",
            WarehouseName = "WarehouseName",
            Applicant = "Applicant"
        }
    }
}
