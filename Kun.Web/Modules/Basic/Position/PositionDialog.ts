
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class PositionDialog extends Serenity.EntityDialog<PositionRow, any> {
        protected getFormKey() { return PositionForm.formKey; }
        protected getIdProperty() { return PositionRow.idProperty; }
        protected getLocalTextPrefix() { return PositionRow.localTextPrefix; }
        protected getNameProperty() { return PositionRow.nameProperty; }
        protected getService() { return PositionService.baseUrl; }
        protected getDeletePermission() { return PositionRow.deletePermission; }
        protected getInsertPermission() { return PositionRow.insertPermission; }
        protected getUpdatePermission() { return PositionRow.updatePermission; }

        protected form = new PositionForm(this.idPrefix);

    }
}