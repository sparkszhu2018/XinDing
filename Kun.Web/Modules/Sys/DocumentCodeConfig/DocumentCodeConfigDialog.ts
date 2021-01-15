
namespace Kun.Sys {

    @Serenity.Decorators.registerClass()
    export class DocumentCodeConfigDialog extends Serenity.EntityDialog<DocumentCodeConfigRow, any> {
        protected getFormKey() { return DocumentCodeConfigForm.formKey; }
        protected getIdProperty() { return DocumentCodeConfigRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentCodeConfigRow.localTextPrefix; }
        protected getNameProperty() { return DocumentCodeConfigRow.nameProperty; }
        protected getService() { return DocumentCodeConfigService.baseUrl; }
        protected getDeletePermission() { return DocumentCodeConfigRow.deletePermission; }
        protected getInsertPermission() { return DocumentCodeConfigRow.insertPermission; }
        protected getUpdatePermission() { return DocumentCodeConfigRow.updatePermission; }

        protected form = new DocumentCodeConfigForm(this.idPrefix);

    }
}