
namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    export class ManhourPriceDialog extends Serenity.EntityDialog<ManhourPriceRow, any> {
        protected getFormKey() { return ManhourPriceForm.formKey; }
        protected getIdProperty() { return ManhourPriceRow.idProperty; }
        protected getLocalTextPrefix() { return ManhourPriceRow.localTextPrefix; }
        protected getNameProperty() { return ManhourPriceRow.nameProperty; }
        protected getService() { return ManhourPriceService.baseUrl; }
        protected getDeletePermission() { return ManhourPriceRow.deletePermission; }
        protected getInsertPermission() { return ManhourPriceRow.insertPermission; }
        protected getUpdatePermission() { return ManhourPriceRow.updatePermission; }

        protected form = new ManhourPriceForm(this.idPrefix);

    }
}