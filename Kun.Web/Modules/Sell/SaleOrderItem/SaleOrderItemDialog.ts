/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Kun.Sell {

    @Serenity.Decorators.registerClass()
    export class SaleOrderItemDialog extends Common.GridEditorDialog<SaleOrderItemRow> {
        protected getFormKey() { return SaleOrderItemForm.formKey; }
        //protected getIdProperty() { return SaleOrderItemRow.idProperty; }
        protected getLocalTextPrefix() { return SaleOrderItemRow.localTextPrefix; }
        //protected getNameProperty() { return SaleOrderItemRow.nameProperty; }
        //protected getService() { return SaleOrderItemService.baseUrl; }
        //protected getDeletePermission() { return SaleOrderItemRow.deletePermission; }
        //protected getInsertPermission() { return SaleOrderItemRow.insertPermission; }
        //protected getUpdatePermission() { return SaleOrderItemRow.updatePermission; }

        protected form = new SaleOrderItemForm(this.idPrefix);

        private _head: SaleOrderRow;
        get Head() { return this._head; }
        set Head(value: SaleOrderRow) {
            this._head = value;
            if (this._head.Status !== Enums.BillStatus.Edit && this._head.Status !== Enums.BillStatus.Reject) {
                this.toolbar.findButton('save-and-close-button').hide();
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('delete-button').hide();
            }
        }

        constructor() {
            super();
            this.form.Qty.change(e => {
                if (this.form.SalePrice.value != null) {
                    this.form.SaleAmount.value = this.form.Qty.value * this.form.SalePrice.value;
                }
            });
            this.form.SalePrice.change(e => {
                if (this.form.Qty.value != null) {
                    this.form.SaleAmount.value = this.form.Qty.value * this.form.SalePrice.value;
                }
            });
        }

        protected updateInterface() {
            super.updateInterface();
            if (this.entity.Id != null) {
                if (this.entity.HeadStatus == Enums.BillStatus.Edit || this.entity.HeadStatus == Enums.BillStatus.Reject) {
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