/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class InStockItemEditor extends Common.GridEditorBase<InStockItemRow> {
        protected getColumnsKey() { return "Stock.InStockItemEditorColumns"; }
        protected getDialogType() { return InStockItemEditorDialog; }
        protected getLocalTextPrefix() { return InStockItemRow.localTextPrefix; }

        protected status: Stock.Enums.BillStatus;
        private _head: Stock.InStockRow;
        get Head() { return this._head; }
        set Head(value: InStockRow) {
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
 
            row.InvoiceTypeName = Serenity.EnumFormatter.format(Stock.Enums.InvoiceType, Q.toId(row.InvoiceType)); 

            row.SupplierName = Basic.SupplierRow.getLookup().itemById[row.SupplierId].Name;
            if (!Q.isEmptyOrNull(row.WarehouseId)) { 
                row.WarehouseName = Basic.WarehouseRow.getLookup().itemById[row.WarehouseId].Name; 
            }
            if (!Q.isEmptyOrNull(row.PositionId)) {
                row.PositionName = Basic.PositionRow.getLookup().itemById[row.PositionId].Name;
            }
            return true;
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons[0].onClick = () => {
                var i = 0;
                if (this.view.getLength() == 0) {
                    i = 10;
                } else {
                    if (isNaN(this.view.getItems()[this.view.getLength() - 1].Serial)) {
                        i = 10;
                    } else {
                        i = this.view.getItems()[this.view.getLength() - 1].Serial + 10;
                    }
                } 
                this.createEntityDialog(this.getItemType(), dlg => {
                    var dialog = dlg as InStockItemEditorDialog;
                    dialog.Head = this._head;
                    dialog.onSave = (opt, callback) => this.save(opt, callback);
                    var entity = this.getNewEntity() as InStockItemRow; 
                    entity.Serial = i;
                    dialog.loadEntityAndOpenDialog(entity);
                });
            }
            return buttons; 
        }
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('BuyAmount'),
                ]
            });

            return grid;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            // opt.groupingPanel = true;
            opt.showFooterRow = true;
            return opt;
        }
    }
}