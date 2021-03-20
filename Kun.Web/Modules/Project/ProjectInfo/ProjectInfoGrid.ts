
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class ProjectInfoGrid extends Serenity.EntityGrid<ProjectInfoRow, any> {
        protected getColumnsKey() { return 'Project.ProjectInfo'; }
        protected getDialogType() { return ProjectInfoDialog; }
        protected getIdProperty() { return ProjectInfoRow.idProperty; }
        protected getInsertPermission() { return ProjectInfoRow.insertPermission; }
        protected getLocalTextPrefix() { return ProjectInfoRow.localTextPrefix; }
        protected getService() { return ProjectInfoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('BudgetAmount'),
                    new Slick.Aggregators.Sum('ActualAmount'),
                    new Slick.Aggregators.Sum('InvoicedAmount')
                ]
            });

            return grid;
        }

        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.showFooterRow = true;
            return opt;
        }
    }
}