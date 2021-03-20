
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class MaterialsBillGrid extends Serenity.EntityGrid<MaterialsBillRow, any> {
        protected getColumnsKey() { return 'Project.MaterialsBill'; }
        protected getDialogType() { return MaterialsBillDialog; }
        protected getIdProperty() { return MaterialsBillRow.idProperty; }
        protected getInsertPermission() { return MaterialsBillRow.insertPermission; }
        protected getLocalTextPrefix() { return MaterialsBillRow.localTextPrefix; }
        protected getService() { return MaterialsBillService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }
    }
}