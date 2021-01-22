
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class ChangeStockItemGrid extends Serenity.EntityGrid<ChangeStockItemRow, any> {
        protected getColumnsKey() { return 'Stock.ChangeStockItem'; }
        protected getDialogType() { return ChangeStockItemDialog; }
        protected getIdProperty() { return ChangeStockItemRow.idProperty; }
        protected getInsertPermission() { return ChangeStockItemRow.insertPermission; }
        protected getLocalTextPrefix() { return ChangeStockItemRow.localTextPrefix; }
        protected getService() { return ChangeStockItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}