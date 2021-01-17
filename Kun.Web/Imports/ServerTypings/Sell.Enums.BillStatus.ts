namespace Kun.Sell.Enums {
    export enum BillStatus {
        Edit = 10,
        Reject = 20,
        Commited = 30,
        Audited = 50
    }
    Serenity.Decorators.registerEnumType(BillStatus, 'Kun.Sell.Enums.BillStatus', 'SellEnums.Status');
}
