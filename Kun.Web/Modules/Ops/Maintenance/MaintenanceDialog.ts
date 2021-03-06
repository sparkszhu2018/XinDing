
namespace Kun.Ops {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class MaintenanceDialog extends Serenity.EntityDialog<MaintenanceRow, any> {
        protected getFormKey() { return MaintenanceForm.formKey; }
        protected getIdProperty() { return MaintenanceRow.idProperty; }
        protected getLocalTextPrefix() { return MaintenanceRow.localTextPrefix; }
        protected getNameProperty() { return MaintenanceRow.nameProperty; }
        protected getService() { return MaintenanceService.baseUrl; }
        protected getDeletePermission() { return MaintenanceRow.deletePermission; }
        protected getInsertPermission() { return MaintenanceRow.insertPermission; }
        protected getUpdatePermission() { return MaintenanceRow.updatePermission; }

        protected form = new MaintenanceForm(this.idPrefix);

        constructor() {
            super();

            this.form.ChangeDevice.change(e => {
                if (this.form.ChangeDevice.value == true) {
                    this.byId('Materials').parent().css({
                        display: ''
                    });
                } else {
                    this.byId('Materials').parent().css({ 
                         display: 'none'
                    });
                }
            });
             
            this.form.ReportCustomerId.change(e => { 
                if (Q.isEmptyOrNull(this.form.SettleCustomerId.value)) {
                    this.form.SettleCustomerId.value  = this.form.ReportCustomerId.value;
                } 
            }); 

            this.form.CommonExpression.changeSelect2(e => {
                if (Q.isEmptyOrNull(this.form.Content.value) && !Q.isEmptyOrNull(this.form.CommonExpression.value)) {
                    this.form.Content.value = this.form.CommonExpression.selectedItem.Content;
                } 
            });

        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
             
            this.form.Manhours.Head = this.entity;
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
                        Ops.MaintenanceService.Commit({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("提交成功!");
                            this.dialogClose();
                        });
                    });
                }
            });
            if (Q.Authorization.hasPermission("Ops:Maintenance:Approve")) {
                buttons.push({
                    title: "审核",
                    icon: "fa-star",
                    cssClass: "audit-button",
                    onClick: () => {
                        this.save((r) => {
                            this.entityId = r.EntityId;
                            if (!this.validateBeforeSave()) return;
                            Ops.MaintenanceService.Audit({
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
                        Ops.MaintenanceService.Reject({
                            EntityId: this.entityId
                        }, r => {
                            Q.notifySuccess("驳回成功!");
                            this.dialogClose();
                        });
                    }
                });
            }

            if (Q.Authorization.hasPermission("Ops:Maintenance:UnApprove")) {
                buttons.push({
                    title: "反审核",
                    icon: "fa-reply-all",
                    cssClass: "unAudit-button",
                    onClick: () => {

                        Q.confirm("确定反审核吗?", () => {
                        Ops.MaintenanceService.UnAudit({
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

            if (this.form.ChangeDevice.value == true) {
                 
            } else {
                var self = this;
                setTimeout(function () {
                    self.byId('Materials').parent().css({
                        display: 'none'
                    });
                }, 100); 
            }

            if (this.entity.Status == Ops.Enums.BillStatus.Edit
                || this.entity.Status == Ops.Enums.BillStatus.Reject 
                || this.entity.Status == Enums.BillStatus.UnAudited
            ) {

                this.toolbar.findButton('save-and-close-button').show();
                this.toolbar.findButton('submit-button').hide();
                this.toolbar.findButton('apply-changes-button').show();
                this.toolbar.findButton('delete-button').show();

                this.toolbar.findButton('reject-button').hide();
                this.toolbar.findButton('audit-button').show();
                this.toolbar.findButton('unAudit-button').hide();


            } else if (this.entity.Status == Ops.Enums.BillStatus.Commited) {

                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.toolbar.findButton('save-and-close-button').hide();
                this.toolbar.findButton('submit-button').hide();
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('delete-button').hide();

                this.toolbar.findButton('reject-button').show();
                this.toolbar.findButton('audit-button').show();
                this.toolbar.findButton('unAudit-button').hide();
            }
            else if (this.entity.Status == Ops.Enums.BillStatus.Audited) {
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