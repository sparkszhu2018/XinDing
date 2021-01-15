
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class MaterialGroupGrid extends Serenity.EntityGrid<MaterialGroupRow, any> {
        protected getColumnsKey() { return 'Basic.MaterialGroup'; }
        protected getDialogType() { return MaterialGroupDialog; }
        protected getIdProperty() { return MaterialGroupRow.idProperty; }
        protected getInsertPermission() { return MaterialGroupRow.insertPermission; }
        protected getLocalTextPrefix() { return MaterialGroupRow.localTextPrefix; }
        protected getService() { return MaterialGroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


    }
}