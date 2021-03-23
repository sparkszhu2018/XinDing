 /// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class OutStockItemDialog extends Common.GridEditorDialog<OutStockItemRow> {
        protected getFormKey() { return OutStockItemForm.formKey; }
        //protected getIdProperty() { return OutStockItemRow.idProperty; }
        protected getLocalTextPrefix() { return OutStockItemRow.localTextPrefix; } 

        protected form = new OutStockItemForm(this.idPrefix);

        private _head: OutStockRow;
        get Head() { return this._head; }
        set Head(value: OutStockRow) {
            this._head = value;
            if (this._head.Status !== Enums.BillStatus.Edit && this._head.Status !== Enums.BillStatus.Reject && this._head.Status !== Enums.BillStatus.UnAudited) {
                this.toolbar.findButton('save-and-close-button').hide();
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('delete-button').hide();
            }
        }

        constructor() {
            super();
            this.form.Qty.change(e => {
             
                if (this.form.BuyPrice.value != null) {
                    this.form.BuyAmount.value = this.form.Qty.value * this.form.BuyPrice.value;
                } 
            });  
        }

        protected updateInterface() {
            super.updateInterface();
            this.form.StockQty.value = Stock.StockDataRow.getLookup().itemById[this.entity.StockDataId].AvailableQty;
            if (this.entity.Id != null) {

                if (this.entity.HeadStatus == Enums.BillStatus.Edit
                    || this.entity.HeadStatus == Enums.BillStatus.Reject
                    || this.entity.HeadStatus == Enums.BillStatus.UnAudited) {
                    this.toolbar.findButton('save-and-close-button').show();
                    this.toolbar.findButton('apply-changes-button').show();
                    this.toolbar.findButton('delete-button').show();
                }
                else {
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                    this.toolbar.findButton('save-and-close-button').hide();
                    this.toolbar.findButton('apply-changes-button').hide();
                    this.toolbar.findButton('delete-button').hide();

                }
            }
        }

        protected save() {
            var unit = Basic.UnitRow.getLookup().itemById[this.form.UnitId.value];
            if (unit.Decim === false && this.form.Qty.value % 1 !== 0) {
                Q.notifyError("请输入整数数量!");
                return false;
            }
            super.save(c => {
                this.dialogClose();
            });
        }
    }
}