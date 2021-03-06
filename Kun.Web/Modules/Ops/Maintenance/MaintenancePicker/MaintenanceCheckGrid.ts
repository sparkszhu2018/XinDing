/// <reference path="../MaintenanceGrid.ts" />

namespace Kun.Ops {

    export interface MaintenancePickerOptions {
        hideData?: number[],
        criteria?: any[]
    }

    @Serenity.Decorators.registerClass() 
    export class MaintenanceCheckGrid extends Serenity.EntityGrid<MaintenanceRow, MaintenancePickerOptions> {

        protected getColumnsKey() { return 'Ops.MaintenanceCheckColumns'; } 
        protected getIdProperty() { return MaintenanceRow.idProperty; }
        protected getLocalTextPrefix() { return MaintenanceRow.localTextPrefix; }
        protected getService() { return MaintenanceService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin; 
        constructor(container: JQuery, options: MaintenancePickerOptions) {
            super(container, options); 
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
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

            return "已选择金额:";
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
                    [[MaintenanceRow.Fields.Id], 'not in', [this.options.hideData]]);

            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [[MaintenanceRow.Fields.Status], '=', Enums.BillStatus.Audited]);

            if (this.options.criteria != null) {
                request.Criteria = Serenity.Criteria.and(request.Criteria, this.options.criteria);
            } 
            return true;
        }


        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;

            //var item = this.itemAt(row);
            //var target = $(e.target);

            var self = this;
            setTimeout(function () {
                var selects = self.selectedItems.map(function (v) { return v.UnInvoicedAmount; });
                var sum = eval(selects.join("+"));
                self.element.find('.title-text').html("已选择金额:" + sum);
            }, 200);
        }
    }
}