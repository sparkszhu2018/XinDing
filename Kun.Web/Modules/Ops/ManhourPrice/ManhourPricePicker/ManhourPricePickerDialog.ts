namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    export class ManhourPricePickerDialog extends Serenity.TemplatedDialog<null> {

        private checkGrid: ManhourPriceCheckGrid;

        constructor() {
            super();

            this.checkGrid = new ManhourPriceCheckGrid(this.byId("CheckGrid"));
            this.dialogTitle = "选择工时";
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
                            Q.notifyWarning("请选择工时!");
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

        public onSuccess: (selected: ManhourPriceRow[]) => boolean;
    }
}