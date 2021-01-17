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