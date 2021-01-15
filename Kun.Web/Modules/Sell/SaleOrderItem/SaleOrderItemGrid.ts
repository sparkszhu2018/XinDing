
namespace Kun.Sell {

    @Serenity.Decorators.registerClass()
    export class SaleOrderItemGrid extends Serenity.EntityGrid<SaleOrderItemRow, any> {
        protected getColumnsKey() { return 'Sell.SaleOrderItem'; }
        protected getDialogType() { return SaleOrderItemDialog; }
        protected getIdProperty() { return SaleOrderItemRow.idProperty; }
        protected getInsertPermission() { return SaleOrderItemRow.insertPermission; }
        protected getLocalTextPrefix() { return SaleOrderItemRow.localTextPrefix; }
        protected getService() { return SaleOrderItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}