
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ChangeStockGrid extends Serenity.EntityGrid<ChangeStockRow, any> {
        protected getColumnsKey() { return 'Stock.ChangeStock'; }
        protected getDialogType() { return ChangeStockDialog; }
        protected getIdProperty() { return ChangeStockRow.idProperty; }
        protected getInsertPermission() { return ChangeStockRow.insertPermission; }
        protected getLocalTextPrefix() { return ChangeStockRow.localTextPrefix; }
        protected getService() { return ChangeStockService.baseUrl; }

         
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