
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class OutStockGrid extends Serenity.EntityGrid<OutStockRow, any> {
        protected getColumnsKey() { return 'Stock.OutStock'; }
        protected getDialogType() { return OutStockDialog; }
        protected getIdProperty() { return OutStockRow.idProperty; }
        protected getInsertPermission() { return OutStockRow.insertPermission; }
        protected getLocalTextPrefix() { return OutStockRow.localTextPrefix; }
        protected getService() { return OutStockService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }

        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.showFooterRow = true;
            return opt;
        }

        //protected createSlickGrid() {
        //    var grid = super.createSlickGrid();

        //    // need to register this plugin for grouping or you'll have errors
        //    grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

        //    this.view.setSummaryOptions({
        //        aggregators: [
        //            new Slick.Aggregators.Sum('TotalCost'),
        //            new Slick.Aggregators.Sum('TotalSales'),
        //            new Slick.Aggregators.Sum('InvoicedAmount'),
        //            new Slick.Aggregators.Sum('UnInvoicedAmount')
        //        ]
        //    });
        //    return grid;
        //}
    }
}