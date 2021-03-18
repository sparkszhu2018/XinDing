/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class AssembleItemEditor extends Common.GridEditorBase<AssembleItemRow> {
        protected getColumnsKey() { return "Stock.AssembleItem"; }
        protected getDialogType() { return AssembleItemEditorDialog; }
        protected getLocalTextPrefix() { return AssembleItemRow.localTextPrefix; }

        protected status: Stock.Enums.BillStatus;
        private _head: Stock.AssembleRow;
        get Head() { return this._head; }
        set Head(value: AssembleRow) {
            this._head = value; 
            if (this._head.Status !== Stock.Enums.BillStatus.Edit && this._head.Status !== Stock.Enums.BillStatus.Reject
                && this._head.Status !== Stock.Enums.BillStatus.UnAudited) {
                this.toolbar.findButton('add-button').hide();
            } else {
                this.toolbar.findButton('add-button').show();
            }
        }

        constructor(container: JQuery) {
            super(container); 
        }

        validateEntity(row, id) { 
            var material = Basic.MaterialRow.getLookup().itemById[row.MaterialId];
            if (material.Code == '10000000') {
                Q.notifyError("不得选择虚拟物料!")
                return false;
            }  
            row.MaterialName = material.Name;
            row.MaterialCode = material.Code;
            row.UnitName = Basic.UnitRow.getLookup().itemById[material.UnitId].Name; 
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
                            var item = <AssembleItemRow>{
                                Serial: i, 
                                StockDataId: sel.Id,
                                MaterialId: sel.MaterialId,
                                MaterialName: sel.MaterialName,
                                UnitId: sel.UnitId,
                                UnitName: sel.UnitName,
                                Qty: 1,
                                //SalePrice: sel.SalePrice,
                                //SaleAmount: sel.SalePrice * 1,
                                BuyPrice: sel.BuyPrice,
                                BuyAmount: sel.BuyPrice * 1,
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