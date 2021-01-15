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