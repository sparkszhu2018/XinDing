
namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    export class MaintenanceManhoursGrid extends Serenity.EntityGrid<MaintenanceManhoursRow, any> {
        protected getColumnsKey() { return 'Ops.MaintenanceManhours'; }
        protected getDialogType() { return MaintenanceManhoursDialog; }
        protected getIdProperty() { return MaintenanceManhoursRow.idProperty; }
        protected getInsertPermission() { return MaintenanceManhoursRow.insertPermission; }
        protected getLocalTextPrefix() { return MaintenanceManhoursRow.localTextPrefix; }
        protected getService() { return MaintenanceManhoursService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}