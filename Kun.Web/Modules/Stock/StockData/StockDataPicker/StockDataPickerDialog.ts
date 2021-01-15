namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class StockDataPickerDialog extends Serenity.TemplatedDialog<StockDataPickerOptions> {

        private checkGrid: StockDataCheckGrid;

        constructor(opt: StockDataPickerOptions) {
            super(opt);

            this.checkGrid = new StockDataCheckGrid(this.byId("CheckGrid"), opt);
            this.dialogTitle = "选择库存";
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
                            Q.notifyWarning("请选择物料!");
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

        public onSuccess: (selected: StockDataRow[]) => boolean;
    }
}