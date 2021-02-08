﻿/// <reference path="../SaleOrderItemGrid.ts" />

namespace Kun.Sell {

    export interface SaleOrderItemPickerOptions {
        hideData?: number[];
    }

    @Serenity.Decorators.registerClass()
    export class SaleOrderItemCheckGrid extends Serenity.EntityGrid<SaleOrderItemRow, SaleOrderItemPickerOptions> {

        protected getColumnsKey() { return 'Sell.SaleOrderItem'; }
        // protected getDialogType() { return <any>Northwind.ProductDialog; }
        protected getIdProperty() { return SaleOrderItemRow.idProperty; }
        protected getLocalTextPrefix() { return SaleOrderItemRow.localTextPrefix; }
        protected getService() { return SaleOrderItemService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery, options: SaleOrderItemPickerOptions) {
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
            if (this.options.hideData && this.options.hideData.length)
                request.Criteria = Serenity.Criteria.and(request.Criteria,
                    [[SaleOrderItemRow.Fields.Id], 'not in', [this.options.hideData]]);

            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [[SaleOrderItemRow.Fields.HeadStatus], '=', Enums.BillStatus.Audited]);

            return true;
        }
    }
}