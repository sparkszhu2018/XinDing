
namespace Kun.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class DataAuditLogDialog extends Serenity.EntityDialog<DataAuditLogRow, any> {
        protected getFormKey() { return DataAuditLogForm.formKey; }
        protected getIdProperty() { return DataAuditLogRow.idProperty; }
        protected getNameProperty() { return DataAuditLogRow.idProperty; }
        protected getLocalTextPrefix() { return DataAuditLogRow.localTextPrefix; }
        protected getService() { return DataAuditLogService.baseUrl; }

        protected form = new DataAuditLogForm(this.idPrefix);

        protected getToolbarButtons() {
            return [];
        }

        protected updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
        }
    }
}