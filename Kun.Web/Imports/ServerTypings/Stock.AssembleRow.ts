namespace Kun.Stock {
    export interface AssembleRow {
        Id?: string;
        BillNo?: string;
        Status?: Stock.Enums.BillStatus;
        Date?: string;
        ToMaterialId?: string;
        UnitId?: string;
        Qty?: number;
        BuyPrice?: number;
        BuyAmount?: number;
        StockDataId?: string;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
        ApproverName?: string;
        ToMaterialCode?: string;
        ToMaterialName?: string;
        UnitName?: string;
        LotId?: string;
        WarehouseId?: string;
        PositionId?: string;
        LotCode?: string;
        WarehouseName?: string;
        PositionName?: string;
        Items?: AssembleItemRow[];
    }

    export namespace AssembleRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Stock.Assemble';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            BillNo = "BillNo",
            Status = "Status",
            Date = "Date",
            ToMaterialId = "ToMaterialId",
            UnitId = "UnitId",
            Qty = "Qty",
            BuyPrice = "BuyPrice",
            BuyAmount = "BuyAmount",
            StockDataId = "StockDataId",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate",
            ApproverName = "ApproverName",
            ToMaterialCode = "ToMaterialCode",
            ToMaterialName = "ToMaterialName",
            UnitName = "UnitName",
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            PositionId = "PositionId",
            LotCode = "LotCode",
            WarehouseName = "WarehouseName",
            PositionName = "PositionName",
            Items = "Items"
        }
    }
}
