
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ChangeStockDialog extends Serenity.EntityDialog<ChangeStockRow, any> {
        protected getFormKey() { return ChangeStockForm.formKey; }
        protected getIdProperty() { return ChangeStockRow.idProperty; }
        protected getLocalTextPrefix() { return ChangeStockRow.localTextPrefix; }
        protected getNameProperty() { return ChangeStockRow.nameProperty; }
        protected getService() { return ChangeStockService.baseUrl; }
        protected getDeletePermission() { return ChangeStockRow.deletePermission; }
        protected getInsertPermission() { return ChangeStockRow.insertPermission; }
        protected getUpdatePermission() { return ChangeStockRow.updatePermission; }

        protected form = new ChangeStockForm(this.idPrefix);

        constructor() {
            super();
            
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.form.Items.Head = this.entity;
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
                        Stock.ChangeStockService.Commit({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("提交成功!");
                            this.dialogClose();
                        });
                    });
                }
            });

            if (Q.Authorization.hasPermission("Stock:ChangeStock:Approve")) {
                buttons.push({
                    title: "审核",
                    icon: "fa-star",
                    cssClass: "audit-button",
                    onClick: () => {
                        this.save((r) => {
                            this.entityId = r.EntityId;
                            if (!this.validateBeforeSave()) return;
                            Stock.ChangeStockService.Audit({
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
                        Stock.ChangeStockService.Reject({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("驳回成功!");
                            this.dialogClose();
                        });
                    }
                });
            }

            if (Q.Authorization.hasPermission("Stock:ChangeStock:UnApprove")) {
                buttons.push({
                    title: "反审核",
                    icon: "fa-reply-all",
                    cssClass: "unAudit-button",
                    onClick: () => {
                        Q.confirm("确定反审核吗?", () => {
                            Stock.ChangeStockService.UnAudit({
                                EntityId: this.entityId
                            }, r => {
                                Q.notifySuccess("反审核成功!");
                                this.dialogClose();
                            });
                        });
                    }
                });
            }
            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();
            if (this.entity.Status == Stock.Enums.BillStatus.Edit
                || this.entity.Status == Stock.Enums.BillStatus.Reject 
                || this.entity.Status == Stock.Enums.BillStatus.UnAudited
            ) {

                this.toolbar.findButton('save-and-close-button').show();
                this.toolbar.findButton('submit-button').hide();
                this.toolbar.findButton('apply-changes-button').show();
                this.toolbar.findButton('delete-button').show();

                this.toolbar.findButton('reject-button').hide();
                this.toolbar.findButton('audit-button').show();
                this.toolbar.findButton('unAudit-button').hide();


            } else if (this.entity.Status == Stock.Enums.BillStatus.Commited) {

                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.toolbar.findButton('save-and-close-button').hide();
                this.toolbar.findButton('submit-button').hide();
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('delete-button').hide();

                this.toolbar.findButton('reject-button').show();
                this.toolbar.findButton('audit-button').show();
                this.toolbar.findButton('unAudit-button').hide();
            }
            else if (this.entity.Status == Stock.Enums.BillStatus.Audited) {
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