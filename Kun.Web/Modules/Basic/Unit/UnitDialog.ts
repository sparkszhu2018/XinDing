
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class UnitDialog extends Serenity.EntityDialog<UnitRow, any> {
        protected getFormKey() { return UnitForm.formKey; }
        protected getIdProperty() { return UnitRow.idProperty; }
        protected getLocalTextPrefix() { return UnitRow.localTextPrefix; }
        protected getNameProperty() { return UnitRow.nameProperty; }
        protected getService() { return UnitService.baseUrl; }
        protected getDeletePermission() { return UnitRow.deletePermission; }
        protected getInsertPermission() { return UnitRow.insertPermission; }
        protected getUpdatePermission() { return UnitRow.updatePermission; }

        protected form = new UnitForm(this.idPrefix);

    }
}