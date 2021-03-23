
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class OutStockItemGrid extends Serenity.EntityGrid<OutStockItemRow, any> {
        protected getColumnsKey() { return 'Stock.OutStockItem'; }
        protected getDialogType() { return OutStockItemDialog; }
        protected getIdProperty() { return OutStockItemRow.idProperty; }
        protected getInsertPermission() { return OutStockItemRow.insertPermission; }
        protected getLocalTextPrefix() { return OutStockItemRow.localTextPrefix; }
        protected getService() { return OutStockItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}