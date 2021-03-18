
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class AssembleGrid extends Serenity.EntityGrid<AssembleRow, any> {
        protected getColumnsKey() { return 'Stock.Assemble'; }
        protected getDialogType() { return AssembleDialog; }
        protected getIdProperty() { return AssembleRow.idProperty; }
        protected getInsertPermission() { return AssembleRow.insertPermission; }
        protected getLocalTextPrefix() { return AssembleRow.localTextPrefix; }
        protected getService() { return AssembleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }


        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            return opt;
        }
    }
}