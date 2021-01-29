
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class ServiceItemGrid extends Serenity.EntityGrid<ServiceItemRow, any> {
        protected getColumnsKey() { return 'Project.ServiceItem'; }
        protected getDialogType() { return ServiceItemDialog; }
        protected getIdProperty() { return ServiceItemRow.idProperty; }
        protected getInsertPermission() { return ServiceItemRow.insertPermission; }
        protected getLocalTextPrefix() { return ServiceItemRow.localTextPrefix; }
        protected getService() { return ServiceItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}