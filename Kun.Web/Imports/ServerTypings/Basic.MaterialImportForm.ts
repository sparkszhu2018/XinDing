namespace Kun.Basic {
    export interface MaterialImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class MaterialImportForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.MaterialImportForm';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaterialImportForm.init)  {
                MaterialImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(MaterialImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}
