/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    export class MaintenanceManhoursEditor extends Common.GridEditorBase<MaintenanceManhoursRow> {
        protected getColumnsKey() { return "Ops.MaintenanceManhours"; } 
        protected getDialogType() { return MaintenanceManhoursDialog; }
        protected getLocalTextPrefix() { return MaintenanceManhoursRow.localTextPrefix; }
         

        constructor(container: JQuery) {
            super(container);
             
        } 

        validateEntity(row, id) {  
            if (!Q.isEmptyOrNull(row.ManhourId)) { 
                row.ManhourName = Ops.ManhourPriceRow.getLookup().itemById[row.ManhourId].Name;
            }
            return true;
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.push({
                title: "选择工时",
                cssClass: "add-button",
                onClick: () => {
                    var dlg = new Ops.ManhourPricePickerDialog();
                    dlg.onSuccess = (selected) => { 
                        var i = 0;
                        if (this.view.getLength() == 0) {
                            i = 10;
                        } else {
                            i = this.view.getItems()[this.view.getLength() - 1].Serial + 10;
                        }
                        for (var sel of selected) {
                            var item = <MaintenanceManhoursRow>{
                                Serial: i,
                                ManhourId: sel.Id,
                                Qty: 1,
                                Price: sel.Price,
                                Amount: sel.Price * 1,
                                ManhourName: sel.Name,
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