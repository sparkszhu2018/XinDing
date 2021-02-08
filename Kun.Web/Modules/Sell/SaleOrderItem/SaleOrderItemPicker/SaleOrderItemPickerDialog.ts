namespace Kun.Sell {

    @Serenity.Decorators.registerClass()
    export class SaleOrderItemPickerDialog extends Serenity.TemplatedDialog<SaleOrderItemPickerOptions> {

        private checkGrid: SaleOrderItemCheckGrid;

        constructor(opt: SaleOrderItemPickerOptions) {
            super(opt);

            this.checkGrid = new SaleOrderItemCheckGrid(this.byId("CheckGrid"), opt);
            this.dialogTitle = "选择销售订单";
        }

        protected getTemplate() {
            return `<div id="~_CheckGrid"></div>`;
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.buttons = [
                {
                    text: Q.text("Dialogs.OkButton"),
                    click: () => {
                        var selected = this.checkGrid.selectedItems;
                        if (!selected.length) {
                            Q.notifyWarning("请选择订单!");
                            return;
                        }

                        if (!this.onSuccess || this.onSuccess(selected))
                            this.dialogClose();
                    }
                },
                {
                    text: Q.text("Dialogs.CancelButton"),
                    click: () => {
                        this.dialogClose();
                    }
                }
            ];
            return opt;
        }

        get selectedItems() {
            return this.checkGrid.selectedItems;
        }

        public onSuccess: (selected: SaleOrderItemRow[]) => boolean;
    }
}