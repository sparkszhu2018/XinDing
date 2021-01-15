
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class MaterialGroupDialog extends Serenity.EntityDialog<MaterialGroupRow, any> {
        protected getFormKey() { return MaterialGroupForm.formKey; }
        protected getIdProperty() { return MaterialGroupRow.idProperty; }
        protected getLocalTextPrefix() { return MaterialGroupRow.localTextPrefix; }
        protected getNameProperty() { return MaterialGroupRow.nameProperty; }
        protected getService() { return MaterialGroupService.baseUrl; }
        protected getDeletePermission() { return MaterialGroupRow.deletePermission; }
        protected getInsertPermission() { return MaterialGroupRow.insertPermission; }
        protected getUpdatePermission() { return MaterialGroupRow.updatePermission; }

        protected form = new MaterialGroupForm(this.idPrefix);
         

        protected updateInterface(): void { 
            super.updateInterface();
            if (this.isEditMode()) {
                Serenity.EditorUtils.setReadonly(this.byId('Code'), true); 
            }
        }
    }
}