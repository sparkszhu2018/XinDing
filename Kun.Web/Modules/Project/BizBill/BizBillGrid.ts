
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class BizBillGrid extends Serenity.EntityGrid<BizBillRow, any> {
        protected getColumnsKey() { return 'Project.BizBill'; }
        protected getDialogType() { return BizBillDialog; }
        protected getIdProperty() { return BizBillRow.idProperty; }
        protected getInsertPermission() { return BizBillRow.insertPermission; }
        protected getLocalTextPrefix() { return BizBillRow.localTextPrefix; }
        protected getService() { return BizBillService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }
    }
}