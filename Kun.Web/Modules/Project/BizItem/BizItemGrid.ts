
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class BizItemGrid extends Serenity.EntityGrid<BizItemRow, any> {
        protected getColumnsKey() { return 'Project.BizItem'; }
        protected getDialogType() { return BizItemDialog; }
        protected getIdProperty() { return BizItemRow.idProperty; }
        protected getInsertPermission() { return BizItemRow.insertPermission; }
        protected getLocalTextPrefix() { return BizItemRow.localTextPrefix; }
        protected getService() { return BizItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}