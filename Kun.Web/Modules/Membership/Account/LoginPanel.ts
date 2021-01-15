namespace Kun.Membership {

    @Serenity.Decorators.registerClass()
    export class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {

        protected getFormKey() { return LoginForm.formKey; }

        constructor(container: JQuery) {
            super(container);

            $.fn['vegas'] && $('body')['vegas']({
                delay: 30000,
                cover: true,
                overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                    "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                    "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                slides: [
                    { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                    { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                    { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                ]
            });

            this.byId('LoginButton').click(e => {
                e.preventDefault();

                if (!this.validateForm()) {
                    return;
                }

                var request = this.getSaveEntity();

                Q.serviceCall({
                    url: Q.resolveUrl('~/Account/Login'),
                    request: request,
                    onSuccess: response => {
                        this.redirectToReturnUrl();
                    },
                    onError: (response: Serenity.ServiceResponse) => {
                        if (response != null && response.Error != null && response.Error.Code == "TwoFactorAuthenticationRequired") {
                            var args = response.Error.Arguments.split('|');
                            this.handleTwoFactorAuthentication(request.Username, request.Password, args[1], args[0]);
                            return;
                        }

                        if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                            window.location.href = response.Error.Arguments;
                            return;
                        }

                        if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                            Q.notifyError(response.Error.Message);
                            $('#Password').focus();

                            return;
                        }

                        Q.ErrorHandling.showServiceError(response.Error);
                    }
                });
            });
        }

        protected redirectToReturnUrl() {
            var q = Q.parseQueryString();
            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
            if (returnUrl) {
                var hash = window.location.hash;
                if (hash != null && hash != '#')
                    returnUrl += hash;
                window.location.href = returnUrl;
            }
            else {
                window.location.href = Q.resolveUrl('~/');
            }
        }

        protected handleTwoFactorAuthentication(user: string, pass: string, twoFactorGuid: string, info: string) {
            var tries = 0;
            var remaining = 120;

            var dialog = null;

            var showDialog = () => {
                dialog = new PromptDialog({
                    title: "Two Factor Authentication",
                    editorOptions: {
                        maxLength: 4,
                    },
                    editorType: "Integer",
                    message: info,
                    isHtml: true,
                    required: true,
                    validateValue: (x) => {
                        if (x >= 1000 && x <= 9999) {
                            tries++;

                            Q.serviceCall({
                                url: Q.resolveUrl('~/Account/Login'),
                                request: {
                                    Username: user,
                                    Password: pass,
                                    TwoFactorGuid: twoFactorGuid,
                                    TwoFactorCode: x
                                },
                                onSuccess: (r) => {
                                    this.redirectToReturnUrl();
                                    return;
                                },
                                onError: (z: Serenity.ServiceResponse) => {
                                    Q.notifyError(z.Error.Message);

                                    if (tries > 2) {
                                        Q.notifyError("Code entered is invalid! You can't try more than 3 times!");
                                        dialog = null;
                                        return;
                                    }

                                    showDialog();
                                }
                            });

                            return true;
                        }

                        Q.notifyError("Please enter a valid code!");
                        return false;
                    }
                });

                dialog.dialogOpen();
                dialog.element.on("dialogclose.me", function (x) {
                    if (dialog != null) {
                        dialog.element.off("dialogclose.me");
                        dialog = null;
                    }
                });
            };

            function updateCounter() {
                remaining -= 1;
                if (dialog != null) {
                    dialog.element.find("span.counter").text(remaining.toString());
                }

                if (remaining >= 0)
                    setTimeout(updateCounter, 1000);
                else if (dialog != null)
                    dialog.dialogClose();
            };

            showDialog();
            window.setTimeout(updateCounter, 1000);
        }

        protected getTemplate() {
            return `
<div class="flex-layout">
    <div class="logo"></div>
    <h3>${Q.text("Forms.Membership.Login.FormTitle")}</h3>
    <form id="~_Form" action="">
        <div class="s-Form">
            <div class="fieldset ui-widget ui-widget-content ui-corner-all">
                <div id="~_PropertyGrid"></div>
                <div class="clear"></div>
            </div>
            <div class="buttons">
                <button id="~_LoginButton" type="submit" class="btn btn-primary">
                    ${Q.text("Forms.Membership.Login.SignInButton")}
                </button>
            </div>
            <div class="actions">
                <a href="${Q.resolveUrl('~/Account/ForgotPassword')}"><i class="fa fa-angle-right"></i>&nbsp;${Q.text("Forms.Membership.Login.ForgotPassword")}</a>
                <a href="${Q.resolveUrl('~/Account/SignUp')}"><i class="fa fa-angle-right"></i>&nbsp;${Q.text("Forms.Membership.Login.SignUpButton")}</a>
                <div class="clear"></div>
            </div>
        </div>
    </form>
</div>
`;
        }
    }
}