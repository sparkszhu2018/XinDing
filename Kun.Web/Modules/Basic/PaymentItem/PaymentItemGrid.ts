
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class PaymentItemGrid extends Serenity.EntityGrid<PaymentItemRow, any> {
        protected getColumnsKey() { return 'Basic.PaymentItem'; }
        protected getDialogType() { return PaymentItemDialog; }
        protected getIdProperty() { return PaymentItemRow.idProperty; }
        protected getInsertPermission() { return PaymentItemRow.insertPermission; }
        protected getLocalTextPrefix() { return PaymentItemRow.localTextPrefix; }
        protected getService() { return PaymentItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}