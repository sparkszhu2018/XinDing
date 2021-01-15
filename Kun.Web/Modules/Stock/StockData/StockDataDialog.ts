
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class StockDataDialog extends Serenity.EntityDialog<StockDataRow, any> {
        protected getFormKey() { return StockDataForm.formKey; }
        protected getIdProperty() { return StockDataRow.idProperty; }
        protected getLocalTextPrefix() { return StockDataRow.localTextPrefix; }
        protected getNameProperty() { return StockDataRow.nameProperty; }
        protected getService() { return StockDataService.baseUrl; }
        protected getDeletePermission() { return StockDataRow.deletePermission; }
        protected getInsertPermission() { return StockDataRow.insertPermission; }
        protected getUpdatePermission() { return StockDataRow.updatePermission; }

        protected form = new StockDataForm(this.idPrefix);

    }
}