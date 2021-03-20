
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class CommonExpressionGrid extends Serenity.EntityGrid<CommonExpressionRow, any> {
        protected getColumnsKey() { return 'Basic.CommonExpression'; }
        protected getDialogType() { return CommonExpressionDialog; }
        protected getIdProperty() { return CommonExpressionRow.idProperty; }
        protected getInsertPermission() { return CommonExpressionRow.insertPermission; }
        protected getLocalTextPrefix() { return CommonExpressionRow.localTextPrefix; }
        protected getService() { return CommonExpressionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}