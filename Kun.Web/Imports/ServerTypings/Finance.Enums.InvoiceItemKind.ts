namespace Kun.Finance.Enums {
    export enum InvoiceItemKind {
        SaleOrderItem = 10,
        Maintenance = 20,
        Project = 30
    }
    Serenity.Decorators.registerEnumType(InvoiceItemKind, 'Kun.Finance.Enums.InvoiceItemKind', 'FinanceEnums.InvoiceItemKind');
}
