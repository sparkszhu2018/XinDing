namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    export class MaintenancePickerDialog extends Serenity.TemplatedDialog<MaintenancePickerOptions> {

        private checkGrid: MaintenanceCheckGrid;

        constructor(opt: MaintenancePickerOptions) {
            super(opt);

            this.checkGrid = new MaintenanceCheckGrid(this.byId("CheckGrid"), opt);
            this.dialogTitle = "选择维保单";
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
                            Q.notifyWarning("请选择维保单!");
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

        public onSuccess: (selected: MaintenanceRow[]) => boolean;
    }
}