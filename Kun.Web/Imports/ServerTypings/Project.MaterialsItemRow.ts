namespace Kun.Project {
    export interface MaterialsItemRow {
        Id?: string;
        ProjectId?: string;
        HeadId?: string;
        Serial?: number;
        StockDataId?: string;
        MaterialId?: string;
        MaterialName?: string;
        UnitId?: string;
        UnitName?: string;
        Qty?: number;
        BuyPrice?: number;
        BuyAmount?: number;
        SalePrice?: number;
        SaleAmount?: number;
        LotId?: string;
        WarehouseId?: string;
        PositionId?: string;
        Specification?: string;
    }

    export namespace MaterialsItemRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'MaterialName';
        export const localTextPrefix = 'Project.MaterialsItem';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            ProjectId = "ProjectId",
            HeadId = "HeadId",
            Serial = "Serial",
            StockDataId = "StockDataId",
            MaterialId = "MaterialId",
            MaterialName = "MaterialName",
            UnitId = "UnitId",
            UnitName = "UnitName",
            Qty = "Qty",
            BuyPrice = "BuyPrice",
            BuyAmount = "BuyAmount",
            SalePrice = "SalePrice",
            SaleAmount = "SaleAmount",
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            PositionId = "PositionId",
            Specification = "Specification"
        }
    }
}
