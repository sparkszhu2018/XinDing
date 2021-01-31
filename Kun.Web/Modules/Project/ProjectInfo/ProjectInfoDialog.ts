
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ProjectInfoDialog extends Serenity.EntityDialog<ProjectInfoRow, any> {
        protected getFormKey() { return ProjectInfoForm.formKey; }
        protected getIdProperty() { return ProjectInfoRow.idProperty; }
        protected getLocalTextPrefix() { return ProjectInfoRow.localTextPrefix; }
        protected getNameProperty() { return ProjectInfoRow.nameProperty; }
        protected getService() { return ProjectInfoService.baseUrl; }
        protected getDeletePermission() { return ProjectInfoRow.deletePermission; }
        protected getInsertPermission() { return ProjectInfoRow.insertPermission; }
        protected getUpdatePermission() { return ProjectInfoRow.updatePermission; }

        protected form = new ProjectInfoForm(this.idPrefix);

    }
}