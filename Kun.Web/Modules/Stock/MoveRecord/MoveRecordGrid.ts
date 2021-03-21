
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    export class MoveRecordGrid extends Serenity.EntityGrid<MoveRecordRow, any> {
        protected getColumnsKey() { return 'Stock.MoveRecord'; }
        protected getDialogType() { return MoveRecordDialog; }
        protected getIdProperty() { return MoveRecordRow.idProperty; }
        protected getInsertPermission() { return MoveRecordRow.insertPermission; }
        protected getLocalTextPrefix() { return MoveRecordRow.localTextPrefix; }
        protected getService() { return MoveRecordService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }


        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            // super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item: MoveRecordRow = this.itemAt(row);
            var target = $(e.target);
            if (target.hasClass('s-EditLink')) { 
                e.preventDefault();

                switch (item.BizBillType) {
                    case Sys.Enum.DocumentKind.InStockBill: 
                        InStockService.Retrieve({
                            EntityId: item.BizBillId
                        }, r => {
                            let dlg = new InStockDialog();
                            dlg.loadEntityAndOpenDialog(r.Entity, true);
                            dlg.element.on('dialogclose', () => {
                                this.refresh();
                                dlg = null;
                            });
                        }, { async: false });

                        break;
                    case Sys.Enum.DocumentKind.MaintBill:
                        Ops.MaintenanceService.Retrieve({
                            EntityId: item.BizBillId
                        }, r => {
                            let dlg = new Ops.MaintenanceDialog();
                            dlg.loadEntityAndOpenDialog(r.Entity, true);
                            dlg.element.on('dialogclose', () => {
                                this.refresh();
                                dlg = null;
                            });
                        }, { async: false });
                        break;
                    case Sys.Enum.DocumentKind.SaleOrderBill:
                        Sell.SaleOrderService.Retrieve({
                            EntityId: item.BizBillId
                        }, r => {
                                let dlg = new Sell.SaleOrderDialog();
                            dlg.loadEntityAndOpenDialog(r.Entity, true);
                            dlg.element.on('dialogclose', () => {
                                this.refresh();
                                dlg = null;
                            });
                        }, { async: false });
                        break; 
                    case Sys.Enum.DocumentKind.ChangeStockBill:
                        ChangeStockService.Retrieve({
                            EntityId: item.BizBillId
                        }, r => {
                                let dlg = new ChangeStockDialog();
                            dlg.loadEntityAndOpenDialog(r.Entity, true);
                            dlg.element.on('dialogclose', () => {
                                this.refresh();
                                dlg = null;
                            });
                        }, { async: false });
                        break;
                    case Sys.Enum.DocumentKind.ProjectMaterials:
                        Project.MaterialsBillService.Retrieve({
                            EntityId: item.BizBillId
                        }, r => {
                                let dlg = new Project.MaterialsBillDialog();
                            dlg.loadEntityAndOpenDialog(r.Entity, true);
                            dlg.element.on('dialogclose', () => {
                                this.refresh();
                                dlg = null;
                            });
                        }, { async: false });
                        break;  
                    case Sys.Enum.DocumentKind.AssembleBill:
                        AssembleService.Retrieve({
                            EntityId: item.BizBillId
                        }, r => {
                                let dlg = new AssembleDialog();
                            dlg.loadEntityAndOpenDialog(r.Entity, true);
                            dlg.element.on('dialogclose', () => {
                                this.refresh();
                                dlg = null;
                            });
                        }, { async: false });
                        break;
                    default:
                        break;

                }
            };
        }
    }
}