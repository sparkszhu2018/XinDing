/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />

namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class ServiceItemEditorDialog extends Common.GridEditorDialog<ServiceItemRow> {
        protected getFormKey() { return ServiceItemForm.formKey; } 
        protected getLocalTextPrefix() { return ServiceItemRow.localTextPrefix; } 
        protected form = new ServiceItemForm(this.idPrefix);
        private _head: ServiceBillRow;
        private _serial: number;
        get Head() { return this._head; } 
        set Head(value: ServiceBillRow) {
            this._head = value;
            if (this._head.Status !== Enums.BillStatus.Edit && this._head.Status !== Enums.BillStatus.Reject
                && this._head.Status !== Enums.BillStatus.UnAudited
            ) {
                this.toolbar.findButton('save-and-close-button').hide();
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('delete-button').hide();
            } 
        } 
        get Serial() { return this._serial; }
        set Serial(value: number) {
            this._serial = value; 
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
                if (this.entity.HeadStatus == Enums.BillStatus.Edit
                    || this.entity.HeadStatus == Enums.BillStatus.Reject
                    || this.entity.HeadStatus == Enums.BillStatus.UnAudited
                ) {
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
            super.save(c => {
                this.dialogClose(); 
            });
        }
    }
}