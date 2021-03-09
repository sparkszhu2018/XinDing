/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />

namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    export class BizItemViewEditor extends Common.GridEditorBase<BizItemRow> {
        protected getColumnsKey() { return "Project.BizItemView"; } 
        protected getDialogType() { return BizItemEditorDialog; }
        protected getLocalTextPrefix() { return BizItemRow.localTextPrefix; }
         
        private _head: BizBillRow;
        get Head() { return this._head; }
        set Head(value: BizBillRow) { 
            this._head = value; 

            //if (this._head.Status !== Enums.BillStatus.Edit && this._head.Status !== Enums.BillStatus.Reject) {
            //    this.toolbar.findButton('add-button').hide(); 
            //} else {
            //    this.toolbar.findButton('add-button').show(); 
            //}
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
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('Amount'),
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