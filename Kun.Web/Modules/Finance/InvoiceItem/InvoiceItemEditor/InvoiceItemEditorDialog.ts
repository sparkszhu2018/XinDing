/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />

namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemEditorDialog extends Common.GridEditorDialog<InvoiceItemRow> {
        protected getFormKey() { return InvoiceItemForm.formKey; } 
        protected getLocalTextPrefix() { return InvoiceItemRow.localTextPrefix; } 

        private _serial: number;
        protected form: InvoiceItemForm;

        //private _head: InvoiceRow; 
        //get Head() {
        //    return this._head;
        //}

        //set Head(value: InvoiceRow) { 
        //    this._head = value;

        //    //if (this._head.BillType === Enums.InvoiceBillType.Maintenance) {
               

        //    //} else if (this._head.BillType === Enums.InvoiceBillType.Project) {
                
        //    //}
        //    //else if (this._head.BillType === Enums.InvoiceBillType.SaleOrder) {

        //    //}

        //    if (this._head.Status !== Enums.BillStatus.Edit
        //        && this._head.Status !== Enums.BillStatus.Reject
        //        && this._head.Status !== Enums.BillStatus.UnAudited) {  
        //        this.toolbar.findButton('save-and-close-button').hide();
        //        this.toolbar.findButton('apply-changes-button').hide();
        //        this.toolbar.findButton('delete-button').hide();
        //    }
           
        //} 

        get Serial() { return this._serial; }
        set Serial(value: number) {
            this._serial = value;
            this.form.Serial.value = value;
        }

         
        constructor() {
            super(); 
            this.form = new InvoiceItemForm(this.idPrefix);
            this.form.Qty.change(e => {
                if (this.form.Price.value != null) {
                    this.form.Amount.value = this.form.Qty.value * this.form.Price.value;
                    this.form.InvoiceAmount.value = this.form.Amount.value;
                }
            });
            this.form.Price.change(e => {
                if (this.form.Qty.value != null) {
                    this.form.Amount.value = this.form.Qty.value * this.form.Price.value;
                    this.form.InvoiceAmount.value = this.form.Amount.value;
                }
            });

            
        }

        protected updateInterface() {
            super.updateInterface();
            if (this.entity.Id != null) {
                if (this.entity.HeadStatus == Enums.BillStatus.Edit || this.entity.HeadStatus == Enums.BillStatus.Reject
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
           
            super.save(c => {  
                this.dialogClose(); 
            });
        }

    }
}