
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class ReceiptItemDialog extends Serenity.EntityDialog<ReceiptItemRow, any> {
        protected getFormKey() { return ReceiptItemForm.formKey; }
        protected getIdProperty() { return ReceiptItemRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiptItemRow.localTextPrefix; }
        protected getNameProperty() { return ReceiptItemRow.nameProperty; }
        protected getService() { return ReceiptItemService.baseUrl; }
        protected getDeletePermission() { return ReceiptItemRow.deletePermission; }
        protected getInsertPermission() { return ReceiptItemRow.insertPermission; }
        protected getUpdatePermission() { return ReceiptItemRow.updatePermission; }

        protected form = new ReceiptItemForm(this.idPrefix);

    }
}