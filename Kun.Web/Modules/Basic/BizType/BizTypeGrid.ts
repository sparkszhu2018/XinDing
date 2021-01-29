
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class BizTypeGrid extends Serenity.EntityGrid<BizTypeRow, any> {
        protected getColumnsKey() { return 'Basic.BizType'; }
        protected getDialogType() { return BizTypeDialog; }
        protected getIdProperty() { return BizTypeRow.idProperty; }
        protected getInsertPermission() { return BizTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return BizTypeRow.localTextPrefix; }
        protected getService() { return BizTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}