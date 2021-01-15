var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        EmailClient.folderIcons = {
            "inbox": "fa-inbox",
            "sent": "fa-envelope-o",
            "drafts": "fa-file-text-o",
            "junk": "fa-filter",
            "trash": "fa-trash-o"
        };
        function folderIcon(folder) {
            return "fa " + (EmailClient.folderIcons[folder.Kind] || 'fa-folder-o');
        }
        function mailboxFolderName(folder) {
            return Q.tryGetText("Site.EmailClient.FolderNames." + folder.Kind) ||
                folder.Name || folder.FullName || '';
        }
        EmailClient.mailboxFolderName = mailboxFolderName;
        var MailboxFolderLink = /** @class */ (function (_super) {
            __extends(MailboxFolderLink, _super);
            function MailboxFolderLink() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MailboxFolderLink.prototype.render = function () {
                var _this = this;
                return (React.createElement("li", null,
                    React.createElement("a", { href: '#folder/' + encodeURIComponent(this.props.folder.FullName), className: this.props.folder.FullName == this.props.activeFolder ? "active" : "" },
                        React.createElement("i", { className: folderIcon(this.props.folder) }),
                        " ",
                        React.createElement("span", null,
                            mailboxFolderName(this.props.folder),
                            this.props.folder.UnreadCount > 0 &&
                                React.createElement("span", { className: "label label-primary pull-right" }, this.props.folder.UnreadCount))),
                    this.props.folder.SubFolders &&
                        React.createElement("ul", null, this.props.folder.SubFolders.map(function (sub) {
                            return React.createElement(MailboxFolderLink, { folder: sub, activeFolder: _this.props.activeFolder, key: sub.FullName });
                        }))));
            };
            return MailboxFolderLink;
        }(React.Component));
        EmailClient.MailboxFolderLink = MailboxFolderLink;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        function mailboxFolderSelectPadding(folder) {
            var spc = "";
            for (var i = 0; i < folder.FullName.split('.').length - 1; i++)
                spc += "\xa0\xa0\xa0\xa0";
            return spc;
        }
        EmailClient.mailboxFolderSelectPadding = mailboxFolderSelectPadding;
        var MailboxToolbar = /** @class */ (function (_super) {
            __extends(MailboxToolbar, _super);
            function MailboxToolbar() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MailboxToolbar.prototype.handleMoveToFolder = function (e) {
                e.target.value && this.props.onMoveToFolder(e.target.value);
                e.target.value = "";
            };
            MailboxToolbar.prototype.render = function () {
                var _this = this;
                return (React.createElement("div", { className: "mailbox-controls" },
                    React.createElement("button", { type: "button", className: "btn btn-default btn-sm checkbox-toggle", onClick: function (e) { return _this.props.onCheckAll(); } },
                        React.createElement("i", { className: this.props.allChecked ? 'fa fa-check-square-o' : 'fa fa-square-o' })),
                    ' ',
                    React.createElement("div", { className: "btn-group" },
                        React.createElement("button", { type: "button", className: "btn btn-default btn-sm", onClick: function (e) { return _this.props.onToggleSeen(); }, title: Q.text("Site.EmailClient.ToggleReadButton") },
                            React.createElement("i", { className: "fa fa-star-o" })),
                        React.createElement("button", { type: "button", className: "btn btn-default btn-sm", onClick: function (e) { return _this.props.onDelete(); }, title: Q.text("Site.EmailClient.DeleteButton") },
                            React.createElement("i", { className: "fa fa-trash-o" })),
                        React.createElement("button", { type: "button", className: "btn btn-default btn-sm", onClick: function (e) { return _this.props.onRefresh(); }, title: Q.text("Site.EmailClient.RefreshButton") },
                            React.createElement("i", { className: "fa fa-refresh" })),
                        ' ',
                        React.createElement("select", { style: { padding: "4px", margin: "0 4px" }, onChange: function (e) { return _this.handleMoveToFolder(e); } },
                            React.createElement("option", { value: "" }, Q.text("Site.EmailClient.MoveToFolder")),
                            this.props.flatFolderList.filter(function (x) { return x.FullName != _this.props.folder; }).map(function (x) {
                                return React.createElement("option", { key: x.FullName, value: x.FullName }, mailboxFolderSelectPadding(x) + EmailClient.mailboxFolderName(x));
                            }))),
                    React.createElement("div", { className: "pull-right" },
                        React.createElement("span", null, this.props.page * this.props.pageSize + 1),
                        "-",
                        React.createElement("span", null, Math.min(this.props.page * this.props.pageSize + this.props.pageSize, this.props.messageCount)),
                        React.createElement("span", null, " / "),
                        React.createElement("span", null, this.props.messageCount),
                        ' ',
                        React.createElement("div", { className: "btn-group" },
                            React.createElement("button", { type: "button", className: "btn btn-default btn-sm", onClick: function (e) { return _this.props.onChangePage(_this.props.page - 1); } },
                                React.createElement("i", { className: "fa fa-chevron-left" })),
                            React.createElement("button", { type: "button", className: "btn btn-default btn-sm", onClick: function (e) { return _this.props.onChangePage(_this.props.page + 1); } },
                                React.createElement("i", { className: "fa fa-chevron-right" }))))));
            };
            return MailboxToolbar;
        }(React.Component));
        EmailClient.MailboxToolbar = MailboxToolbar;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailService;
        (function (EmailService) {
        })(EmailService = EmailClient.EmailService || (EmailClient.EmailService = {}));
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var UI = Serenity.UI;
        var quickSettingsItems = [
            {
                value: "custom",
                text: "Custom",
                settings: {
                    ImapHost: "",
                    ImapPort: 993,
                    ImapUsername: "",
                    SmtpHost: "",
                    SmtpPort: 465,
                    SmtpUsername: "",
                }
            },
            {
                value: "gmail",
                text: "Gmail",
                settings: {
                    ImapHost: "imap.gmail.com",
                    ImapPort: 993,
                    ImapUsername: "yourusername@gmail.com",
                    SmtpHost: "smtp.gmail.com",
                    SmtpPort: 465,
                    SmtpUsername: "yourusername@gmail.com",
                }
            },
            {
                value: "outlook",
                text: "Outlook / Hotmail",
                settings: {
                    ImapHost: "imap-mail.outlook.com",
                    ImapPort: 993,
                    ImapUsername: "yourusername@outlook.com",
                    SmtpHost: "smtp-mail.outlook.com",
                    SmtpPort: 587,
                    SmtpUsername: "yourusername@outlook.com",
                }
            },
            {
                value: "yandex",
                text: 'Yandex',
                settings: {
                    ImapHost: "imap.yandex.com",
                    ImapPort: 993,
                    ImapUsername: "yourusername@yandex.com",
                    SmtpHost: "smtp.yandex.com",
                    SmtpPort: 465,
                    SmtpUsername: "yourusername@yandex.com",
                }
            }
        ];
        var MailboxLoginProps = /** @class */ (function () {
            function MailboxLoginProps() {
            }
            return MailboxLoginProps;
        }());
        EmailClient.MailboxLoginProps = MailboxLoginProps;
        var MailboxLoginView = /** @class */ (function (_super) {
            __extends(MailboxLoginView, _super);
            function MailboxLoginView() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.editorRefs = new UI.EditorRefs();
                _this.handleQuickSettingChange = function (e) {
                    _this.loadQuickSettings(e.target.value);
                };
                return _this;
            }
            MailboxLoginView.prototype.loadQuickSettings = function (value) {
                var item = Q.tryFirst(quickSettingsItems, function (x) { return x.value == value; });
                if (item)
                    this.editorRefs.loadFrom(item.settings, Object.keys(item.settings));
            };
            MailboxLoginView.prototype.componentDidMount = function () {
                this.loadQuickSettings("gmail");
            };
            MailboxLoginView.prototype.login = function () {
                var _this = this;
                var loginInfo = {};
                this.editorRefs.saveTo(loginInfo);
                delete loginInfo["QuickSettings"];
                EmailClient.EmailService.Login({
                    LoginInfo: loginInfo
                }, function (response) {
                    _this.props.onLogin();
                });
            };
            MailboxLoginView.prototype.render = function () {
                var _this = this;
                var lt = function (key) { return Q.text("Site.EmailClient." + key); };
                var fieldProps = function (name) { return ({ name: name, caption: lt(name), setRef: _this.editorRefs.set }); };
                return (React.createElement("div", { className: "s-MailboxLoginView" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-4" }),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement(UI.Form, { ref: function (el) { return _this.form = el; } },
                                React.createElement("div", { className: "box box-solid login-view-box" },
                                    React.createElement("div", { className: "box-header with-border" },
                                        React.createElement("h3", { className: "box-title" }, Q.text("Site.EmailClient.LoginTitle"))),
                                    React.createElement("div", { className: "box-body" },
                                        React.createElement(UI.PropertyGrid, null,
                                            React.createElement(UI.Field, { name: "QuickSettings", caption: lt("QuickSettings"), editor: function (edProps) {
                                                    return React.createElement("select", { name: edProps.name, ref: edProps.ref, defaultValue: "gmail", onChange: _this.handleQuickSettingChange }, quickSettingsItems.map(function (x) {
                                                        return React.createElement("option", { key: x.value, value: x.value }, x.text);
                                                    }));
                                                } }),
                                            React.createElement(UI.Field, __assign({}, fieldProps("ImapHost"), { required: true, editor: function (edProps) { return React.createElement(Serenity.StringEditor, __assign({}, edProps)); } })),
                                            React.createElement(UI.Field, __assign({}, fieldProps("ImapPort"), { required: true, editor: function (edProps) { return React.createElement(Serenity.IntegerEditor, __assign({}, edProps)); } })),
                                            React.createElement(UI.Field, __assign({}, fieldProps("ImapUsername"), { required: true, editor: function (edProps) { return React.createElement(Serenity.StringEditor, __assign({}, edProps, { onChange: function (e) { return _this.editorRefs.get("SmtpUsername").value =
                                                        _this.editorRefs.get("ImapUsername").value; } })); } })),
                                            React.createElement(UI.Field, __assign({}, fieldProps("ImapPassword"), { required: true, editor: function (edProps) { return React.createElement(Serenity.PasswordEditor, __assign({}, edProps, { onChange: function (e) { return _this.editorRefs.get("SmtpPassword").value =
                                                        _this.editorRefs.get("ImapPassword").value; } })); } })),
                                            React.createElement(UI.Field, __assign({}, fieldProps("SmtpHost"), { required: true, editor: function (edProps) { return React.createElement(Serenity.StringEditor, __assign({}, edProps)); } })),
                                            React.createElement(UI.Field, __assign({}, fieldProps("SmtpPort"), { required: true, editor: function (edProps) { return React.createElement(Serenity.IntegerEditor, __assign({}, edProps)); } })),
                                            React.createElement(UI.Field, __assign({}, fieldProps("SmtpUsername"), { required: true, editor: function (edProps) { return React.createElement(Serenity.StringEditor, __assign({}, edProps)); } })),
                                            React.createElement(UI.Field, __assign({}, fieldProps("SmtpPassword"), { required: true, editor: function (edProps) { return React.createElement(Serenity.PasswordEditor, __assign({}, edProps)); } })))),
                                    React.createElement("div", { className: "box-footer", style: { marginBottom: "10px" } },
                                        React.createElement("button", { className: "btn btn-success", onClick: function (e) { return _this.form.validateForm() && _this.login(); }, type: "button" }, Q.text("Site.EmailClient.LoginButton")))))),
                        React.createElement("div", { className: "col-md-4" }))));
            };
            return MailboxLoginView;
        }(React.Component));
        EmailClient.MailboxLoginView = MailboxLoginView;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var HtmlIFrame = /** @class */ (function (_super) {
            __extends(HtmlIFrame, _super);
            function HtmlIFrame() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            HtmlIFrame.prototype.updateContents = function () {
                var doc = this.iframe.contentDocument;
                doc.open();
                doc.write(this.props.contents || '');
                doc.close();
                var el = this.iframe;
                $(el.contentDocument.body).removeAttr('oncontextmenu');
                el.style.height = (Math.max(250, el.contentWindow.document.body.scrollHeight + 30)) + 'px';
            };
            HtmlIFrame.prototype.componentDidMount = function () {
                this.updateContents();
            };
            HtmlIFrame.prototype.componentWillReceiveProps = function (nextProps) {
                if (nextProps.contents !== this.props.contents)
                    this.updateContents();
            };
            HtmlIFrame.prototype.render = function () {
                var _this = this;
                var _a = this.props, contents = _a.contents, other = __rest(_a, ["contents"]);
                return (React.createElement("iframe", __assign({ ref: function (el) { return _this.iframe = el; } }, other)));
            };
            return HtmlIFrame;
        }(React.Component));
        EmailClient.HtmlIFrame = HtmlIFrame;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var MailViewer = /** @class */ (function (_super) {
            __extends(MailViewer, _super);
            function MailViewer(props) {
                var _this = _super.call(this, props) || this;
                _this.state = {
                    message: {}
                };
                return _this;
            }
            MailViewer.prototype.componentDidMount = function () {
                this.load();
            };
            MailViewer.prototype.componentWillReceiveProps = function (newProps) {
                if (newProps.folder !== this.props.folder ||
                    newProps.uid !== this.props.uid)
                    this.load();
            };
            MailViewer.prototype.back = function () {
                Q.Router.navigate("folder/" + encodeURIComponent(this.props.folder), true);
            };
            MailViewer.prototype.loadMessage = function (folder, uid) {
                var _this = this;
                return EmailClient.EmailService.RetrieveMessage({
                    Folder: folder,
                    UniqueId: uid
                }, function (response) {
                    _this.setState({
                        message: response.Entity
                    });
                });
            };
            MailViewer.prototype.load = function () {
                var _this = this;
                clearTimeout(this.loadTimeout);
                this.loadTimeout = setTimeout(function () {
                    if (_this.props.folder && _this.props.uid != null)
                        _this.loadMessage(_this.props.folder, _this.props.uid);
                    else {
                        _this.setState({
                            message: {}
                        });
                    }
                }, 500);
            };
            MailViewer.prototype.deleteMessage = function () {
                var _this = this;
                Q.confirm(Q.text("Site.EmailClient.DeleteMessageConfirmation"), function () {
                    EmailClient.EmailService.DeleteMessages({
                        Folder: _this.props.folder,
                        UniqueIds: [_this.props.uid]
                    }, function (response) {
                        Q.notifyInfo("Site.EmailClient.DeleteMessageSuccess");
                        _this.props.onClose();
                        _this.back();
                    });
                });
            };
            MailViewer.prototype.moveToFolder = function (target) {
                var _this = this;
                if (!target)
                    return;
                EmailClient.EmailService.Move({
                    SourceFolder: this.props.folder,
                    UniqueIds: [this.props.uid],
                    TargetFolder: target
                }, function (response) {
                    Q.notifySuccess("Site.EmailClient.MoveMessageSuccess");
                    _this.props.onClose();
                    _this.back();
                });
            };
            MailViewer.prototype.getDateText = function () {
                return Q.formatDate(this.state.message.Date, "dd.MM.yyyy HH:mm");
            };
            MailViewer.prototype.reply = function (all, forward) {
                EmailClient.EmailService.Reply({
                    Folder: this.props.folder,
                    UniqueId: this.props.uid,
                    ReplyToAll: all,
                    Forward: forward
                }, function (response) {
                    var dlg = new EmailClient.EmailComposeDialog();
                    dlg.reply = response;
                    dlg.dialogOpen();
                });
            };
            MailViewer.prototype.render = function () {
                var _this = this;
                var hasMessage = !!this.state.message.UniqueId;
                return (React.createElement("div", { className: "s-MailViewer" },
                    React.createElement("div", { className: "mail-actions" },
                        React.createElement("button", { type: "button", className: "btn btn-warning btn-sm", onClick: function (e) { return _this.back(); } },
                            "\u00A0\u00A0",
                            React.createElement("i", { className: "fa fa-arrow-left" }),
                            " ",
                            Q.text("Site.EmailClient.BackButton"),
                            "\u00A0\u00A0"),
                        ' ',
                        hasMessage && React.createElement("button", { type: "button", className: "btn btn-primary btn-sm", onClick: function (e) { return _this.reply(); } },
                            React.createElement("i", { className: "fa fa-mail-reply" }),
                            " ",
                            Q.text("Site.EmailClient.ReplyButton")),
                        ' ',
                        hasMessage && React.createElement("button", { type: "button", className: "btn btn-default btn-sm", onClick: function (e) { return _this.reply(true); } },
                            React.createElement("i", { className: "fa fa-mail-reply-all" }),
                            " ",
                            Q.text("Site.EmailClient.ReplyAllButton")),
                        ' ',
                        hasMessage && React.createElement("button", { type: "button", className: "btn btn-default btn-sm", onClick: function (e) { return _this.reply(false, true); } },
                            React.createElement("i", { className: "fa fa-mail-forward" }),
                            " ",
                            Q.text("Site.EmailClient.ForwardButton")),
                        ' ',
                        hasMessage && React.createElement("select", { style: { padding: "4px", position: "relative", top: "2px" }, onChange: function (e) { return _this.moveToFolder(e.target.value); } },
                            React.createElement("option", { value: "" }, Q.text("Site.EmailClient.MoveToFolder")),
                            this.props.flatFolderList.filter(function (x) { return x.FullName != _this.props.folder; }).map(function (x) {
                                return React.createElement("option", { key: x.FullName, value: x.FullName }, EmailClient.mailboxFolderSelectPadding(x) + EmailClient.mailboxFolderName(x));
                            })),
                        ' ',
                        hasMessage && React.createElement("button", { type: "button", className: "btn btn-danger btn-sm", onClick: function (e) { return _this.deleteMessage(); } },
                            React.createElement("i", { className: "fa fa-trash" }),
                            " ",
                            Q.text("Site.EmailClient.DeleteButton"))),
                    hasMessage && React.createElement("div", { className: "mail-info" },
                        React.createElement("div", { className: "date-from" },
                            React.createElement("span", { className: "from" }, this.state.message.From),
                            ' ',
                            React.createElement("span", { className: "date" }, this.getDateText())),
                        React.createElement("div", { className: "subject" }, this.state.message.Subject),
                        React.createElement("div", { className: "to" },
                            React.createElement("label", null, Q.text("Site.EmailClient.ToLabel")),
                            ' ',
                            React.createElement("span", { className: "to" }, this.state.message.To)),
                        this.state.message.Cc && React.createElement("div", { className: "cc" },
                            React.createElement("label", null, Q.text("Site.EmailClient.CCLabel")),
                            ' ',
                            React.createElement("span", { className: "cc" }, this.state.message.Cc))),
                    hasMessage && React.createElement(EmailClient.HtmlIFrame, { src: "", className: "message-body", frameBorder: "0", contents: this.state.message.HtmlBody }),
                    hasMessage && !!this.state.message.Attachments && !!this.state.message.Attachments.length && React.createElement("div", { className: "attachments" },
                        React.createElement("ul", null, this.state.message.Attachments.map(function (att) {
                            return React.createElement("li", null,
                                React.createElement("a", { href: att.DownloadUrl, target: "_blank" },
                                    React.createElement("i", { className: "fa fa-file" }),
                                    " ",
                                    att.FileName));
                        })))));
            };
            return MailViewer;
        }(React.Component));
        EmailClient.MailViewer = MailViewer;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        function flattenFolders(inside) {
            var result = [];
            inside = Q.coalesce(inside, []);
            for (var _i = 0, inside_1 = inside; _i < inside_1.length; _i++) {
                var k = inside_1[_i];
                result.push(k);
                if (k.SubFolders && k.SubFolders.length) {
                    for (var _a = 0, _b = flattenFolders(k.SubFolders); _a < _b.length; _a++) {
                        var z = _b[_a];
                        result.push(z);
                    }
                }
            }
            return result;
        }
        function findFolder(fullName, inside) {
            inside = inside || [];
            for (var _i = 0, inside_2 = inside; _i < inside_2.length; _i++) {
                var k = inside_2[_i];
                if (k.FullName == fullName)
                    return k;
                if (k.SubFolders && k.SubFolders.length) {
                    var sub = findFolder(fullName, k.SubFolders);
                    if (sub)
                        return sub;
                }
            }
            return null;
        }
        function parseFolderAndMsg(hash) {
            if (!hash)
                return {};
            if (hash.charAt(0) == '#')
                hash = hash.substr(1);
            var result = {};
            if (Q.startsWith(hash, 'folder/')) {
                var folder = hash.substr('folder/'.length);
                var idx = folder.lastIndexOf('/');
                result.msg = -1;
                if (idx < folder.length - 1) {
                    result.msg = parseInt(folder.substr(idx + 1), 10);
                    if (isNaN(result.msg)) {
                        result.msg = -1;
                    }
                    else {
                        folder = folder.substr(0, idx);
                    }
                }
                result.folder = decodeURIComponent(folder);
            }
            return result;
        }
        function formatDate(date, format) {
            return Q.formatDate(date, format || 'yyyy-MM-dd HH:mm');
        }
        var MailboxView = /** @class */ (function (_super) {
            __extends(MailboxView, _super);
            function MailboxView(props, context) {
                var _this = _super.call(this, props, context) || this;
                _this.reloadTimeout = 0;
                _this.state = {
                    folder: "",
                    folders: [],
                    viewingMessage: -1,
                    newMessages: 0,
                    messages: [],
                    messageCount: 0,
                    page: 0,
                    pageSize: 20,
                    containsText: "",
                    containsLock: 0,
                    showLogin: false
                };
                return _this;
            }
            MailboxView.prototype.loadMessages = function () {
                var _this = this;
                EmailClient.EmailService.ListMessages({
                    Folder: this.state.folder,
                    Skip: this.state.page * this.state.pageSize,
                    Take: this.state.pageSize,
                    ContainsText: this.state.containsText
                }, function (respmsg) {
                    _this.setState({
                        messages: (respmsg.Entities || []),
                        messageCount: respmsg.TotalCount || 0
                    });
                }, {
                    onError: function (response) { return _this.serviceErrorHandler(response); }
                });
            };
            MailboxView.prototype.composeMessage = function () {
                new EmailClient.EmailComposeDialog().dialogOpen();
            };
            MailboxView.prototype.serviceErrorHandler = function (response) {
                if (response.Error && response.Error.Code == "UnauthorizedAccess") {
                    this.setState({
                        showLogin: true
                    });
                }
                else {
                    Q.ErrorHandling.showServiceError(response.Error);
                }
            };
            MailboxView.prototype.initialLoadFolders = function () {
                var _this = this;
                EmailClient.EmailService.ListFolders({}, function (response) {
                    for (var _i = 0, _a = response.Entities || []; _i < _a.length; _i++) {
                        var folder = _a[_i];
                        if (folder.FullName == "INBOX")
                            $('#UnreadEmailCount').text(folder.UnreadCount || 0).toggle(folder.UnreadCount > 0);
                    }
                    var folderName;
                    if (window.location.hash && Q.startsWith(window.location.hash, "#folder/"))
                        folderName = parseFolderAndMsg(window.location.hash).folder;
                    else
                        folderName = _this.state.folder || (_this.state.folders[0] || {}).FullName || "INBOX";
                    if (_this.state.folder !== folderName) {
                        _this.setState({
                            folders: response.Entities || [],
                            folder: folderName
                        }, function () { return _this.loadMessages(); });
                    }
                    else {
                        _this.setState({
                            folders: response.Entities || [],
                        });
                    }
                }, {
                    onError: function (response) { return _this.serviceErrorHandler(response); }
                });
            };
            MailboxView.prototype.changeFolder = function (folder) {
                var _this = this;
                this.setState({
                    folder: folder,
                    page: 0,
                    containsText: ""
                }, function () { return _this.loadMessages(); });
            };
            MailboxView.prototype.changePage = function (page) {
                var _this = this;
                if (page < 0)
                    page = 0;
                var maxPage = Math.floor(Math.max(this.state.messageCount - 1, 0) / (this.state.pageSize || 20));
                if (page > maxPage)
                    page = maxPage;
                if (this.state.page != page) {
                    this.setState({
                        page: page
                    }, function () { return _this.loadMessages(); });
                }
            };
            MailboxView.prototype.setElement = function (el) {
                var _this = this;
                if (this.element)
                    $(this.element.parentElement).removeClass('route-handler').off('handleroute');
                this.element = el;
                if (this.element) {
                    $(this.element).addClass("route-handler")
                        .on("handleroute", function (e, args) {
                        var route = args.route || '';
                        if (Q.startsWith(route, 'folder/')) {
                            args.handled = true;
                            var parsed = parseFolderAndMsg(route);
                            var msg = parsed.msg;
                            var folder = parsed.folder;
                            if (_this.state.folder != folder) {
                                _this.setState({
                                    viewingMessage: -1
                                }, function () { return _this.changeFolder(folder); });
                            }
                            if (_this.state.viewingMessage != msg) {
                                _this.setState({
                                    viewingMessage: msg
                                });
                                if (msg >= 0) {
                                    var message = Q.tryFirst(_this.state.messages || [], function (x) { return x.UniqueId == msg; });
                                    if (message && !message.Seen) {
                                        _this.toggleSeen(message);
                                    }
                                }
                            }
                        }
                    });
                }
            };
            MailboxView.prototype.componentDidMount = function () {
                this.initialLoadFolders();
                Q.Router.resolve();
            };
            MailboxView.prototype.activeFolderName = function () {
                if (!this.state.folder)
                    return "";
                var folder = findFolder(this.state.folder, this.state.folders);
                if (!folder)
                    return "";
                return EmailClient.mailboxFolderName(folder);
            };
            MailboxView.prototype.setContainsText = function (newValue) {
                var _this = this;
                if (newValue === this.state.containsText)
                    return;
                this.setState({
                    containsText: newValue
                });
                clearTimeout(this.reloadTimeout);
                this.reloadTimeout = window.setTimeout(function () {
                    _this.setState({
                        page: 0
                    }, function () { return _this.loadMessages(); });
                }, 500);
            };
            MailboxView.prototype.allChecked = function () {
                return this.state.messages.length && !Q.any(this.state.messages, function (x) { return !x.__checked; });
            };
            MailboxView.prototype.checkAll = function () {
                var allChecked = this.allChecked();
                this.setState({
                    messages: this.state.messages.map(function (x) { return $.extend({}, x, { __checked: !allChecked }); })
                });
            };
            MailboxView.prototype.deleteSelected = function () {
                var _this = this;
                var selectedIds = this.state.messages.filter(function (x) { return x.__checked; }).map(function (x) { return x.UniqueId; });
                if (!selectedIds.length) {
                    Q.notifyWarning(Q.text("Site.EmailClient.DeleteNoSelectionWarning"));
                    return;
                }
                Q.confirm(Q.format(Q.text("Site.EmailClient.DeleteSelectedConfirmation"), selectedIds.length), function () {
                    EmailClient.EmailService.DeleteMessages({
                        Folder: _this.state.folder,
                        UniqueIds: selectedIds
                    }, function (response) {
                        Q.notifyInfo(Q.text("Site.EmailClient.DeleteSelectedSuccess"));
                        _this.loadMessages();
                    });
                });
            };
            MailboxView.prototype.moveToFolder = function (folder, message) {
                var _this = this;
                if (!folder)
                    return;
                var selected = message ? [message] : this.state.messages.filter(function (x) { return x.__checked; });
                if (!selected.length) {
                    Q.notifyWarning(Q.text("Site.EmailClient.MoveNoSelectionWarning"));
                    return;
                }
                EmailClient.EmailService.Move({
                    SourceFolder: this.state.folder,
                    UniqueIds: selected.map(function (x) { return x.UniqueId; }),
                    TargetFolder: folder
                }, function (response) {
                    Q.notifySuccess(Q.format(Q.text("Site.EmailClient.MoveSelectedSuccess"), selected.length));
                    _this.loadMessages();
                });
            };
            MailboxView.prototype.getToolbarProps = function () {
                var _this = this;
                return {
                    allChecked: this.allChecked(),
                    flatFolderList: flattenFolders(this.state.folders),
                    folder: this.state.folder,
                    messageCount: this.state.messageCount,
                    onChangePage: function (page) { return _this.changePage(page); },
                    onCheckAll: function () { return _this.checkAll(); },
                    onDelete: function () { return _this.deleteSelected(); },
                    onMoveToFolder: function (target) { return _this.moveToFolder(target); },
                    onRefresh: function () { return _this.refreshMessages(); },
                    onToggleSeen: function () { _this.toggleSeen(); },
                    page: this.state.page,
                    pageSize: this.state.pageSize
                };
            };
            MailboxView.prototype.setChecked = function (message, value) {
                if (!!message.__checked !== !!value) {
                    this.setState({
                        messages: this.state.messages.map(function (x) { return x === message ? $.extend({}, x, { __checked: !!value }) : x; })
                    });
                }
            };
            MailboxView.prototype.toggleSeen = function (message) {
                var _this = this;
                var selected = message ? [message] : this.state.messages.filter(function (x) { return x.__checked; });
                if (!selected.length) {
                    Q.notifyWarning(Q.text("Site.EmailClient.ToggleSeenNoSelectionWarning"));
                    return;
                }
                var seen = Q.any(selected, function (x) { return !x.Seen; });
                EmailClient.EmailService.ToggleSeen({
                    Folder: this.state.folder,
                    UniqueIds: selected.map(function (x) { return x.UniqueId; }),
                    Seen: seen
                }, function (response) {
                    var folder = findFolder(_this.state.folder, _this.state.folders);
                    var unreadCount = folder ? (folder.UnreadCount || 0) : 0;
                    var messages = _this.state.messages.map(function (x) {
                        if (selected.indexOf(x) < 0 || seen == !!x.Seen)
                            return x;
                        if (folder) {
                            unreadCount = Math.max(unreadCount + (seen ? -1 : 1), 0);
                            if (folder.FullName == "INBOX")
                                $('#UnreadEmailCount').text(unreadCount).toggle(unreadCount > 0);
                        }
                        return $.extend({}, x, { Seen: seen });
                    });
                    var folders = _this.state.folders.map(function (x) {
                        if (x !== folder)
                            return x;
                        return $.extend({}, x, { UnreadCount: unreadCount });
                    });
                    _this.setState({
                        messages: messages,
                        folders: folders
                    });
                });
            };
            MailboxView.prototype.refreshMessages = function () {
                this.loadMessages();
            };
            MailboxView.prototype.signout = function () {
                var _this = this;
                EmailClient.EmailService.Signout({}, function (response) { return _this.setState({
                    showLogin: true,
                    folders: [],
                    folder: ""
                }); });
            };
            MailboxView.prototype.render = function () {
                var _this = this;
                if (this.state.showLogin)
                    return React.createElement(EmailClient.MailboxLoginView, { onLogin: function () { return _this.setState({
                            showLogin: false,
                            folders: [],
                            folder: ""
                        }, function () { return _this.initialLoadFolders(); }); } });
                var toolbarProps = this.getToolbarProps();
                return (React.createElement("div", { ref: function (el) { return _this.setElement(el); }, className: "s-MailboxView" },
                    React.createElement("div", { className: "mailbox" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-3" },
                                React.createElement("a", { href: "javascript:;", className: "btn btn-primary btn-block margin-bottom", onClick: function (e) { return _this.composeMessage(); } },
                                    React.createElement("i", { className: "fa fa-envelope-o" }),
                                    " ",
                                    Q.text("Site.EmailClient.ComposeButton")),
                                React.createElement("div", { className: "box box-solid" },
                                    React.createElement("div", { className: "box-header with-border" },
                                        React.createElement("h3", { className: "box-title" }, Q.text("Site.EmailClient.FoldersTitle"))),
                                    React.createElement("div", { className: "box-body no-padding" }, this.state.folders.map(function (fld) {
                                        return React.createElement("ul", { className: "nav nav-pills nav-stacked", key: fld.FullName },
                                            React.createElement(EmailClient.MailboxFolderLink, { folder: fld, activeFolder: _this.state.folder }));
                                    }))),
                                React.createElement("div", null,
                                    React.createElement("button", { className: "btn btn-small btn-danger pull-right", onClick: function (e) { return _this.signout(); } },
                                        React.createElement("i", { className: "fa fa-sign-out" }),
                                        " ",
                                        Q.text("Site.EmailClient.SignoutButton")))),
                            React.createElement("div", { className: "col-md-9" },
                                this.state.viewingMessage < 0 && React.createElement("div", { className: "box box-primary" },
                                    React.createElement("div", { className: "box-header with-border" },
                                        React.createElement("h3", { className: "box-title" }, this.activeFolderName()),
                                        React.createElement("div", { className: "box-tools pull-right" },
                                            React.createElement("div", { className: "has-feedback" },
                                                React.createElement("input", { type: "text", className: "form-control input-sm", placeholder: Q.text("Site.EmailClient.SearchPlaceholder"), value: this.state.containsText, onChange: function (e) { return _this.setContainsText(e.target.value); } }),
                                                React.createElement("span", { className: "glyphicon glyphicon-search form-control-feedback" })))),
                                    React.createElement("div", { className: "box-body no-padding" },
                                        React.createElement(EmailClient.MailboxToolbar, toolbarProps),
                                        React.createElement("div", { className: "table-responsive mailbox-messages", style: { minHeight: "40px" } },
                                            React.createElement("table", { className: "table table-hover table-striped mail-table" },
                                                React.createElement("tbody", null, this.state.messages.map(function (message) {
                                                    return React.createElement("tr", { className: !message.Seen ? "unseen" : null, key: message.UniqueId },
                                                        React.createElement("td", { className: "mailbox-check" },
                                                            React.createElement("input", { type: "checkbox", checked: message.__checked, onClick: function (e) { return _this.setChecked(message, e.target.checked); } })),
                                                        React.createElement("td", { className: "mailbox-star" },
                                                            React.createElement("a", { href: "javascript:;", onClick: function (e) { return _this.toggleSeen(message); } },
                                                                React.createElement("i", { className: "fa" + (!message.Seen ? " fa-star" : "") + (message.Seen ? " fa-star-o" : "") + ' text-yellow' }))),
                                                        React.createElement("td", { className: "mailbox-name" },
                                                            React.createElement("div", null,
                                                                React.createElement("a", { href: '#folder/' + encodeURIComponent(_this.state.folder) + '/' + message.UniqueId }, message.From))),
                                                        React.createElement("td", { className: "mailbox-subject" },
                                                            React.createElement("div", null, message.Subject)),
                                                        React.createElement("td", { className: "mailbox-attachment" }, !!message.HasAttachments && React.createElement("i", { className: "fa fa-paperclip" })),
                                                        React.createElement("td", { className: "mailbox-date" },
                                                            React.createElement("div", null, formatDate(message.Date))));
                                                }))))),
                                    React.createElement("div", { className: "box-footer no-padding" }, React.createElement(EmailClient.MailboxToolbar, toolbarProps))),
                                this.state.viewingMessage >= 0 && React.createElement("div", { className: "box box-primary" },
                                    React.createElement("div", { className: "box-body" },
                                        React.createElement(EmailClient.MailViewer, { folder: this.state.folder, uid: this.state.viewingMessage, onClose: function () { return _this.refreshMessages(); }, flatFolderList: toolbarProps.flatFolderList }))))))));
            };
            return MailboxView;
        }(React.Component));
        EmailClient.MailboxView = MailboxView;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailSuggestEditor = /** @class */ (function (_super) {
            __extends(EmailSuggestEditor, _super);
            function EmailSuggestEditor(element, opt) {
                var _this = _super.call(this, element, opt) || this;
                element.attr("autocomplete", "off");
                function split(val) {
                    return val.split(';');
                }
                function extractLast(term) {
                    return split(term).pop();
                }
                element.autocomplete({
                    minLength: 0,
                    source: function (request, response) {
                        EmailClient.EmailService.Suggest({
                            ContainsText: extractLast(request.term)
                        }, function (r) {
                            response(r.Suggestions);
                        }, {
                            onError: function (e) {
                                response([]);
                            }
                        });
                    },
                    focus: function () {
                        return false;
                    },
                    select: function (event, ui) {
                        var terms = split(this.value);
                        terms.pop();
                        terms.push(ui.item.value);
                        terms.push("");
                        this.value = terms.join("; ");
                        return false;
                    }
                });
                return _this;
            }
            EmailSuggestEditor = __decorate([
                Serenity.Decorators.registerEditor("Serenity.EmailClient.EmailSuggestEditor"),
                Serenity.Decorators.element('<input type="text"/>')
            ], EmailSuggestEditor);
            return EmailSuggestEditor;
        }(Serenity.Widget));
        EmailClient.EmailSuggestEditor = EmailSuggestEditor;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailContentEditor = /** @class */ (function (_super) {
            __extends(EmailContentEditor, _super);
            function EmailContentEditor(element, opt) {
                return _super.call(this, element, opt) || this;
            }
            EmailContentEditor.prototype.getConfig = function () {
                var config = _super.prototype.getConfig.call(this);
                config.extraPlugins = (config.extraPlugins ? (config.extraPlugins + ",") : "") + "uploadimage,image2";
                config.removePlugins = (config.removePlugins ? (config.removePlugins + ",") : "") + "elementspath";
                config.imageUploadUrl = Q.resolveUrl("~/File/TemporaryUploadCK");
                config.fullPage = true;
                config.allowedContent = true;
                return config;
            };
            EmailContentEditor = __decorate([
                Serenity.Decorators.registerEditor("Serenity.EmailClient.EmailContentEditor")
            ], EmailContentEditor);
            return EmailContentEditor;
        }(Serenity.HtmlContentEditor));
        EmailClient.EmailContentEditor = EmailContentEditor;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailComposeDialog = /** @class */ (function (_super) {
            __extends(EmailComposeDialog, _super);
            function EmailComposeDialog() {
                var _this = _super.call(this) || this;
                _this.form = new EmailClient.EmailComposeForm(_this.idPrefix);
                _this.dialogTitle = Q.text("Site.EmailClient.NewEmailDialogTitle");
                return _this;
            }
            EmailComposeDialog.prototype.getFormKey = function () {
                return EmailClient.EmailComposeForm.formKey;
            };
            Object.defineProperty(EmailComposeDialog.prototype, "reply", {
                get: function () {
                    return this._reply;
                },
                set: function (value) {
                    if (this._reply != value) {
                        this._reply = value;
                        if (this._reply) {
                            this.dialogTitle = Q.text("Site.EmailClient.ReplyEmailDialogTitle");
                            this.form.To.element.val(this._reply.To);
                            this.form.Cc.element.val(this._reply.Cc);
                            this.form.Subject.value = this._reply.Subject;
                            this.form.BodyHtml.value = this._reply.ReplyBody;
                            if (this._reply.Attachments) {
                                this.form.Attachments.value = this._reply.Attachments.map(function (x) { return ({
                                    Filename: x.DownloadUrl,
                                    OriginalName: x.FileName
                                }); });
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            EmailComposeDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: Q.text("Site.EmailClient.SendButton"),
                        click: function () {
                            if (!_this.validateForm())
                                return;
                            var request = _this.getSaveEntity();
                            EmailClient.EmailService.Compose(request, function (response) {
                                _this.dialogClose();
                            });
                        }
                    },
                    {
                        text: Q.text("Site.EmailClient.CancelButton"),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            EmailComposeDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 960;
                return opt;
            };
            EmailComposeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], EmailComposeDialog);
            return EmailComposeDialog;
        }(Serenity.PropertyDialog));
        EmailClient.EmailComposeDialog = EmailComposeDialog;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
//# sourceMappingURL=Serenity.Pro.EmailClient.js.map