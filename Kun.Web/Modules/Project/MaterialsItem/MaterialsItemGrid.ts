
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class MaterialsItemGrid extends Serenity.EntityGrid<MaterialsItemRow, any> {
        protected getColumnsKey() { return 'Project.MaterialsItem'; }
        protected getDialogType() { return MaterialsItemDialog; }
        protected getIdProperty() { return MaterialsItemRow.idProperty; }
        protected getInsertPermission() { return MaterialsItemRow.insertPermission; }
        protected getLocalTextPrefix() { return MaterialsItemRow.localTextPrefix; }
        protected getService() { return MaterialsItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }
    }
}