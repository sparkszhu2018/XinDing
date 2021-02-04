
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemDialog extends Serenity.EntityDialog<InvoiceItemRow, any> {
        protected getFormKey() { return InvoiceItemForm.formKey; }
        protected getIdProperty() { return InvoiceItemRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceItemRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceItemRow.nameProperty; }
        protected getService() { return InvoiceItemService.baseUrl; }
        protected getDeletePermission() { return InvoiceItemRow.deletePermission; }
        protected getInsertPermission() { return InvoiceItemRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceItemRow.updatePermission; }

        protected form = new InvoiceItemForm(this.idPrefix);

    }
}