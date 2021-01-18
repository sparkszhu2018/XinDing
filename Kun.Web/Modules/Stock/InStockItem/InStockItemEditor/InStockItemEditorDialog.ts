/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />

namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class InStockItemEditorDialog extends Common.GridEditorDialog<InStockItemRow> {
        protected getFormKey() { return InStockItemForm.formKey; } 
        protected getLocalTextPrefix() { return InStockItemRow.localTextPrefix; } 


        protected form: InStockItemForm;
        private _head: Stock.InStockRow;
        

        get Head() {
            return this._head;
        }

        set Head(value: InStockRow) { 
            this._head = value;

            if (this._head.BillType === Enums.InStockBillType.OtherInStock) {
                this.form.SupplierId.value = 'b0f42f5f-cbd8-4390-b1fd-ac6a638295b0';
                this.form.InvoiceType.value = Enums.InvoiceType.WU.toString();

                if (this.form.BuyPrice.value == null) {
                    this.form.BuyPrice.value = 0;
                }
                this.form.SupplierId.getGridField().toggle(false);
                this.form.InvoiceType.getGridField().toggle(false);

            } else {
                this.form.SupplierId.getGridField().toggle(true);
                this.form.InvoiceType.getGridField().toggle(true);
            }

            if (this._head.Status !== Stock.Enums.BillStatus.Edit && this._head.Status !== Stock.Enums.BillStatus.Reject) { 
                this.toolbar.findButton('save-and-close-button').hide();
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('delete-button').hide();
            }
           
        } 
         
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