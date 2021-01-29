namespace Kun.Basic {
    export interface PaymentItemForm {
        Name: Serenity.StringEditor;
    }

    export class PaymentItemForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.PaymentItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaymentItemForm.init)  {
                PaymentItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PaymentItemForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
