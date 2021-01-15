
namespace Kun.Sell {

    @Serenity.Decorators.registerClass()
    export class SaleOrderDialog extends Serenity.EntityDialog<SaleOrderRow, any> {
        protected getFormKey() { return SaleOrderForm.formKey; }
        protected getIdProperty() { return SaleOrderRow.idProperty; }
        protected getLocalTextPrefix() { return SaleOrderRow.localTextPrefix; }
        protected getNameProperty() { return SaleOrderRow.nameProperty; }
        protected getService() { return SaleOrderService.baseUrl; }
        protected getDeletePermission() { return SaleOrderRow.deletePermission; }
        protected getInsertPermission() { return SaleOrderRow.insertPermission; }
        protected getUpdatePermission() { return SaleOrderRow.updatePermission; }

        protected form = new SaleOrderForm(this.idPrefix);

    }
}