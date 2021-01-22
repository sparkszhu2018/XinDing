
namespace Kun.Sell {

    @Serenity.Decorators.registerClass()
    export class SaleOrderItemGrid extends Serenity.EntityGrid<SaleOrderItemRow, any> {
        protected getColumnsKey() { return 'Sell.SaleOrderItem'; }
        protected getDialogType() { return SaleOrderItemDialog; }
        protected getIdProperty() { return SaleOrderItemRow.idProperty; }
        protected getInsertPermission() { return SaleOrderItemRow.insertPermission; }
        protected getLocalTextPrefix() { return SaleOrderItemRow.localTextPrefix; }
        protected getService() { return SaleOrderItemService.baseUrl; }

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
        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            return opt;
        }
         

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            // super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item: SaleOrderItemRow = this.itemAt(row);
            var target = $(e.target);
             
            if (target.hasClass('s-EditLink')) {
                e.preventDefault();
                SaleOrderService.Retrieve({
                    EntityId: item.HeadId
                }, r => {
                    let dlg = new SaleOrderDialog();
                    dlg.loadEntityAndOpenDialog(r.Entity, true);
                    dlg.element.on('dialogclose', () => {
                        this.refresh();
                        dlg = null;
                    });
                }, { async: false });


            }
        }
    }
}