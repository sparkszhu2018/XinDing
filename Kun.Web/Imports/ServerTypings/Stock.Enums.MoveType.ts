namespace Kun.Stock.Enums {
    export enum MoveType {
        Purchase = 10,
        Sale = 30,
        Maint = 31,
        MovStock = 50
    }
    Serenity.Decorators.registerEnumType(MoveType, 'Kun.Stock.Enums.MoveType', 'MoveRecordEnums.MoveType');
}
