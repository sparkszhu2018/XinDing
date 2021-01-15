namespace Kun.Stock.Enums {
    export enum InvoiceType {
        WU = 0,
        ZP = 10,
        PP = 20,
        SJ = 30
    }
    Serenity.Decorators.registerEnumType(InvoiceType, 'Kun.Stock.Enums.InvoiceType', 'InStockEnums.InvoiceType');
}
