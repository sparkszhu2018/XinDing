
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class BizTypeDialog extends Serenity.EntityDialog<BizTypeRow, any> {
        protected getFormKey() { return BizTypeForm.formKey; }
        protected getIdProperty() { return BizTypeRow.idProperty; }
        protected getLocalTextPrefix() { return BizTypeRow.localTextPrefix; }
        protected getNameProperty() { return BizTypeRow.nameProperty; }
        protected getService() { return BizTypeService.baseUrl; }
        protected getDeletePermission() { return BizTypeRow.deletePermission; }
        protected getInsertPermission() { return BizTypeRow.insertPermission; }
        protected getUpdatePermission() { return BizTypeRow.updatePermission; }

        protected form = new BizTypeForm(this.idPrefix);

    }
}