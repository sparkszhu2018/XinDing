namespace Kun.Stock {
    export interface ChangeStockItemRow {
        Id?: string;
        Serial?: number;
        HeadId?: string;
        Status?: string;
        ChangeCode?: string;
        FromStockId?: string;
        FromMaterialId?: string;
        FromUnitId?: string;
        FromWarehouseId?: string;
        FromPositionId?: string;
        FromLotId?: string;
        FromBuyPrice?: number;
        FromSalePrice?: number;
        FromSpecification?: string;
        Qty?: number;
        ToStockId?: string;
        ToMaterialId?: string;
        ToUnitId?: string;
        ToWarehouseId?: string;
        ToPositionId?: string;
        ToLotId?: string;
        ToBuyPrice?: number;
        ToSalePrice?: number;
        ToSpecification?: string;
        FromMaterialCode?: string;
        FromMaterialName?: string;
        FromUnitName?: string;
        FromWarehouseName?: string;
        FromPositionName?: string;
        FromLotCode?: string;
        ToMaterialCode?: string;
        ToMaterialName?: string;
        ToUnitName?: string;
        ToWarehouseName?: string;
        ToPositionName?: string;
        ToLotCode?: string;
        BillNo?: string;
        HeadStatus?: Stock.Enums.BillStatus;
        HeadDate?: string;
    }

    export namespace ChangeStockItemRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Stock.ChangeStockItem';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Serial = "Serial",
            HeadId = "HeadId",
            Status = "Status",
            ChangeCode = "ChangeCode",
            FromStockId = "FromStockId",
            FromMaterialId = "FromMaterialId",
            FromUnitId = "FromUnitId",
            FromWarehouseId = "FromWarehouseId",
            FromPositionId = "FromPositionId",
            FromLotId = "FromLotId",
            FromBuyPrice = "FromBuyPrice",
            FromSalePrice = "FromSalePrice",
            FromSpecification = "FromSpecification",
            Qty = "Qty",
            ToStockId = "ToStockId",
            ToMaterialId = "ToMaterialId",
            ToUnitId = "ToUnitId",
            ToWarehouseId = "ToWarehouseId",
            ToPositionId = "ToPositionId",
            ToLotId = "ToLotId",
            ToBuyPrice = "ToBuyPrice",
            ToSalePrice = "ToSalePrice",
            ToSpecification = "ToSpecification",
            FromMaterialCode = "FromMaterialCode",
            FromMaterialName = "FromMaterialName",
            FromUnitName = "FromUnitName",
            FromWarehouseName = "FromWarehouseName",
            FromPositionName = "FromPositionName",
            FromLotCode = "FromLotCode",
            ToMaterialCode = "ToMaterialCode",
            ToMaterialName = "ToMaterialName",
            ToUnitName = "ToUnitName",
            ToWarehouseName = "ToWarehouseName",
            ToPositionName = "ToPositionName",
            ToLotCode = "ToLotCode",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus",
            HeadDate = "HeadDate"
        }
    }
}
