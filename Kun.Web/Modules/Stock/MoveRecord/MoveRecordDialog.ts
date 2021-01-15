
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class MoveRecordDialog extends Serenity.EntityDialog<MoveRecordRow, any> {
        protected getFormKey() { return MoveRecordForm.formKey; }
        protected getIdProperty() { return MoveRecordRow.idProperty; }
        protected getLocalTextPrefix() { return MoveRecordRow.localTextPrefix; }
        protected getService() { return MoveRecordService.baseUrl; }
        protected getDeletePermission() { return MoveRecordRow.deletePermission; }
        protected getInsertPermission() { return MoveRecordRow.insertPermission; }
        protected getUpdatePermission() { return MoveRecordRow.updatePermission; }

        protected form = new MoveRecordForm(this.idPrefix);

    }
}