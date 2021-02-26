
namespace Kun.Stock {

    @Serenity.Decorators.registerClass() 
    @Serenity.Decorators.filterable()
    export class InStockGrid extends Serenity.EntityGrid<InStockRow, any> {
        protected getColumnsKey() { return 'Stock.InStock'; }
        protected getDialogType() { return InStockDialog; }
        protected getIdProperty() { return InStockRow.idProperty; }
        protected getInsertPermission() { return InStockRow.insertPermission; }
        protected getLocalTextPrefix() { return InStockRow.localTextPrefix; }
        protected getService() { return InStockService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }


        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            return opt;
        }
    }
}