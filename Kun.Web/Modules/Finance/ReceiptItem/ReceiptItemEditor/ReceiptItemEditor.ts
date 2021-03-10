/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    export class ReceiptItemEditor extends Common.GridEditorBase<ReceiptItemRow> {
        protected getColumnsKey() { return "Finance.ReceiptItemEditor"; }
        protected getDialogType() { return ReceiptItemEditorDialog; }
        protected getLocalTextPrefix() { return ReceiptItemRow.localTextPrefix; }
        private _billType: string;
        protected status: Finance.Enums.BillStatus;
        private _head: Finance.ReceiptRow;
        get Head() { return this._head; }
        set Head(value: ReceiptRow) {
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
  
            return true;
        }

        public setButtons(BillType:string) {
            this._billType = BillType
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.push({
                title: "选择发票",
                cssClass: "add-button",
                visible: () => { return false },
                onClick: () => {

                    var dlg = new InvoiceItemPickerDialog({
                        hideData: null,
                        criteria: [[InvoiceItemRow.Fields.ReceiptAmount], '<', [InvoiceItemRow.Fields.InvoiceAmount]]
                    });
                    dlg.onSuccess = (selected) => {
                        // selected = selected.filter(x => !Q.any(this.view.getItems(), y => y.SourceItemId == x.Id));
                        var i = 10;
                        if (this.view.getLength() > 0) { i = this.view.getItems()[this.view.getLength() - 1].Serial + 10; }
                        for (var sel of selected) {
                            var item = <ReceiptItemRow>{

                                Serial: i, 
                                SourceDocumentId: sel.HeadId,
                                SourceDocumentNo: sel.BillNo,
                                SourceItemId: sel.Id,
                                SourceItemSerial: sel.Serial,
                                Name: sel.Name, 
                                InvoiceAmount: sel.InvoiceAmount,
                                BalanceAmount: sel.InvoiceAmount - sel.ReceiptAmount,
                                ReceiptAmount: sel.InvoiceAmount - sel.ReceiptAmount,
                                  
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
            return buttons;
        } 
         
    }
}