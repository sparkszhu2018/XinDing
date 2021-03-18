
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class MoveRecordGrid extends Serenity.EntityGrid<MoveRecordRow, any> {
        protected getColumnsKey() { return 'Stock.MoveRecord'; }
        protected getDialogType() { return MoveRecordDialog; }
        protected getIdProperty() { return MoveRecordRow.idProperty; }
        protected getInsertPermission() { return MoveRecordRow.insertPermission; }
        protected getLocalTextPrefix() { return MoveRecordRow.localTextPrefix; }
        protected getService() { return MoveRecordService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}