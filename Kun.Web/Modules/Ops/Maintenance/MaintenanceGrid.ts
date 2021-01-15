
namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class MaintenanceGrid extends Serenity.EntityGrid<MaintenanceRow, any> {
        protected getColumnsKey() { return 'Ops.Maintenance'; }
        protected getDialogType() { return MaintenanceDialog; }
        protected getIdProperty() { return MaintenanceRow.idProperty; }
        protected getInsertPermission() { return MaintenanceRow.insertPermission; }
        protected getLocalTextPrefix() { return MaintenanceRow.localTextPrefix; }
        protected getService() { return MaintenanceService.baseUrl; }

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