
namespace Kun.Sys {

    @Serenity.Decorators.registerClass()
    export class DocumentCodeConfigGrid extends Serenity.EntityGrid<DocumentCodeConfigRow, any> {
        protected getColumnsKey() { return 'Sys.DocumentCodeConfig'; }
        protected getDialogType() { return DocumentCodeConfigDialog; }
        protected getIdProperty() { return DocumentCodeConfigRow.idProperty; }
        protected getInsertPermission() { return DocumentCodeConfigRow.insertPermission; }
        protected getLocalTextPrefix() { return DocumentCodeConfigRow.localTextPrefix; }
        protected getService() { return DocumentCodeConfigService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}