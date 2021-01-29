
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class ServiceBillDialog extends Serenity.EntityDialog<ServiceBillRow, any> {
        protected getFormKey() { return ServiceBillForm.formKey; }
        protected getIdProperty() { return ServiceBillRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceBillRow.localTextPrefix; }
        protected getNameProperty() { return ServiceBillRow.nameProperty; }
        protected getService() { return ServiceBillService.baseUrl; }
        protected getDeletePermission() { return ServiceBillRow.deletePermission; }
        protected getInsertPermission() { return ServiceBillRow.insertPermission; }
        protected getUpdatePermission() { return ServiceBillRow.updatePermission; }

        protected form = new ServiceBillForm(this.idPrefix);

    }
}