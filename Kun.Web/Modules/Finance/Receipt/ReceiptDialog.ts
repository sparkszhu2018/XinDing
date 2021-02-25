
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class ReceiptDialog extends Serenity.EntityDialog<ReceiptRow, any> {
        protected getFormKey() { return ReceiptForm.formKey; }
        protected getIdProperty() { return ReceiptRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiptRow.localTextPrefix; }
        protected getNameProperty() { return ReceiptRow.nameProperty; }
        protected getService() { return ReceiptService.baseUrl; }
        protected getDeletePermission() { return ReceiptRow.deletePermission; }
        protected getInsertPermission() { return ReceiptRow.insertPermission; }
        protected getUpdatePermission() { return ReceiptRow.updatePermission; }

        protected form = new ReceiptForm(this.idPrefix);

    }
}