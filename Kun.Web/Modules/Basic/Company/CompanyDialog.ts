
namespace Kun.Basic {

    @Serenity.Decorators.registerClass()
    export class CompanyDialog extends Serenity.EntityDialog<CompanyRow, any> {
        protected getFormKey() { return CompanyForm.formKey; }
        protected getIdProperty() { return CompanyRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyRow.localTextPrefix; }
        protected getNameProperty() { return CompanyRow.nameProperty; }
        protected getService() { return CompanyService.baseUrl; }
        protected getDeletePermission() { return CompanyRow.deletePermission; }
        protected getInsertPermission() { return CompanyRow.insertPermission; }
        protected getUpdatePermission() { return CompanyRow.updatePermission; }

        protected form = new CompanyForm(this.idPrefix);

    }
}