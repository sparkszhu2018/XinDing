/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Sell {

    @Serenity.Decorators.registerClass()
    export class SaleOrderItemEditor extends Common.GridEditorBase<SaleOrderItemRow> {
        protected getColumnsKey() { return "Sell.SaleOrderItemEditorColumns"; } 
        protected getDialogType() { return SaleOrderItemDialog; }
        protected getLocalTextPrefix() { return SaleOrderItemRow.localTextPrefix; }

        private _head: SaleOrderRow;
        get Head() { return this._head; }
        set Head(value: SaleOrderRow) {
            this._head = value; 
            if (this._head.Status !== Enums.BillStatus.Edit && this._head.Status !== Enums.BillStatus.Reject && this._head.Status !== Enums.BillStatus.UnAudited) {
                this.toolbar.findButton('add-button').hide();
                this.toolbar.findButton('attach-button').hide();
            } else {
                this.toolbar.findButton('add-button').show();
                this.toolbar.findButton('attach-button').show();
            }
        }

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


            buttons.push({
                title: "",
                icon: "fa-paperclip",
                cssClass: "attach-button",
                onClick: () => {
                    var i = 0;
                    if (this.view.getLength() == 0) {
                        i = 10;
                    } else {
                        i = this.view.getItems()[this.view.getLength() - 1].Serial + 10;
                    }
                    var item = <SaleOrderItemRow>{
                        Serial: i,
                        StockDataId: null,
                        MaterialId: 'd0a674ec-551c-449a-8eb7-57a6edcf26e0',
                        MaterialName: '',
                        UnitId: 'b18339d0-ed34-4fdc-88eb-5e16a8b42a2b',
                        UnitName: '个',
                        Qty: 1,
                        SalePrice: 0,
                        SaleAmount: 0,
                        MaterialCode: '1000000',
                    };
                    var id = this.getNextId();
                    item[this.getIdProperty()] = id;
                    this.view.addItem(item);
                    i = i + 10;

                    return true;

                }
            });
            return buttons;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('BuyAmount'),
                    new Slick.Aggregators.Sum('SaleAmount'),
                ]
            });

            return grid;
        }

        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.showFooterRow = true;
            return opt;
        }
         
    }
}