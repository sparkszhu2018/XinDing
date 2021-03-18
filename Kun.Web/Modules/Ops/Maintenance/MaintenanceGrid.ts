
namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class MaintenanceGrid extends Serenity.EntityGrid<MaintenanceRow, any> {
        protected getColumnsKey() { return 'Ops.Maintenance'; }
        protected getDialogType() { return MaintenanceDialog; }
        protected getIdProperty() { return MaintenanceRow.idProperty; }
        protected getInsertPermission() { return MaintenanceRow.insertPermission; }
        protected getLocalTextPrefix() { return MaintenanceRow.localTextPrefix; }
        protected getService() { return MaintenanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }


        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.showFooterRow = true;
            return opt;
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons(); 

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: MaintenanceService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));
            return buttons;
        }


        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: '打印',
                name: '',
                format: ctx => '<a class="inline-action print" title="打印">' +
                    '<i class="fa fa-file-pdf-o text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
             
            return columns;
        }


        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item: MaintenanceRow = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print')) {
                    console.log(item);
                    Kun.Common.ReportHelper.execute({
                        reportKey: 'Ops.Maintenance',
                        params: {
                            Id: item.Id
                        }
                    });
                } 
            }
        }


        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('TotalCost'),
                    new Slick.Aggregators.Sum('TotalSales'),
                    new Slick.Aggregators.Sum('InvoicedAmount'),
                    new Slick.Aggregators.Sum('UnInvoicedAmount'),
                ]
            });

            return grid;
        }
         
    }
}