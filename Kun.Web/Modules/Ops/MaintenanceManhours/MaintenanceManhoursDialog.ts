/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    export class MaintenanceManhoursDialog extends Common.GridEditorDialog<MaintenanceManhoursRow> {
        protected getFormKey() { return MaintenanceManhoursForm.formKey; }
        //protected getIdProperty() { return MaintenanceManhoursRow.idProperty; }
        protected getLocalTextPrefix() { return MaintenanceManhoursRow.localTextPrefix; }
        //protected getNameProperty() { return MaintenanceManhoursRow.nameProperty; }
        //protected getService() { return MaintenanceManhoursService.baseUrl; }
        //protected getDeletePermission() { return MaintenanceManhoursRow.deletePermission; }
        //protected getInsertPermission() { return MaintenanceManhoursRow.insertPermission; }
        //protected getUpdatePermission() { return MaintenanceManhoursRow.updatePermission; }

        protected form = new MaintenanceManhoursForm(this.idPrefix);

        constructor() {
            super();
            this.form.Qty.change(e => {
                if (this.form.Price.value != null) {
                    this.form.Amount.value = this.form.Qty.value * this.form.Price.value;
                }
            });
            this.form.Price.change(e => {
                if (this.form.Qty.value != null) {
                    this.form.Amount.value = this.form.Qty.value * this.form.Price.value;
                }
            });
        }
    }
}