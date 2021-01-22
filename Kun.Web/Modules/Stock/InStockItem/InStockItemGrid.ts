
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class InStockItemGrid extends Serenity.EntityGrid<InStockItemRow, any> {
        protected getColumnsKey() { return 'Stock.InStockItem'; }
        protected getDialogType() { return InStockItemDialog; }
        protected getIdProperty() { return InStockItemRow.idProperty; }
        protected getInsertPermission() { return InStockItemRow.insertPermission; }
        protected getLocalTextPrefix() { return InStockItemRow.localTextPrefix; }
        protected getService() { return InStockItemService.baseUrl; }

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

            var item: InStockItemRow = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            //if (target.parent().hasClass('s-EditLink'))
            //    target = target.parent();

            if (target.hasClass('s-EditLink')) {
                e.preventDefault();
                InStockService.Retrieve({
                    EntityId: item.HeadId
                }, r => {
                    let dlg = new InStockDialog();
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