
namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    export class ManhourPriceGrid extends Serenity.EntityGrid<ManhourPriceRow, any> {
        protected getColumnsKey() { return 'Ops.ManhourPrice'; }
        protected getDialogType() { return ManhourPriceDialog; }
        protected getIdProperty() { return ManhourPriceRow.idProperty; }
        protected getInsertPermission() { return ManhourPriceRow.insertPermission; }
        protected getLocalTextPrefix() { return ManhourPriceRow.localTextPrefix; }
        protected getService() { return ManhourPriceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}