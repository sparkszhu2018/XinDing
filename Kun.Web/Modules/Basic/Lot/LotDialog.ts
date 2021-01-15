
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class LotDialog extends Serenity.EntityDialog<LotRow, any> {
        protected getFormKey() { return LotForm.formKey; }
        protected getIdProperty() { return LotRow.idProperty; }
        protected getLocalTextPrefix() { return LotRow.localTextPrefix; }
        protected getNameProperty() { return LotRow.nameProperty; }
        protected getService() { return LotService.baseUrl; }
        protected getDeletePermission() { return LotRow.deletePermission; }
        protected getInsertPermission() { return LotRow.insertPermission; }
        protected getUpdatePermission() { return LotRow.updatePermission; }

        protected form = new LotForm(this.idPrefix);

    }
}