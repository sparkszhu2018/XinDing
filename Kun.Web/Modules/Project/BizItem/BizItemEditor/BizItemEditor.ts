/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class BizItemEditor extends Common.GridEditorBase<BizItemRow> {
        protected getColumnsKey() { return "Project.BizItem"; } 
        protected getDialogType() { return BizItemEditorDialog; }
        protected getLocalTextPrefix() { return BizItemRow.localTextPrefix; }
         
        private _head: BizBillRow;
        get Head() { return this._head; }
        set Head(value: BizBillRow) { 
            this._head = value; 

            if (this._head.Status !== Enums.BillStatus.Edit
                && this._head.Status !== Enums.BillStatus.Reject
                && this._head.Status !== Enums.BillStatus.UnAudited
            ) {
                this.toolbar.findButton('add-button').hide(); 
            } else {
                this.toolbar.findButton('add-button').show(); 
            }
        }

        constructor(container: JQuery) {
            super(container);
             
        } 

        validateEntity(row, id) { 
            if (!Q.isEmptyOrNull(row.BizType)) {
                row.BizTypeName = Basic.BizTypeRow.getLookup().itemById[row.BizType].Name;
            }
            return true;
        } 

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons[0].onClick = () => {
                var i = 0;
                if (this.view.getLength() == 0) {
                    i = 10;
                } else {
                    i = this.view.getItems()[this.view.getLength() - 1].Serial + 10;
                } 
                this.createEntityDialog(this.getItemType(), dlg => { 
                    var dialog = dlg as BizItemEditorDialog;
                    dialog.Head = this._head; 
                    dialog.Serial = i;
                    dialog.onSave = (opt, callback) => this.save(opt, callback);
                    var entity = this.getNewEntity() as BizItemRow;
                    entity.Serial = i;
                    dialog.loadEntityAndOpenDialog(entity); 
                });
            }
            return buttons;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('Amount')
                ]
            });

            return grid;
        }

        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.showFooterRow = true;
            return opt;
        }
         
    }
}