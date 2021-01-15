/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class InStockItemEditor extends Common.GridEditorBase<InStockItemRow> {
        protected getColumnsKey() { return "Stock.InStockItem"; } 
        protected getDialogType() { return InStockItemDialog; }
        protected getLocalTextPrefix() { return InStockItemRow.localTextPrefix; }

        protected status: Stock.Enums.BillStatus;  

        constructor(container: JQuery) {
            super(container);
             
        } 

        validateEntity(row, id) {

            var material = Basic.MaterialRow.getLookup().itemById[row.MaterialId];
            row.MaterialName = material.Name;
            row.MaterialCode = material.Code;
            row.UnitName = Basic.UnitRow.getLookup().itemById[material.UnitId].Name;
         // row.InvoiceType = Serenity.EnumFormatter.format(Stock.Enums.InvoiceType, Q.toId(row.InvoiceType)); 
            row.SupplierName = Basic.SupplierRow.getLookup().itemById[row.SupplierId].Name;

            return true;
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons(); 

            return buttons;
        }

        //protected onViewSubmit() {
        //    if (!super.onViewSubmit()) {
        //        return false;
        //    }
        //    var request = this.view.params as Serenity.ListRequest; 
        //    return true;
        //} 

        //protected getInitialTitle() {
        //    return "";
        //}

        //protected getAddButtonCaption() {
        //    return "添加明细"
        //}
         
         
    }
}