
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class CommonExpressionDialog extends Serenity.EntityDialog<CommonExpressionRow, any> {
        protected getFormKey() { return CommonExpressionForm.formKey; }
        protected getIdProperty() { return CommonExpressionRow.idProperty; }
        protected getLocalTextPrefix() { return CommonExpressionRow.localTextPrefix; }
        protected getNameProperty() { return CommonExpressionRow.nameProperty; }
        protected getService() { return CommonExpressionService.baseUrl; }
        protected getDeletePermission() { return CommonExpressionRow.deletePermission; }
        protected getInsertPermission() { return CommonExpressionRow.insertPermission; }
        protected getUpdatePermission() { return CommonExpressionRow.updatePermission; }

        protected form = new CommonExpressionForm(this.idPrefix);

    }
}