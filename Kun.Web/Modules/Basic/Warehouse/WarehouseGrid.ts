
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class WarehouseGrid extends Serenity.EntityGrid<WarehouseRow, any> {
        protected getColumnsKey() { return 'Basic.Warehouse'; }
        protected getDialogType() { return WarehouseDialog; }
        protected getIdProperty() { return WarehouseRow.idProperty; }
        protected getInsertPermission() { return WarehouseRow.insertPermission; }
        protected getLocalTextPrefix() { return WarehouseRow.localTextPrefix; }
        protected getService() { return WarehouseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}