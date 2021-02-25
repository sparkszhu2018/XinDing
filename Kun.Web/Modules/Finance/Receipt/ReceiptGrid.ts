
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class ReceiptGrid extends Serenity.EntityGrid<ReceiptRow, any> {
        protected getColumnsKey() { return 'Finance.Receipt'; }
        protected getDialogType() { return ReceiptDialog; }
        protected getIdProperty() { return ReceiptRow.idProperty; }
        protected getInsertPermission() { return ReceiptRow.insertPermission; }
        protected getLocalTextPrefix() { return ReceiptRow.localTextPrefix; }
        protected getService() { return ReceiptService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}