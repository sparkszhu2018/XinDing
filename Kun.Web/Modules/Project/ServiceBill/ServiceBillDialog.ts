
namespace Kun.Project {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ServiceBillDialog extends Serenity.EntityDialog<ServiceBillRow, any> {
        protected getFormKey() { return ServiceBillForm.formKey; }
        protected getIdProperty() { return ServiceBillRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceBillRow.localTextPrefix; }
        protected getNameProperty() { return ServiceBillRow.nameProperty; }
        protected getService() { return ServiceBillService.baseUrl; }
        protected getDeletePermission() { return ServiceBillRow.deletePermission; }
        protected getInsertPermission() { return ServiceBillRow.insertPermission; }
        protected getUpdatePermission() { return ServiceBillRow.updatePermission; }
        protected form = new ServiceBillForm(this.idPrefix);

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
                        Project.ServiceBillService.Commit({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("提交成功!");
                            this.dialogClose();
                        });
                    });
                }
            });
            if (Q.Authorization.hasPermission("Project:ServiceBill:Approve")) {
                buttons.push({
                    title: "审核",
                    icon: "fa-star",
                    cssClass: "audit-button",
                    onClick: () => {
                        this.save((r) => {
                            this.entityId = r.EntityId;
                            if (!this.validateBeforeSave()) return;
                        Project.ServiceBillService.Audit({
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
                        Project.ServiceBillService.Reject({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("驳回成功!");
                            this.dialogClose();
                        });
                    }
                });
            }

            if (Q.Authorization.hasPermission("Project:ServiceBill:UnApprove")) {
                buttons.push({
                    title: "反审核",
                    icon: "fa-reply-all",
                    cssClass: "unAudit-button",
                    onClick: () => {
                        Project.ServiceBillService.UnAudit({
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
            if (this.entity.Status == Project.Enums.BillStatus.Edit
                || this.entity.Status == Project.Enums.BillStatus.Reject
                || this.entity.Status == Project.Enums.BillStatus.UnAudited
            ) {

                this.toolbar.findButton('save-and-close-button').show();
                this.toolbar.findButton('submit-button').show();
                this.toolbar.findButton('apply-changes-button').show();
                this.toolbar.findButton('delete-button').show();

                this.toolbar.findButton('reject-button').hide();
                this.toolbar.findButton('audit-button').show();
                this.toolbar.findButton('unAudit-button').hide();


            } else if (this.entity.Status == Project.Enums.BillStatus.Commited) {

                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.toolbar.findButton('save-and-close-button').hide();
                this.toolbar.findButton('submit-button').hide();
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('delete-button').hide();

                this.toolbar.findButton('reject-button').show();
                this.toolbar.findButton('audit-button').show();
                this.toolbar.findButton('unAudit-button').hide();
            }
            else if (this.entity.Status == Project.Enums.BillStatus.Audited) {
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