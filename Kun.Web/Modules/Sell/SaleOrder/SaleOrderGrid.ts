
namespace Kun.Sell {

    @Serenity.Decorators.registerClass()
    export class SaleOrderGrid extends Serenity.EntityGrid<SaleOrderRow, any> {
        protected getColumnsKey() { return 'Sell.SaleOrder'; }
        protected getDialogType() { return SaleOrderDialog; }
        protected getIdProperty() { return SaleOrderRow.idProperty; }
        protected getInsertPermission() { return SaleOrderRow.insertPermission; }
        protected getLocalTextPrefix() { return SaleOrderRow.localTextPrefix; }
        protected getService() { return SaleOrderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}