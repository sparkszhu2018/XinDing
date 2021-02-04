
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class BillInvoicedDialog extends Serenity.EntityDialog<BillInvoicedRow, any> {
        protected getFormKey() { return BillInvoicedForm.formKey; }
        protected getIdProperty() { return BillInvoicedRow.idProperty; }
        protected getLocalTextPrefix() { return BillInvoicedRow.localTextPrefix; }
        protected getNameProperty() { return BillInvoicedRow.nameProperty; }
        protected getService() { return BillInvoicedService.baseUrl; }
        protected getDeletePermission() { return BillInvoicedRow.deletePermission; }
        protected getInsertPermission() { return BillInvoicedRow.insertPermission; }
        protected getUpdatePermission() { return BillInvoicedRow.updatePermission; }

        protected form = new BillInvoicedForm(this.idPrefix);

    }
}