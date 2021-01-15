namespace Kun.Sys {
    export interface DocumentCodeConfigForm {
        DocumentKind: Serenity.EnumEditor;
        DocumentCodePrefix: Serenity.StringEditor;
    }

    export class DocumentCodeConfigForm extends Serenity.PrefixedContext {
        static formKey = 'Sys.DocumentCodeConfig';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentCodeConfigForm.init)  {
                DocumentCodeConfigForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.StringEditor;

                Q.initFormType(DocumentCodeConfigForm, [
                    'DocumentKind', w0,
                    'DocumentCodePrefix', w1
                ]);
            }
        }
    }
}
