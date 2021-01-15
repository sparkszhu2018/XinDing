namespace Kun.Stock {
    export interface MoveRecordRow {
        Id?: string;
        MovCode?: Stock.Enums.MoveType;
        FromStockId?: string;
        FromMaterialId?: string;
        FromUnitId?: string;
        FromWarehouseId?: string;
        FromPositionId?: string;
        FromLotId?: string;
        FromMaterialCode?: string;
        FromMaterialName?: string;
        FromUnitName?: string;
        FromWarehouseName?: string;
        FromPositionName?: string;
        FromLotCode?: string;
        Qty?: number;
        ToStockId?: string;
        ToMaterialId?: string;
        ToUnitId?: string;
        ToWarehouseId?: string;
        ToPositionId?: string;
        ToLotId?: string;
        ToMaterialCode?: string;
        ToMaterialName?: string;
        ToUnitName?: string;
        ToWarehouseName?: string;
        ToPositionName?: string;
        ToLotCode?: string;
        BizBillType?: Sys.Enum.DocumentKind;
        BizBillId?: string;
        BizItemId?: string;
        Status?: Stock.Enums.Status;
        BizBillCode?: string;
    }

    export namespace MoveRecordRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'Stock.MoveRecord';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            MovCode = "MovCode",
            FromStockId = "FromStockId",
            FromMaterialId = "FromMaterialId",
            FromUnitId = "FromUnitId",
            FromWarehouseId = "FromWarehouseId",
            FromPositionId = "FromPositionId",
            FromLotId = "FromLotId",
            FromMaterialCode = "FromMaterialCode",
            FromMaterialName = "FromMaterialName",
            FromUnitName = "FromUnitName",
            FromWarehouseName = "FromWarehouseName",
            FromPositionName = "FromPositionName",
            FromLotCode = "FromLotCode",
            Qty = "Qty",
            ToStockId = "ToStockId",
            ToMaterialId = "ToMaterialId",
            ToUnitId = "ToUnitId",
            ToWarehouseId = "ToWarehouseId",
            ToPositionId = "ToPositionId",
            ToLotId = "ToLotId",
            ToMaterialCode = "ToMaterialCode",
            ToMaterialName = "ToMaterialName",
            ToUnitName = "ToUnitName",
            ToWarehouseName = "ToWarehouseName",
            ToPositionName = "ToPositionName",
            ToLotCode = "ToLotCode",
            BizBillType = "BizBillType",
            BizBillId = "BizBillId",
            BizItemId = "BizItemId",
            Status = "Status",
            BizBillCode = "BizBillCode"
        }
    }
}
