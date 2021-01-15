
namespace Kun.Administration {

    @Serenity.Decorators.registerClass()
    export class DataAuditLogGrid extends Serenity.EntityGrid<DataAuditLogRow, any> {
        protected getColumnsKey() { return 'Administration.DataAuditLog'; }
        protected getDialogType() { return DataAuditLogDialog; }
        protected getIdProperty() { return DataAuditLogRow.idProperty; }
        protected getLocalTextPrefix() { return DataAuditLogRow.localTextPrefix; }
        protected getService() { return DataAuditLogService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            return [];
        }

        protected getColumns() {
            var columns = super.getColumns();

            Q.first(columns, x => x.field === DataAuditLogRow.Fields.LogType).format = ctx => {
                var icon: string = null;
                switch (ctx.value) {
                    case DataAuditLogType.Delete:
                        icon = "fa-times text-red";
                        break;
                    case DataAuditLogType.Insert:
                        icon = "fa-plus text-green";
                        break;
                    case DataAuditLogType.Update:
                        icon = "fa-pencil-square-o text-orange";
                        break;
                }

                return (icon ? '<i class="fa ' + icon + '"></i> ' : '') + 
                    Serenity.EnumFormatter.format(DataAuditLogType, ctx.value);
            };

            return columns;
        }
    }
}