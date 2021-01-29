
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class PaymentItemDialog extends Serenity.EntityDialog<PaymentItemRow, any> {
        protected getFormKey() { return PaymentItemForm.formKey; }
        protected getIdProperty() { return PaymentItemRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentItemRow.localTextPrefix; }
        protected getNameProperty() { return PaymentItemRow.nameProperty; }
        protected getService() { return PaymentItemService.baseUrl; }
        protected getDeletePermission() { return PaymentItemRow.deletePermission; }
        protected getInsertPermission() { return PaymentItemRow.insertPermission; }
        protected getUpdatePermission() { return PaymentItemRow.updatePermission; }

        protected form = new PaymentItemForm(this.idPrefix);

    }
}