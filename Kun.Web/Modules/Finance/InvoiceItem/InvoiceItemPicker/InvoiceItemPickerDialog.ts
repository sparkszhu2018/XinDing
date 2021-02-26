namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemPickerDialog extends Serenity.TemplatedDialog<InvoiceItemPickerOptions> {

        private checkGrid: InvoiceItemCheckGrid;

        constructor(opt: InvoiceItemPickerOptions) {
            super(opt);

            this.checkGrid = new InvoiceItemCheckGrid(this.byId("CheckGrid"), opt);
            this.dialogTitle = "选择销发票";
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
                            Q.notifyWarning("请选择发票!");
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

        public onSuccess: (selected: InvoiceItemRow[]) => boolean;
    }
}