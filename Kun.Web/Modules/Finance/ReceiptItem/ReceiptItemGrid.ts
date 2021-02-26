
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class ReceiptItemGrid extends Serenity.EntityGrid<ReceiptItemRow, any> {
        protected getColumnsKey() { return 'Finance.ReceiptItem'; }
        protected getDialogType() { return ReceiptItemDialog; }
        protected getIdProperty() { return ReceiptItemRow.idProperty; }
        protected getInsertPermission() { return ReceiptItemRow.insertPermission; }
        protected getLocalTextPrefix() { return ReceiptItemRow.localTextPrefix; }
        protected getService() { return ReceiptItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            //移除新增按钮
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}