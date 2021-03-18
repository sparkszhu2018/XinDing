
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class ReceiptGrid extends Serenity.EntityGrid<ReceiptRow, any> {
        protected getColumnsKey() { return 'Finance.Receipt'; }
        protected getDialogType() { return ReceiptDialog; }
        protected getIdProperty() { return ReceiptRow.idProperty; }
        protected getInsertPermission() { return ReceiptRow.insertPermission; }
        protected getLocalTextPrefix() { return ReceiptRow.localTextPrefix; }
        protected getService() { return ReceiptService.baseUrl; }

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
                    new Slick.Aggregators.Sum('ReceiptAmount'), 
                ]
            });

            return grid;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            // opt.groupingPanel = true;
            opt.showFooterRow = true;
            return opt;
        }
    }


}