/// <reference path="../InvoiceItemDialog.ts" />
 
namespace Kun.Finance {

    export interface InvoiceItemPickerOptions {
        hideData?: number[],
        criteria?: any[]
    }

    @Serenity.Decorators.registerClass()
    export class InvoiceItemCheckGrid extends Serenity.EntityGrid<InvoiceItemRow, InvoiceItemPickerOptions> {

        protected getColumnsKey() { return 'Finance.InvoiceItem'; } 
        protected getIdProperty() { return InvoiceItemRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceItemRow.localTextPrefix; }
        protected getService() { return InvoiceItemService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery, options: InvoiceItemPickerOptions) {
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
                    [[InvoiceItemRow.Fields.Id], 'not in', [this.options.hideData]]);

            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [[InvoiceItemRow.Fields.HeadStatus], '=', Enums.BillStatus.Audited]);

            if (this.options.criteria != null) {
                request.Criteria = Serenity.Criteria.and(request.Criteria, this.options.criteria);
            } 
            return true;
        }
    }
}