
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class AssembleItemGrid extends Serenity.EntityGrid<AssembleItemRow, any> {
        protected getColumnsKey() { return 'Stock.AssembleItem'; }
        protected getDialogType() { return AssembleItemDialog; }
        protected getIdProperty() { return AssembleItemRow.idProperty; }
        protected getInsertPermission() { return AssembleItemRow.insertPermission; }
        protected getLocalTextPrefix() { return AssembleItemRow.localTextPrefix; }
        protected getService() { return AssembleItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}