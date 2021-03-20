
namespace Kun.Finance {

    @Serenity.Decorators.registerClass() 
    export class InvoiceGrid extends Serenity.EntityGrid<InvoiceRow, any> {
        protected getColumnsKey() { return 'Finance.Invoice'; }
        protected getDialogType() { return InvoiceDialog; }
        protected getIdProperty() { return InvoiceRow.idProperty; }
        protected getInsertPermission() { return InvoiceRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceRow.localTextPrefix; }
        protected getService() { return InvoiceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('InvoiceAmount'),
                    new Slick.Aggregators.Sum('ReceiptAmount'),
                    new Slick.Aggregators.Sum('UnReceiptAmount'),
                ]
            });

            return grid;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            // opt.groupingPanel = true;

            opt.enableTextSelectionOnCells = true;
            opt.showFooterRow = true;
            return opt;
        }
    }
}