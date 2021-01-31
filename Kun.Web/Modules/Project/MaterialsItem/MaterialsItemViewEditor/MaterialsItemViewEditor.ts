/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class MaterialsItemViewEditor extends Common.GridEditorBase<MaterialsItemRow> {
        protected getColumnsKey() { return "Project.MaterialsItemView"; } 
        protected getDialogType() { return MaterialsItemDialog; }
        protected getLocalTextPrefix() { return MaterialsItemRow.localTextPrefix; }
         
        private _head: MaterialsBillRow;
        get Head() { return this._head; }
        set Head(value: MaterialsBillRow) { 
            this._head = value; 

            //if (this._head.Status !== Enums.BillStatus.Edit && this._head.Status !== Enums.BillStatus.Reject) {
            //    this.toolbar.findButton('add-button').hide();
            //    this.toolbar.findButton('attach-button').hide();
            //} else {
            //    this.toolbar.findButton('add-button').show();
            //    this.toolbar.findButton('attach-button').show();
            //}
        }

        constructor(container: JQuery) {
            super(container);
             
        } 

        validateEntity(row, id) { 
            //var material = Basic.MaterialRow.getLookup().itemById[row.MaterialId]; 
            //row.MaterialCode = material.Code; 
            //if (!Q.isEmptyOrNull(row.LotId)) {
            //    row.LotCode = Basic.LotRow.getLookup().itemById[row.LotId].Code;
            //}
            //if (!Q.isEmptyOrNull(row.WarehouseId)) { 
            //    row.WarehouseName = Basic.WarehouseRow.getLookup().itemById[row.WarehouseId].Name;
            //}
            //if(!Q.isEmptyOrNull(row.PositionId)) {
            //    row.PositionName = Basic.PositionRow.getLookup().itemById[row.PositionId].Name;
            //}
            return true;
        } 

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            
            return buttons;
        }
         
    }
}