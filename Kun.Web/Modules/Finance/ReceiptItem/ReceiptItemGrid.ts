
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class ReceiptItemGrid extends Serenity.EntityGrid<ReceiptItemRow, any> {
        protected getColumnsKey() { return 'Finance.ReceiptItem'; }
        protected getDialogType() { return ReceiptItemDialog; }
        protected getIdProperty() { return ReceiptItemRow.idProperty; }
        protected getInsertPermission() { return ReceiptItemRow.insertPermission; }
        protected getLocalTextPrefix() { return ReceiptItemRow.localTextPrefix; }
        protected getService() { return ReceiptItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}