/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class ServiceItemViewEditor extends Common.GridEditorBase<ServiceItemRow> {
        protected getColumnsKey() { return "Project.ServiceItemView"; } 
        protected getDialogType() { return ServiceItemEditorDialog; }
        protected getLocalTextPrefix() { return ServiceItemRow.localTextPrefix; }
         
        private _head: ServiceBillRow;
        get Head() { return this._head; }
        set Head(value: ServiceBillRow) { 
            this._head = value; 

           
        }

        constructor(container: JQuery) {
            super(container); 
        } 

        validateEntity(row, id) { 
             
            return true;
        } 

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            return buttons;
        }
         
    }
}