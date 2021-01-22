
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class ChangeStockItemDialog extends Serenity.EntityDialog<ChangeStockItemRow, any> {
        protected getFormKey() { return ChangeStockItemForm.formKey; }
        protected getIdProperty() { return ChangeStockItemRow.idProperty; }
        protected getLocalTextPrefix() { return ChangeStockItemRow.localTextPrefix; }
        protected getNameProperty() { return ChangeStockItemRow.nameProperty; }
        protected getService() { return ChangeStockItemService.baseUrl; }
        protected getDeletePermission() { return ChangeStockItemRow.deletePermission; }
        protected getInsertPermission() { return ChangeStockItemRow.insertPermission; }
        protected getUpdatePermission() { return ChangeStockItemRow.updatePermission; }

        protected form = new ChangeStockItemForm(this.idPrefix);

    }
}