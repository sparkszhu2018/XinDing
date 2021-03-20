
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class InvoiceDialog extends Serenity.EntityDialog<InvoiceRow, any> {
        protected getFormKey() { return InvoiceForm.formKey; }
        protected getIdProperty() { return InvoiceRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceRow.nameProperty; }
        protected getService() { return InvoiceService.baseUrl; }
        protected getDeletePermission() { return InvoiceRow.deletePermission; }
        protected getInsertPermission() { return InvoiceRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceRow.updatePermission; }

        protected form = new InvoiceForm(this.idPrefix);
        private _billType: string;

        constructor() {
            super();   
            //this.form.BillType.changeSelect2(e => { 
            //    if (this.form.Items.rowCount() > 0 && !Q.isEmptyOrNull(this._billType)) {
            //        Q.confirm("改变业务类型,明细数据将全部清空，确定继续?", () => {
            //            this.form.Items.view.setItems([], true);
            //            this._billType = this.form.BillType.value;
            //            this.form.Items.setButtons(this._billType); 
            //        },
            //            {
            //                onNo: () => {
            //                    if (!Q.isEmptyOrNull(this._billType)) {
            //                        this.form.BillType.set_value(this._billType);
            //                    }
            //                }
            //            });
            //    } else {
            //        this._billType = this.form.BillType.value; 
            //        this.form.Items.setButtons(this._billType);  
            //    }
            //});
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.form.Items.Head = this.entity;
            //this._billType = this.form.BillType.value;
            //this.form.Items.setButtons(this._billType);  
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push({
                title: "提交",
                icon: "glyphicon-ok",
                cssClass: "submit-button",
                onClick: () => {
                    this.save((r) => {
                        this.entityId = r.EntityId;
                        if (!this.validateBeforeSave()) return;
                        Finance.InvoiceService.Commit({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("提交成功!");
                            this.dialogClose();
                        });
                    });
                }
            });
            if (Q.Authorization.hasPermission("Finance:Invoice:Approve")) {
                buttons.push({
                    title: "审核",
                    icon: "fa-star",
                    cssClass: "audit-button",
                    onClick: () => {
                        this.save((r) => {
                            this.entityId = r.EntityId;
                            if (!this.validateBeforeSave()) return;
                            Finance.InvoiceService.Audit({
                                EntityId: this.entityId
                            }, r => {
                                Q.notifySuccess("审核成功!");
                                this.dialogClose();
                            });
                        });
                    }
                });

                buttons.push({
                    title: "驳回",
                    icon: "fa-star-o",
                    cssClass: "reject-button",
                    onClick: () => {
                        Finance.InvoiceService.Reject({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("驳回成功!");
                            this.dialogClose();
                        });
                    }
                });
            }
            if (Q.Authorization.hasPermission("Finance:Invoice:UnApprove")) {
                buttons.push({
                    title: "反审核",
                    icon: "fa-reply-all",
                    cssClass: "unAudit-button",
                    onClick: () => {
                        Finance.InvoiceService.UnAudit({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("反审核成功!");
                            this.dialogClose();
                        });
                    }
                });
            }
            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();
            if (this.entity.Status == Finance.Enums.BillStatus.Edit
                || this.entity.Status == Finance.Enums.BillStatus.Reject
                || this.entity.Status == Finance.Enums.BillStatus.UnAudited
            ) {

                this.toolbar.findButton('save-and-close-button').show();
                this.toolbar.findButton('submit-button').hide();
                this.toolbar.findButton('apply-changes-button').show();
                this.toolbar.findButton('delete-button').show();

                this.toolbar.findButton('reject-button').hide();
                this.toolbar.findButton('audit-button').show();
                this.toolbar.findButton('unAudit-button').hide();

            } else if (this.entity.Status == Finance.Enums.BillStatus.Commited) {

                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.toolbar.findButton('save-and-close-button').hide();
                this.toolbar.findButton('submit-button').hide();
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('delete-button').hide();

                this.toolbar.findButton('reject-button').show();
                this.toolbar.findButton('audit-button').show();
                this.toolbar.findButton('unAudit-button').hide();
            }
            else if (this.entity.Status == Finance.Enums.BillStatus.Audited) {
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.toolbar.findButton('save-and-close-button').hide();
                this.toolbar.findButton('submit-button').hide();
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('delete-button').hide();

                this.toolbar.findButton('reject-button').hide();
                this.toolbar.findButton('audit-button').hide();
                this.toolbar.findButton('unAudit-button').show();
            }
        }
    }
}