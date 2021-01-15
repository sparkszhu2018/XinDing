/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class InStockItemDialog extends Common.GridEditorDialog<InStockItemRow> {
        protected getFormKey() { return InStockItemForm.formKey; }
        // protected getIdProperty() { return InStockItemRow.idProperty; }
        protected getLocalTextPrefix() { return InStockItemRow.localTextPrefix; }
        //protected getNameProperty() { return InStockItemRow.nameProperty; }
        //protected getService() { return InStockItemService.baseUrl; }
        //protected getDeletePermission() { return InStockItemRow.deletePermission; }
        //protected getInsertPermission() { return InStockItemRow.insertPermission; }
        //protected getUpdatePermission() { return InStockItemRow.updatePermission; }


        protected form: InStockItemForm;
        constructor() {
            super();

            this.form = new InStockItemForm(this.idPrefix);

            this.form.MaterialId.changeSelect2(e => {
                var materail = Basic.MaterialRow.getLookup().itemById[this.form.MaterialId.value];
                this.form.UnitId.value = materail.UnitId;
            });
            //this.form.DeliveryQty.change(e => {
            //    if (this.form.ConfirmQty.value == null) {
            //        this.form.ConfirmQty.value = this.form.DeliveryQty.value;
            //    }
            //});
            this.form.BuyPrice.change(e => {
                if (this.form.BuyPrice.value != null && this.form.ConfirmQty.value > 0) {
                    this.form.BuyAmount.value = this.form.BuyPrice.value * this.form.ConfirmQty.value;
                }
            });
            this.form.SalePrice.change(e => {
                if (this.form.SalePrice.value != null && this.form.ConfirmQty.value > 0) {
                    this.form.SaleAmount.value = this.form.SalePrice.value * this.form.ConfirmQty.value;
                }
            });
        }

        protected updateInterface() {
            super.updateInterface();
            if (this.entity.Id != null) {
                if (this.entity.HeadStatus == Stock.Enums.BillStatus.Edit || this.entity.HeadStatus == Stock.Enums.BillStatus.Reject) {
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
            if (unit.Decim === false && this.form.ConfirmQty.value % 1 !== 0) {
                Q.notifyError("请输入整数数量!");
                return false;
            }
            super.save(c => {  
                this.dialogClose(); 
            });
        }

    }
}