/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class ServiceItemEditor extends Common.GridEditorBase<ServiceItemRow> {
        protected getColumnsKey() { return "Project.ServiceItem"; } 
        protected getDialogType() { return ServiceItemEditorDialog; }
        protected getLocalTextPrefix() { return ServiceItemRow.localTextPrefix; }
         
        private _head: ServiceBillRow;
        get Head() { return this._head; }
        set Head(value: ServiceBillRow) { 
            this._head = value; 

            if (this._head.Status !== Enums.BillStatus.Edit && this._head.Status !== Enums.BillStatus.Reject) {
                this.toolbar.findButton('add-button').hide(); 
            } else {
                this.toolbar.findButton('add-button').show(); 
            }
        }

        constructor(container: JQuery) {
            super(container); 
        } 

        validateEntity(row, id) { 
             
            return true;
        } 

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons[0].onClick = () => {
                this.createEntityDialog(this.getItemType(), dlg => {
                    var i = 0;
                    if (this.view.getLength() == 0) {
                        i = 10;
                    } else {
                        i = this.view.getItems()[this.view.getLength() - 1].Serial + 10;
                    }
                    var dialog = dlg as ServiceItemEditorDialog;
                    dialog.Head = this._head;  
                    dialog.Serial = i;
                    dialog.onSave = (opt, callback) => {
                        this.save(opt, callback);
                       
                    };
                    var entity = this.getNewEntity() as BizItemRow;
                    entity.Serial = i;
                    dialog.loadEntityAndOpenDialog(entity); 
                });
            }
            return buttons;
        }
         
    }
}