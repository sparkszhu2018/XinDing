/// <reference path="../StockDataGrid.ts" />

namespace Kun.Stock {

    export interface StockDataPickerOptions {
        hideStockData?: number[];
    }

    @Serenity.Decorators.registerClass()
    export class StockDataCheckGrid extends Serenity.EntityGrid<StockDataRow, StockDataPickerOptions> {

        protected getColumnsKey() { return 'Stock.StockDataPickerColumns'; }
        // protected getDialogType() { return <any>Northwind.ProductDialog; }
        protected getIdProperty() { return StockDataRow.idProperty; }
        protected getLocalTextPrefix() { return StockDataRow.localTextPrefix; }
        protected getService() { return StockDataService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery, options: StockDataPickerOptions) {
            super(container, options);

            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }

        protected usePager() {
            return false;
        }

        protected getInitialTitle() {
            return null;
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons = buttons.filter(x => x.cssClass != 'add-button');
            return buttons;
        }

        get selectedItems() {
            return this.rowSelection.getSelectedKeys().map(x => this.view.getItemById(x));
           //  return this.rowSelection.getSelectedAsInt32().map(x => this.view.getItemById(x));
        }

        protected onViewSubmit() {
            if (!super.onViewSubmit())
                return false;
            var request = this.view.params as Serenity.ListRequest;
            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [[StockDataRow.Fields.AvailableQty], '>', 0]);
            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [[StockDataRow.Fields.MaterialCode], '!=', '10000000']);
            return true;
        }
    }
}