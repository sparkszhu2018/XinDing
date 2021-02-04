
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class BillInvoicedGrid extends Serenity.EntityGrid<BillInvoicedRow, any> {
        protected getColumnsKey() { return 'Finance.BillInvoiced'; }
        protected getDialogType() { return BillInvoicedDialog; }
        protected getIdProperty() { return BillInvoicedRow.idProperty; }
        protected getInsertPermission() { return BillInvoicedRow.insertPermission; }
        protected getLocalTextPrefix() { return BillInvoicedRow.localTextPrefix; }
        protected getService() { return BillInvoicedService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}