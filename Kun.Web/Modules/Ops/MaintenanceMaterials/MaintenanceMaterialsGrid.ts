
namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    export class MaintenanceMaterialsGrid extends Serenity.EntityGrid<MaintenanceMaterialsRow, any> {
        protected getColumnsKey() { return 'Ops.MaintenanceMaterials'; }
        protected getDialogType() { return MaintenanceMaterialsDialog; }
        protected getIdProperty() { return MaintenanceMaterialsRow.idProperty; }
        protected getInsertPermission() { return MaintenanceMaterialsRow.insertPermission; }
        protected getLocalTextPrefix() { return MaintenanceMaterialsRow.localTextPrefix; }
        protected getService() { return MaintenanceMaterialsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}