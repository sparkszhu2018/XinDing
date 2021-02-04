
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

        
    }
}