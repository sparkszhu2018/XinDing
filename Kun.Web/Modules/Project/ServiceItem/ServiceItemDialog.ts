
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class ServiceItemDialog extends Serenity.EntityDialog<ServiceItemRow, any> {
        protected getFormKey() { return ServiceItemForm.formKey; }
        protected getIdProperty() { return ServiceItemRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceItemRow.localTextPrefix; }
        protected getNameProperty() { return ServiceItemRow.nameProperty; }
        protected getService() { return ServiceItemService.baseUrl; }
        protected getDeletePermission() { return ServiceItemRow.deletePermission; }
        protected getInsertPermission() { return ServiceItemRow.insertPermission; }
        protected getUpdatePermission() { return ServiceItemRow.updatePermission; }

        protected form = new ServiceItemForm(this.idPrefix);

    }
}