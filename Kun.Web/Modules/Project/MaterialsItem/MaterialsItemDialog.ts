
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class MaterialsItemDialog extends Serenity.EntityDialog<MaterialsItemRow, any> {
        protected getFormKey() { return MaterialsItemForm.formKey; }
        protected getIdProperty() { return MaterialsItemRow.idProperty; }
        protected getLocalTextPrefix() { return MaterialsItemRow.localTextPrefix; }
        protected getNameProperty() { return MaterialsItemRow.nameProperty; }
        protected getService() { return MaterialsItemService.baseUrl; }
        protected getDeletePermission() { return MaterialsItemRow.deletePermission; }
        protected getInsertPermission() { return MaterialsItemRow.insertPermission; }
        protected getUpdatePermission() { return MaterialsItemRow.updatePermission; }

        protected form = new MaterialsItemForm(this.idPrefix);

    }
}