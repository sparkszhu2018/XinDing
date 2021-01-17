/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Sell {

    @Serenity.Decorators.registerClass()
    export class SaleOrderItemEditor extends Common.GridEditorBase<SaleOrderItemRow> {
        protected getColumnsKey() { return "Sell.SaleOrderItem"; } 
        protected getDialogType() { return SaleOrderItemDialog; }
        protected getLocalTextPrefix() { return SaleOrderItemRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container); 
        } 

        validateEntity(row, id) { 
            var material = Basic.MaterialRow.getLookup().itemById[row.MaterialId]; 
            row.MaterialCode = material.Code; 
            if (!Q.isEmptyOrNull(row.LotId)) {
                row.LotCode = Basic.LotRow.getLookup().itemById[row.LotId].Code;
            }
            if (!Q.isEmptyOrNull(row.WarehouseId)) { 
                row.WarehouseName = Basic.WarehouseRow.getLookup().itemById[row.WarehouseId].Name;
            }
            if(!Q.isEmptyOrNull(row.PositionId)) {
                row.PositionName = Basic.PositionRow.getLookup().itemById[row.PositionId].Name;
            }
            return true;
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.push({
                title: "选择物料",
                cssClass: "add-button",
                onClick: () => {
                    var dlg = new Stock.StockDataPickerDialog({
                        hideStockData: null
                    });
                    dlg.onSuccess = (selected) => {
                        // filter already existing stocks
                        //selected = selected.filter(x => !Q.any(this.view.getItems(), y => y.ProductID == x.ProductID));
                        var i = 0;
                        if (this.view.getLength() == 0) {
                            i = 10;
                        } else {
                            i = this.view.getItems()[this.view.getLength() - 1].Serial + 10;
                        }
                        for (var sel of selected) {
                            var item = <SaleOrderItemRow>{
                                Serial: i,
                                StockDataId: sel.Id,
                                MaterialId: sel.MaterialId,
                                MaterialName: sel.MaterialName,
                                UnitId: sel.UnitId,
                                UnitName: sel.UnitName,
                                Qty: 1,
                                SalePrice: sel.SalePrice,
                                SaleAmount: sel.SalePrice * 1,
                                LotId: sel.LotId,
                                WarehouseId: sel.WarehouseId,
                                PositionId: sel.PositionId,
                                Specification: sel.Specification,
                                MaterialCode: sel.MaterialCode,
                                LotCode: sel.LotCode,
                                WarehouseName: sel.WarehouseName,
                                PositionName: sel.PositionName
                            };
                            var id = this.getNextId();
                            item[this.getIdProperty()] = id;
                            this.view.addItem(item);
                            i = i + 10;
                        }

                        return true;
                    };
                    dlg.dialogOpen();
                }
            }); 
            return buttons;
        }
         
    }
}