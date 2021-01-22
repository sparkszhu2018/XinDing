/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />

namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class ChangeStockItemEditorDialog extends Common.GridEditorDialog<ChangeStockItemRow> {
        protected getFormKey() { return ChangeStockItemForm.formKey; } 
        protected getLocalTextPrefix() { return ChangeStockItemRow.localTextPrefix; } 


        protected form: ChangeStockItemForm;
        private _head: Stock.ChangeStockItemRow;
        

        get Head() {
            return this._head;
        }

        set Head(value: ChangeStockItemRow) { 
            this._head = value;
             
           
        } 
         
        constructor() {
            super();

            this.form = new ChangeStockItemForm(this.idPrefix);

            this.form.ToMaterialId.changeSelect2(e => {
                var materail = Basic.MaterialRow.getLookup().itemById[this.form.ToMaterialId.value];
                this.form.ToUnitId.value = materail.UnitId;
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
            var unit = Basic.UnitRow.getLookup().itemById[this.form.FromUnitId.value];
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