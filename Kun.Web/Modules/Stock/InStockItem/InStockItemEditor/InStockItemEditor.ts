/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class InStockItemEditor extends Common.GridEditorBase<InStockItemRow> {
        protected getColumnsKey() { return "Stock.InStockItem"; }
        protected getDialogType() { return InStockItemEditorDialog; }
        protected getLocalTextPrefix() { return InStockItemRow.localTextPrefix; }

        protected status: Stock.Enums.BillStatus;
        private _head: Stock.InStockRow;
        get Head() { return this._head; }
        set Head(value: InStockRow) {
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
            var material = Basic.MaterialRow.getLookup().itemById[row.MaterialId];
            if (material.Code == '10000000') {
                Q.notifyError("不得选择虚拟物料!")
                return false;
            }
            row.MaterialName = material.Name;
            row.MaterialCode = material.Code;
            row.UnitName = Basic.UnitRow.getLookup().itemById[material.UnitId].Name;
            // row.InvoiceType = Serenity.EnumFormatter.format(Stock.Enums.InvoiceType, Q.toId(row.InvoiceType)); 
            row.SupplierName = Basic.SupplierRow.getLookup().itemById[row.SupplierId].Name;

            return true;
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons[0].onClick = () => {
                this.createEntityDialog(this.getItemType(), dlg => {
                    var dialog = dlg as InStockItemEditorDialog;
                    dialog.Head = this._head;
                    dialog.onSave = (opt, callback) => this.save(opt, callback);
                    var entity = this.getNewEntity() as InStockItemRow;
                    dialog.loadEntityAndOpenDialog(entity);
                });
            }
            return buttons;
        }

        //protected onViewSubmit() {
        //    if (!super.onViewSubmit()) {
        //        return false;
        //    }
        //    var request = this.view.params as Serenity.ListRequest; 
        //    return true;
        //} 

        //protected getInitialTitle() {
        //    return "";
        //}

        //protected getAddButtonCaption() {
        //    return "添加明细"
        //} 
    }
}