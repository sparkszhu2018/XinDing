
namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    export class MaintenanceTypeGrid extends Serenity.EntityGrid<MaintenanceTypeRow, any> {
        protected getColumnsKey() { return 'Ops.MaintenanceType'; }
        protected getDialogType() { return MaintenanceTypeDialog; }
        protected getIdProperty() { return MaintenanceTypeRow.idProperty; }
        protected getInsertPermission() { return MaintenanceTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return MaintenanceTypeRow.localTextPrefix; }
        protected getService() { return MaintenanceTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}