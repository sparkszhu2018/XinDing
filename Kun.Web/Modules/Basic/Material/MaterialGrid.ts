
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class MaterialGrid extends Serenity.EntityGrid<MaterialRow, any> {
        protected getColumnsKey() { return 'Basic.Material'; }
        protected getDialogType() { return MaterialDialog; }
        protected getIdProperty() { return MaterialRow.idProperty; }
        protected getInsertPermission() { return MaterialRow.insertPermission; }
        protected getLocalTextPrefix() { return MaterialRow.localTextPrefix; }
        protected getService() { return MaterialService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            // add our import button
            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: MaterialService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));


            buttons.push({
                title: '批量导入',
                // cssClass: 'export-xlsx-button',
                icon: 'fa-database',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new MaterialImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            });

            return buttons
        }

    }
}