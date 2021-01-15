var Serenity;
(function (Serenity) {
    var SingleLineTextFormatter = /** @class */ (function () {
        function SingleLineTextFormatter() {
        }
        SingleLineTextFormatter_1 = SingleLineTextFormatter;
        SingleLineTextFormatter.prototype.format = function (ctx) {
            return SingleLineTextFormatter_1.formatValue(ctx.value);
        };
        SingleLineTextFormatter.formatValue = function (value) {
            var text = $('<div/>').html(value || '').text();
            return Q.toSingleLine(text);
        };
        var SingleLineTextFormatter_1;
        SingleLineTextFormatter = SingleLineTextFormatter_1 = __decorate([
            Serenity.Decorators.registerFormatter('Serenity.SingleLineTextFormatter')
        ], SingleLineTextFormatter);
        return SingleLineTextFormatter;
    }());
    Serenity.SingleLineTextFormatter = SingleLineTextFormatter;
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var IdleTimeout = /** @class */ (function () {
        function IdleTimeout(options) {
            var _this = this;
            this.options = $.extend({}, IdleTimeout.defaults, options);
            localStorage.setItem('IdleTimeout:LastActivity', $.now().toString());
            localStorage.removeItem('IdleTimeout:Signout');
            var mouseX, mouseY;
            $('body').on(this.options.activityEvents, function (e) {
                if (e.type == 'mousemove') {
                    if (e.clientX == mouseX && e.clientY == mouseY)
                        return;
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                }
                if (!_this.isWarningActive()) {
                    _this.resetIdleTimer();
                }
            });
            if (this.options.keepAliveTimer)
                this.startKeepAliveTimer();
            this.resetIdleTimer();
        }
        IdleTimeout.prototype.startKeepAliveTimer = function () {
            var _this = this;
            clearTimeout(this.keepAliveTimer);
            var keepSessionAlive = function () {
                $.get(Q.resolveUrl(_this.options.keepAliveUrl) + '?' + new Date().getTime());
                _this.startKeepAliveTimer();
            };
            this.keepAliveTimer = setTimeout(keepSessionAlive, this.options.keepAliveTimer * 1000);
        };
        IdleTimeout.prototype.isWarningActive = function () {
            return $('#idle-timeout-warning').is(':visible');
        };
        IdleTimeout.prototype.startWarningTimer = function () {
            var _this = this;
            this.warningTimer = setInterval(function () { return _this.warningTimeout(); }, this.options.checkInterval * 1000);
        };
        IdleTimeout.prototype.stopWarningTimer = function () {
            clearInterval(this.warningTimer);
            clearInterval(this.remainingTimer);
        };
        ;
        IdleTimeout.prototype.warningTimeout = function () {
            if (this.getRemainingSeconds() < 0)
                this.signout();
        };
        IdleTimeout.prototype.resetIdleTimer = function () {
            clearTimeout(this.idleTimer);
            localStorage.setItem('IdleTimeout:LastActivity', $.now().toString());
            this.idleTimeout();
        };
        ;
        IdleTimeout.prototype.idleTimeout = function () {
            var _this = this;
            this.checkActivityTimeout();
            this.idleTimer = setTimeout(function () { return _this.idleTimeout(); }, this.options.checkInterval * 1000);
        };
        ;
        IdleTimeout.prototype.checkActivityTimeout = function () {
            var timeLimit = parseInt(localStorage.getItem('IdleTimeout:LastActivity') || $.now().toString()) +
                (this.options.activityTimeout - (this.options.warningDuration || 0)) * 1000;
            if ($.now() > timeLimit) {
                if (!this.options.warningDuration) {
                    this.signout();
                }
                else {
                    this.showWarning();
                    this.startWarningTimer();
                }
            }
            else if (localStorage.getItem('IdleTimeout:Signout')) {
                this.signout();
            }
            else if (this.isWarningActive()) {
                this.closeWarning();
                this.stopWarningTimer();
            }
        };
        IdleTimeout.prototype.signout = function () {
            localStorage.setItem('IdleTimeout:Signout', "1");
            clearTimeout(this.keepAliveTimer);
            this.stopWarningTimer();
            this.closeWarning();
            this.options.beforeSignout && this.options.beforeSignout();
            if (this.options.signoutUrl)
                window.location.href = Q.resolveUrl(this.options.signoutUrl);
        };
        IdleTimeout.prototype.showWarning = function () {
            var _this = this;
            var warningDialog = $('#idle-timeout-warning');
            if (!warningDialog.length) {
                warningDialog = $("<div class=\"modal fade\" id=\"idle-timeout-warning\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n            <h4 class=\"modal-title\">" + Q.text("Controls.IdleTimeout.WarningTitle") + " </h4>\n            </div>\n            <div class=\"modal-body\">\n            <p>" + Q.text("Controls.IdleTimeout.WarningMessage") + "</p>\n            <p>" + Q.text("Controls.IdleTimeout.CountdownMessage") + "</p>\n            <div class=\"progress\">\n                <div id=\"idle-timeout-progress\" class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" \n                    style=\"min-width: 15px; width: 100%;\">\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button id=\"idle-timeout-warning-signout\" type=\"button\" class=\"btn btn-default\">\n                    " + Q.text("Controls.IdleTimeout.SignoutButton") + "\n                </button>\n                <button id=\"idle-timeout-warning-keepalive\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">\n                    " + Q.text("Controls.IdleTimeout.KeepAliveButton") + "\n                </button>\n            </div>\n        </div>\n    </div>\n</div>").appendTo(document.body);
                $('#idle-timeout-warning-signout').on('click', function () { return _this.signout(); });
                warningDialog.on('hide.bs.modal', function () {
                    clearTimeout(_this.warningTimer);
                    clearTimeout(_this.remainingTimer);
                    _this.resetIdleTimer();
                });
            }
            warningDialog['modal']('show');
            this.countdownDisplay();
        };
        IdleTimeout.prototype.closeWarning = function () {
            var warning = $('#idle-timeout-warning').off('hide.bs.modal');
            if (warning.length && warning.data() && warning.data()['bs.modal'] && warning.data()['bs.modal'].isShown) {
                warning.removeClass('fade');
                warning['modal']('hide');
                warning.remove();
            }
        };
        IdleTimeout.prototype.getRemainingSeconds = function () {
            var timeLimit = parseInt(localStorage.getItem('IdleTimeout:LastActivity') || $.now().toString()) +
                (this.options.activityTimeout * 1000);
            return Math.ceil(((timeLimit - $.now()) / 1000));
        };
        IdleTimeout.prototype.countdownDisplay = function () {
            var _this = this;
            clearTimeout(this.remainingTimer);
            var update = function () {
                var remainingSeconds = Math.max(_this.getRemainingSeconds(), 1);
                var percentLeft = 100 * Math.max(1, remainingSeconds) / (_this.options.warningDuration || 1);
                $('#idle-timeout-progress').css('width', percentLeft + '%');
                $('#idle-timeout-seconds').text(remainingSeconds);
            };
            this.remainingTimer = setInterval(update, 500);
            update();
        };
        ;
        IdleTimeout.defaults = {
            activityEvents: 'click keyup mouseup mousemove scroll touchend touchmove wheel mousewheel',
            activityTimeout: 900,
            checkInterval: 5,
            keepAliveTimer: 300,
            keepAliveUrl: '~/Account/KeepAlive',
            signoutUrl: '~/Account/Signout',
            warningDuration: 60,
        };
        return IdleTimeout;
    }());
    Serenity.IdleTimeout = IdleTimeout;
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    function setupUIOverrides() {
        Serenity.EntityGrid.prototype['getButtons'] = (function (old) {
            return function () {
                var buttons = old.call(this);
                var addButton = Q.tryFirst(buttons, function (x) { return x.cssClass === "add-button"; });
                if (addButton)
                    addButton.icon = "fa-plus-circle text-green";
                var refreshButton = Q.tryFirst(buttons, function (x) { return x.cssClass === "refresh-button"; });
                if (refreshButton)
                    refreshButton.icon = "fa-refresh text-blue";
                var pickerButton = Q.tryFirst(buttons, function (x) { return x.cssClass === "column-picker-button"; });
                if (pickerButton)
                    pickerButton.icon = "fa-th-list text-blue";
                var excelButton = Q.tryFirst(buttons, function (x) { return x.cssClass === "export-xlsx-button"; });
                if (excelButton)
                    excelButton.icon = "fa-file-excel-o";
                return buttons;
            };
        })(Serenity.EntityGrid.prototype['getButtons']);
        Serenity.EntityDialog.prototype['getToolbarButtons'] = (function (old) {
            return function () {
                var buttons = old.call(this);
                var saveButton = Q.tryFirst(buttons, function (x) { return x.cssClass === "save-and-close-button"; });
                if (saveButton)
                    saveButton.icon = "fa-floppy-o text-purple";
                var applyButton = Q.tryFirst(buttons, function (x) { return x.cssClass === "apply-changes-button"; });
                if (applyButton)
                    applyButton.icon = "fa-check-circle text-purple";
                var deleteButton = Q.tryFirst(buttons, function (x) { return x.cssClass === "delete-button"; });
                if (deleteButton)
                    deleteButton.icon = "fa-trash-o text-red";
                var cloneButton = Q.tryFirst(buttons, function (x) { return x.cssClass === "clone-button"; });
                if (cloneButton)
                    cloneButton.icon = "fa-clone";
                return buttons;
            };
        })(Serenity.EntityDialog.prototype['getToolbarButtons']);
        Serenity.EntityDialog.prototype['updateInterface'] = (function (old) {
            return function () {
                old.call(this);
                if (this.saveAndCloseButton) {
                    this.saveAndCloseButton.find('.button-inner')
                        .html("<i class='fa fa-floppy-o text-purple'></i> " +
                        Q.htmlEncode(Q.text((this.isNew() ? 'Controls.EntityDialog.SaveButton' :
                            'Controls.EntityDialog.UpdateButton'))));
                }
            };
        })(Serenity.EntityDialog.prototype['updateInterface']);
        $.datepicker.setDefaults({
            buttonImage: null,
            buttonImageOnly: false,
            buttonText: '<i class="fa fa-calendar"></i>'
        });
        Serenity.Toolbar.prototype['createButton'] = (function (old) {
            return function (container, b) {
                if (b.separator)
                    container = $('<div class="buttons-inner"></div>').appendTo(container.parent());
                else
                    container = container.parent().children().last();
                old.call(this, container, b);
                if (b.separator)
                    container.children().first().remove();
            };
        })(Serenity.Toolbar.prototype['createButton']);
        Serenity.ColumnPickerDialog.prototype['createLI'] = (function (old) {
            return function (col) {
                var allowHide = this.allowHide(col);
                return $("\n<li data-key=\"" + col.id + "\" class=\"" + (allowHide ? "" : "cant-hide") + "\">\n  <span class=\"drag-handle\">\u2630</span>\n  " + Q.htmlEncode(this.getTitle(col)) + "\n  " + (allowHide ? "<i class=\"js-hide fa fa-eye-slash\" title=\"" + Q.text("Controls.ColumnPickerDialog.HideHint") + "\"></i>" : '') + "\n  <i class=\"js-show fa fa-eye\" title=\"" + Q.text("Controls.ColumnPickerDialog.ShowHint") + "\"></i>\n</li>");
            };
        })(Serenity.ColumnPickerDialog.prototype['createLI']);
        Serenity.ColumnPickerDialog.prototype['getTemplate'] = (function (old) {
            return function () {
                var template = old.call(this);
                return template.replace('fa-list', 'fa-eye-slash');
            };
        })(Serenity.ColumnPickerDialog.prototype['getTemplate']);
        Serenity.DataGrid.defaultRowHeight = 27;
        Serenity.DataGrid.defaultHeaderHeight = 27;
    }
    Serenity.setupUIOverrides = setupUIOverrides;
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    /**
     * A dialog/panel base class that easily generates a wizard UI from tabs in a form definition (e.g. Form.cs)
     */
    var WizardDialog = /** @class */ (function (_super) {
        __extends(WizardDialog, _super);
        /**
         * Creates a new wizard dialog
         * @param opt options, might be used by derived classes
         */
        function WizardDialog(opt) {
            var _this = _super.call(this, opt) || this;
            _this._step = 1;
            _this.element.children().addClass("wizard-horz");
            _this.wizardGrid = new Serenity.PropertyGrid(_this.byId("WizardGrid"), _this.getPropertyGridOptions());
            _this.wizardGrid.element.children(".property-tabs").children('li').each(function (i, li) {
                var $li = $(li);
                var h = $li.children('a').html();
                $li.html('').attr('data-step', i + 1);
                $('<span class="badge"/>').text(i + 1).appendTo($li);
                $('<span class="text"/>').html(h).appendTo($li);
                $('<span class="chevron"/>').appendTo($li);
            });
            _this.byId("CancelButton").click(function (e) { return _this.confirmCancel(e); });
            _this.byId("BackButton").click(function () {
                _this.moveToStep(_this.step - 1);
            });
            _this.byId("NextButton").click(function () {
                if (!_this.validateForm())
                    return false;
                _this.moveToStep(_this.step + 1);
            });
            _this.wizardGrid.element.children(".property-tabs")
                .on("click", "li", function (e) {
                var step = $(e.currentTarget).data('step');
                if (step > _this.step)
                    return;
                _this.moveToStep(step);
            });
            _this.wizardGrid.load(_this.getInitialEntity());
            _this.element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e))
                    return;
                _this.confirmCancel(e);
            });
            return _this;
        }
        /**
         * gets property grid options
         */
        WizardDialog.prototype.getPropertyGridOptions = function () {
            return {
                idPrefix: this.idPrefix,
                mode: 1 /* insert */,
                items: this.getPropertyItems(),
                localTextPrefix: this.getLocalTextPrefix(),
                useCategories: true
            };
        };
        /**
         * gets form key to use to load property items / tabs
         */
        WizardDialog.prototype.getFormKey = function () {
            return null;
        };
        /**
         * gets local text prefix for labels
         */
        WizardDialog.prototype.getLocalTextPrefix = function () {
            return "";
        };
        /**
         * gets list of property items to shown on form, uses form key to load items by default
         */
        WizardDialog.prototype.getPropertyItems = function () {
            var formKey = this.getFormKey();
            if (formKey)
                return Q.getForm(formKey);
            return [];
        };
        /**
         * gets initial entity to load onto form, override these to customize initial form values
         */
        WizardDialog.prototype.getInitialEntity = function () {
            return {};
        };
        Object.defineProperty(WizardDialog.prototype, "maxSteps", {
            // gets maximum number of steps from
            get: function () {
                return this.wizardGrid.element
                    .children(".property-tabs")
                    .children("li")
                    .length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * moves to a step, by calling one of next, back or finish methods based on target step
         * @param toStep the target step to move to
         */
        WizardDialog.prototype.moveToStep = function (toStep) {
            if (toStep == this.step || toStep < 1 || toStep > this.maxSteps + 1)
                return;
            if (toStep >= this.maxSteps + 1) {
                this.finish();
                return;
            }
            (toStep < this.step ? this.back : this.next).call(this, toStep);
        };
        Object.defineProperty(WizardDialog.prototype, "step", {
            // gets current step
            get: function () {
                return this._step;
            },
            // sets current step directly, skipping any validation
            set: function (value) {
                this.getStepLink(this._step).removeClass("in active");
                this.getStepPanel(this._step).removeClass("in active");
                this.getStepLink(value).addClass("in active");
                this.getStepPanel(value).addClass("in active")
                    .find(".require-layout").triggerHandler("layout");
                var s;
                for (s = value; s <= this._step; s++)
                    this.getStepLink(s).removeClass("complete").find("span.badge").removeClass("badge-success");
                for (s = this._step; s < value; s++)
                    this.getStepLink(s).addClass("complete").find("span.badge").addClass("badge-success");
                this._step = value;
                this.byId("BackButton").toggleClass('disabled', this._step <= 1);
                this.byId("NextButton").children('.txt').text(Q.text("Site.WizardDialog." +
                    (this._step == this.maxSteps ? "Finish" : "Next") + "Button"));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * called to reset the form, and go back to first step
         */
        WizardDialog.prototype.reset = function () {
            this.step = 1;
            this.wizardGrid.load(this.getInitialEntity());
        };
        /**
         * is called when user clicks the Finish button (next button on last step)
         */
        WizardDialog.prototype.finish = function () {
            this.dialogClose();
        };
        /**
         * next method is called when user tries to go forward
         * @param toStep the step user is trying to move to, usually one step ahead
         */
        WizardDialog.prototype.next = function (toStep) {
            this.step = toStep;
        };
        /**
         * back method is called when user tries to go backward
         * @param toStep the step user is trying to move to, usually one step back but can also be multiple
         */
        WizardDialog.prototype.back = function (toStep) {
            this.step = toStep;
        };
        WizardDialog.prototype.getStepLink = function (step) {
            return this.wizardGrid.element
                .children(".property-tabs")
                .children("li").eq(step - 1);
        };
        WizardDialog.prototype.getStepPanel = function (step) {
            return this.wizardGrid.element
                .children(".property-panes")
                .children().eq(step - 1);
        };
        /**
         * make sure derived classes use WizardDialog template,
         * if they don't define one of their own
         */
        WizardDialog.prototype.getFallbackTemplate = function () {
            return "\n<div class=\"s-Form\">\n    <form id=\"~_Form\" action=\"\">\n        <div id=\"~_WizardGrid\" class=\"wizard-grid\">\n        </div>\n\n        <div class=\"buttons\" style=\"text-align: right; margin: 10px 20px;\">\n            <button id=\"~_CancelButton\" class=\"btn btn-danger\" formnovalidate><i class=\"fa fa-ban\"></i> Cancel</button>\n            <button id=\"~_BackButton\" class=\"btn btn-primary disabled\" formnovalidate><i class=\"fa fa-chevron-left\"></i> " + Q.text("Site.WizardDialog.BackButton") + "</button>\n            <button id=\"~_NextButton\" class=\"btn btn-primary\" formnovalidate><span class=\"txt\">" + Q.text("Site.WizardDialog.NextButton") + "</span> <i class=\"fa fa-chevron-right\"></i></button>\n        </div>\n    </form>\n</div>";
        };
        /**
         * gets cancel confirmation message, return null to disable confirmation
         */
        WizardDialog.prototype.getCancelMessage = function () {
            return Q.text("Site.WizardDialog.CancelMessage");
        };
        /**
         * confirms when user tries to cancel or close the wizard
         * @param e
         */
        WizardDialog.prototype.confirmCancel = function (e) {
            var _this = this;
            var cancelMessage = this.getCancelMessage();
            if (!cancelMessage) {
                e.preventDefault();
                this.dialogClose();
                return;
            }
            e.preventDefault();
            Q.confirm(cancelMessage, function () {
                _this.dialogClose();
            });
        };
        /** gets save entity from form, optionally from a limited list of steps (tabs)
         * @param steps the list of steps to read data from, pass null to get all
         */
        WizardDialog.prototype.getSaveEntity = function (steps) {
            var entity = {};
            this.wizardGrid.save(entity);
            if (steps != null) {
                var maxSteps = this.maxSteps;
                for (var i = 1; i <= maxSteps; i++) {
                    if (steps.indexOf(i) >= 0)
                        continue;
                    var panel = this.getStepPanel(i);
                    panel.find('.field').each(function (z, el) {
                        var field = $(el).attr('class').split(' ')[1];
                        if (field)
                            delete entity[field];
                    });
                }
            }
            return entity;
        };
        Object.defineProperty(WizardDialog.prototype, "compactSteps", {
            // gets value of compact steps option
            get: function () {
                return this.element.children().hasClass("compact-steps");
            },
            // sets value of compact steps option, when it is on, inactive step titles only show
            // numbers and gets visible on hover. this is better there are many steps to fit
            set: function (value) {
                this.element.children().toggleClass("compact-steps", value);
            },
            enumerable: true,
            configurable: true
        });
        return WizardDialog;
    }(Serenity.TemplatedDialog));
    Serenity.WizardDialog = WizardDialog;
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    /**
     * A mixin that can be applied to a DataGrid for auto size column width functionality
     */
    var AutoColumnWidthMixin = /** @class */ (function (_super) {
        __extends(AutoColumnWidthMixin, _super);
        function AutoColumnWidthMixin(options) {
            var _this = _super.call(this, options.grid.element, options) || this;
            _this.autoSizing = 0;
            _this.columnResizeHandler = function () {
                if (!_this.autoSizing && Q.coalesce(_this.options.disableIfUserResize, true))
                    _this.disabled = true;
            };
            _this.queueAutoSize = 0;
            if (options.disabled != null)
                _this.disabled = !!options.disabled;
            _this.slickGrid = options.grid.slickGrid;
            _this.$container = $(_this.slickGrid.getContainerNode());
            _this.$container.on('dblclick.' + _this.uniqueName, '.slick-resizable-handle', function (e) { return _this.resizeHandleClick(e); });
            _this.slickGrid.onColumnsResized.subscribe(_this.columnResizeHandler);
            var self = _this;
            _this.oldMarkupReady = options.grid['markupReady'];
            options.grid['markupReady'] = function () {
                self.oldMarkupReady && self.oldMarkupReady.call(this);
                if (!self.disabled && (!self.markupReadyOnce || !self.options.autoSizeAllJustOnce))
                    self.autoSizeAll(self.disabled != null ? false : null);
                self.markupReadyOnce = true;
            };
            _this.oldPersistSettings = options.grid['persistSettings'];
            options.grid['persistSettings'] = function (flags) {
                if (self.autoSizing)
                    return;
                self.oldPersistSettings.call(this, flags);
            };
            _this.oldGetCurrentSettings = options.grid['getCurrentSettings'];
            options.grid['getCurrentSettings'] = function (flags) {
                flags = flags || this.gridPersistanceFlags();
                flags.columnWidths = Q.coalesce(flags.columnWidths, !!this.disabled);
                return self.oldGetCurrentSettings.call(this, flags);
            };
            _this.oldRestoreSettings = options.grid['restoreSettings'];
            options.grid['restoreSettings'] = function (settings, flags) {
                if (settings == null)
                    settings = this.getPersistedSettings();
                flags = flags || this.gridPersistanceFlags();
                if (settings != null &&
                    settings.columns &&
                    (flags.columnWidths || Q.any(settings.columns, function (x) { return x.width != null; })))
                    self.disabled = true;
                self.oldRestoreSettings.call(this, settings, flags);
            };
            if (!_this.disabled)
                _this.autoSizeAll();
            return _this;
        }
        AutoColumnWidthMixin.prototype.destroy = function () {
            if (this.options && this.options.grid) {
                this.options.grid.element.off('.' + this.uniqueName);
                this.options.grid['markupReady'] = this.oldMarkupReady;
            }
            this.slickGrid && this.slickGrid.onColumnsResized.unsubscribe(this.columnResizeHandler);
            this.options = null;
            this.slickGrid = null;
            this.$container = null;
            _super.prototype.destroy.call(this);
        };
        AutoColumnWidthMixin.prototype.resizeHandleClick = function (e) {
            if (e.ctrlKey) {
                e.preventDefault();
                e.stopPropagation();
                this.autoSizeAll(false);
                this.disabled = false;
                return;
            }
            var $header = $(e.currentTarget).closest('.slick-header-column');
            var columnDef = $header.data('column');
            if (!columnDef || !columnDef.resizable)
                return;
            e.preventDefault();
            e.stopPropagation();
            this.autoSizeColumn($header, columnDef);
        };
        AutoColumnWidthMixin.prototype.getAutoColumnWidth = function ($header, columnDef) {
            var colIndex = this.slickGrid.getColumnIndex(columnDef.id);
            var autoWidth = this.getMaxColumnWidth(columnDef, colIndex);
            if (typeof this.options.ignoreHeaders == "number") {
                autoWidth = Math.max(Math.min(this.options.ignoreHeaders, getElementWidth($header[0])), autoWidth);
            }
            else if (!this.options.ignoreHeaders) {
                autoWidth = Math.max(getElementWidth($header[0]), autoWidth);
            }
            autoWidth = (autoWidth || 0) + 1;
            if (columnDef.maxWidth > 0)
                autoWidth = Math.min(autoWidth, columnDef.maxWidth);
            else
                autoWidth = Math.min(autoWidth, this.options.maxWidth || 400);
            if (columnDef.minWidth > 0)
                autoWidth = Math.max(autoWidth, columnDef.minWidth);
            else
                autoWidth = Math.max(autoWidth, this.options.minWidth || 30);
            return autoWidth;
        };
        AutoColumnWidthMixin.prototype.autoSizeColumn = function ($header, columnDef) {
            var autoWidth = this.getAutoColumnWidth($header, columnDef);
            if (autoWidth !== columnDef.width) {
                this.autoSizing++;
                try {
                    columnDef.width = autoWidth;
                    this.slickGrid.setColumns(this.slickGrid.getColumns());
                    this.slickGrid.onColumnsResized.notify();
                }
                finally {
                    this.autoSizing--;
                }
            }
        };
        AutoColumnWidthMixin.prototype.autoSizeAll = function (useExplicitWidths) {
            var _this = this;
            if (!this.$container.is(':visible')) {
                if (this.queueAutoSize <= 0) {
                    this.queueAutoSize++;
                    Serenity.LazyLoadHelper.executeOnceWhenShown(this.$container, function () { return _this.autoSizeAll(useExplicitWidths); });
                }
                return;
            }
            if (this.queueAutoSize > 0) {
                this.queueAutoSize--;
            }
            this.autoSizing++;
            try {
                var $headers = this.$container.find(".slick-header-column");
                useExplicitWidths = Q.coalesce(useExplicitWidths, this.options.useExplicitWidths);
                $headers.each(function (index, el) {
                    var columnDef = $(el).data('column');
                    if (!columnDef)
                        return;
                    var autoWidth = (useExplicitWidths && columnDef.sourceItem && columnDef.sourceItem.width > 0 && columnDef.sourceItem.widthSet) ?
                        columnDef.sourceItem.width : _this.getAutoColumnWidth($(el), columnDef);
                    columnDef.width = autoWidth;
                });
                this.slickGrid.setColumns(this.slickGrid.getColumns());
                this.slickGrid.onColumnsResized.notify();
            }
            finally {
                this.autoSizing--;
            }
        };
        AutoColumnWidthMixin.prototype.createRow = function (columnDef) {
            var rowEl = $('<div class="slick-row"><div class="slick-cell" style="text-overflow: initial; white-space: nowrap;"></div></div>');
            var gridCanvas = this.slickGrid.getCanvasNode();
            $(gridCanvas).append(rowEl);
            return rowEl;
        };
        AutoColumnWidthMixin.prototype.getMaxColumnWidth = function (columnDef, colIndex) {
            var rowEl = this.createRow(columnDef);
            var maxAllowedWidth = columnDef.maxWidth > 0 ? columnDef.maxWidth : this.options.maxWidth;
            try {
                var cell = rowEl.children()[0];
                var length = this.slickGrid.getDataLength();
                if (this.options.maxRows != null &&
                    this.options.maxRows < length)
                    length = this.options.maxRows;
                var maxWidth = 0;
                var offset = 0;
                for (var i = 0; i < length; i++) {
                    var item = this.slickGrid.getDataItem(i);
                    if (columnDef.formatter) {
                        try {
                            var html = columnDef.formatter(-1, colIndex, item[columnDef.field], columnDef, item);
                            cell.innerHTML = html;
                        }
                        catch (_a) {
                            cell.innerText = Q.coalesce(item[columnDef.field], '');
                        }
                        var child = cell.childNodes[0];
                        if (child && child.tagName == "INPUT" &&
                            child.type != "checkbox") {
                            var cs = getComputedStyle(child);
                            offset = (parseFloat(cs.borderLeftWidth) || 0) +
                                (parseFloat(cs.borderRightWidth) || 0) +
                                (parseFloat(cs.paddingLeft) || 0) +
                                (parseFloat(cs.paddingRight) || 0);
                            cell.innerText = child.value;
                        }
                    }
                    else
                        cell.innerText = Q.coalesce(item[columnDef.field], '');
                    var width = cell.offsetWidth + offset;
                    if (width > maxWidth)
                        maxWidth = width;
                    if (maxAllowedWidth > 0 && width >= maxAllowedWidth)
                        break;
                }
                return maxWidth || 0;
            }
            finally {
                rowEl.remove();
            }
        };
        return AutoColumnWidthMixin;
    }(Serenity.Widget));
    Serenity.AutoColumnWidthMixin = AutoColumnWidthMixin;
    function getElementWidth(element) {
        var width, clone = element.cloneNode(true);
        clone.style.cssText = 'position: absolute; visibility: hidden; right: auto; text-overflow: initial; white-space: nowrap;';
        element.parentNode.insertBefore(clone, element);
        width = clone.offsetWidth;
        clone.parentNode.removeChild(clone);
        return width;
    }
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var CardViewItems = /** @class */ (function (_super) {
        __extends(CardViewItems, _super);
        function CardViewItems() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CardViewItems.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", { className: "card-items" }, this.props.items.map(function (item, index) {
                return React.createElement("div", { className: "card-item", key: index }, _this.props.renderItem(item, index));
            })));
        };
        return CardViewItems;
    }(React.Component));
    Serenity.CardViewItems = CardViewItems;
})(Serenity || (Serenity = {}));
// thanks a lot to Brainweber Inc. for sponsoring this feature and letting us share it with community
var Serenity;
(function (Serenity) {
    /**
     * A mixin that can be applied to a DataGrid for card view functionality
     */
    var CardViewMixin = /** @class */ (function () {
        function CardViewMixin(options) {
            var _this = this;
            this.options = options;
            var dg = this.dataGrid = options.grid;
            var idProperty = dg.getIdProperty();
            var getId = this.getId = function (item) { return item[idProperty]; };
            var btnGroup = $("\n<div class=\"btn-group view-switch\" data-toggle=\"buttons\" style=\"float: right\">\n    <label class=\"btn btn-default active\" title=\"" + Q.text("Site.CardViewMixin.ListView") + "\">\n        <i class=\"fa fa-th-list text-purple\"></i>\n        <input type=\"radio\" name=\"" + dg.element.attr('id') + "_ViewType\" value=\"list\" checked />\n    </label>\n    <label class=\"btn btn-default\" title=\"" + Q.text("Site.CardViewMixin.CardView") + "\">\n        <i class=\"fa fa-th-large text-purple\"></i>\n        <input type=\"radio\" name=\"" + dg.element.attr('id') + "_ViewType\" value=\"card\" />    \n    </label>\n</div>")
                .prependTo(dg.element.find('.grid-title'));
            this.cardContainer = $('<div class="card-container" style="display: none;"></div>')
                .insertAfter(dg.element.children('.grid-container'));
            btnGroup.find('input').change(function (e) { return _this.switchView($(e.target).val()); });
            this.resizeCardView();
            dg.element.bind('layout', function () { return _this.resizeCardView(); });
            dg.view.onDataChanged.subscribe(function () {
                _this.updateCardItems();
            });
            var oldCurrentSettings = dg.getCurrentSettings;
            dg.getCurrentSettings = function (flag) {
                var settings = oldCurrentSettings.apply(dg, [flag]);
                settings['viewType'] = btnGroup.find('input:checked').val();
                return settings;
            };
            var oldRestoreSettings = dg.restoreSettings;
            dg.restoreSettings = function (settings, flags) {
                oldRestoreSettings.apply(dg, [settings, flags]);
                if (settings == null) {
                    var storage = this.getPersistanceStorage();
                    if (storage == null)
                        return;
                    var json = Q.trimToNull(storage.getItem(this.getPersistanceKey()));
                    if (!json)
                        return;
                    settings = JSON.parse(json);
                }
                var viewType = settings.viewType || 'list';
                var currentViewType = btnGroup.find('input:checked').val() || 'list';
                if (viewType != currentViewType) {
                    btnGroup.find('input').eq(viewType == 'card' ? 1 : 0).click();
                }
            };
        }
        CardViewMixin.prototype.switchView = function (viewType) {
            this.resizeCardView();
            var card = viewType == 'card';
            this.dataGrid.element.children('.card-container').toggle(card);
            this.dataGrid.element.children('.grid-container').toggle(!card);
            if (card)
                this.updateCardItems();
            this.dataGrid.persistSettings();
        };
        CardViewMixin.prototype.updateCardItems = function () {
            ReactDOM.render(React.createElement(Serenity.CardViewItems, {
                items: this.dataGrid.getItems(),
                renderItem: this.options.renderItem
            }), this.cardContainer[0]);
        };
        CardViewMixin.prototype.resizeCardView = function () {
            var gc = this.dataGrid.element.children('.grid-container');
            var width = this.dataGrid.element.width();
            var height = gc.height();
            this.dataGrid.element.children('.card-container').css({
                width: width + 'px',
                height: height + 'px'
            });
        };
        return CardViewMixin;
    }());
    Serenity.CardViewMixin = CardViewMixin;
    Q.initFullHeightGridPage = function (gridDiv) {
        $('body').addClass('full-height-page');
        gridDiv.addClass('responsive-height');
        var layout = function () {
            var inPageContent = gridDiv.parent().hasClass('page-content') ||
                gridDiv.parent().is('section.content');
            if (inPageContent) {
                gridDiv.css('height', '1px').css('overflow', 'hidden');
            }
            var cc = gridDiv.children('.card-container');
            if (cc.length && cc.is(':visible')) {
                cc.hide();
                gridDiv.children('.grid-container').show();
                try {
                    Q.layoutFillHeight(gridDiv);
                    gridDiv.triggerHandler('layout');
                }
                finally {
                    gridDiv.children('.grid-container').hide();
                    cc.show();
                }
            }
            else {
                Q.layoutFillHeight(gridDiv);
                if (inPageContent) {
                    gridDiv.css('overflow', '');
                }
                gridDiv.triggerHandler('layout');
            }
        };
        if ($('body').hasClass('has-layout-event')) {
            $('body').bind('layout', layout);
        }
        else if (window.Metronic) {
            window.Metronic.addResizeHandler(layout);
        }
        else {
            $(window).resize(layout);
        }
        layout();
        Q.Router.resolve();
    };
})(Serenity || (Serenity = {}));
// thanks a lot to Brainweber Inc. for sponsoring this feature and letting us share it with community
var Serenity;
(function (Serenity) {
    /**
     * A mixin that can be applied to a DataGrid for favorite views functionality
     */
    var FavoriteViewsMixin = /** @class */ (function () {
        function FavoriteViewsMixin(options) {
            var _this = this;
            this.options = options;
            var dg = this.dataGrid = options.grid;
            var idProperty = dg.getIdProperty();
            var getId = this.getId = function (item) { return item[idProperty]; };
            var dropdown = $("\n<div class=\"dropdown favorite-views\" style=\"float: right\">\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"" + dg.element.attr('id') + "_Favorites\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    <i class=\"fa fa-star text-blue\"></i> " + Q.text("Site.FavoriteViewsMixin.FavoriteViews") + "\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li class=\"save\">\n        <div>" + Q.text("Site.FavoriteViewsMixin.SaveView") + "</div>\n        <div><input type=\"text\"></div>\n        <div><button class=\"btn btn-primary save-button\"><i class=\"fa fa-floppy-o\"></i> " + Q.text("Site.FavoriteViewsMixin.SaveButton") + "</button></div>\n    </li>\n  </ul>\n</div>\n")
                .prependTo(dg.element.find(".grid-title"));
            dropdown.on('shown.bs.dropdown', function (e) {
                dropdown.find('input[type=text]').focus();
            });
            var viewName = dropdown.find('li.save input[type=text]');
            dropdown.find('button.save-button').click(function () {
                var name = Q.trimToNull(viewName.val());
                if (!name) {
                    Q.notifyWarning(Q.text("Site.FavoriteViewsMixin.EmptyNameError"));
                    return;
                }
                var favorites = _this.getFavorites();
                favorites[name] = dg.getCurrentSettings();
                _this.saveFavorites(favorites);
                Q.notifySuccess(Q.format(Q.text("Site.FavoriteViewsMixin.SaveSuccessMessage"), name));
                viewName.val('');
                _this.populateFavorites();
            });
            this.ul = dropdown.children("ul");
            this.ul.on('click', 'i.fa-trash-o', function (e) {
                var name = $(e.target).closest('li').children('a').text();
                var favorites = _this.getFavorites();
                delete favorites[name];
                _this.saveFavorites(favorites);
                _this.populateFavorites();
                Q.notifyWarning(Q.format(Q.text("Site.FavoriteViewsMixin.DeleteSuccessMessage"), name));
            });
            this.ul.on('click', 'a', function (e) {
                var name = $(e.target).text();
                var favorites = _this.getFavorites();
                var settings = favorites[name];
                if (settings) {
                    dg.restoreSettings(settings);
                    dg.refresh();
                    Q.notifySuccess(Q.format(Q.text("Site.FavoriteViewsMixin.LoadedViewMessage"), name));
                }
            });
            this.populateFavorites();
        }
        FavoriteViewsMixin.prototype.populateFavorites = function () {
            var favorites = this.getFavorites();
            var saveLI = this.ul.children('.save');
            this.ul.children().not(saveLI).remove();
            var keys = Object.keys(favorites).sort();
            if (keys.length) {
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var li = $('<li class="fav"><a href="javascript:;"></a></li>')
                        .insertBefore(saveLI)
                        .children('a')
                        .text(k)
                        .end();
                    $('<i class="fa fa-trash-o pull-right"></i>')
                        .attr('title', Q.text("Site.FavoriteViewsMixin.DeleteButtonHint"))
                        .appendTo(li);
                }
                $('<li role="separator" class="divider"></li>').insertBefore(saveLI);
            }
        };
        FavoriteViewsMixin.prototype.saveFavorites = function (favorites) {
            var storage = this.dataGrid.getPersistanceStorage();
            var key = "Views:" + this.dataGrid.getPersistanceKey();
            storage.setItem(key, JSON.stringify(favorites));
        };
        FavoriteViewsMixin.prototype.getFavorites = function () {
            var storage = this.dataGrid.getPersistanceStorage();
            var key = "Views:" + this.dataGrid.getPersistanceKey();
            return JSON.parse(storage.getItem(key) || "{}") || {};
        };
        return FavoriteViewsMixin;
    }());
    Serenity.FavoriteViewsMixin = FavoriteViewsMixin;
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    function toAggregator(summaryType) {
        switch (summaryType) {
            case Serenity.SummaryType.Sum: return Slick.Aggregators.Sum;
            case Serenity.SummaryType.Avg: return Slick.Aggregators.Avg;
            case Serenity.SummaryType.Max: return Slick.Aggregators.Max;
            case Serenity.SummaryType.Min: return Slick.Aggregators.Min;
        }
        return null;
    }
    var CustomSummaryMixin = /** @class */ (function () {
        function CustomSummaryMixin(options) {
            var dg = options.grid;
            var getDefaultAggregators = function () {
                var columns = dg['allColumns'];
                var aggregators = [];
                for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                    var x = columns_1[_i];
                    if (x.sourceItem == null)
                        continue;
                    if (x.sourceItem.summaryType != null &&
                        x.sourceItem.summaryType != Serenity.SummaryType.Disabled) {
                        var aggregator = toAggregator(x.sourceItem.summaryType);
                        if (aggregator == null)
                            continue;
                        x.summaryType = x.sourceItem.summaryType;
                        aggregators.push(new aggregator(x.field));
                    }
                }
                return aggregators;
            };
            dg.view.setSummaryOptions({
                aggregators: getDefaultAggregators()
            });
            var aggregatesPopup = $("<ul class=\"s-AggregatesPopup\" \n                style=\"display:none;position:absolute;z-index:100000;\">\n                <li data-agg=\"1\">Sum</li>\n                <li data-agg=\"2\">Average</li>\n                <li data-agg=\"3\">Min</li>\n                <li data-agg=\"4\">Max</li>\n            </ul>").appendTo(document.body)
                .click(function (e) {
                if (!$(e.target).is("li"))
                    return;
                var col = aggregatesPopup.data("column");
                if (col == null || !col.id)
                    return;
                var column = Q.tryFirst(dg['allColumns'], function (x) { return x.id == col.id; });
                if (!column)
                    return;
                if (column.sourceItem == null ||
                    column.sourceItem.summaryType == null ||
                    column.sourceItem.summaryType == Serenity.SummaryType.Disabled)
                    return;
                var agg = Q.toId($(e.target).data('agg'));
                if (agg === column.summaryType)
                    return;
                column.summaryType = agg;
                var aggregators = dg['allColumns']
                    .filter(function (x) { return x.summaryType; })
                    .map(function (x) {
                    var aggregator = toAggregator(x.summaryType);
                    if (aggregator == null)
                        return null;
                    return new aggregator(x.field);
                }).filter(function (x) { return x != null; });
                dg.view.setSummaryOptions({
                    aggregators: aggregators
                });
                var grouping = dg.view.getGrouping();
                for (var i = 0; i < grouping.length; i++)
                    grouping[i].aggregators = aggregators;
                dg.view.setGrouping(grouping);
                dg.slickGrid.invalidate();
            });
            dg.element.on('click', '.slick-footerrow-column', function (e) {
                e.preventDefault();
                var col = $(e.currentTarget).data('column');
                if (!col || !col.id)
                    return;
                var column = Q.tryFirst(dg['allColumns'], function (x) { return x.id == col.id; });
                if (!column)
                    return;
                if (!column ||
                    !column.sourceItem ||
                    column.sourceItem.summaryType == null ||
                    column.sourceItem.summaryType == Serenity.SummaryType.Disabled)
                    return;
                aggregatesPopup.data('column', column)
                    .show()
                    .css('top', (e.pageY - aggregatesPopup.height()) + 'px')
                    .css('left', e.pageX + 'px')
                    .children('li')
                    .removeClass('active')
                    .end()
                    .children('li[data-agg=' + column.summaryType + ']')
                    .addClass('active');
                $(document.body).off('click.aggregatesMenu' + dg['uniqueName']);
                window.setTimeout(function () { return $(document.body)
                    .on("click.aggregatesMenu" + dg['uniqueName'], function () {
                    aggregatesPopup.hide();
                    $(document.body).off('click.aggregatesMenu' + dg['uniqueName']);
                }); }, 1);
            });
            var oldCurrentSettings = dg.getCurrentSettings;
            dg.getCurrentSettings = function (flags) {
                var settings = oldCurrentSettings.apply(dg, [flags]);
                return settings;
            };
            var oldRestoreSettings = dg.restoreSettings;
            dg.restoreSettings = function (settings, flags) {
                oldRestoreSettings.apply(dg, [settings, flags]);
            };
        }
        return CustomSummaryMixin;
    }());
    Serenity.CustomSummaryMixin = CustomSummaryMixin;
})(Serenity || (Serenity = {}));
var Slick;
(function (Slick) {
    var Plugins;
    (function (Plugins) {
        /**
         * Based on plugin at https://github.com/muthukumarse/Slickgrid
         */
        var DraggableGrouping = /** @class */ (function () {
            function DraggableGrouping(options) {
                this.onGroupChanged = new Slick.Event();
                var defaults = {};
                this.options = $.extend(true, {}, defaults, options);
            }
            DraggableGrouping.prototype.init = function (grid) {
                this.grid = grid;
                this.gridUid = grid['getUID']();
                this.dropbox = $(grid['getGroupingPanel']());
                var dropPlaceHolderText = this.options.dropPlaceHolderText ||
                    Q.tryGetText("Site.DraggableGroupingMixin.DropPlaceholder") ||
                    "Drag a column header here to group by that column";
                this.dropbox.html("<div class='slick-dropped-placeholder'>" +
                    dropPlaceHolderText + "</div>" +
                    ("<div class=\"slick-group-expand-all\" title=\"" + (Q.tryGetText("Site.DraggableGrupingMixin.ExpandAllButton") || "Expand All") + "\" style=\"display:none\"></div>") +
                    ("<div class=\"slick-group-collapse-all\" title=\"" + (Q.tryGetText("Site.DraggableGrupingMixin.CollapseAllButton") || "Collapse All") + "\" style=\"display:none\"></div>"));
                this.dropboxPlaceholder = this.dropbox.find(".slick-dropped-placeholder");
                this.expandAll = this.dropbox.find(".slick-group-expand-all");
                this.collapseAll = this.dropbox.find(".slick-group-collapse-all");
                this.setupColumnDropbox();
                var cols = this.getColumns();
                for (var i = 0; i < cols.length; i++) {
                    var col = cols[i];
                    grid['updateColumnHeader'](col.id);
                }
                this.columnsGroupBy = [];
            };
            DraggableGrouping.prototype.getColumns = function () {
                return (this.options.getAllColumns && this.options.getAllColumns()) ||
                    this.grid.getColumns();
            };
            DraggableGrouping.prototype.destroy = function () {
                this.onGroupChanged.clear();
            };
            DraggableGrouping.prototype.setupColumnDropbox = function () {
                var _this = this;
                var _self = this;
                this.dropbox.droppable({
                    activeClass: "ui-state-default",
                    hoverClass: "ui-state-hover",
                    accept: ":not(.ui-sortable-helper)",
                    deactivate: function (event, ui) {
                        _this.dropbox.removeClass("slick-header-column-denied");
                    },
                    drop: function (event, ui) {
                        _self.handleGroupByDrop(this, ui.draggable.attr('id').replace(_self.gridUid, ""));
                    },
                    over: function (event, ui) {
                        var id = (ui.draggable).attr('id').replace(_this.gridUid, "");
                        _this.getColumns().forEach(function (e, i, a) {
                            if (e.id == id) {
                                if (e.grouping !== false) {
                                    _this.dropbox.addClass("slick-header-column-denied");
                                }
                            }
                        });
                    }
                });
                this.dropbox.sortable({
                    items: "div.slick-dropped-grouping",
                    cursor: "default",
                    tolerance: "pointer",
                    helper: "clone",
                    update: function (event, ui) {
                        var sortArray = $(event.target).sortable('toArray', {
                            attribute: 'data-id'
                        }), newGroupingOrder = [];
                        for (var i = 0, l = sortArray.length; i < l; i++) {
                            for (var a = 0, b = _this.columnsGroupBy.length; a < b; a++) {
                                if (_this.columnsGroupBy[a].id == sortArray[i]) {
                                    newGroupingOrder.push(_this.columnsGroupBy[a]);
                                    break;
                                }
                            }
                        }
                        _this.columnsGroupBy = newGroupingOrder;
                        _this.updateGroupBy();
                    }
                });
                this.expandAll.on('click', function (e) {
                    _this.grid.getData().expandAllGroups();
                });
                this.collapseAll.on('click', function (e) {
                    _this.grid.getData().collapseAllGroups();
                });
            };
            DraggableGrouping.prototype.getGroupingFor = function (column) {
                var g = null;
                if (this.options.getGroupingFor) {
                    g = this.options.getGroupingFor(column);
                }
                if (g === false)
                    return g;
                return $.extend({
                    getter: column.field || column.id,
                    formatter: function (g) {
                        var _a;
                        var text;
                        if (column.formatter) {
                            try {
                                text = column.formatter(-1, -1, g.value, column, (_a = {}, _a[column.field] = g, _a));
                            }
                            catch (e) {
                                text = Q.htmlEncode(g.value);
                            }
                        }
                        else
                            text = Q.htmlEncode(g.value);
                        return (column.name || column.field || column.id) +
                            ": " + text + " <span style='color:green'>(" +
                            g.count + " items)</span>";
                    },
                    collapsed: true
                }, g);
            };
            DraggableGrouping.prototype.handleGroupByDrop = function (container, columnid) {
                var _this = this;
                var columnAllowed = true;
                this.columnsGroupBy.forEach(function (clmn, i, a) {
                    if (clmn.id == columnid) {
                        columnAllowed = false;
                    }
                });
                var gridColumns = this.getColumns();
                if (!columnAllowed)
                    return;
                gridColumns.forEach(function (col, i, a) {
                    if (col.id !== columnid || col.grouping === false)
                        return;
                    if (col.grouping == null || $.isEmptyObject(col.grouping)) {
                        col.grouping = _this.getGroupingFor(col);
                        if (col.grouping === false)
                            return;
                    }
                    var entry = $("<div id='" + _this.gridUid +
                        col.id + "_entry' data-id='" + col.id +
                        "' class='slick-dropped-grouping'>");
                    var groupText = $("<div style='display: inline-flex'>" +
                        col.name + "</div>");
                    groupText.appendTo(entry);
                    var groupRemoveIcon = $("<div class='slick-groupby-remove'>&nbsp;</div>");
                    if (_this.options.deleteIconCssClass)
                        groupRemoveIcon.addClass(_this.options.deleteIconCssClass);
                    if (_this.options.deleteIconImage)
                        groupRemoveIcon.css("background", "url(" + _this.options.deleteIconImage + ") no-repeat center right");
                    if (!_this.options.deleteIconCssClass && !_this.options.deleteIconImage)
                        groupRemoveIcon.addClass('slick-groupby-remove-image');
                    groupRemoveIcon.appendTo(entry);
                    $("</div>").appendTo(entry);
                    entry.appendTo(container);
                    _this.addColumnGroupBy(col);
                    groupRemoveIcon.one('click', function () { return _this.removeGroupBy(col.id, entry); });
                });
                this.grid.invalidate();
            };
            DraggableGrouping.prototype.addColumnGroupBy = function (column) {
                this.columnsGroupBy.push(column);
                this.updateGroupBy();
            };
            DraggableGrouping.prototype.setDroppedGroups = function (idList) {
                if (!idList || !idList.length) {
                    this.columnsGroupBy = [];
                    this.dropbox.find(".slick-dropped-grouping").remove();
                }
                else {
                    for (var i = 0; i < idList.length; i++) {
                        this.handleGroupByDrop(this.dropbox, idList[i]);
                    }
                }
                this.updateInterface();
            };
            DraggableGrouping.prototype.removeGroupBy = function (id, entry) {
                entry.remove();
                var gridColumns = this.getColumns();
                var idx;
                while ((idx = Q.indexOf(this.columnsGroupBy, function (x) { return x.id == id; })) >= 0)
                    this.columnsGroupBy.splice(idx, 1);
                this.updateGroupBy();
            };
            DraggableGrouping.prototype.updateInterface = function () {
                var hasGrouping = !!(this.columnsGroupBy && this.columnsGroupBy.length);
                this.collapseAll.toggle(hasGrouping);
                this.expandAll.toggle(hasGrouping);
                this.dropboxPlaceholder.toggle(!hasGrouping);
            };
            DraggableGrouping.prototype.updateGroupBy = function () {
                this.updateInterface();
                if (this.columnsGroupBy.length == 0) {
                    this.grid.getData().setGrouping([]);
                    this.onGroupChanged.notify({ groupColumns: [] });
                    this.grid.invalidate();
                    return;
                }
                var groupingArray = [];
                this.columnsGroupBy.forEach(function (element, index, array) {
                    groupingArray.push(element.grouping);
                });
                this.grid.getData().setGrouping(groupingArray);
                this.grid.invalidate();
                this.onGroupChanged.notify({ groupColumns: groupingArray });
            };
            DraggableGrouping.setupColumnReorder = function (grid, $headers, setupColumnResize, trigger) {
                $headers.filter(":ui-sortable").sortable("destroy");
                var $headerDraggableGroupBy = $(grid['getGroupingPanel']());
                var columns = grid.getColumns();
                var uid = grid['getUID']();
                $headers.sortable({
                    distance: 3,
                    cursor: "default",
                    tolerance: "intersection",
                    helper: "clone",
                    placeholder: "slick-sortable-placeholder ui-state-default slick-header-column",
                    forcePlaceholderSize: true,
                    appendTo: "body",
                    start: function (e, ui) {
                        $(ui.helper).addClass("slick-header-column-active");
                    },
                    beforeStop: function (e, ui) {
                        $(ui.helper).removeClass("slick-header-column-active");
                        var hasDroppedColumn = $headerDraggableGroupBy
                            .find(".slick-dropped-grouping").length;
                        if (hasDroppedColumn > 0) {
                            $headerDraggableGroupBy.find(".slick-dropped-placeholder").hide();
                            $headerDraggableGroupBy.find(".slick-dropped-grouping").show();
                        }
                    },
                    stop: function (e) {
                        if (!grid['getEditorLock']().commitCurrentEdit()) {
                            $(this).sortable("cancel");
                            return;
                        }
                        var reorderedIds = $headers.sortable("toArray");
                        var reorderedColumns = [];
                        for (var i = 0; i < reorderedIds.length; i++) {
                            reorderedColumns.push(columns[grid.getColumnIndex(reorderedIds[i].replace(uid, ""))]);
                        }
                        grid.setColumns(reorderedColumns);
                        trigger(grid.onColumnsReordered, {});
                        e.stopPropagation();
                        setupColumnResize();
                    }
                });
            };
            return DraggableGrouping;
        }());
        Plugins.DraggableGrouping = DraggableGrouping;
    })(Plugins = Slick.Plugins || (Slick.Plugins = {}));
})(Slick || (Slick = {}));
var Serenity;
(function (Serenity) {
    function sortBy(field, reverse, primer) {
        var key = function (x) {
            return primer ? primer(x[field]) : x[field];
        };
        return function (a, b) {
            var A = key(a), B = key(b);
            return (A < B ? -1 : (A > B ? 1 : 0)) * [1, -1][+!!reverse];
        };
    }
    ;
    var DraggableGroupingMixin = /** @class */ (function () {
        function DraggableGroupingMixin(options) {
            var dg = options.grid;
            var plugin = this.plugin = new Slick.Plugins.DraggableGrouping({
                getAllColumns: function () { return dg.allColumns; }
            });
            dg.slickGrid.registerPlugin(plugin);
            plugin.onGroupChanged.subscribe(function () {
                dg.persistSettings(null);
            });
            var oldCurrentSettings = dg.getCurrentSettings;
            dg.getCurrentSettings = function (flags) {
                var settings = oldCurrentSettings.apply(dg, [flags]);
                if (flags == null || flags.groupColumns == null || flags.groupColumns) {
                    var grouping = dg.view.getGrouping() || [];
                    settings['groupColumns'] = grouping.map(function (x) { return x.getter; })
                        .filter(function (x) { return x != null && typeof x == "string"; });
                }
                return settings;
            };
            function loadGroupCols(groupColsToLoad) {
                if (groupColsToLoad == null)
                    return;
                var columns = dg.allColumns;
                var groupCols = groupColsToLoad
                    .map(function (x) { return Q.tryFirst(columns, function (z) { return z.id == x; }); })
                    .filter(function (x) { return x != null; });
                var groupings = groupCols.map(function (e) {
                    if (e['grouping'] == null)
                        e['grouping'] = plugin.getGroupingFor(e);
                    return e['grouping'];
                });
                dg.view.setGrouping(groupings);
                plugin.setDroppedGroups(groupCols.map(function (x) { return x.id; }));
                dg.slickGrid.invalidate();
            }
            ;
            function getDefaultGroupCols() {
                var colsWithOrder = dg.allColumns.filter(function (x) { return x.sourceItem != null &&
                    x.sourceItem.groupOrder != null; });
                if (colsWithOrder.length) {
                    return colsWithOrder.sort(sortBy('groupOrder')).map(function (x) { return x.id; });
                }
                return null;
            }
            var oldRestoreSettings = dg.restoreSettings;
            dg.restoreSettings = function (settings, flags) {
                oldRestoreSettings.apply(dg, [settings, flags]);
                if (!(flags == null || flags.groupColumns == null || flags.groupColumns))
                    return;
                var groupColsToLoad = null;
                if (settings == null) {
                    var storage = this.getPersistanceStorage();
                    if (storage != null) {
                        var json = Q.trimToNull(storage.getItem(this.getPersistanceKey()));
                        if (json) {
                            groupColsToLoad = (JSON.parse(json) || {}).groupColumns;
                        }
                    }
                }
                else
                    groupColsToLoad = settings.groupColumns;
                if (groupColsToLoad == null) {
                    groupColsToLoad = getDefaultGroupCols();
                }
                loadGroupCols(groupColsToLoad);
            };
        }
        return DraggableGroupingMixin;
    }());
    Serenity.DraggableGroupingMixin = DraggableGroupingMixin;
})(Serenity || (Serenity = {}));
var Slick;
(function (Slick) {
    var Plugins;
    (function (Plugins) {
        /*
         Based on SlickGrid Header Menu Plugin (https://github.com/mleibman/SlickGrid/blob/master/plugins/slick.headermenu.js)
         Based on SlickGrid Spreadsheet Plugins (https://github.com/danny-sg/slickgrid-spreadsheet-plugins/blob/master/ext.headerfilter.js)
         (Can't be used at the same time as the header menu plugin as it implements the dropdown in the same way)
        */
        var HeaderFilters = /** @class */ (function () {
            function HeaderFilters(options) {
                this.checkedValues = new window['Set']();
                this.onFilterApplied = new Slick.Event();
                this.onCommand = new Slick.Event();
                this.handler = new Slick.EventHandler();
                var defaults = {
                    buttonImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEQAACxEBf2RfkQAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAACeSURBVDhPvdItDsIwGIfxAoZNAQaDmOEgXAIzsRvgCArNCRBcYAmeO+AQHGBuCWqOhYTP521SQsZI2yzhn/xE3+RxVU3WRoSJoz70OpjiiMxijzH0WhhhgzOeP+RIEOA9E6e4oBqdIFGIr0k8xA43mKjADLXR5wY44IEr1rBGZltIWGIuB9f9P1zgDu+whxW8Q1kXS8T65Tn5x6IypV7aOzNezxwrTQAAAABJRU5ErkJggg==",
                    useColumnFormatter: true,
                    getFilterValues: null
                };
                this.options = $.extend(true, {}, defaults, options);
                this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
            }
            HeaderFilters.prototype.init = function (g) {
                this.grid = g;
                this.handler.subscribe(g.onHeaderCellRendered, this.handleHeaderCellRendered.bind(this))
                    .subscribe(g.onBeforeHeaderCellDestroy, this.handleBeforeHeaderCellDestroy.bind(this))
                    .subscribe(g.onClick, this.handleBodyMouseDown.bind(this))
                    .subscribe(g.onColumnsResized, this.columnsResized.bind(this));
                g.setColumns(g.getColumns());
                $(document.body).bind("mousedown", this.handleBodyMouseDown = this.handleBodyMouseDown.bind(this));
            };
            HeaderFilters.prototype.destroy = function () {
                this.handler.unsubscribeAll();
                $(document.body).unbind("mousedown", this.handleBodyMouseDown);
            };
            HeaderFilters.prototype.getFilterType = function (column) {
                if (column.headerFilterType != null)
                    return column.headerFilterType;
                if (this.options.getFilterType != null) {
                    column.headerFilterType = this.options.getFilterType(column);
                    if (column.headerFilterType != null)
                        return column.headerFilterType;
                }
                if (column.headerFilterType == null)
                    column.headerFilterType = 1 /* value */;
                return column.headerFilterType;
            };
            HeaderFilters.prototype.handleBodyMouseDown = function (e) {
                if (this.menu && this.menu[0] != e.target && !$.contains(this.menu[0], e.target)) {
                    this.hideMenu();
                }
            };
            HeaderFilters.prototype.hideMenu = function () {
                if (this.menu) {
                    this.menu.remove();
                    this.menu = null;
                }
            };
            HeaderFilters.prototype.handleHeaderCellRendered = function (e, args) {
                var _this = this;
                var column = args.column;
                var filterType = this.getFilterType(column);
                if (filterType === 0 /* disabled */)
                    return false;
                var $el = $("<div></div>")
                    .addClass("slick-header-menubutton")
                    .data("column", column);
                if (this.options.buttonImage) {
                    $el.css("background-image", "url(" + this.options.buttonImage + ")");
                }
                $(args.node).addClass('has-header-menubutton');
                $el.on("click", function (e) {
                    e.stopPropagation();
                    _this.showFilter(e);
                }).appendTo(args.node);
            };
            HeaderFilters.prototype.handleBeforeHeaderCellDestroy = function (e, args) {
                $(args.node)
                    .find(".slick-header-menubutton")
                    .remove();
            };
            HeaderFilters.prototype.addMenuItem = function (menu, columnDef, title, command, image) {
                var $item = $("<div class='slick-header-menuitem'>")
                    .data("command", command)
                    .data("column", columnDef)
                    .bind("click", this.handleMenuItemClick)
                    .appendTo(menu);
                var $icon = $("<div class='slick-header-menuicon'>")
                    .appendTo($item);
                if (image) {
                    $icon.css("background-image", "url(" + image + ")");
                }
                $("<span class='slick-header-menucontent'>")
                    .text(title)
                    .appendTo($item);
            };
            HeaderFilters.prototype.addSearchInput = function (menu, columnDef) {
                var _this = this;
                return $("<input class='input' placeholder='"
                    + (Q.tryGetText("Site.HeaderFiltersMixin.Search") || "Search")
                    + "' style='margin-top: 5px; width: 206px'>")
                    .data("column", columnDef)
                    .bind("keyup", function (e) {
                    _this.updateFilterValues(columnDef, function () { });
                })
                    .appendTo(menu);
            };
            HeaderFilters.prototype.updateFilterItems = function (columnDef) {
                var _this = this;
                var filterOptions = "<label><input type='checkbox' value='-1' />" +
                    (Q.tryGetText("Site.HeaderFiltersMixin.SelectAll") || "(Select All)") + "</label>";
                this.checkedValues = new window['Set'](columnDef.headerFilterValues || []);
                for (var i = 0; i < this.filterValues.length; i++) {
                    var filtered = this.checkedValues.has(this.filterValues[i]);
                    filterOptions += "<label><input type='checkbox' value='" + i + "'"
                        + (filtered ? " checked='checked'" : "")
                        + "/>" + this.filterTexts[i] + "</label>";
                }
                var $filter = this.menu.find('.filter');
                $filter.empty().append($(filterOptions));
                $(':checkbox', $filter).bind('click', function (e) {
                    _this.onCheckboxClick($(e.target));
                });
            };
            HeaderFilters.prototype.getFilterText = function (item, column) {
                var value = item[column.field];
                if (this.options.useColumnFormatter && column && column.formatter) {
                    try {
                        var html = column.formatter(-1, -1, value, column, item);
                        if (value == null && html === '') {
                            return (Q.tryGetText("Site.HeaderFiltersMixin.Null") || "(null)");
                        }
                        return html;
                    }
                    catch (ex) {
                    }
                }
                if (value == null)
                    return (Q.tryGetText("Site.HeaderFiltersMixin.Null") || "(null)");
                return Q.htmlEncode(value);
            };
            HeaderFilters.prototype.showFilter = function (e) {
                var _this = this;
                var $menuButton = $(e.target);
                var columnDef = $menuButton.data("column");
                this.checkedValues = new window['Set'](columnDef.headerFilterValues || []);
                if (!this.menu)
                    this.menu = $("<div class='slick-header-menu cke_dialog'>").appendTo(document.body).hide();
                else
                    this.menu.empty();
                this.searchInput = this.addSearchInput(this.menu, columnDef);
                var filterOptions = "<label><input type='checkbox' value='-1' />" +
                    (Q.tryGetText("Site.HeaderFiltersMixin.SelectAll") || "(Select All)") + "</label>";
                var $filter = $("<div class='filter'>")
                    .appendTo(this.menu);
                $('<button>' + (Q.tryGetText("Site.HeaderFiltersMixin.OkButton") || "OK") + '</button>')
                    .appendTo(this.menu)
                    .bind('click', function (ev) {
                    if (Array['from']) {
                        columnDef.headerFilterValues = Array['from'](_this.checkedValues);
                    }
                    else {
                        columnDef.headerFilterValues = [];
                        _this.checkedValues && _this.checkedValues.forEach(function (x) { return columnDef.headerFilterValues.push(x); });
                    }
                    _this.setButtonImage($menuButton, columnDef.headerFilterValues.length > 0);
                    _this.handleApply(ev, columnDef);
                });
                $('<button>' + (Q.tryGetText("Site.HeaderFiltersMixin.ClearButton") || "Clear") + '</button>')
                    .appendTo(this.menu)
                    .bind('click', function (ev) {
                    if (columnDef.headerFilterValues)
                        columnDef.headerFilterValues.length = 0;
                    _this.setButtonImage($menuButton, false);
                    _this.handleApply(ev, columnDef);
                });
                $('<button>' + (Q.tryGetText("Site.HeaderFiltersMixin.CancelButton") || "Cancel") + '</button>')
                    .appendTo(this.menu)
                    .bind('click', function (e) { return _this.hideMenu(); });
                $(':checkbox', $filter).bind('click', function (e) {
                    _this.onCheckboxClick($(e.target));
                });
                this.updateFilterValues(columnDef, function () {
                    _this.menu.show();
                    $filter.css('height', null);
                    var menuHeight = _this.menu.height();
                    var buttonHeight = $(e.target).height();
                    var offset = $(e.target).offset();
                    var left = offset.left - _this.menu.width() + $(e.target).width() - 8;
                    var menuTop = offset.top + buttonHeight;
                    var windowScrollTop = $(window).scrollTop();
                    var bottomBoundary = $(window).height() + windowScrollTop;
                    var contentWrapperTop = (parseInt($('div.content-wrapper').css('padding-top'), 10) || 0);
                    if (menuTop + menuHeight > bottomBoundary &&
                        bottomBoundary - menuTop + contentWrapperTop < menuTop - windowScrollTop) {
                        menuTop -= (menuHeight + buttonHeight + 8);
                        if (menuTop < windowScrollTop)
                            menuTop = windowScrollTop;
                    }
                    var extraHeight = menuTop + menuHeight - bottomBoundary;
                    if (extraHeight > 0) {
                        $filter.css('height', ($filter.height() - extraHeight));
                    }
                    _this.menu.css("top", menuTop).css("left", (left > 0 ? left : 0));
                });
            };
            HeaderFilters.prototype.columnsResized = function () {
                this.hideMenu();
            };
            HeaderFilters.prototype.onCheckboxClick = function ($checkbox) {
                var index = $checkbox.val();
                var $filter = $checkbox.parent().parent();
                if ($checkbox.val() < 0) {
                    if ($checkbox.prop('checked')) {
                        $(':checkbox', $filter).prop('checked', true);
                        this.checkedValues = new window['Set'](this.filterValues || []);
                    }
                    else {
                        $(':checkbox', $filter).prop('checked', false);
                        this.checkedValues.clear();
                    }
                }
                else {
                    var value = this.filterValues[index];
                    var has = this.checkedValues.has(value);
                    if ($checkbox.prop('checked') && !has) {
                        this.checkedValues.add(value);
                    }
                    else if (has) {
                        this.checkedValues.delete(value);
                    }
                }
            };
            HeaderFilters.prototype.setButtonImage = function ($el, filtered) {
                $el.toggleClass('is-filtered', filtered);
            };
            HeaderFilters.prototype.handleApply = function (e, columnDef) {
                this.hideMenu();
                this.onFilterApplied.notify({
                    "grid": this.grid,
                    "column": columnDef
                }, e, this);
                e.preventDefault();
                e.stopPropagation();
            };
            HeaderFilters.prototype.containsFilter = function (filter) {
                if (filter == null && filter.length == 0)
                    return function (v) { return true; };
                var lowercaseFilter = Q.htmlEncode(filter).toLowerCase();
                return function (text) {
                    text = Q.coalesce(text, '').toString().replace(/<[^>]+>/g, '').toLowerCase();
                    return text.indexOf(lowercaseFilter) >= 0;
                };
            };
            HeaderFilters.prototype.getFilterValue = function (item, column) {
                var value = item[column.field];
                if (this.options.useColumnFormatter &&
                    column.formatter != null &&
                    column.headerFilterType == 2 /* text */) {
                    return (this.getFilterText(item, column)
                        .replace(/<[^>]+>/g, ''));
                }
                return value;
            };
            HeaderFilters.prototype.sortFilterValues = function () {
                var _this = this;
                var idx = [];
                for (var i = 0; i < this.filterValues.length; i++) {
                    idx[i] = i;
                }
                idx.sort(function (x, y) {
                    var A = _this.filterValues[x];
                    var B = _this.filterValues[y];
                    return (A < B ? -1 : (A > B ? 1 : 0));
                });
                var newFilterValues = [];
                var newFilterTexts = [];
                for (var i = 0; i < idx.length; i++) {
                    newFilterValues.push(this.filterValues[i]);
                    newFilterTexts.push(this.filterTexts[i]);
                }
                this.filterValues = newFilterValues;
                this.filterTexts = newFilterTexts;
            };
            HeaderFilters.prototype.updateFilterValues = function (column, done) {
                var _this = this;
                if (this.options.getFilterValues != null) {
                    this.options.getFilterValues(column, function (values, texts) {
                        if (values == null) {
                            _this.updateFilterValuesFromData(column);
                            _this.updateFilterItems(column);
                            done();
                        }
                        else {
                            _this.filterValues = [];
                            _this.filterTexts = [];
                            texts = texts || values.map(function (x) {
                                var item = {};
                                item[column.field] = x;
                                return _this.getFilterText(item, column);
                            });
                            var filter = _this.containsFilter(_this.searchInput.val());
                            _this.filterValues = values.filter(function (x, i) {
                                if (filter(texts[i])) {
                                    _this.filterTexts.push(texts[i]);
                                    return true;
                                }
                                return false;
                            });
                            _this.sortFilterValues();
                            _this.updateFilterItems(column);
                            done();
                        }
                    });
                }
                else {
                    this.updateFilterValuesFromData(column);
                    this.updateFilterItems(column);
                    done();
                }
            };
            HeaderFilters.prototype.updateFilterValuesFromData = function (column) {
                this.filterValues = [];
                this.filterTexts = [];
                var dataView = this.grid.getData();
                var items;
                if (this.checkedValues && this.checkedValues.size) {
                    items = dataView.getItems();
                }
                else {
                    items = [];
                    for (var i = 0; i < dataView.getLength(); i++) {
                        items.push(dataView.getItem(i));
                    }
                }
                var seen = new window['Set']();
                var searchText = this.searchInput.val();
                var searchFilter = this.containsFilter(searchText);
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    var value = this.getFilterValue(item, column);
                    if (!seen.has(value)) {
                        var text = this.getFilterText(item, column);
                        if (searchFilter(text)) {
                            seen.add(value);
                            this.filterValues.push(value);
                            this.filterTexts.push(text);
                        }
                    }
                }
                this.sortFilterValues();
            };
            HeaderFilters.prototype.handleMenuItemClick = function (e) {
                var command = $(this).data("command");
                var columnDef = $(this).data("column");
                this.hideMenu();
                this.onCommand.notify({
                    "grid": this,
                    "column": columnDef,
                    "command": command
                }, e, this);
                e.preventDefault();
                e.stopPropagation();
            };
            return HeaderFilters;
        }());
        Plugins.HeaderFilters = HeaderFilters;
    })(Plugins = Slick.Plugins || (Slick.Plugins = {}));
})(Slick || (Slick = {}));
var Serenity;
(function (Serenity) {
    /**
     * A mixin that can be applied to a DataGrid for column filters functionality
     */
    var HeaderFiltersMixin = /** @class */ (function () {
        function HeaderFiltersMixin(options) {
            var _this = this;
            var skipColumnFilters = null;
            var cache = {};
            if (options.filterByText == null) {
                this.filterByText = !options.grid.view.url ||
                    !options.grid.view['getPagingInfo']().rowsPerPage;
            }
            else
                this.filterByText = !!options.filterByText;
            var filterPlugin = new Slick.Plugins.HeaderFilters({
                getFilterType: function (col) {
                    if (_this.filterByText)
                        return 2 /* text */;
                    if (col.sortable != null && !col.sortable)
                        return 0 /* disabled */;
                    if (col.sourceItem != null &&
                        col.sourceItem.notFilterable != null &&
                        col.sourceItem.notFilterable)
                        return 0 /* disabled */;
                    return 1 /* value */;
                },
                getFilterValues: function (col, done) {
                    if (col.headerFilterType == 2 /* text */)
                        return done(null);
                    skipColumnFilters = col;
                    try {
                        if (!options.grid.onViewSubmit()) {
                            done([]);
                            return;
                        }
                    }
                    finally {
                        skipColumnFilters = null;
                    }
                    var req = Q.deepClone(options.grid.view.params);
                    req.DistinctFields = [col.field];
                    req.Skip = 0;
                    req.Take = 0;
                    var cacheKey = $.toJSON(req);
                    var cached = cache[cacheKey];
                    if (cached && cached.expires > new Date().getTime())
                        done(cached.value);
                    else {
                        Q.serviceCall({
                            request: req,
                            url: options.grid.view.url,
                            onSuccess: function (response) {
                                cache[cacheKey] = {
                                    value: response.Values,
                                    expires: new Date().getTime() + 1000 * 30
                                };
                                done(response.Values);
                            }
                        });
                    }
                }
            });
            filterPlugin.onFilterApplied.subscribe(function (e, data) {
                var column = data.column;
                if (column && column.headerFilterType == 2 /* text */)
                    options.grid.view.setItems(options.grid.view.getItems(), true);
                else
                    options.grid.refresh();
            });
            options.grid.slickGrid.registerPlugin(filterPlugin);
            var me = this;
            var oldOnViewSubmit = options.grid.onViewSubmit;
            options.grid.onViewSubmit = function () {
                if (!oldOnViewSubmit.call(this))
                    return false;
                var cols = this.slickGrid.getColumns();
                var request = this.view.params;
                for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
                    var col = cols_1[_i];
                    if (col === skipColumnFilters ||
                        col.headerFilterType == 2 /* text */)
                        continue;
                    var vals = col.headerFilterValues;
                    if (vals && vals.length) {
                        var nonNull = vals.filter(function (z) { return z != null; });
                        var criteria = [[col.field], 'in', [nonNull]];
                        if (nonNull.length !== vals.length) {
                            if (nonNull.length > 0)
                                criteria = Serenity.Criteria.or(['is null', [col.field]], criteria);
                            else
                                criteria = ['is null', [col.field]];
                        }
                        request.Criteria = Serenity.Criteria.and(request.Criteria, criteria);
                    }
                }
                return true;
            };
            var oldOnViewFilter = options.grid.onViewFilter;
            options.grid.onViewFilter = function (item) {
                if (!oldOnViewFilter.apply(this, arguments))
                    return false;
                var cols = this.slickGrid.getColumns();
                for (var _i = 0, cols_2 = cols; _i < cols_2.length; _i++) {
                    var col = cols_2[_i];
                    if (col.headerFilterType != 2 /* text */)
                        continue;
                    var vals = col.headerFilterValues;
                    if (vals && vals.length) {
                        var filterValue = filterPlugin.getFilterValue(item, col);
                        if (vals.indexOf(filterValue) < 0)
                            return false;
                    }
                }
                return true;
            };
        }
        return HeaderFiltersMixin;
    }());
    Serenity.HeaderFiltersMixin = HeaderFiltersMixin;
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EntityGridDialog = /** @class */ (function (_super) {
        __extends(EntityGridDialog, _super);
        function EntityGridDialog(container, opt) {
            var _this = _super.call(this, container, opt) || this;
            _this.element.on('ondatachange.' + _this.uniqueName, function () {
                _this.subDialogDataChange();
            });
            _this.element.on('handleroute.' + _this.uniqueName, function (e, arg) {
                if (arg.handled)
                    return;
                if (!arg.route && _this.isDialogOpen) {
                    _this.dialogClose();
                }
            });
            $(window).on('resize.' + _this.uniqueName, function () {
                _this.arrange();
            });
            return _this;
        }
        EntityGridDialog.prototype.createSlickGrid = function () {
            var slickGrid = _super.prototype.createSlickGrid.call(this);
            this.idPrefix = this.uniqueName + '_DLG_';
            this.element.addClass('s-GridWithDialog');
            this.dialogPane = $("<div id=\"" + this.uniqueName + "_DLG\" class=\"s-GridDialogPane flex-layout\"></div>")
                .appendTo(this.slickContainer);
            var widgetMarkup = this.getTemplate().replace(new RegExp('~_', 'g'), this.idPrefix);
            this.dialogPane.html(widgetMarkup);
            this.initValidator();
            this.initTabs();
            this.initPropertyGrid();
            this.initLocalizationGrid();
            return slickGrid;
        };
        EntityGridDialog.prototype.destroy = function () {
            $(window).off('resize.' + this.uniqueName);
            if (this.propertyGrid) {
                this.propertyGrid.destroy();
                this.propertyGrid = null;
            }
            if (this.localizationGrid) {
                this.localizationGrid.destroy();
                this.localizationGrid = null;
            }
            this.undeleteButton = null;
            this.applyChangesButton = null;
            this.deleteButton = null;
            this.saveAndCloseButton = null;
            this.tabs && this.tabs.tabs('destroy');
            this.tabs = null;
            this.validator && this.byId('Form').remove();
            this.validator = null;
            _super.prototype.destroy.call(this);
        };
        EntityGridDialog.prototype.getItemCssClass = function (item, index) {
            var klass = _super.prototype.getItemCssClass.call(this, item, index);
            if (this.isDialogOpen && this.entityId == item[this.getIdProperty()]) {
                return (klass || "") + " editing-item";
            }
            return klass;
        };
        EntityGridDialog.prototype.getSaveState = function () {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        };
        EntityGridDialog.prototype.hasPendingChanges = function () {
            return this.getSaveState() != this.loadedState;
        };
        EntityGridDialog.prototype.autoSaveOnSwitch = function () {
            return 0 /* Never */;
        };
        EntityGridDialog.prototype.autoSaveOnClose = function () {
            return 0 /* Never */;
        };
        EntityGridDialog.prototype.checkPendingChangesOnSwitch = function (entityOrId, proceed) {
            var _this = this;
            if (this.isDialogOpen &&
                (typeof entityOrId == "number" || typeof entityOrId == "string")) {
                if (entityOrId == this.entityId)
                    return;
                if (this.autoSaveOnSwitch() && this.hasPendingChanges()) {
                    if (this.autoSaveOnSwitch() == 2 /* Confirm */ || this.triedAutoSaveForCurrentEntity) {
                        Q.confirm(Q.text("Site.Dialogs.PendingChangesConfirmation"), function () {
                            _this.save(function (response) {
                                proceed();
                            });
                        }, {
                            onNo: function () {
                                _this.loadResponse({});
                                proceed();
                            }
                        });
                    }
                    else {
                        this.triedAutoSaveForCurrentEntity = true;
                        this.save(function (response) {
                            proceed();
                        });
                    }
                    return;
                }
            }
            proceed();
        };
        EntityGridDialog.prototype.editItem = function (entityOrId) {
            var _this = this;
            this.checkPendingChangesOnSwitch(entityOrId, function () {
                _super.prototype.editItem.call(_this, entityOrId);
            });
        };
        EntityGridDialog.prototype.createEntityDialog = function (itemType, callback) {
            if (itemType == this.getItemType()) {
                callback && callback(this);
                return this;
            }
            return _super.prototype.createEntityDialog.call(this, itemType, callback);
        };
        EntityGridDialog.prototype.layout = function () {
            _super.prototype.layout.call(this);
        };
        EntityGridDialog.prototype.byId = function (id) {
            return $('#' + this.idPrefix + id);
        };
        EntityGridDialog.prototype.getDefaultTemplateName = function () {
            return Serenity.TemplatedDialog.prototype['getDefaultTemplateName'].call(this);
        };
        EntityGridDialog.prototype.getTemplateName = function () {
            return Serenity.TemplatedDialog.prototype['getTemplateName'].call(this);
        };
        EntityGridDialog.prototype.getFallbackTemplate = function () {
            return "<div class=\"s-DialogContent\">\n    <div class=\"s-Form\">\n        <form id=\"~_Form\" action=\"\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n        </form> \n    </div>\n</div>";
        };
        EntityGridDialog.prototype.getTemplate = function () {
            return Serenity.TemplatedDialog.prototype['getTemplate'].call(this);
        };
        EntityGridDialog.prototype.getValidatorOptions = function () {
            return {};
        };
        EntityGridDialog.prototype.initValidator = function () {
            var form = this.byId('Form');
            if (form.length > 0) {
                var valOptions = this.getValidatorOptions();
                this.validator = form.validate(Q.validateOptions(valOptions));
            }
        };
        EntityGridDialog.prototype.resetValidation = function () {
            this.validator && this.validator.resetAll();
        };
        EntityGridDialog.prototype.validateForm = function () {
            return this.validator == null || !!this.validator.form();
        };
        EntityGridDialog.prototype.dialogOpen = function () {
            var _this = this;
            if (!this.isDialogOpen) {
                this.element.toggleClass("dialog-open", true);
                this.isDialogOpen = true;
                this.updateInterface();
                this.layout();
                this.onDialogOpen();
                Q.Router.dialog(this.element, this.dialogPane, function () { return _this.getEditHash(); });
                this.dialogPane.triggerHandler('panelopen');
            }
        };
        EntityGridDialog.prototype.getEditHash = function () {
            if (this.entityId)
                return 'edit/' + this.entityId.toString();
            else
                return 'new';
        };
        EntityGridDialog.prototype.onDialogOpen = function () {
            if (!$(document.body).hasClass('mobile-device'))
                $(':input', this.dialogPane).not('button').eq(0).focus();
            this.arrange();
            this.tabs && this.tabs.tabs('option', 'active', 0);
        };
        EntityGridDialog.prototype.arrange = function () {
            if (window.innerWidth < 768) {
                this.dialogPane.children('.panel-titlebar')
                    .prependTo(this.element);
            }
            else {
                this.element.children('.panel-titlebar')
                    .prependTo(this.dialogPane);
            }
            this.dialogPane.find('.require-layout').filter(':visible').each(function (i, e) {
                $(e).triggerHandler('layout');
            });
        };
        EntityGridDialog.prototype.onDialogClose = function () {
            $(document).trigger('click');
            if ($.qtip) {
                $(document.body).children('.qtip').each(function (index, el) {
                    $(el).qtip('hide');
                });
            }
        };
        EntityGridDialog.prototype.getDialogTitle = function () {
            return "";
        };
        EntityGridDialog.prototype.dialogClose = function () {
            if (this.isDialogOpen) {
                this.triedAutoSaveForCurrentEntity = false;
                this.element.toggleClass("dialog-open", false);
                this.isDialogOpen = false;
                this.updateInterface();
                this.layout();
                this.onDialogClose();
                this.dialogPane.triggerHandler('panelclose');
            }
        };
        Object.defineProperty(EntityGridDialog.prototype, "dialogTitle", {
            get: function () {
                return this.element.data('dialogtitle');
            },
            set: function (value) {
                var oldTitle = this.dialogTitle;
                this.element.data('dialogtitle', value);
                if (oldTitle != this.dialogTitle) {
                    this.setupDialogTitle();
                    this.arrange();
                }
            },
            enumerable: true,
            configurable: true
        });
        EntityGridDialog.prototype.setupDialogTitle = function () {
            var _this = this;
            var value = Q.coalesce(this.dialogTitle, this.getDialogTitle());
            var pt = this.dialogPane.children('.panel-titlebar')
                .add(this.element.children('.panel-titlebar'));
            if (Q.isEmptyOrNull(value)) {
                pt.remove();
            }
            else {
                if (!pt.length) {
                    pt = $("<div class='panel-titlebar'><div class='panel-titlebar-text'></div></div>")
                        .prependTo(this.dialogPane);
                }
                pt.children('.panel-titlebar-text').text(value);
                if (!pt.children('.panel-titlebar-close').length) {
                    $('<button class="panel-titlebar-close">&nbsp;</button>')
                        .prependTo(pt)
                        .click(function (e) {
                        if (_this.autoSaveOnClose() && _this.hasPendingChanges()) {
                            e.preventDefault();
                            if (_this.autoSaveOnClose() == 2 /* Confirm */ || _this.triedAutoSaveForCurrentEntity) {
                                Q.confirm(Q.text("Site.Dialogs.PendingChangesConfirmation"), function () { return _this.saveAndCloseButton.click(); }, {
                                    onNo: function () {
                                        _this.dialogClose();
                                    }
                                });
                            }
                            else {
                                _this.triedAutoSaveForCurrentEntity = true;
                                _this.saveAndCloseButton.click();
                            }
                        }
                        else
                            _this.dialogClose();
                    });
                }
            }
        };
        EntityGridDialog.prototype.initTabs = function () {
            var _this = this;
            var tabsDiv = this.byId('Tabs');
            if (tabsDiv.length === 0) {
                return;
            }
            this.tabs = tabsDiv.tabs({});
            this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
        };
        EntityGridDialog.prototype.get_entity = function () {
            return this.entity;
        };
        EntityGridDialog.prototype.set_entity = function (entity) {
            this.entity = entity || new Object();
        };
        EntityGridDialog.prototype.get_entityId = function () {
            return this.entityId;
        };
        EntityGridDialog.prototype.set_entityId = function (value) {
            this.entityId = value;
        };
        EntityGridDialog.prototype.getEntityNameFieldValue = function () {
            return Q.coalesce(this.get_entity()[this.getNameProperty()], '').toString();
        };
        EntityGridDialog.prototype.getEntityTitle = function () {
            if (!this.isEditMode()) {
                return Q.format(Q.text('Controls.EntityDialog.NewRecordTitle'), this.getEntitySingular());
            }
            else {
                var title = Q.coalesce(this.getEntityNameFieldValue(), '');
                return Q.format(Q.text('Controls.EntityDialog.EditRecordTitle'), this.getEntitySingular(), (Q.isEmptyOrNull(title) ? '' : (' (' + title + ')')));
            }
        };
        EntityGridDialog.prototype.updateTitle = function () {
            this.dialogTitle = this.getEntityTitle();
        };
        EntityGridDialog.prototype.isCloneMode = function () {
            return false;
        };
        EntityGridDialog.prototype.isEditMode = function () {
            return this.get_entityId() != null && !this.isCloneMode();
        };
        EntityGridDialog.prototype.isDeleted = function () {
            if (this.get_entityId() == null) {
                return false;
            }
            var isDeletedProperty = this.getIsDeletedProperty();
            if (isDeletedProperty) {
                return !!this.get_entity()[isDeletedProperty];
            }
            var value = this.get_entity()[this.getIsActiveProperty()];
            if (value == null) {
                return false;
            }
            return value < 0;
        };
        EntityGridDialog.prototype.isNew = function () {
            return this.get_entityId() == null;
        };
        EntityGridDialog.prototype.isNewOrDeleted = function () {
            return this.isNew() || this.isDeleted();
        };
        EntityGridDialog.prototype.getDeleteOptions = function (callback) {
            return {};
        };
        EntityGridDialog.prototype.deleteHandler = function (options, callback) {
            Q.serviceCall(options);
        };
        EntityGridDialog.prototype.doDelete = function (callback) {
            var _this = this;
            var self = this;
            var request = {
                EntityId: this.get_entityId()
            };
            var baseOptions = {
                service: this.getService() + '/Delete',
                request: request,
                onSuccess: function (response) {
                    self.onDeleteSuccess(response);
                    if (callback != null) {
                        callback(response);
                    }
                    self.element.triggerHandler('ondatachange', [{
                            entityId: request.EntityId,
                            entity: _this.entity,
                            type: 'delete'
                        }]);
                }
            };
            var thisOptions = this.getDeleteOptions(callback);
            var finalOptions = $.extend(baseOptions, thisOptions);
            this.deleteHandler(finalOptions, callback);
        };
        EntityGridDialog.prototype.onDeleteSuccess = function (response) {
        };
        EntityGridDialog.prototype.attrs = function (attrType) {
            return ss.getAttributes(ss.getInstanceType(this), attrType, true);
        };
        EntityGridDialog.prototype.getEntityType = function () {
            var name = _super.prototype.getEntityType.call(this);
            if (Q.endsWith(name, 'Grid')) {
                this['entityType'] = name = name.substr(0, name.length - 4);
            }
            return name;
        };
        EntityGridDialog.prototype.getFormKey = function () {
            if (this.formKey != null)
                return this.formKey;
            var attributes = this.attrs(Serenity.FormKeyAttribute);
            if (attributes.length >= 1)
                return (this.formKey = attributes[0].value);
            return (this.formKey = this.getEntityType());
        };
        EntityGridDialog.prototype.getEntitySingular = function () {
            if (this.entitySingular != null)
                return this.entitySingular;
            var attributes = this.attrs(Serenity.ItemNameAttribute);
            if (attributes.length >= 1) {
                this.entitySingular = attributes[0].value;
                this.entitySingular = Q.LT.getDefault(this.entitySingular, this.entitySingular);
            }
            else {
                var es = Q.tryGetText(this.getLocalTextDbPrefix() + 'EntitySingular');
                if (es == null)
                    es = this.getEntityType();
                this.entitySingular = es;
            }
            return this.entitySingular;
        };
        EntityGridDialog.prototype.getNameProperty = function () {
            if (this.nameProperty != null)
                return this.nameProperty;
            var attributes = this.attrs(Serenity.NamePropertyAttribute);
            if (attributes.length >= 1)
                this.nameProperty = attributes[0].value;
            else
                this.nameProperty = 'Name';
            return this.nameProperty;
        };
        EntityGridDialog.prototype.getIsDeletedProperty = function () {
            return null;
        };
        EntityGridDialog.prototype.load = function (entityOrId, done, fail) {
            var _this = this;
            var action = function () {
                if (entityOrId == null) {
                    _this.loadResponse({});
                    done && done();
                    return;
                }
                var scriptType = typeof (entityOrId);
                if (scriptType === 'string' || scriptType === 'number') {
                    var entityId = entityOrId;
                    _this.loadById(entityId, function (response) {
                        if (done)
                            window.setTimeout(done, 0);
                    }, null);
                    return;
                }
                var entity = entityOrId || new Object();
                _this.loadResponse({ Entity: entity });
                done && done();
            };
            if (fail == null) {
                action();
                return;
            }
            try {
                action();
            }
            catch (ex1) {
                var ex = ss.Exception.wrap(ex1);
                fail(ex);
            }
        };
        EntityGridDialog.prototype.loadNewAndOpenDialog = function () {
            this.loadResponse({});
            this.dialogOpen();
        };
        EntityGridDialog.prototype.loadEntityAndOpenDialog = function (entity, asPanel) {
            this.loadResponse({ Entity: entity });
            this.dialogOpen();
        };
        EntityGridDialog.prototype.loadResponse = function (data) {
            var oldEntityId = this.entityId;
            data = data || {};
            this.onLoadingData(data);
            var entity = data.Entity || new Object();
            this.beforeLoadEntity(entity);
            this.loadEntity(entity);
            this.set_entity(entity);
            this.afterLoadEntity();
            if (this.isDialogOpen && oldEntityId != this.entityId)
                Q.Router.replaceLast(this.getEditHash(), true);
            if (this.autoSaveOnClose() ||
                this.autoSaveOnSwitch()) {
                this.triedAutoSaveForCurrentEntity = false;
                this.loadedState = this.getSaveState();
            }
        };
        EntityGridDialog.prototype.loadEntity = function (entity) {
            var idField = this.getIdProperty();
            if (idField != null)
                this.set_entityId(entity[idField]);
            this.set_entity(entity);
            if (this.propertyGrid != null) {
                this.propertyGrid.set_mode((this.isEditMode() ?
                    2 /* update */ : 1 /* insert */));
                this.propertyGrid.load(entity);
            }
        };
        EntityGridDialog.prototype.beforeLoadEntity = function (entity) {
            this.localizationPendingValue = null;
            this.localizationLastValue = null;
        };
        EntityGridDialog.prototype.afterLoadEntity = function () {
            this.updateInterface();
            this.updateTitle();
            this.slickGrid.invalidate();
        };
        EntityGridDialog.prototype.loadByIdAndOpenDialog = function (entityId) {
            var _this = this;
            this.loadById(entityId, function (response) { return window.setTimeout(function () { return _this.dialogOpen(); }, 0); }, function () {
                if (!_this.element.is(':visible')) {
                    _this.element.remove();
                }
            });
        };
        EntityGridDialog.prototype.onLoadingData = function (data) {
        };
        EntityGridDialog.prototype.getLoadByIdOptions = function (id, callback) {
            return {};
        };
        EntityGridDialog.prototype.getLoadByIdRequest = function (id) {
            var request = {};
            request.EntityId = id;
            return request;
        };
        EntityGridDialog.prototype.reloadById = function () {
            this.loadById(this.get_entityId());
        };
        EntityGridDialog.prototype.loadById = function (id, callback, fail) {
            var _this = this;
            var baseOptions = {
                service: this.getService() + '/Retrieve',
                blockUI: true,
                request: this.getLoadByIdRequest(id),
                onSuccess: function (response) {
                    _this.loadResponse(response);
                    callback && callback(response);
                },
                onCleanup: function () {
                    if (_this.validator != null) {
                        Q.validatorAbortHandler(_this.validator);
                    }
                }
            };
            var thisOptions = this.getLoadByIdOptions(id, callback);
            var finalOptions = $.extend(baseOptions, thisOptions);
            this.loadByIdHandler(finalOptions, callback, fail);
        };
        EntityGridDialog.prototype.loadByIdHandler = function (options, callback, fail) {
            var request = Q.serviceCall(options);
            fail && request.fail(fail);
        };
        EntityGridDialog.prototype.initLocalizationGrid = function () {
            var pgDiv = this.byId('PropertyGrid');
            if (pgDiv.length <= 0) {
                return;
            }
            var pgOptions = this.getPropertyGridOptions();
            this.initLocalizationGridCommon(pgOptions);
        };
        EntityGridDialog.prototype.initLocalizationGridCommon = function (pgOptions) {
            var pgDiv = this.byId('PropertyGrid');
            if (!Q.any(pgOptions.items, function (x) { return x.localizable === true; }))
                return;
            var localGridDiv = $('<div/>')
                .attr('id', this.idPrefix + 'LocalizationGrid')
                .hide().insertAfter(pgDiv);
            pgOptions.idPrefix = this.idPrefix + 'Localization_';
            var items = [];
            for (var _i = 0, _a = pgOptions.items; _i < _a.length; _i++) {
                var item1 = _a[_i];
                var langs = null;
                if (item1.localizable === true) {
                    var copy = $.extend({}, item1);
                    copy.oneWay = true;
                    copy.readOnly = true;
                    copy.required = false;
                    copy.defaultValue = null;
                    items.push(copy);
                    if (langs == null)
                        langs = this.getLangs();
                    for (var _b = 0, langs_1 = langs; _b < langs_1.length; _b++) {
                        var lang = langs_1[_b];
                        copy = $.extend({}, item1);
                        copy.name = lang[0] + '$' + copy.name;
                        copy.title = lang[1];
                        copy.cssClass = [copy.cssClass, 'translation'].join(' ');
                        copy.insertable = true;
                        copy.updatable = true;
                        copy.oneWay = false;
                        copy.required = false;
                        copy.localizable = false;
                        copy.defaultValue = null;
                        items.push(copy);
                    }
                }
            }
            pgOptions.items = items;
            this.localizationGrid = (new Serenity.PropertyGrid(localGridDiv, pgOptions)).init(null);
            localGridDiv.addClass('s-LocalizationGrid');
        };
        EntityGridDialog.prototype.isLocalizationMode = function () {
            return this.localizationButton != null && this.localizationButton.hasClass('pressed');
        };
        EntityGridDialog.prototype.isLocalizationModeAndChanged = function () {
            if (!this.isLocalizationMode()) {
                return false;
            }
            var newValue = this.getLocalizationGridValue();
            return $.toJSON(this.localizationLastValue) != $.toJSON(newValue);
        };
        EntityGridDialog.prototype.localizationButtonClick = function () {
            if (this.isLocalizationMode() && !this.validateForm()) {
                return;
            }
            if (this.isLocalizationModeAndChanged()) {
                var newValue = this.getLocalizationGridValue();
                this.localizationLastValue = newValue;
                this.localizationPendingValue = newValue;
            }
            this.localizationButton.toggleClass('pressed');
            this.updateInterface();
            if (this.isLocalizationMode()) {
                this.loadLocalization();
            }
        };
        EntityGridDialog.prototype.getLanguages = function () {
            if (Serenity.EntityDialog.defaultLanguageList != null)
                return Serenity.EntityDialog.defaultLanguageList() || [];
            return [];
        };
        // for compatibility with older getLanguages methods written in Saltaralle
        EntityGridDialog.prototype.getLangs = function () {
            var langsTuple = this.getLanguages();
            var langs = ss.safeCast(langsTuple, Array);
            if (langs == null || langs.length === 0 ||
                langs[0] == null || !Q.isArray(langs[0])) {
                langs = Array.prototype.slice.call(langsTuple.map(function (x) {
                    return [x.item1, x.item2];
                }));
            }
            return langs;
        };
        EntityGridDialog.prototype.loadLocalization = function () {
            var _this = this;
            if (this.localizationLastValue == null && this.isNew()) {
                this.localizationGrid.load({});
                this.setLocalizationGridCurrentValues();
                this.localizationLastValue = this.getLocalizationGridValue();
                return;
            }
            if (this.localizationLastValue != null) {
                this.localizationGrid.load(this.localizationLastValue);
                this.setLocalizationGridCurrentValues();
                return;
            }
            var opt = {
                service: this.getService() + '/Retrieve',
                blockUI: true,
                request: {
                    EntityId: this.get_entityId(),
                    ColumnSelection: 'keyOnly',
                    IncludeColumns: ['Localizations']
                },
                onSuccess: function (response) {
                    var copy = $.extend(new Object(), _this.get_entity());
                    if (response.Localizations) {
                        for (var _i = 0, _a = Object.keys(response.Localizations); _i < _a.length; _i++) {
                            var language = _a[_i];
                            var entity = response.Localizations[language];
                            for (var _b = 0, _c = Object.keys(entity); _b < _c.length; _b++) {
                                var key = _c[_b];
                                copy[language + '$' + key] = entity[key];
                            }
                        }
                    }
                    _this.localizationGrid.load(copy);
                    _this.setLocalizationGridCurrentValues();
                    _this.localizationPendingValue = null;
                    _this.localizationLastValue = _this.getLocalizationGridValue();
                }
            };
            Q.serviceCall(opt);
        };
        EntityGridDialog.prototype.setLocalizationGridCurrentValues = function () {
            var _this = this;
            var valueByName = {};
            this.localizationGrid.enumerateItems(function (item, widget) {
                if (item.name.indexOf('$') < 0 && widget.element.is(':input')) {
                    valueByName[item.name] = _this.byId(item.name).val();
                    widget.element.val(valueByName[item.name]);
                }
            });
            this.localizationGrid.enumerateItems(function (item1, widget1) {
                var idx = item1.name.indexOf('$');
                if (idx >= 0 && widget1.element.is(':input')) {
                    var hint = valueByName[item1.name.substr(idx + 1)];
                    if (hint != null && hint.length > 0) {
                        widget1.element.attr('title', hint).attr('placeholder', hint);
                    }
                }
            });
        };
        EntityGridDialog.prototype.getLocalizationGridValue = function () {
            var value = {};
            this.localizationGrid.save(value);
            for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.indexOf('$') < 0) {
                    delete value[k];
                }
            }
            return value;
        };
        EntityGridDialog.prototype.getPendingLocalizations = function () {
            if (this.localizationPendingValue == null) {
                return null;
            }
            var result = {};
            var idField = this.getIdProperty();
            var langs = this.getLangs();
            for (var _i = 0, langs_2 = langs; _i < langs_2.length; _i++) {
                var pair = langs_2[_i];
                var language = pair[0];
                var entity = {};
                if (idField != null) {
                    entity[idField] = this.get_entityId();
                }
                var prefix = language + '$';
                for (var _a = 0, _b = Object.keys(this.localizationPendingValue); _a < _b.length; _a++) {
                    var k = _b[_a];
                    if (Q.startsWith(k, prefix))
                        entity[k.substr(prefix.length)] = this.localizationPendingValue[k];
                }
                result[language] = entity;
            }
            return result;
        };
        EntityGridDialog.prototype.initPropertyGrid = function () {
            var pgDiv = this.byId('PropertyGrid');
            if (pgDiv.length <= 0) {
                return;
            }
            var pgOptions = this.getPropertyGridOptions();
            this.propertyGrid = (new Serenity.PropertyGrid(pgDiv, pgOptions)).init(null);
            if (this.element.closest('.ui-dialog').hasClass('s-Flexify')) {
                this.propertyGrid.element.children('.categories').flexHeightOnly(1);
            }
        };
        EntityGridDialog.prototype.getFormPropertyItems = function () {
            var formKey = this.getFormKey();
            return Q.getForm(formKey);
        };
        EntityGridDialog.prototype.getPropertyGridOptions = function () {
            return {
                idPrefix: this.idPrefix,
                items: this.getFormPropertyItems(),
                mode: 1 /* insert */,
                localTextPrefix: 'Forms.' + this.getFormKey() + '.',
                useCategories: true
            };
        };
        EntityGridDialog.prototype.validateBeforeSave = function () {
            return true;
        };
        EntityGridDialog.prototype.getSaveOptions = function (callback) {
            var _this = this;
            var opt = {};
            opt.service = this.getService() + '/' + (this.isEditMode() ? 'Update' : 'Create'),
                opt.onSuccess = function (response) {
                    _this.triedAutoSaveForCurrentEntity = false;
                    _this.onSaveSuccess(response);
                    callback && callback(response);
                    var typ = (_this.isEditMode() ? 'update' : 'create');
                    var ent = opt.request == null ? null : opt.request.Entity;
                    var eid = _this.isEditMode() ? _this.get_entityId() :
                        (response == null ? null : response.EntityId);
                    var dci = {
                        type: typ,
                        entity: ent,
                        entityId: eid
                    };
                    _this.element.triggerHandler('ondatachange', [dci]);
                };
            opt.onCleanup = function () {
                _this.validator && Q.validatorAbortHandler(_this.validator);
            };
            opt.request = this.getSaveRequest();
            return opt;
        };
        EntityGridDialog.prototype.getSaveEntity = function () {
            var entity = new Object();
            if (this.propertyGrid != null) {
                this.propertyGrid.save(entity);
            }
            if (this.isEditMode()) {
                var idField = this.getIdProperty();
                if (idField != null && entity[idField] == null) {
                    entity[idField] = this.get_entityId();
                }
            }
            return entity;
        };
        EntityGridDialog.prototype.getSaveRequest = function () {
            var entity = this.getSaveEntity();
            var req = {};
            req.Entity = entity;
            if (this.isEditMode()) {
                var idField = this.getIdProperty();
                if (idField != null) {
                    req.EntityId = this.get_entityId();
                }
            }
            if (this.localizationPendingValue != null) {
                req.Localizations = this.getPendingLocalizations();
            }
            return req;
        };
        EntityGridDialog.prototype.onSaveSuccess = function (response) {
        };
        EntityGridDialog.prototype.save_submitHandler = function (callback) {
            var options = this.getSaveOptions(callback);
            this.saveHandler(options, callback);
        };
        EntityGridDialog.prototype.save = function (callback) {
            var _this = this;
            return Serenity.ValidationHelper.submit(this.byId('Form'), function () { return _this.validateBeforeSave(); }, function () { return _this.save_submitHandler(callback); });
        };
        EntityGridDialog.prototype.saveHandler = function (options, callback) {
            Q.serviceCall(options);
        };
        EntityGridDialog.prototype.createToolbar = function (buttons) {
            _super.prototype.createToolbar.call(this, buttons);
            if (!this.toolbar)
                return;
            this.saveAndCloseButton = this.toolbar.findButton('save-and-close-button').hide();
            this.saveAndCloseButton.prev('.separator').addClass('dialog-button-separator');
            this.applyChangesButton = this.toolbar.findButton('apply-changes-button').hide();
            this.deleteButton = this.toolbar.findButton('delete-button').hide();
            this.undeleteButton = this.toolbar.findButton('undo-delete-button').hide();
            this.cloneButton = this.toolbar.findButton('clone-button').hide();
            this.localizationButton = this.toolbar.findButton('localization-button').hide();
        };
        EntityGridDialog.prototype.showSaveSuccessMessage = function (response) {
            Q.notifySuccess(Q.text('Controls.EntityDialog.SaveSuccessMessage'), '', null);
        };
        EntityGridDialog.prototype.getButtons = function () {
            var _this = this;
            var list = _super.prototype.getButtons.call(this);
            list.push({
                title: Q.text('Controls.EntityDialog.SaveButton'),
                cssClass: 'save-and-close-button dialog-button',
                hotkey: 'alt+s',
                separator: true,
                onClick: function () {
                    _this.save(function (response) {
                        _this.dialogClose();
                    });
                }
            });
            list.push({
                title: '',
                hint: Q.text('Controls.EntityDialog.ApplyChangesButton'),
                cssClass: 'apply-changes-button dialog-button',
                hotkey: 'alt+a',
                onClick: function () {
                    _this.save(function (response1) {
                        if (_this.isEditMode()) {
                            var id1 = response1.EntityId;
                            if (id1 == null) {
                                id1 = _this.get_entityId();
                            }
                            _this.loadById(id1);
                        }
                        else {
                            _this.loadById(response1.EntityId);
                        }
                        _this.showSaveSuccessMessage(response1);
                    });
                }
            });
            list.push({
                title: Q.text('Controls.EntityDialog.DeleteButton'),
                cssClass: 'delete-button dialog-button',
                hotkey: 'alt+x',
                onClick: function () {
                    Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                        _this.doDelete(function () { return _this.dialogClose(); });
                    });
                }
            });
            list.push({
                title: Q.text('Controls.EntityDialog.UndeleteButton'),
                cssClass: 'undo-delete-button dialog-button',
                onClick: function () {
                    if (_this.isDeleted()) {
                        Q.confirm(Q.text('Controls.EntityDialog.UndeleteConfirmation'), function () {
                            _this.undelete(function () { return _this.loadById(_this.get_entityId()); });
                        });
                    }
                }
            });
            list.push({
                title: Q.text('Controls.EntityDialog.LocalizationButton'),
                cssClass: 'localization-button dialog-button',
                onClick: function () { return _this.localizationButtonClick(); }
            });
            list.push({
                title: Q.text('Controls.EntityDialog.CloneButton'),
                cssClass: 'clone-button dialog-button',
                onClick: function () {
                    if (!_this.isEditMode()) {
                        return;
                    }
                    var cloneEntity = _this.getCloningEntity();
                    Serenity.Widget.create({
                        type: ss.getInstanceType(_this),
                        init: function (w) { return Serenity.SubDialogHelper.bubbleDataChange(Serenity.SubDialogHelper.cascade(w, _this.element), _this, true)
                            .loadEntityAndOpenDialog(cloneEntity, null); }
                    });
                }
            });
            return list;
        };
        EntityGridDialog.prototype.getCloningEntity = function () {
            var clone = new Object();
            clone = $.extend(clone, this.get_entity());
            var idField = this.getIdProperty();
            if (!Q.isEmptyOrNull(idField)) {
                delete clone[idField];
            }
            var isActiveField = this.getIsActiveProperty();
            if (!Q.isEmptyOrNull(isActiveField)) {
                delete clone[isActiveField];
            }
            var isDeletedField = this.getIsDeletedProperty();
            if (!Q.isEmptyOrNull(isDeletedField)) {
                delete clone[isDeletedField];
            }
            return clone;
        };
        EntityGridDialog.prototype.updateInterface = function () {
            var isOpen = this.isDialogOpen;
            var isDeleted = this.isDeleted();
            var isLocalizationMode = this.isLocalizationMode();
            if (this.tabs != null) {
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Log', !isOpen || this.isNewOrDeleted());
            }
            if (this.propertyGrid != null) {
                this.propertyGrid.element.toggle(isOpen && !isLocalizationMode);
            }
            if (this.localizationGrid != null) {
                this.localizationGrid.element.toggle(isOpen && isLocalizationMode);
            }
            if (this.localizationButton != null) {
                this.localizationButton.toggle(this.localizationGrid != null);
                this.localizationButton.find('.button-inner')
                    .text((this.isLocalizationMode() ?
                    Q.text('Controls.EntityDialog.LocalizationBack') :
                    Q.text('Controls.EntityDialog.LocalizationButton')));
            }
            if (isLocalizationMode && isOpen) {
                if (this.toolbar != null)
                    this.toolbar.findButton('tool-button')
                        .not('.localization-hidden')
                        .addClass('.localization-hidden').hide();
                this.localizationButton && this.localizationButton.show();
                return;
            }
            this.toolbar.findButton('localization-hidden')
                .removeClass('localization-hidden').show();
            this.deleteButton && this.deleteButton.toggle(isOpen && this.isEditMode() && !isDeleted);
            this.undeleteButton && this.undeleteButton.toggle(isOpen && this.isEditMode() && isDeleted);
            if (this.saveAndCloseButton) {
                this.saveAndCloseButton.toggle(isOpen && !isDeleted);
                this.saveAndCloseButton.find('.button-inner')
                    .text(Q.text((this.isNew() ? 'Controls.EntityDialog.SaveButton' :
                    'Controls.EntityDialog.UpdateButton')));
            }
            this.applyChangesButton && this.applyChangesButton.toggle(isOpen && !isDeleted);
            this.cloneButton && this.cloneButton.toggle(false);
        };
        EntityGridDialog.prototype.getUndeleteOptions = function (callback) {
            return {};
        };
        EntityGridDialog.prototype.undeleteHandler = function (options, callback) {
            Q.serviceCall(options);
        };
        EntityGridDialog.prototype.undelete = function (callback) {
            var _this = this;
            var baseOptions = {};
            baseOptions.service = this.getService() + '/Undelete';
            var request = {};
            request.EntityId = this.get_entityId();
            baseOptions.request = request;
            baseOptions.onSuccess = function (response) {
                callback && callback(response);
                _this.element.triggerHandler('ondatachange', [{
                        entityId: _this.get_entityId(),
                        entity: _this.entity,
                        type: 'undelete'
                    }]);
            };
            var thisOptions = this.getUndeleteOptions(callback);
            var finalOptions = $.extend(baseOptions, thisOptions);
            this.undeleteHandler(finalOptions, callback);
        };
        EntityGridDialog = __decorate([
            Serenity.Decorators.registerClass('Serenity.EntityGridDialog', [Serenity['IEditDialog']])
        ], EntityGridDialog);
        return EntityGridDialog;
    }(Serenity.EntityGrid));
    Serenity.EntityGridDialog = EntityGridDialog;
})(Serenity || (Serenity = {}));
//# sourceMappingURL=Serenity.Pro.App.js.map