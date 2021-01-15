namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class MaterialImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: MaterialImportForm;

        protected getFormKey() { return MaterialImportForm.formKey; }

        constructor() {
            super();

            this.form = new MaterialImportForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Excel导入";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [{
                text: '下载模板',
                click: () => {
                    let url = "~/upload\\DataUploadTemplate\\物料模板.xlsx";
                    window.open(Q.resolveUrl(url));
                }
            },
            {
                text: '导入',
                click: () => {
                    if (!this.validateBeforeSave())
                        return;

                    if (this.form.FileName.value == null ||
                        Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                        Q.notifyError("请选择文件!");
                        return;
                    }

                    Basic.MaterialService.ExcelImport({
                        FileName: this.form.FileName.value.Filename
                    }, response => {
                        Q.notifyInfo(
                            '共计导入: ' + (response.Inserted || 0) + '行！');

                        if (response.ErrorList != null && response.ErrorList.length > 0) {
                            Q.notifyError(response.ErrorList.join(',\r\n '));
                        }
                        this.dialogClose();
                    });
                },
            },
            {
                text: '取消',
                click: () => this.dialogClose()
            }
            ];
        }
    }
}