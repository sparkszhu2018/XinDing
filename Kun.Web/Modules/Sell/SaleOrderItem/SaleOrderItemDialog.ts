
namespace Kun.Sell {

    @Serenity.Decorators.registerClass()
    export class SaleOrderItemDialog extends Serenity.EntityDialog<SaleOrderItemRow, any> {
        protected getFormKey() { return SaleOrderItemForm.formKey; }
        protected getIdProperty() { return SaleOrderItemRow.idProperty; }
        protected getLocalTextPrefix() { return SaleOrderItemRow.localTextPrefix; }
        protected getNameProperty() { return SaleOrderItemRow.nameProperty; }
        protected getService() { return SaleOrderItemService.baseUrl; }
        protected getDeletePermission() { return SaleOrderItemRow.deletePermission; }
        protected getInsertPermission() { return SaleOrderItemRow.insertPermission; }
        protected getUpdatePermission() { return SaleOrderItemRow.updatePermission; }

        protected form = new SaleOrderItemForm(this.idPrefix);

    }
}