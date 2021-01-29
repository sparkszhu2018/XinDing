
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class MaterialsBillDialog extends Serenity.EntityDialog<MaterialsBillRow, any> {
        protected getFormKey() { return MaterialsBillForm.formKey; }
        protected getIdProperty() { return MaterialsBillRow.idProperty; }
        protected getLocalTextPrefix() { return MaterialsBillRow.localTextPrefix; }
        protected getNameProperty() { return MaterialsBillRow.nameProperty; }
        protected getService() { return MaterialsBillService.baseUrl; }
        protected getDeletePermission() { return MaterialsBillRow.deletePermission; }
        protected getInsertPermission() { return MaterialsBillRow.insertPermission; }
        protected getUpdatePermission() { return MaterialsBillRow.updatePermission; }

        protected form = new MaterialsBillForm(this.idPrefix);

    }
}