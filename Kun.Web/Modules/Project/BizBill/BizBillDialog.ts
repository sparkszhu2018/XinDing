
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class BizBillDialog extends Serenity.EntityDialog<BizBillRow, any> {
        protected getFormKey() { return BizBillForm.formKey; }
        protected getIdProperty() { return BizBillRow.idProperty; }
        protected getLocalTextPrefix() { return BizBillRow.localTextPrefix; }
        protected getNameProperty() { return BizBillRow.nameProperty; }
        protected getService() { return BizBillService.baseUrl; }
        protected getDeletePermission() { return BizBillRow.deletePermission; }
        protected getInsertPermission() { return BizBillRow.insertPermission; }
        protected getUpdatePermission() { return BizBillRow.updatePermission; }

        protected form = new BizBillForm(this.idPrefix);

    }
}