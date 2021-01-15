namespace Kun.Stock.Enums {
    export enum InStockBillType {
        PuchaseInstock = 1,
        OtherInStock = 9
    }
    Serenity.Decorators.registerEnumType(InStockBillType, 'Kun.Stock.Enums.InStockBillType', 'StockEnums.InStockBillType');
}
