
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
        }
    }
}