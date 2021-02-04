
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemGrid extends Serenity.EntityGrid<InvoiceItemRow, any> {
        protected getColumnsKey() { return 'Finance.InvoiceItem'; }
        protected getDialogType() { return InvoiceItemDialog; }
        protected getIdProperty() { return InvoiceItemRow.idProperty; }
        protected getInsertPermission() { return InvoiceItemRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceItemRow.localTextPrefix; }
        protected getService() { return InvoiceItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}