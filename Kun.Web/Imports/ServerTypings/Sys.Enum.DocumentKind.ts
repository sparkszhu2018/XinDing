namespace Kun.Sys.Enum {
    export enum DocumentKind {
        Material = 1,
        Customer = 2,
        Supplier = 3,
        InStockBill = 10,
        MaintBill = 20,
        SaleOrderBill = 30
    }
    Serenity.Decorators.registerEnumType(DocumentKind, 'Kun.Sys.Enum.DocumentKind', 'Sys.DocumentKind');
}
