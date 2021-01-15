
namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    export class MaintenanceTypeDialog extends Serenity.EntityDialog<MaintenanceTypeRow, any> {
        protected getFormKey() { return MaintenanceTypeForm.formKey; }
        protected getIdProperty() { return MaintenanceTypeRow.idProperty; }
        protected getLocalTextPrefix() { return MaintenanceTypeRow.localTextPrefix; }
        protected getNameProperty() { return MaintenanceTypeRow.nameProperty; }
        protected getService() { return MaintenanceTypeService.baseUrl; }
        protected getDeletePermission() { return MaintenanceTypeRow.deletePermission; }
        protected getInsertPermission() { return MaintenanceTypeRow.insertPermission; }
        protected getUpdatePermission() { return MaintenanceTypeRow.updatePermission; }

        protected form = new MaintenanceTypeForm(this.idPrefix);

    }
}