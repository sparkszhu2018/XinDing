
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class BizItemDialog extends Serenity.EntityDialog<BizItemRow, any> {
        protected getFormKey() { return BizItemForm.formKey; }
        protected getIdProperty() { return BizItemRow.idProperty; }
        protected getLocalTextPrefix() { return BizItemRow.localTextPrefix; }
        protected getNameProperty() { return BizItemRow.nameProperty; }
        protected getService() { return BizItemService.baseUrl; }
        protected getDeletePermission() { return BizItemRow.deletePermission; }
        protected getInsertPermission() { return BizItemRow.insertPermission; }
        protected getUpdatePermission() { return BizItemRow.updatePermission; }

        protected form = new BizItemForm(this.idPrefix);

    }
}