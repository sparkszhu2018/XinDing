
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class StockDataGrid extends Serenity.EntityGrid<StockDataRow, any> {
        protected getColumnsKey() { return 'Stock.StockData'; }
        protected getDialogType() { return StockDataDialog; }
        protected getIdProperty() { return StockDataRow.idProperty; }
        protected getInsertPermission() { return StockDataRow.insertPermission; }
        protected getLocalTextPrefix() { return StockDataRow.localTextPrefix; }
        protected getService() { return StockDataService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: StockDataService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            })); 
            return buttons;
        }


        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.showFooterRow = true;
            return opt;
        }

        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }
            var request = this.view.params as Serenity.ListRequest;

            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [[StockDataRow.Fields.Qty], '>', 0]);
 
            return true;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid(); 
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider()); 
            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('BuyAmount'),
                    new Slick.Aggregators.Sum('Qty'),
                    new Slick.Aggregators.Sum('SaleAmount'),  
                ]
            });

            return grid;
        }
         
        
    }
}