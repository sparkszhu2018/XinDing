
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class PositionGrid extends Serenity.EntityGrid<PositionRow, any> {
        protected getColumnsKey() { return 'Basic.Position'; }
        protected getDialogType() { return PositionDialog; }
        protected getIdProperty() { return PositionRow.idProperty; }
        protected getInsertPermission() { return PositionRow.insertPermission; }
        protected getLocalTextPrefix() { return PositionRow.localTextPrefix; }
        protected getService() { return PositionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}