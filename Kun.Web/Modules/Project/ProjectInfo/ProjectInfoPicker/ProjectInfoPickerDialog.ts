namespace Kun.Project {
 
    @Serenity.Decorators.registerClass()
    export class ProjectInfoPickerDialog extends Serenity.TemplatedDialog<ProjectInfoPickerOptions> {

        private checkGrid: ProjectInfoCheckGrid;

        constructor(opt: ProjectInfoPickerOptions) {
            super(opt);

            this.checkGrid = new ProjectInfoCheckGrid(this.byId("CheckGrid"), opt);
            this.dialogTitle = "选择维项目";
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
                            Q.notifyWarning("请选择项目!");
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

        public onSuccess: (selected: ProjectInfoRow[]) => boolean;
    }
}