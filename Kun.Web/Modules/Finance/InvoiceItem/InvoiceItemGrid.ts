
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemGrid extends Serenity.EntityGrid<InvoiceItemRow, any> {
        protected getColumnsKey() { return 'Finance.InvoiceItem'; }
        protected getDialogType() { return InvoiceItemDialog; }
        protected getIdProperty() { return InvoiceItemRow.idProperty; }
        protected getInsertPermission() { return InvoiceItemRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceItemRow.localTextPrefix; }
        protected getService() { return InvoiceItemService.baseUrl; }

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