/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    export class MaintenanceMaterialsDialog extends Common.GridEditorDialog<MaintenanceMaterialsRow> {
        protected getFormKey() { return MaintenanceMaterialsForm.formKey; }
        //protected getIdProperty() { return MaintenanceMaterialsRow.idProperty; }
        protected getLocalTextPrefix() { return MaintenanceMaterialsRow.localTextPrefix; }
        //protected getNameProperty() { return MaintenanceMaterialsRow.nameProperty; }
        //protected getService() { return MaintenanceMaterialsService.baseUrl; }
        //protected getDeletePermission() { return MaintenanceMaterialsRow.deletePermission; }
        //protected getInsertPermission() { return MaintenanceMaterialsRow.insertPermission; }
        //protected getUpdatePermission() { return MaintenanceMaterialsRow.updatePermission; }

        protected form = new MaintenanceMaterialsForm(this.idPrefix);
        private _head: MaintenanceRow;
        get Head() { return this._head; }

        set Head(value: MaintenanceRow) {
            this._head = value;
            if (this._head.Status !== Enums.BillStatus.Edit && this._head.Status !== Enums.BillStatus.Reject  && this._head.Status !== Enums.BillStatus.UnAudited) {
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
                if (this.form.BuyPrice.value != null) {
                    this.form.BuyAmount.value = this.form.Qty.value * this.form.BuyPrice.value;
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
                if (this.entity.HeadStatus == Enums.BillStatus.Edit || this.entity.HeadStatus == Enums.BillStatus.Reject || this.entity.HeadStatus  == Enums.BillStatus.UnAudited) {
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