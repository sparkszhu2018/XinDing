
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
        }
    }
}