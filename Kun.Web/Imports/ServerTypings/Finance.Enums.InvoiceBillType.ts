namespace Kun.Finance.Enums {
    export enum InvoiceBillType {
        SaleOrder = 10,
        Maintenance = 20,
        Project = 30
    }
    Serenity.Decorators.registerEnumType(InvoiceBillType, 'Kun.Finance.Enums.InvoiceBillType', 'FinanceEnums.InvoiceBillType');
}
