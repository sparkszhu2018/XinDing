
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class OutStockDialog extends Serenity.EntityDialog<OutStockRow, any> {
        protected getFormKey() { return OutStockForm.formKey; }
        protected getIdProperty() { return OutStockRow.idProperty; }
        protected getLocalTextPrefix() { return OutStockRow.localTextPrefix; }
        protected getNameProperty() { return OutStockRow.nameProperty; }
        protected getService() { return OutStockService.baseUrl; }
        protected getDeletePermission() { return OutStockRow.deletePermission; }
        protected getInsertPermission() { return OutStockRow.insertPermission; }
        protected getUpdatePermission() { return OutStockRow.updatePermission; }

        protected form = new OutStockForm(this.idPrefix);
        constructor() {
            super();
           
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.form.Materials.Head = this.entity;
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
                        Stock.OutStockService.Commit({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("提交成功!");
                            this.dialogClose();
                        });
                    });
                }
            });
            if (Q.Authorization.hasPermission("Stock:OutStock:Approve")) {
                buttons.push({
                    title: "审核",
                    icon: "fa-star",
                    cssClass: "audit-button",
                    onClick: () => {
                        this.save((r) => {
                            this.entityId = r.EntityId;
                            if (!this.validateBeforeSave()) return;
                            Stock.OutStockService.Audit({
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
                        Stock.OutStockService.Reject({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("驳回成功!");
                            this.dialogClose();
                        });
                    }
                });
            }
            if (Q.Authorization.hasPermission("Stock:OutStock:UnApprove")) {
                buttons.push({
                    title: "反审核",
                    icon: "fa-reply-all",
                    cssClass: "unAudit-button",
                    onClick: () => {
                        Q.confirm("确定反审核吗?", () => {
                            Stock.OutStockService.UnAudit({
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