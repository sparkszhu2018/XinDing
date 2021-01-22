/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class ChangeStockItemEditor extends Common.GridEditorBase<ChangeStockItemRow> {
        protected getColumnsKey() { return "Stock.ChangeStockItem"; }
        protected getDialogType() { return ChangeStockItemEditorDialog; }
        protected getLocalTextPrefix() { return ChangeStockItemRow.localTextPrefix; }

        protected status: Stock.Enums.BillStatus;
        private _head: Stock.ChangeStockRow;
        get Head() { return this._head; }
        set Head(value: ChangeStockRow) {
            this._head = value; 
            if (this._head.Status !== Stock.Enums.BillStatus.Edit && this._head.Status !== Stock.Enums.BillStatus.Reject) {
                this.toolbar.findButton('add-button').hide();
            } else {
                this.toolbar.findButton('add-button').show();
            }
        }

        constructor(container: JQuery) {
            super(container); 
        }

        validateEntity(row, id) { 
            var fromMaterial = Basic.MaterialRow.getLookup().itemById[row.FromMaterialId];
            if (fromMaterial.Code == '10000000') {
                Q.notifyError("不得选择虚拟物料!")
                return false;
            }
            row.FromMaterialName = fromMaterial.Name;
            row.FromMaterialCode = fromMaterial.Code;
            row.FromUnitName = Basic.UnitRow.getLookup().itemById[fromMaterial.UnitId].Name;

            var toMaterial = Basic.MaterialRow.getLookup().itemById[row.ToMaterialId];
            row.ToMaterialName = toMaterial.Name;
            row.ToMaterialCode = toMaterial.Code;
            row.ToUnitName = Basic.UnitRow.getLookup().itemById[toMaterial.UnitId].Name;
              
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
                            var item = <ChangeStockItemRow>{
                                Serial: i,
                                FromStockId: sel.Id,
                                FromMaterialId: sel.MaterialId,
                                FromUnitId: sel.UnitId,
                                FromWarehouseId: sel.WarehouseId,
                                FromPositionId: sel.PositionId,
                                FromLotId: sel.LotId,
                                FromMaterialCode: sel.MaterialCode,
                                FromMaterialName: sel.MaterialName,
                                FromUnitName: sel.UnitName,
                                FromWarehouseName: sel.WarehouseName,
                                FromPositionName: sel.PositionName,
                                FromLotCode: sel.LotCode,

                                FromBuyPrice: sel.BuyPrice,
                                FromSalePrice: sel.SalePrice,
                                FromSpecification: sel.Specification,
                                Qty: sel.AvailableQty,
                                ToStockId: null,
                                ToMaterialId: sel.MaterialId,
                                ToUnitId: sel.UnitId,
                                ToWarehouseId: sel.WarehouseId,
                                ToPositionId: sel.PositionId,
                                ToLotId: sel.LotId,
                                ToMaterialCode: sel.MaterialCode, 
                                ToMaterialName: sel.MaterialName,
                                ToUnitName: sel.UnitName,
                                ToWarehouseName: sel.WarehouseName,
                                ToPositionName: sel.PositionName,
                                ToLotCode: sel.LotCode,

                                ToBuyPrice: sel.BuyPrice,
                                ToSalePrice: sel.SalePrice,
                                ToSpecification: sel.Specification,  
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