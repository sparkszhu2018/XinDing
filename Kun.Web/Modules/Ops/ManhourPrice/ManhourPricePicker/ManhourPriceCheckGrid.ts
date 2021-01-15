/// <reference path="../ManhourPriceGrid.ts" />

namespace Kun.Ops {
     

    @Serenity.Decorators.registerClass()
    export class ManhourPriceCheckGrid extends Serenity.EntityGrid<ManhourPriceRow, null> {

        protected getColumnsKey() { return 'Ops.ManhourPrice'; }
        // protected getDialogType() { return <any>Northwind.ProductDialog; }
        protected getIdProperty() { return ManhourPriceRow.idProperty; }
        protected getLocalTextPrefix() { return ManhourPriceRow.localTextPrefix; }
        protected getService() { return ManhourPriceService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);

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

        onViewSubmit() {
            if (!super.onViewSubmit())
                return false;

            // var request = this.view.params as Serenity.ListRequest;
            //if (this.options.hideProducts && this.options.hideProducts.length)
            //    request.Criteria = Serenity.Criteria.and(request.Criteria,
            //        [[Northwind.ProductRow.Fields.ProductID], 'not in', [this.options.hideProducts]]);

            return true;
        }
    }
}