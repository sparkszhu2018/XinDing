
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class LotGrid extends Serenity.EntityGrid<LotRow, any> {
        protected getColumnsKey() { return 'Basic.Lot'; }
        protected getDialogType() { return LotDialog; }
        protected getIdProperty() { return LotRow.idProperty; }
        protected getInsertPermission() { return LotRow.insertPermission; }
        protected getLocalTextPrefix() { return LotRow.localTextPrefix; }
        protected getService() { return LotService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}