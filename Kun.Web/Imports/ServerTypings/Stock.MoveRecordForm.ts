namespace Kun.Stock {
    export interface MoveRecordForm {
        MovCode: Serenity.EnumEditor;
        FromStockId: Serenity.StringEditor;
        FromMaterialId: Serenity.LookupEditor;
        FromUnitId: Serenity.LookupEditor;
        FromWarehouseId: Serenity.StringEditor;
        FromPositionId: Serenity.StringEditor;
        FromLotId: Serenity.LookupEditor;
        Qty: Serenity.DecimalEditor;
        ToStockId: Serenity.StringEditor;
        ToMaterialId: Serenity.LookupEditor;
        ToUnitId: Serenity.LookupEditor;
        ToWarehouseId: Serenity.StringEditor;
        ToPositionId: Serenity.StringEditor;
        ToLotId: Serenity.LookupEditor;
        BizBillType: Serenity.EnumEditor;
        BizBillId: Serenity.StringEditor;
        BizItemId: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
    }

    export class MoveRecordForm extends Serenity.PrefixedContext {
        static formKey = 'Stock.MoveRecord';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MoveRecordForm.init)  {
                MoveRecordForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(MoveRecordForm, [
                    'MovCode', w0,
                    'FromStockId', w1,
                    'FromMaterialId', w2,
                    'FromUnitId', w2,
                    'FromWarehouseId', w1,
                    'FromPositionId', w1,
                    'FromLotId', w2,
                    'Qty', w3,
                    'ToStockId', w1,
                    'ToMaterialId', w2,
                    'ToUnitId', w2,
                    'ToWarehouseId', w1,
                    'ToPositionId', w1,
                    'ToLotId', w2,
                    'BizBillType', w0,
                    'BizBillId', w1,
                    'BizItemId', w1,
                    'Status', w0
                ]);
            }
        }
    }
}
