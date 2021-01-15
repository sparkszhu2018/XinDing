
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class InStockItemGrid extends Serenity.EntityGrid<InStockItemRow, any> {
        protected getColumnsKey() { return 'Stock.InStockItem'; }
        protected getDialogType() { return InStockItemDialog; }
        protected getIdProperty() { return InStockItemRow.idProperty; }
        protected getInsertPermission() { return InStockItemRow.insertPermission; }
        protected getLocalTextPrefix() { return InStockItemRow.localTextPrefix; }
        protected getService() { return InStockItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            
            return buttons;
        }
        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            return opt;
        }
    }
}