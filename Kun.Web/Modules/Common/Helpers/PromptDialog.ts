﻿namespace Kun.Membership {

    export interface PromptDialogOptions {
        cssClass?: string;
        editorType?: string;
        editorOptions?: any;
        title?: string;
        message?: string;
        isHtml?: boolean;
        value?: any;
        required?: boolean;
        validateValue: (v: any) => boolean;
    }

    @Serenity.Decorators.registerClass()
    export class PromptDialog extends Serenity.PropertyDialog<any, PromptDialogOptions> {

        constructor(opt: PromptDialogOptions) {
            super(opt);

            if (!Q.isEmptyOrNull(this.options.cssClass))
                this.element.addClass(this.options.cssClass);

            if (!Q.isEmptyOrNull(this.options.message)) {
                var msg = $("<div/>").addClass("message")
                    .insertBefore(this.byId("PropertyGrid"));
                this.options.isHtml ? msg.html(this.options.message) : msg.text(this.options.message);
            }
        }

        protected getDialogOptions(): JQueryUI.DialogOptions {
            var opt = super.getDialogOptions();
            opt.buttons = [
                {
                    text: Q.text("Dialogs.OkButton"),
                    click: () => {
                        if (!this.validateForm())
                            return;

                        if (this.options.validateValue == null || this.options.validateValue(this.value))
                            this.dialogClose();
                    },
                },
                {
                    text: Q.text("Dialogs.CancelButton"),
                    click: () => this.dialogClose
                }
            ] as any;

            opt.title = this.options.title || "Prompt";
            return opt;
        }

        protected loadInitialEntity()
        {
            this.value = this.options.value;
        }

        protected getPropertyItems() {
            return [
                {
                    name: "Value",
                    editorType: this.options.editorType || "String",
                    required: Q.coalesce(this.options.required, true),
                    editorParams: this.options.editorOptions
                }
            ]
        }

        public get value() {
            return (this.getSaveEntity() as any).Value;
        }

        public set value(v: any) {
            this.propertyGrid.load(
            {
                Value: v
            });
        }

        public static prompt(title: string, message: string, value: string, validateValue: (string) => boolean) {
            new PromptDialog({
                title: title,
                message: message,
                value: value,
                validateValue: v => validateValue(v)
            }).dialogOpen();
        }
    }
}