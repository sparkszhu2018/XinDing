namespace Kun.Ops {
    export interface ManhourPriceForm {
        Name: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
    }

    export class ManhourPriceForm extends Serenity.PrefixedContext {
        static formKey = 'Ops.ManhourPrice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ManhourPriceForm.init)  {
                ManhourPriceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ManhourPriceForm, [
                    'Name', w0,
                    'Price', w1
                ]);
            }
        }
    }
}
