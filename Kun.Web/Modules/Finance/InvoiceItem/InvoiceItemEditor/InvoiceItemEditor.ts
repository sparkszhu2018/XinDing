/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Finance {

    @Serenity.Decorators.registerClass() 
    export class InvoiceItemEditor extends Common.GridEditorBase<InvoiceItemRow> {
        protected getColumnsKey() { return "Finance.InvoiceItemEditor"; }
        protected getDialogType() { return InvoiceItemEditorDialog; }
        protected getLocalTextPrefix() { return InvoiceItemRow.localTextPrefix; }
        private _billType: string;
        protected status: Finance.Enums.BillStatus;
        private _head: Finance.InvoiceRow;
        get Head() { return this._head; }
        set Head(value: InvoiceRow) {
            this._head = value; 
            if (this._head.Status !== Finance.Enums.BillStatus.Edit && this._head.Status !== Finance.Enums.BillStatus.Reject
                && this._head.Status !== Finance.Enums.BillStatus.UnAudited) {
                this.toolbar.findButton('add-button').hide();
            } else {
                this.toolbar.findButton('add-button').show();
            }
        }

        constructor(container: JQuery) {
            super(container); 
             
        }

        validateEntity(row, id) { 
            //var material = Basic.MaterialRow.getLookup().itemById[row.MaterialId];
            //if (material.Code == '10000000') {
            //    Q.notifyError("不得选择虚拟物料!")
            //    return false;
            //}

            //row.MaterialName = material.Name;
            //row.MaterialCode = material.Code; 
            //row.UnitName = Basic.UnitRow.getLookup().itemById[material.UnitId].Name;
  
            //row.SupplierName = Basic.SupplierRow.getLookup().itemById[row.SupplierId].Name;
            //if (!Q.isEmptyOrNull(row.WarehouseId)) { 
            //    row.WarehouseName = Basic.WarehouseRow.getLookup().itemById[row.WarehouseId].Name; 
            //}
            //if (!Q.isEmptyOrNull(row.PositionId)) {
            //    row.PositionName = Basic.PositionRow.getLookup().itemById[row.PositionId].Name;
            //}

            //row.Kind = Serenity.EnumFormatter.format(Enums.InvoiceItemKind, Q.toId(row.Kind));
            //row.SourceDocumentType = Serenity.EnumFormatter.format(Enums.InvoiceBillType, Q.toId(row.SourceDocumentType));

            
            if (!Q.isEmptyOrNull(row.VendorId)) {
                row.VendorName = Basic.CustomerRow.getLookup().itemById[row.VendorId].Name;
            }
            return true;
        }

        public setButtons(BillType:string) {
            this._billType = BillType
        }

        //protected getButtons(): Serenity.ToolButton[] {
        //    var buttons = super.getButtons();
        //    buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
        //    buttons.push({
        //        title: "选择源单",
        //        cssClass: "add-button",
        //        visible: () => { return false },
        //        onClick: () => {
        //            if (this._billType == Enums.InvoiceBillType.SaleOrder.toString()) {
        //                var dlg = new Sell.SaleOrderItemPickerDialog({
        //                    hideData: null,
        //                    criteria: [[Sell.SaleOrderItemRow.Fields.InvoicedQty], '<', [Sell.SaleOrderItemRow.Fields.Qty]]
        //                });
        //                dlg.onSuccess = (selected) => {
        //                    // selected = selected.filter(x => !Q.any(this.view.getItems(), y => y.SourceItemId == x.Id));
        //                    var i = 10;
        //                    if (this.view.getLength() > 0) { i = this.view.getItems()[this.view.getLength() - 1].Serial + 10; }
        //                    for (var sel of selected) { 
        //                        var item = <InvoiceItemRow>{
                                  
        //                            Serial: i,
        //                            SourceDocumentType: Enums.InvoiceBillType.SaleOrder,
        //                            SourceDocumentId: sel.HeadId,
        //                            SourceDocumentNo: sel.BillNo,
        //                            SourceItemId: sel.Id,
        //                            SourceItemSerial: sel.Serial,
        //                            Name: sel.MaterialName,
        //                            UnitName: sel.UnitName,
        //                            Price: sel.SalePrice,
        //                            Qty: sel.Qty - sel.InvoicedQty,
        //                            Amount: sel.SaleAmount - (sel.InvoicedQty) * sel.SalePrice,
        //                            InvoiceAmount: sel.SaleAmount - (sel.InvoicedQty) * sel.SalePrice,
        //                            Kind: Enums.InvoiceItemKind.SaleOrderItem,
                                     
        //                            // TaxRate:
        //                            //InvoiceNo;
        //                            //Note; 
        //                        };
        //                        var id = this.getNextId();
        //                        item[this.getIdProperty()] = id;
        //                        this.view.addItem(item);
        //                        i = i + 10;
        //                    }

        //                    return true;
        //                };
        //                dlg.dialogOpen();
        //            } else if (this._billType == Enums.InvoiceBillType.Maintenance.toString()) {
        //                var dlg_m = new Ops.MaintenancePickerDialog({
        //                    hideData: null,
        //                    criteria: [[Ops.MaintenanceRow.Fields.InvoicedAmount], '<', [Ops.MaintenanceRow.Fields.TotalSales]]
        //                });
        //                dlg_m.onSuccess = (selected) => {
        //                    var i = 10;
        //                    if (this.view.getLength() > 0) { i = this.view.getItems()[this.view.getLength() - 1].Serial + 10; }
        //                    for (var sel of selected) {
        //                        var item = <InvoiceItemRow>{
        //                            Serial: i,
        //                            SourceDocumentType: Enums.InvoiceBillType.Maintenance,
        //                            SourceDocumentId: sel.Id,
        //                            SourceDocumentNo: sel.BillNo,
        //                            Name: sel.Description,
        //                            Price: sel.TotalSales,
        //                            Qty: 1,
        //                            Amount: sel.TotalSales,
        //                            InvoiceAmount: sel.TotalSales,
        //                            Kind: Enums.InvoiceItemKind.Maintenance,

        //                        };
        //                        var id = this.getNextId();
        //                        item[this.getIdProperty()] = id;
        //                        this.view.addItem(item);
        //                        i = i + 10;
        //                    }
        //                    return true;
        //                };
        //                dlg_m.dialogOpen();
        //            } else if (this._billType == Enums.InvoiceBillType.Project.toString()) {
        //                var dlg_p = new Project.ProjectInfoPickerDialog({
        //                    hideData: null,
        //                    criteria: [[Project.ProjectInfoRow.Fields.IsClosed], '=', 0]
        //                });
        //                dlg_p.onSuccess = (selected) => {
        //                    var i = 10;
        //                    if (this.view.getLength() > 0) { i = this.view.getItems()[this.view.getLength() - 1].Serial + 10; }
        //                    for (var sel of selected) {
        //                        var item = <InvoiceItemRow>{
        //                            Serial: i,
        //                            SourceDocumentType: Enums.InvoiceBillType.Project,
        //                            SourceDocumentId: sel.Id,
        //                            SourceDocumentNo: sel.BillNo,
        //                            Name: sel.Name,
        //                            Price: 0,
        //                            Qty: 0,
        //                            Amount: 0,
        //                            InvoiceAmount: 0,
        //                            Kind: Enums.InvoiceItemKind.Project,

        //                        };
        //                        var id = this.getNextId();
        //                        item[this.getIdProperty()] = id;
        //                        this.view.addItem(item);
        //                        i = i + 10;
        //                    }
        //                    return true;
        //                };
        //                dlg_p.dialogOpen();
        //            } else {
        //                Q.notifyError("请选择业务类型!");
        //            }
        //        }
        //    });  
        //    return buttons; 
        //}


        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.push({
                title: "销售订单",
                cssClass: "add-button",
                onClick: () => {

                    var dlg = new Sell.SaleOrderItemPickerDialog({
                        hideData: null,
                        criteria: [[Sell.SaleOrderItemRow.Fields.InvoicedQty], '<', [Sell.SaleOrderItemRow.Fields.Qty]]
                    });
                    dlg.onSuccess = (selected) => {
                        // selected = selected.filter(x => !Q.any(this.view.getItems(), y => y.SourceItemId == x.Id));
                        var i = 10;
                        if (this.view.getLength() > 0) { i = this.view.getItems()[this.view.getLength() - 1].Serial + 10; }
                        for (var sel of selected) {
                            var item = <InvoiceItemRow>{

                                Serial: i,
                                SourceDocumentType: Enums.InvoiceBillType.SaleOrder,
                                SourceDocumentId: sel.HeadId,
                                SourceDocumentNo: sel.BillNo,
                                SourceItemId: sel.Id,
                                SourceItemSerial: sel.Serial,
                                Name: sel.MaterialName,
                                UnitName: sel.UnitName,
                                Price: sel.SalePrice,
                                Qty: sel.Qty - sel.InvoicedQty,
                                Amount: sel.SaleAmount - (sel.InvoicedQty) * sel.SalePrice,
                                InvoiceAmount: sel.SaleAmount - (sel.InvoicedQty) * sel.SalePrice,
                                Kind: Enums.InvoiceItemKind.SaleOrderItem,

                                // TaxRate:
                                //InvoiceNo;
                                //Note; 
                            };
                            var id = this.getNextId();
                            item[this.getIdProperty()] = id;
                            this.view.addItem(item);
                            i = i + 10;
                        }

                        return true;
                    };
                    dlg.dialogOpen();
                }
            });

            buttons.push({
                title: "维保单",
                cssClass: "add-button",
                onClick: () => { 
                    var dlg_m = new Ops.MaintenancePickerDialog({
                        hideData: null,
                        criteria: [[Ops.MaintenanceRow.Fields.InvoicedAmount], '<', [Ops.MaintenanceRow.Fields.TotalSales]]
                    });
                    dlg_m.onSuccess = (selected) => {
                        var i = 10;
                        if (this.view.getLength() > 0) { i = this.view.getItems()[this.view.getLength() - 1].Serial + 10; }
                        for (var sel of selected) {
                            var item = <InvoiceItemRow>{
                                Serial: i,
                                SourceDocumentType: Enums.InvoiceBillType.Maintenance,
                                SourceDocumentId: sel.Id,
                                SourceDocumentNo: sel.BillNo,
                                Name: sel.Description,
                                Price: sel.TotalSales,
                                Qty: 1,
                                Amount: sel.TotalSales,
                                InvoiceAmount: sel.TotalSales,
                                Kind: Enums.InvoiceItemKind.Maintenance,

                            };
                            var id = this.getNextId();
                            item[this.getIdProperty()] = id;
                            this.view.addItem(item);
                            i = i + 10;
                        }
                        return true;
                    };
                    dlg_m.dialogOpen();
                }
            });

            buttons.push({
                title: "项目",
                cssClass: "add-button",
                onClick: () => {
                    var dlg_p = new Project.ProjectInfoPickerDialog({
                            hideData: null,
                            criteria: [[Project.ProjectInfoRow.Fields.IsClosed], '=', 0]
                        });
                        dlg_p.onSuccess = (selected) => {
                            var i = 10;
                            if (this.view.getLength() > 0) { i = this.view.getItems()[this.view.getLength() - 1].Serial + 10; }
                            for (var sel of selected) {
                                var item = <InvoiceItemRow>{
                                    Serial: i,
                                    SourceDocumentType: Enums.InvoiceBillType.Project,
                                    SourceDocumentId: sel.Id,
                                    SourceDocumentNo: sel.BillNo,
                                    Name: sel.Name,
                                    Price: 0,
                                    Qty: 0,
                                    Amount: 0,
                                    InvoiceAmount: 0,
                                    Kind: Enums.InvoiceItemKind.Project,

                                };
                                var id = this.getNextId();
                                item[this.getIdProperty()] = id;
                                this.view.addItem(item);
                                i = i + 10;
                            }
                            return true;
                        };
                        dlg_p.dialogOpen();
                }
            });


            return buttons;
        }

        protected getColumns() { 
            var columns = super.getColumns();
            Q.first(columns, x => x.field === InvoiceItemRow.Fields.Kind).format = ctx => {

                return Serenity.EnumFormatter.format(Enums.InvoiceItemKind, Q.toId(ctx.value));
            };

            Q.first(columns, x => x.field === InvoiceItemRow.Fields.SourceDocumentType).format = ctx => {

                return Serenity.EnumFormatter.format(Enums.InvoiceBillType, Q.toId(ctx.value));
            };
            return columns;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('Amount'),
                    new Slick.Aggregators.Sum('InvoiceAmount'), 
                ]
            });

            return grid;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            // opt.groupingPanel = true;
            opt.showFooterRow = true;
            return opt;
        }
    }
}