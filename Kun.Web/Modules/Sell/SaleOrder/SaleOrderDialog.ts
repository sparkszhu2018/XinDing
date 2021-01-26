
namespace Kun.Sell {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class SaleOrderDialog extends Serenity.EntityDialog<SaleOrderRow, any> {
        protected getFormKey() { return SaleOrderForm.formKey; }
        protected getIdProperty() { return SaleOrderRow.idProperty; }
        protected getLocalTextPrefix() { return SaleOrderRow.localTextPrefix; }
        protected getNameProperty() { return SaleOrderRow.nameProperty; }
        protected getService() { return SaleOrderService.baseUrl; }
        protected getDeletePermission() { return SaleOrderRow.deletePermission; }
        protected getInsertPermission() { return SaleOrderRow.insertPermission; }
        protected getUpdatePermission() { return SaleOrderRow.updatePermission; }

        protected form = new SaleOrderForm(this.idPrefix);
        constructor() {
            super();
            this.form.CustomerId.change(e => {
                this.form.SettleCustomerId.value = this.form.CustomerId.value;

            }); 
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
                        Sell.SaleOrderService.Commit({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("提交成功!");
                            this.dialogClose();
                        });
                    });
                }
            });
            if (Q.Authorization.hasPermission("Sell:SaleOrder:Approve")) {
                buttons.push({
                    title: "审核",
                    icon: "fa-star",
                    cssClass: "audit-button",
                    onClick: () => {
                        Sell.SaleOrderService.Audit({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("审核成功!");
                            this.dialogClose();
                        });
                    }
                });
                buttons.push({
                    title: "驳回",
                    icon: "fa-star-o",
                    cssClass: "reject-button",
                    onClick: () => {
                        Sell.SaleOrderService.Reject({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("驳回成功!");
                            this.dialogClose();
                        });
                    }
                });
            }
            if (Q.Authorization.hasPermission("Sell:SaleOrder:UnApprove")) {
                buttons.push({
                    title: "反审核",
                    icon: "fa-reply-all",
                    cssClass: "unAudit-button",
                    onClick: () => {
                        Sell.SaleOrderService.UnAudit({
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
            if (this.entity.Status == Sell.Enums.BillStatus.Edit
                || this.entity.Status == Sell.Enums.BillStatus.Reject
                || this.entity.Status == Sell.Enums.BillStatus.UnAudited
            ) {

                this.toolbar.findButton('save-and-close-button').show();
                this.toolbar.findButton('submit-button').show();
                this.toolbar.findButton('apply-changes-button').show();
                this.toolbar.findButton('delete-button').show();

                this.toolbar.findButton('reject-button').hide();
                this.toolbar.findButton('audit-button').hide();
                this.toolbar.findButton('unAudit-button').hide(); 

            } else if (this.entity.Status == Sell.Enums.BillStatus.Commited) {

                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.toolbar.findButton('save-and-close-button').hide();
                this.toolbar.findButton('submit-button').hide();
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('delete-button').hide();

                this.toolbar.findButton('reject-button').show();
                this.toolbar.findButton('audit-button').show();
                this.toolbar.findButton('unAudit-button').hide(); 
            }
            else if (this.entity.Status == Sell.Enums.BillStatus.Audited) {
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