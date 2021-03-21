
namespace Kun.Sell {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class SaleOrderGrid extends Serenity.EntityGrid<SaleOrderRow, any> {
        protected getColumnsKey() { return 'Sell.SaleOrder'; }
        protected getDialogType() { return SaleOrderDialog; }
        protected getIdProperty() { return SaleOrderRow.idProperty; }
        protected getInsertPermission() { return SaleOrderRow.insertPermission; }
        protected getLocalTextPrefix() { return SaleOrderRow.localTextPrefix; }
        protected getService() { return SaleOrderService.baseUrl; }

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

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('TotalCost'),
                    new Slick.Aggregators.Sum('TotalSales'),
                    new Slick.Aggregators.Sum('InvoicedAmount'),
                    new Slick.Aggregators.Sum('UnInvoicedAmount')
                ]
            });
            return grid;
        }
    }
}