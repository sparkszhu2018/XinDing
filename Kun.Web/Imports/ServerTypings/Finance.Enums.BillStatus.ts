namespace Kun.Finance.Enums {
    export enum BillStatus {
        Edit = 10,
        Reject = 20,
        Commited = 30,
        Audited = 50,
        UnAudited = 60
    }
    Serenity.Decorators.registerEnumType(BillStatus, 'Kun.Finance.Enums.BillStatus', 'FinanceEnums.Status');
}
