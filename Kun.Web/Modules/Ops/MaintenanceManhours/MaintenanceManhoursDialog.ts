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

        private _head: MaintenanceRow;
        get Head() { return this._head;}
        set Head(value: MaintenanceRow) {
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
    }
}