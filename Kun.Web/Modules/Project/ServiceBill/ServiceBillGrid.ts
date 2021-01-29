
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class ServiceBillGrid extends Serenity.EntityGrid<ServiceBillRow, any> {
        protected getColumnsKey() { return 'Project.ServiceBill'; }
        protected getDialogType() { return ServiceBillDialog; }
        protected getIdProperty() { return ServiceBillRow.idProperty; }
        protected getInsertPermission() { return ServiceBillRow.insertPermission; }
        protected getLocalTextPrefix() { return ServiceBillRow.localTextPrefix; }
        protected getService() { return ServiceBillService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}