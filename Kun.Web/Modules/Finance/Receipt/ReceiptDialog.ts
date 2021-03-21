
namespace Kun.Finance {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ReceiptDialog extends Serenity.EntityDialog<ReceiptRow, any> {
        protected getFormKey() { return ReceiptForm.formKey; }
        protected getIdProperty() { return ReceiptRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiptRow.localTextPrefix; }
        protected getNameProperty() { return ReceiptRow.nameProperty; }
        protected getService() { return ReceiptService.baseUrl; }
        protected getDeletePermission() { return ReceiptRow.deletePermission; }
        protected getInsertPermission() { return ReceiptRow.insertPermission; }
        protected getUpdatePermission() { return ReceiptRow.updatePermission; }

        protected form = new ReceiptForm(this.idPrefix); 

        protected afterLoadEntity() {
            super.afterLoadEntity();
            //this.form.Items.Head = this.entity;  
            this.form.InvoiceNo.changeSelect2(e => {
                Finance.InvoiceService.FetchInvoiceNo({
                    InvoiceNo: this.form.InvoiceNo.value
                }, r => {
                    this.form.InvoiceAmount.value = r.InvoiceAmount;
                    this.form.BalanceAmount.value = r.UnReceiptAmount;
                });
            });
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
                        Finance.ReceiptService.Commit({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("提交成功!");
                            this.dialogClose();
                        });
                    });
                }
            });
            if (Q.Authorization.hasPermission("Finance:Receipt:Approve")) {
                buttons.push({
                    title: "审核",
                    icon: "fa-star",
                    cssClass: "audit-button",
                    onClick: () => {
                        this.save((r) => {
                            this.entityId = r.EntityId;
                            if (!this.validateBeforeSave()) return;
                            Finance.ReceiptService.Audit({
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
                        Finance.ReceiptService.Reject({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("驳回成功!");
                            this.dialogClose();
                        });
                    }
                });
            }
            if (Q.Authorization.hasPermission("Finance:Receipt:UnApprove")) {
                buttons.push({
                    title: "反审核",
                    icon: "fa-reply-all",
                    cssClass: "unAudit-button",
                    onClick: () => {
                        Q.confirm("确定反审核吗?", () => {
                        Finance.ReceiptService.UnAudit({
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