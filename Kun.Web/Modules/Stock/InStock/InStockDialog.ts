
namespace Kun.Stock {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class InStockDialog extends Serenity.EntityDialog<InStockRow, any> {
        protected getFormKey() { return InStockForm.formKey; }
        protected getIdProperty() { return InStockRow.idProperty; }
        protected getLocalTextPrefix() { return InStockRow.localTextPrefix; }
        protected getNameProperty() { return InStockRow.nameProperty; }
        protected getService() { return InStockService.baseUrl; }
        protected getDeletePermission() { return InStockRow.deletePermission; }
        protected getInsertPermission() { return InStockRow.insertPermission; }
        protected getUpdatePermission() { return InStockRow.updatePermission; }

        protected form = new InStockForm(this.idPrefix);

        constructor() {
            super();
            this.form.BillType.change(e => {
                this.entity.BillType = Q.toId(this.form.BillType.value);
                this.form.Items.Head = this.entity;
            });
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
                        Stock.InStockService.Commit({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("提交成功!");
                            this.dialogClose();
                        });
                    });
                }
            });

            if (Q.Authorization.hasPermission("Stock:InStock:Approve")) {
                buttons.push({
                    title: "审核",
                    icon: "fa-star",
                    cssClass: "audit-button",
                    onClick: () => {
                        this.save((r) => {
                            this.entityId = r.EntityId;
                            if (!this.validateBeforeSave()) return;

                            Stock.InStockService.Audit({
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
                        Stock.InStockService.Reject({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("驳回成功!");
                            this.dialogClose();
                        });
                    }
                });
            }


            if (Q.Authorization.hasPermission("Stock:InStock:UnApprove")) {
                buttons.push({
                    title: "反审核",
                    icon: "fa-reply-all",
                    cssClass: "unAudit-button",
                    onClick: () => {
                        Stock.InStockService.UnAudit({
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
            if (this.entity.Status == Stock.Enums.BillStatus.Edit
                || this.entity.Status == Stock.Enums.BillStatus.Reject
                || this.entity.Status == Project.Enums.BillStatus.UnAudited
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