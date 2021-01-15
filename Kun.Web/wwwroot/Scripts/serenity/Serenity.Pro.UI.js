var Q;
(function (Q) {
    function extend(obj, props) {
        for (var i in props)
            obj[i] = props[i];
        return obj;
    }
    Q.extend = extend;
    var uniqueId = 0;
    function uidGenerator() {
        var prefix = "uid_" + (++uniqueId) + "_";
        return function () {
            var counter = 0;
            return function () {
                return prefix + (++counter);
            };
        };
    }
    Q.uidGenerator = uidGenerator;
    var hasOwn = {}.hasOwnProperty;
    function cssClass() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!arg)
                continue;
            var argType = typeof arg;
            if (argType === 'string' || argType === 'number') {
                classes.push(arg);
            }
            else if (Array.isArray(arg) && arg.length) {
                var inner = cssClass.apply(null, arg);
                if (inner) {
                    classes.push(inner);
                }
            }
            else if (argType === 'object') {
                for (var key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
        return classes.join(' ');
    }
    Q.cssClass = cssClass;
})(Q || (Q = {}));
var Q;
(function (Q) {
    function widgetComponentFactory(widgetType) {
        return (function (_super) {
            __extends(Wrapper, _super);
            function Wrapper() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Wrapper.prototype.render = function () {
                var _this = this;
                return React.createElement("div", {
                    ref: (function (el) { return _this.wrapper = el; }),
                    className: 'widget-wrapper'
                });
            };
            Wrapper.prototype.componentWillReceiveProps = function (nextProps) {
                var _this = this;
                var props = this.props;
                var widget = this.widget;
                if (widget == null || widget.element == null)
                    return;
                var $node = widget.element;
                var node = $node[0];
                if (nextProps.id !== props.id) {
                    node.id = nextProps.id;
                }
                if (nextProps.name !== props.name && $node.is(':input')) {
                    node.name = nextProps.name;
                }
                if (nextProps.placeholder !== props.placeholder && $node.is(':input')) {
                    node.placeholder = nextProps.placeholder;
                }
                if (nextProps.className !== props.className) {
                    $node.removeClass(props.className || '').addClass(nextProps.className);
                }
                if (nextProps.oneWay !== props.oneWay) {
                    node.dataset.oneWay = nextProps.oneWay ? "1" : undefined;
                }
                if (nextProps.maxLength != props.maxLength)
                    node.setAttribute("maxLength", nextProps.maxLength || 0);
                if (nextProps.required !== props.required)
                    Serenity.EditorUtils.setRequired(this.widget, nextProps.required);
                if (props.readOnly !== props.readOnly)
                    Serenity.EditorUtils.setReadOnly(this.widget, nextProps.readOnly);
                if (nextProps.setOptions != props.setOptions) {
                    Serenity.ReflectionOptionsSetter.set(this.widget, nextProps.setOptions);
                }
                if (nextProps.value !== props.value) {
                    Serenity.EditorUtils.setValue(this.widget, nextProps.value);
                }
                if (nextProps.onChange !== props.onChange) {
                    this.widget.element.off('.wcf');
                    if (nextProps.onChange)
                        this.widget.element.on('change.wcf', nextProps.onChange);
                }
                if (nextProps.onChangeSelect2 !== props.onChangeSelect2) {
                    this.widget.element.off('.wcf2');
                    if (nextProps.onChangeSelect2) {
                        this.widget.element.on('change.wcf2', function (e, x) {
                            if (!!(Serenity.WX.hasOriginalEvent(e) || !x)) {
                                _this.props.onChangeSelect2 && _this.props.onChangeSelect2(e);
                            }
                        });
                    }
                }
            };
            Wrapper.prototype.componentDidMount = function () {
                if (this.widget != null)
                    return;
                var $node = Serenity.Widget.elementFor(widgetType);
                var node = $node[0];
                this.wrapper.appendChild(node);
                var props = this.props;
                if (props.id != null)
                    node.id = props.id;
                if ($node.is(':input')) {
                    $node.addClass("editor");
                    if (props.name != null)
                        node.name = props.name;
                    if (props.placeholder != null)
                        node.placeholder = props.placeholder;
                }
                if (props.className != null)
                    $node.addClass(props.className);
                if (props.oneWay)
                    node.dataset.oneWay = "1";
                this.widget = new widgetType($node, props);
                if (props.maxLength != null)
                    node.setAttribute("maxLength", props.maxLength.toString());
                if (props.required)
                    Serenity.EditorUtils.setRequired(this.widget, true);
                if (props.readOnly)
                    Serenity.EditorUtils.setReadOnly(this.widget, true);
                if (props.setOptions != null) {
                    Serenity.ReflectionOptionsSetter.set(this.widget, props.setOptions);
                }
                if (props.value !== undefined)
                    Serenity.EditorUtils.setValue(this.widget, props.value);
                else if (props.defaultValue !== undefined)
                    Serenity.EditorUtils.setValue(this.widget, props.defaultValue);
                if (props.onChange != null)
                    this.widget.element.on('change.wcf', props.onChange);
                if (props.onChangeSelect2 != null) {
                    this.widget.element.on('change.wcf2', function (e, x) {
                        if (!!(Serenity.WX.hasOriginalEvent(e) || !x)) {
                            props.onChangeSelect2 && props.onChangeSelect2(e);
                        }
                    });
                }
            };
            Wrapper.prototype.componentWillUnmount = function () {
                this.widget && this.widget.destroy();
                this.widget = null;
            };
            Wrapper.prototype.shouldComponentUpdate = function () {
                return false;
            };
            Wrapper.prototype.isWidgetWrapper = true;
            Wrapper.displayName = "Wrapped<" + ss.getTypeFullName(widgetType) + ">";
            return Wrapper;
        }(React.Component));
    }
    var reactCreateElement = React.createElement;
    React.createElement = function () {
        var arg = arguments[0];
        if (typeof arg === "function" && arg.__isWidgetType === true) {
            if (arg.__componentFactory === undefined)
                arguments[0] = arg.__componentFactory = widgetComponentFactory(arg);
            else
                arguments[0] = arg.__componentFactory;
            if (arguments.length > 1 && arguments[1] && arguments[1].ref) {
                var ref = arguments[1].ref;
                arguments[1].ref = function (wrapper) {
                    if (wrapper == null)
                        ref(null);
                    else
                        ref(wrapper.widget);
                };
            }
        }
        return reactCreateElement.apply(this, arguments);
    };
})(Q || (Q = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var EditorRefs = /** @class */ (function () {
            function EditorRefs(inner) {
                this.inner = inner;
                this.setters = Object.create(null);
                this.refs = Object.create(null);
                this.set = this.set.bind(this);
                this.setter = this.setter.bind(this);
            }
            EditorRefs.prototype.get = function (name) {
                return this.refs[name];
            };
            EditorRefs.prototype.set = function (name, ref) {
                this.refs[name] = ref;
                if (this.inner != null)
                    this.inner(name, ref);
            };
            EditorRefs.prototype.setter = function (name) {
                var func = this.setters[name];
                if (func != null)
                    return func;
                var setRef = this.set;
                func = (function (ref) {
                    setRef(name, ref);
                });
                this.setters[name] = func;
                return func;
            };
            EditorRefs.prototype.loadFrom = function (source, names) {
                names = Q.coalesce(names, Object.keys(this.refs));
                for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                    var name = names_1[_i];
                    var editor = this.refs[name];
                    if (editor == null)
                        continue;
                    if (editor.isWidgetWrapper) {
                        editor = editor.widget;
                        if (editor)
                            Serenity.EditorUtils.loadValue(editor, { name: name }, source);
                    }
                    else if (editor.nodeType) {
                        source[name] = editor.value;
                    }
                    else if (editor.element) {
                        Serenity.EditorUtils.loadValue(editor, { name: name }, source);
                    }
                }
            };
            EditorRefs.prototype.saveTo = function (target, names, ignoreOneWay) {
                names = Q.coalesce(names, Object.keys(this.refs));
                for (var _i = 0, names_2 = names; _i < names_2.length; _i++) {
                    var name = names_2[_i];
                    var editor = this.refs[name];
                    if (editor.isWidgetWrapper) {
                        if (ignoreOneWay || !editor.props.oneWay) {
                            editor = editor.widget;
                            if (editor)
                                Serenity.EditorUtils.saveValue(editor, { name: name }, target);
                        }
                    }
                    else if (editor.nodeType) {
                        if (ignoreOneWay ||
                            !editor.dataset ||
                            !editor.dataset.oneWay)
                            target[name] = editor.value;
                    }
                    else if (editor.element) {
                        if (ignoreOneWay ||
                            !editor.options ||
                            !editor.options.oneWay) {
                            Serenity.EditorUtils.saveValue(editor, { name: name }, target);
                        }
                    }
                }
            };
            return EditorRefs;
        }());
        UI.EditorRefs = EditorRefs;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var Label = /** @class */ (function (_super) {
            __extends(Label, _super);
            function Label() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Label.prototype.render = function () {
                var props = this.props;
                var width = typeof props.width == "string" || props.width == null ? null :
                    (typeof (props.width) == "number" ? props.width + "px" :
                        props.width);
                var style = width == null ? null : (width == "0" ? { display: "none" } : { width: width });
                return (React.createElement("label", { className: "caption", htmlFor: props.htmlFor, title: props.hint, style: style },
                    props.required && React.createElement("sup", { title: Q.text('Controls.PropertyGrid.RequiredHint') }, "*"),
                    props.children));
            };
            return Label;
        }(React.Component));
        UI.Label = Label;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var ValidationMark = /** @class */ (function (_super) {
            __extends(ValidationMark, _super);
            function ValidationMark() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ValidationMark.prototype.render = function () {
                return (React.createElement("div", { className: "vx" }));
            };
            ValidationMark.prototype.shouldComponentUpdate = function () {
                return false;
            };
            return ValidationMark;
        }(React.Component));
        UI.ValidationMark = ValidationMark;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var Field = /** @class */ (function (_super) {
            __extends(Field, _super);
            function Field() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Field.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
                if (nextProps != null && nextProps.setRef !== this.props.setRef) {
                    this.editorRef = null;
                }
            };
            Field.prototype.render = function () {
                var props = this.props;
                var lblElement;
                if (props.label != null)
                    lblElement = props.label(this.props);
                else if (props.caption !== false) {
                    lblElement = (React.createElement(UI.Label, { htmlFor: props.htmlFor === undefined ? props.id : props.htmlFor, hint: props.hint, width: props.labelWidth, required: props.required }, props.caption));
                }
                var className = "field";
                if (props.name) {
                    className += " " + props.name;
                }
                if (props.className) {
                    className += " " + props.className;
                }
                var name = props.name;
                if (this.props.setRef != null &&
                    this.editorRef == null) {
                    var setRef = this.props.setRef;
                    this.editorRef = function (x) {
                        setRef(name, x);
                    };
                }
                var editorProps = {
                    className: "editor",
                    name: name,
                    id: this.props.id,
                    required: this.props.required,
                    ref: this.editorRef
                };
                return (React.createElement("div", { className: className },
                    lblElement,
                    props.editor != null && props.editor(editorProps),
                    props.children,
                    props.vx !== false && React.createElement(UI.ValidationMark, null),
                    React.createElement("div", { className: "clear" })));
            };
            return Field;
        }(React.Component));
        UI.Field = Field;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var PropertyField = /** @class */ (function (_super) {
            __extends(PropertyField, _super);
            function PropertyField() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.text = Q.prefixedText(_this.props.localTextPrefix);
                return _this;
            }
            PropertyField.prototype.getCaption = function () {
                return this.text(this.props.title, this.props.name);
            };
            PropertyField.prototype.getHint = function () {
                var hint = this.text(this.props.hint, this.props.name + '_Hint');
                if (hint == null)
                    return this.getCaption();
                return hint || null;
            };
            PropertyField.prototype.getPlaceHolder = function () {
                return this.text(this.props.placeholder, this.props.name + '_Placeholder');
            };
            PropertyField.prototype.getClassName = function () {
                var className = this.props.cssClass || "";
                if (!Q.isEmptyOrNull(this.props.formCssClass)) {
                    className += (className ? " " : "") + this.props.formCssClass;
                }
                return className;
            };
            PropertyField.prototype.getHtmlFor = function (editorType) {
                var htmlFor;
                if ((editorType === Serenity.RadioButtonEditor || editorType === Serenity.BooleanEditor) &&
                    (this.props.editorParams == null || !!!this.props.editorParams['labelFor'])) {
                    htmlFor = null;
                }
                return htmlFor;
            };
            PropertyField.prototype.getEditorType = function () {
                if (this.props.editorType == null)
                    return Serenity.StringEditor;
                if (typeof this.props.editorType == "string")
                    return Serenity.EditorTypeRegistry.get(this.props.editorType);
                return this.props.editorType;
            };
            PropertyField.prototype.getEditorId = function () {
                return (this.props.idPrefix || "") + (this.props.name || "");
            };
            PropertyField.prototype.getMaxLength = function () {
                return this.props.maxLength > 0 ? this.props.maxLength : null;
            };
            PropertyField.prototype.render = function () {
                var _this = this;
                var EditorType = this.getEditorType();
                return (React.createElement(UI.Field, { className: this.getClassName(), caption: this.getCaption(), id: this.getEditorId(), name: this.props.name, labelWidth: this.props.labelWidth, htmlFor: this.getHtmlFor(EditorType), hint: this.getHint(), required: this.props.required, setRef: this.props.setRef, editor: function (ed) {
                        return React.createElement(EditorType, __assign({}, ed, { maxlength: _this.getMaxLength() }, _this.props.editorParams, { setOptions: _this.props.editorParams }));
                    } }, this.props.children));
            };
            return PropertyField;
        }(React.Component));
        UI.PropertyField = PropertyField;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var CategoryTitle = /** @class */ (function (_super) {
            __extends(CategoryTitle, _super);
            function CategoryTitle() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CategoryTitle.prototype.render = function () {
                return (React.createElement("div", { className: "category-title", onClick: this.props.onClick },
                    React.createElement("a", { className: "category-anchor", id: this.props.categoryId }, this.props.children),
                    this.props.collapsed != null && (this.props.collapsed ? CategoryTitle.collapsedIcon : CategoryTitle.expandedIcon)));
            };
            CategoryTitle.collapsedIcon = React.createElement("i", { className: "fa fa-plus" });
            CategoryTitle.expandedIcon = React.createElement("i", { className: "fa fa-minus" });
            return CategoryTitle;
        }(React.Component));
        UI.CategoryTitle = CategoryTitle;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var CategoryLineBreak = /** @class */ (function (_super) {
            __extends(CategoryLineBreak, _super);
            function CategoryLineBreak() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CategoryLineBreak.prototype.getBreakClass = function () {
                var breakClass = "line-break";
                var splitted = this.props.breakClass.split(' ');
                if (splitted.indexOf('line-break-xs') >= 0) {
                }
                else if (splitted.indexOf('line-break-sm') >= 0) {
                    breakClass += " hidden-xs";
                }
                else if (splitted.indexOf('line-break-md') >= 0) {
                    breakClass += " hidden-sm";
                }
                else if (splitted.indexOf('line-break-lg') >= 0) {
                    breakClass += " hidden-md";
                }
                return breakClass;
            };
            CategoryLineBreak.prototype.render = function () {
                return (React.createElement("div", { className: this.getBreakClass(), style: { width: "100%" } }));
            };
            return CategoryLineBreak;
        }(React.Component));
        UI.CategoryLineBreak = CategoryLineBreak;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var CategoryLink = /** @class */ (function (_super) {
            __extends(CategoryLink, _super);
            function CategoryLink() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CategoryLink.prototype.handleClick = function (e) {
                e.preventDefault();
                this.props.onClick && this.props.onClick(e);
                var title = $('a[id=' + this.props.categoryId + ']');
                var category = title.closest('.category');
                if (category.hasClass('collapsed'))
                    category.children('.category-title').click();
                if (!title && !title.fadeTo)
                    return;
                var animate = function () {
                    title.fadeTo(100, 0.5, function () {
                        title.fadeTo(100, 1, function () {
                        });
                    });
                };
                if (category.closest(':scrollable(both)').length === 0)
                    animate();
                else {
                    var siv = category.scrollintoview;
                    siv && siv.scrollintoview({
                        duration: 'fast',
                        direction: 'y',
                        complete: animate
                    });
                }
            };
            CategoryLink.prototype.getLink = function () {
                if (Q.isEmptyOrNull(this.props.categoryId))
                    return null;
                return "#" + this.props.categoryId;
            };
            CategoryLink.prototype.render = function () {
                var _this = this;
                return (React.createElement("a", { className: "category-link", tabIndex: -1, onClick: function (e) { return _this.handleClick(e); }, href: this.getLink() }, this.props.children));
            };
            return CategoryLink;
        }(React.Component));
        UI.CategoryLink = CategoryLink;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var CategoryLinks = /** @class */ (function (_super) {
            __extends(CategoryLinks, _super);
            function CategoryLinks() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.text = Q.prefixedText(_this.props.localTextPrefix);
                return _this;
            }
            CategoryLinks.prototype.renderSeparator = function (key) {
                return React.createElement("span", { className: "separator", key: key }, "|");
            };
            CategoryLinks.prototype.render = function () {
                var _this = this;
                var groups = UI.Categories.groupByCategory(this.props.items);
                return (React.createElement("div", { className: "category-links" }, groups.inOrder.map(function (g, idx) { return [
                    (idx > 0 && _this.renderSeparator("sep-" + idx)),
                    React.createElement(UI.CategoryLink, { categoryId: "Category" + g.order, key: idx }, _this.text(g.key, "Categories." + g.key))
                ]; })));
            };
            return CategoryLinks;
        }(React.Component));
        UI.CategoryLinks = CategoryLinks;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var Category = /** @class */ (function (_super) {
            __extends(Category, _super);
            function Category(props, context) {
                var _this = _super.call(this, props, context) || this;
                _this.text = Q.prefixedText(_this.props.localTextPrefix);
                _this.state = {
                    collapsed: _this.props.collapsed
                };
                return _this;
            }
            Category.prototype.componentWillReceiveProps = function (nextProps) {
                if (nextProps.collapsed !== this.props.collapsed) {
                    this.setState({
                        collapsed: nextProps.collapsed
                    });
                }
            };
            Category.prototype.getClassName = function () {
                if (this.state.collapsed == null)
                    return "category ";
                if (this.state.collapsed == true)
                    return "category collapsible collapsed";
                return "category collapsible";
            };
            Category.prototype.getCategoryId = function () {
                if (!this.props.categoryId)
                    return null;
                return Q.coalesce(this.props.idPrefix, '') + this.props.categoryId;
            };
            Category.prototype.handleTitleClick = function () {
                if (this.state.collapsed == null)
                    return;
                this.setState({
                    collapsed: !this.state.collapsed
                });
            };
            Category.prototype.renderTitle = function () {
                var _this = this;
                if (this.props.category == null)
                    return null;
                return (React.createElement(UI.CategoryTitle, { categoryId: this.getCategoryId(), collapsed: this.state.collapsed, onClick: function () { return _this.handleTitleClick(); } }, this.text(this.props.category, "Categories." + this.props.category)));
            };
            Category.prototype.renderField = function (item) {
                var props = Q.extend({
                    idPrefix: this.props.idPrefix,
                    localTextPrefix: this.props.localTextPrefix,
                    key: item.name,
                    setRef: this.props.setRef
                }, item);
                if (this.props.renderField != null) {
                    var content = this.props.renderField(props);
                    if (content !== undefined)
                        return content;
                }
                return React.createElement(UI.PropertyField, props);
            };
            Category.prototype.renderWithBreak = function (item) {
                return [React.createElement(UI.CategoryLineBreak, { breakClass: item.formCssClass, key: "break-" + item.name }), this.renderField(item)];
            };
            Category.prototype.render = function () {
                var _this = this;
                var props = this.props;
                return (React.createElement("div", { className: this.getClassName() },
                    this.renderTitle(),
                    props.items && props.items.map(function (item) {
                        if (item.formCssClass && item.formCssClass.indexOf('line-break-') >= 0)
                            return _this.renderWithBreak(item);
                        return _this.renderField(item);
                    }),
                    props.children));
            };
            return Category;
        }(React.Component));
        UI.Category = Category;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var CategoriesProps = /** @class */ (function () {
            function CategoriesProps() {
            }
            return CategoriesProps;
        }());
        UI.CategoriesProps = CategoriesProps;
        var Categories = /** @class */ (function (_super) {
            __extends(Categories, _super);
            function Categories() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Categories.applyOrder = function (groups, categoryOrder) {
                if (!categoryOrder)
                    return;
                var split = categoryOrder.split(';');
                var order = 0;
                var catOrder = {};
                for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
                    var s = split_1[_i];
                    var x = Q.trimToNull(s);
                    if (x == null || catOrder[x] != null)
                        continue;
                    catOrder[x] = order++;
                }
                groups.inOrder.sort(function (g1, g2) {
                    var order1 = catOrder[g1.key];
                    if (order1 == null)
                        catOrder[g1.key] = catOrder = order++;
                    var order2 = catOrder[g2.key];
                    if (order2 == null)
                        catOrder[g2.key] = catOrder = order++;
                    return order1 - order2;
                });
                for (order = 0; order < groups.inOrder.length; order++)
                    groups.inOrder[order].order = order;
            };
            Categories.groupByCategory = function (items, defaultCategory, categoryOrder) {
                var defCat = Q.coalesce(defaultCategory, '');
                var groups = Q.groupBy(items || [], function (x) { return Q.coalesce(x.category, defCat); });
                Categories.applyOrder(groups, categoryOrder);
                return groups;
            };
            Categories.prototype.renderCategory = function (group) {
                var catProps = {
                    categoryId: "Category" + group.order,
                    category: group.key,
                    idPrefix: this.props.idPrefix,
                    localTextPrefix: this.props.localTextPrefix,
                    items: group.items,
                    key: group.order,
                    renderField: this.props.renderField,
                    setRef: this.props.setRef
                };
                if (this.props.renderCategory != null) {
                    var content = this.props.renderCategory(catProps);
                    if (content !== undefined)
                        return content;
                }
                return React.createElement(UI.Category, __assign({}, catProps));
            };
            Categories.prototype.render = function () {
                var _this = this;
                return (React.createElement("div", { className: "categories" }, Categories.groupByCategory(this.props.items || [], this.props.defaultCategory, this.props.categoryOrder).inOrder.map(function (g) {
                    return _this.renderCategory(g);
                })));
            };
            return Categories;
        }(React.Component));
        UI.Categories = Categories;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var ValidateForm = /** @class */ (function (_super) {
            __extends(ValidateForm, _super);
            function ValidateForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ValidateForm.prototype.render = function () {
                var _this = this;
                var _a = this.props, options = _a.options, other = __rest(_a, ["options"]);
                return (React.createElement("form", __assign({}, other, { ref: function (el) { _this.form = el; }, onSubmit: this.props.onSubmit || (function (e) { return _this.handleSubmit(e); }) }), this.props.children));
            };
            ValidateForm.prototype.handleSubmit = function (e) {
                if (!this.validator.valid())
                    return false;
            };
            ValidateForm.prototype.componentDidMount = function () {
                this.validator = $(this.form).validate(Q.validateOptions(this.props.options));
            };
            ValidateForm.prototype.validateForm = function () {
                return this.validator == null || !!this.validator.form();
            };
            ValidateForm.prototype.serialize = function () {
                var result = {};
                $(this.form).find(':input, .editor').each(function (i, e) {
                    var name = $(e).attr('name');
                    if (!name)
                        return;
                    var widget = $(e).tryGetWidget(Serenity.Widget);
                    if (widget)
                        result[name] = Serenity.EditorUtils.getValue(widget);
                    else
                        result[name] = $(e).val();
                });
                return result;
            };
            return ValidateForm;
        }(React.Component));
        UI.ValidateForm = ValidateForm;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var Form = /** @class */ (function (_super) {
            __extends(Form, _super);
            function Form() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Form.prototype.render = function () {
                return (React.createElement("div", { className: "flex-layout" },
                    React.createElement("div", { className: "s-Form" }, _super.prototype.render.call(this))));
            };
            return Form;
        }(UI.ValidateForm));
        UI.Form = Form;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var PropertyTabs = /** @class */ (function (_super) {
            __extends(PropertyTabs, _super);
            function PropertyTabs() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.text = Q.prefixedText(_this.props.localTextPrefix);
                return _this;
            }
            PropertyTabs.groupByTab = function (items) {
                return Q.groupBy(items || [], function (x) { return Q.coalesce(x.tab, ''); });
            };
            PropertyTabs.prototype.renderTab = function (group) {
                return (React.createElement("li", { className: group.order == 0 ? "active" : null, key: group.order },
                    React.createElement("a", { "data-toggle": 'tab', role: 'tab', href: "#" + this.props.idPrefix + "_Tab" + group.order }, this.text(group.key, "Tabs." + group.key))));
            };
            PropertyTabs.prototype.renderPane = function (group) {
                return (React.createElement("div", { id: this.props.idPrefix + "_Tab" + group.order, key: group.order, className: "tab-pane fade" + (group.order == 0 ? " in active" : ""), role: "tabpanel" }, this.renderCategories(group)));
            };
            PropertyTabs.prototype.renderCategories = function (group) {
                var props = {
                    items: group.items,
                    idPrefix: this.props.idPrefix,
                    localTextPrefix: this.props.localTextPrefix,
                    categoryOrder: this.props.categoryOrder,
                    defaultCategory: this.props.defaultCategory,
                    renderCategory: this.props.renderCategory,
                    renderField: this.props.renderField,
                    setRef: this.props.setRef
                };
                if (this.props.renderCategories) {
                    var content = this.props.renderCategories(group.key, props);
                    if (content !== undefined)
                        return content;
                }
                return React.createElement(UI.Categories, __assign({}, props));
            };
            PropertyTabs.prototype.render = function () {
                var _this = this;
                var tabs = PropertyTabs.groupByTab(this.props.items || []);
                return (React.createElement(React.Fragment, null,
                    React.createElement("ul", { className: "nav nav-tabs property-tabs", role: "tablist" }, tabs.inOrder.map(function (g) { return _this.renderTab(g); })),
                    React.createElement("div", { className: "tab-content property-panes" }, tabs.inOrder.map(function (g) { return _this.renderPane(g); }))));
            };
            return PropertyTabs;
        }(React.Component));
        UI.PropertyTabs = PropertyTabs;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var IntraPropertyGrid = /** @class */ (function (_super) {
            __extends(IntraPropertyGrid, _super);
            function IntraPropertyGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            IntraPropertyGrid.prototype.loadFrom = function (source, editors) {
                var items = this.props.items || [];
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    if (this.props.mode != 2 /* update */ &&
                        item.defaultValue != null &&
                        typeof (source[item.name]) === 'undefined') {
                        source[item.name] = item.defaultValue;
                    }
                }
                editors.loadFrom(source, items.map(function (x) { return x.name; }));
            };
            IntraPropertyGrid.prototype.canModifyItem = function (item) {
                if (this.props.mode != 2 /* update */) {
                    if (item.insertable === false) {
                        return false;
                    }
                    if (item.insertPermission == null) {
                        return true;
                    }
                    return Q.Authorization.hasPermission(item.insertPermission);
                }
                if (item.updatable === false) {
                    return false;
                }
                if (item.updatePermission == null) {
                    return true;
                }
                return Q.Authorization.hasPermission(item.updatePermission);
            };
            IntraPropertyGrid.prototype.saveTo = function (target, editors) {
                editors.saveTo(target);
            };
            IntraPropertyGrid.prototype.getItems = function () {
                var _this = this;
                return (this.props.items || []).map(function (item) {
                    var canModify = _this.canModifyItem(item);
                    var oneWay = !!item.oneWay || !canModify;
                    var readOnly = item.readOnly === true || !canModify;
                    var required = !readOnly && !!item.required && item.editorType !== 'Boolean';
                    var visible = !((item.readPermission != null &&
                        !Q.Authorization.hasPermission(item.readPermission)) ||
                        item.visible === false ||
                        (_this.props.mode != 2 /* update */ && item.hideOnInsert === true) ||
                        (_this.props.mode == 2 /* update */ && item.hideOnUpdate === true));
                    return Q.extend(Q.extend({}, item), {
                        readOnly: readOnly,
                        oneWay: oneWay,
                        required: required,
                        visible: visible
                    });
                });
            };
            IntraPropertyGrid.prototype.render = function () {
                var props = Q.extend({}, this.props);
                props.items = this.getItems();
                var useTabs = Q.any(props.items, function (x) {
                    return !Q.isEmptyOrNull(x.tab);
                });
                if (useTabs)
                    return React.createElement(UI.PropertyTabs, props);
                var useCategories = props.useCategories !== false && Q.any(props.items, function (x) {
                    return !Q.isEmptyOrNull(x.category);
                });
                if (useCategories) {
                    React.createElement(React.Fragment, null,
                        React.createElement(UI.CategoryLinks, props),
                        React.createElement(UI.Categories, props));
                }
                return (React.createElement("div", { className: "categories" }, React.createElement(UI.Category, props)));
            };
            return IntraPropertyGrid;
        }(React.Component));
        UI.IntraPropertyGrid = IntraPropertyGrid;
        var PropertyGrid = /** @class */ (function (_super) {
            __extends(PropertyGrid, _super);
            function PropertyGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PropertyGrid.prototype.render = function () {
                return (React.createElement("div", { className: "s-PropertyGrid" }, _super.prototype.render.call(this)));
            };
            return PropertyGrid;
        }(IntraPropertyGrid));
        UI.PropertyGrid = PropertyGrid;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var ButtonPanel = /** @class */ (function (_super) {
            __extends(ButtonPanel, _super);
            function ButtonPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ButtonPanel.prototype.render = function () {
                return (React.createElement("div", { className: "align-right", style: { marginTop: "10px", paddingRight: "24px" } }, this.props.children));
            };
            return ButtonPanel;
        }(React.Component));
        UI.ButtonPanel = ButtonPanel;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var ToolButton = /** @class */ (function (_super) {
            __extends(ToolButton, _super);
            function ToolButton() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ToolButton_1 = ToolButton;
            ToolButton.adjustIconClass = function (icon) {
                if (!icon)
                    return icon;
                if (Q.startsWith(icon, 'fa-'))
                    return 'fa ' + icon;
                if (Q.startsWith(icon, 'glyphicon-'))
                    return 'glyphicon ' + icon;
                return icon;
            };
            ToolButton.className = function (btn) {
                var _a;
                return Q.cssClass((_a = {
                        "tool-button": true,
                        "icon-tool-button": !!btn.icon,
                        "no-text": !btn.title,
                        disabled: btn.disabled
                    },
                    _a[btn.cssClass] = !!btn.cssClass,
                    _a));
            };
            ToolButton.prototype.handleClick = function (e) {
                if (!this.props.onClick || $(e.currentTarget).hasClass('disabled'))
                    return;
                this.props.onClick(e);
            };
            ToolButton.prototype.render = function () {
                var _this = this;
                return (React.createElement("div", { className: ToolButton_1.className(this.props), title: this.props.hint, onClick: function (e) { return _this.handleClick(e); } },
                    React.createElement("div", { className: "button-outer" }, this.renderButtonText())));
            };
            ToolButton.prototype.renderButtonText = function () {
                var btn = this.props;
                var klass = ToolButton_1.adjustIconClass(btn.icon);
                if (!klass && !btn.title)
                    return React.createElement("span", { className: "button-inner" });
                var title = Q.coalesce(btn.title, '');
                if (btn.htmlEncode === false) {
                    var h = (klass ? '<i class="' + Q.attrEncode(klass) + '"></i> ' : '') + title;
                    return (React.createElement("span", { className: "button-inner", dangerouslySetInnerHTML: { __html: h } }));
                }
                if (!klass)
                    return React.createElement("span", { className: "button-inner" }, title);
                return React.createElement("span", { className: "button-inner" },
                    React.createElement("i", { className: klass }),
                    " ",
                    title);
            };
            var ToolButton_1;
            ToolButton.buttonSelector = "div.tool-button";
            ToolButton = ToolButton_1 = __decorate([
                Serenity.Decorators.registerClass("Serenity.UI.ToolButton")
            ], ToolButton);
            return ToolButton;
        }(React.Component));
        UI.ToolButton = ToolButton;
        var IntraToolbar = /** @class */ (function (_super) {
            __extends(IntraToolbar, _super);
            function IntraToolbar() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            IntraToolbar.prototype.setupMouseTrap = function () {
                var _this = this;
                if (!window['Mousetrap'])
                    return;
                var buttons;
                for (var _i = 0, _a = (this.props.buttons || []); _i < _a.length; _i++) {
                    var b = _a[_i];
                    if (Q.isEmptyOrNull(b.hotkey))
                        continue;
                    this.mouseTrap = this.mouseTrap || window['Mousetrap'](this.props.hotkeyContext || window.document.documentElement);
                    (function (x) {
                        var btn = (buttons = buttons || $(_this.el).find(UI.ToolButton.buttonSelector))
                            .filter("." + x.cssClass);
                        _this.mouseTrap.bind(x.hotkey, function (e, action) {
                            if (btn.is(':visible')) {
                                btn.click();
                            }
                            return x.hotkeyAllowDefault;
                        });
                    })(b);
                }
            };
            IntraToolbar.prototype.componentDidMount = function () {
                this.setupMouseTrap();
            };
            IntraToolbar.prototype.componentWillUnmount = function () {
                $(this.el).find(UI.ToolButton.buttonSelector).unbind('click');
                if (this.mouseTrap) {
                    if (!!this.mouseTrap.destroy) {
                        this.mouseTrap.destroy();
                    }
                    else {
                        this.mouseTrap.reset();
                    }
                    this.mouseTrap = null;
                }
            };
            IntraToolbar.prototype.render = function () {
                var _this = this;
                return (React.createElement("div", { className: "tool-buttons", ref: function (el) { return _this.el = el; } },
                    React.createElement("div", { className: "buttons-outer" }, this.renderButtons(this.props.buttons || []))));
            };
            IntraToolbar.prototype.renderButtons = function (buttons) {
                var result = [];
                for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
                    var btn = buttons_1[_i];
                    if (btn.separator)
                        result.push(React.createElement("div", { className: "separator", key: result.length }));
                    result.push(React.createElement(UI.ToolButton, __assign({}, btn, { key: result.length })));
                }
                var key = 0;
                return (React.createElement("div", { className: "buttons-inner" },
                    result.map(function (x) { x.key = ++key; return x; }),
                    this.props.children));
            };
            return IntraToolbar;
        }(React.Component));
        UI.IntraToolbar = IntraToolbar;
        var Toolbar = /** @class */ (function (_super) {
            __extends(Toolbar, _super);
            function Toolbar() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Toolbar.prototype.render = function () {
                return (React.createElement("div", { className: "s-Toolbar clearfix" }, _super.prototype.render.call(this)));
            };
            Toolbar = __decorate([
                Serenity.Decorators.registerClass("Serenity.UI.Toolbar")
            ], Toolbar);
            return Toolbar;
        }(IntraToolbar));
        UI.Toolbar = Toolbar;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var SaveButton = /** @class */ (function (_super) {
            __extends(SaveButton, _super);
            function SaveButton() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SaveButton.prototype.render = function () {
                var title = Q.text("Controls.EntityDialog." + (this.props.isUpdate ? "UpdateButton" : "SaveButton"));
                return (React.createElement(UI.ToolButton, __assign({ icon: "fa-save text-light-blue", title: title }, this.props)));
            };
            return SaveButton;
        }(React.Component));
        UI.SaveButton = SaveButton;
        var ApplyChangesButton = /** @class */ (function (_super) {
            __extends(ApplyChangesButton, _super);
            function ApplyChangesButton() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ApplyChangesButton.prototype.render = function () {
                var hint = Q.text("Controls.EntityDialog.ApplyChangesButton");
                return (React.createElement(UI.ToolButton, __assign({ icon: "fa-save", cssClass: "text-black", hint: hint }, this.props)));
            };
            return ApplyChangesButton;
        }(React.Component));
        UI.ApplyChangesButton = ApplyChangesButton;
        var DeleteButton = /** @class */ (function (_super) {
            __extends(DeleteButton, _super);
            function DeleteButton() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DeleteButton.prototype.render = function () {
                var title = Q.text("Controls.EntityDialog.DeleteButton");
                return (React.createElement(UI.ToolButton, __assign({ icon: "fa-times text-red", title: title }, this.props)));
            };
            return DeleteButton;
        }(React.Component));
        UI.DeleteButton = DeleteButton;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var FormMode;
        (function (FormMode) {
            FormMode[FormMode["Initial"] = 0] = "Initial";
            FormMode[FormMode["New"] = 1] = "New";
            FormMode[FormMode["Edit"] = 2] = "Edit";
            FormMode[FormMode["View"] = 3] = "View";
            FormMode[FormMode["Deleted"] = 4] = "Deleted";
        })(FormMode = UI.FormMode || (UI.FormMode = {}));
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var FormDataSource = /** @class */ (function (_super) {
            __extends(FormDataSource, _super);
            function FormDataSource(props, context) {
                var _this = _super.call(this, props, context) || this;
                _this.emptyEntity = Object.create(null);
                var entity = _this.props.entity;
                var mode = _this.modeFor(entity);
                _this.state = {
                    formMode: mode,
                    formTitle: _this.titleFor(entity, mode),
                    entity: entity
                };
                if (_this.props.entityId != null)
                    _this.loadById(_this.props.entityId);
                _this.delete = _this.delete.bind(_this);
                _this.save = _this.save.bind(_this);
                return _this;
            }
            FormDataSource.prototype.componentWillReceiveProps = function (nextProps) {
                var nextEntityId = Q.coalesce(nextProps.entityId, null);
                var entityId = Q.coalesce(this.props.entityId, null);
                if (nextEntityId !== entityId) {
                    if (nextEntityId === null) {
                        this.loadEntity(nextProps.entity || Object.create(null));
                    }
                    else {
                        this.loadById(nextProps.entityId);
                    }
                }
                else if (nextProps.entity !== this.props.entity) {
                    this.loadEntity(Q.coalesce(nextProps.entity, Object.create(null)));
                }
            };
            FormDataSource.prototype.componentDidMount = function () {
                this.canSetState = true;
                if (this.pendingEntity !== undefined) {
                    this.loadEntity(this.pendingEntity || Object.create(null));
                }
            };
            FormDataSource.prototype.componentWillUnmount = function () {
                this.canSetState = false;
            };
            FormDataSource.prototype.loadEntity = function (entity) {
                if (this.canSetState) {
                    var mode = this.modeFor(entity);
                    this.setState({
                        formMode: mode,
                        formTitle: this.titleFor(entity, mode),
                        entity: entity
                    });
                    this.pendingEntity = undefined;
                }
                else {
                    this.pendingEntity = entity || null;
                }
            };
            FormDataSource.prototype.loadResponse = function (response) {
                this.loadEntity(response.Entity);
            };
            FormDataSource.prototype.getLoadByIdRequest = function (entityId) {
                return {
                    EntityId: entityId
                };
            };
            FormDataSource.prototype.getServiceFor = function (method) {
                var service = this.props[method.charAt(0).toLowerCase() + method.substr(1) + "Service"];
                if (service != null)
                    return service;
                return (this.props.service || "ServiceNotSet!") + "/" + method;
            };
            FormDataSource.prototype.getLoadByIdOptions = function (entityId) {
                return {
                    service: this.getServiceFor("Retrieve"),
                    request: this.getLoadByIdRequest(entityId)
                };
            };
            FormDataSource.prototype.loadById = function (entityId) {
                var _this = this;
                var options = this.getLoadByIdOptions(entityId);
                return Q.serviceCall(options).then(function (response) {
                    _this.loadResponse(response);
                    return response;
                });
            };
            FormDataSource.prototype.isDeleted = function (entity) {
                if (this.props.isDeletedProperty && entity[this.props.isDeletedProperty])
                    return true;
                if (this.props.isActiveProperty && entity[this.props.isActiveProperty] === -1)
                    return true;
            };
            FormDataSource.prototype.modeFor = function (entity) {
                if (entity == null)
                    return UI.FormMode.Initial;
                if (this.props.readOnly)
                    return UI.FormMode.View;
                if (this.props.idProperty && entity[this.props.idProperty] != null)
                    return UI.FormMode.Edit;
                if (this.isDeleted(entity))
                    return UI.FormMode.Deleted;
                return UI.FormMode.New;
            };
            FormDataSource.prototype.getEntityName = function () {
                if (this.props.localTextPrefix) {
                    var es = Q.tryGetText("Db." + this.props.localTextPrefix + '.EntitySingular');
                    if (es)
                        return es;
                }
                return "Item";
            };
            FormDataSource.prototype.getNameValue = function (entity) {
                if (!entity || !this.props.nameProperty)
                    return "";
                return Q.coalesce(entity[this.props.nameProperty], '').toString();
            };
            FormDataSource.prototype.titleFor = function (entity, mode) {
                if (mode == UI.FormMode.New)
                    return Q.format(Q.text('Controls.EntityDialog.NewRecordTitle'), this.getEntityName());
                var title = Q.coalesce(this.getNameValue(entity), '');
                return Q.format(Q.text('Controls.EntityDialog.EditRecordTitle'), this.getEntityName(), (Q.isEmptyOrNull(title) ? '' : (' (' + title + ')')));
            };
            FormDataSource.prototype.isEditMode = function () {
                return this.state.formMode == UI.FormMode.Edit;
            };
            FormDataSource.prototype.getSaveEntity = function (values) {
                return values;
            };
            FormDataSource.prototype.getSaveOptions = function (values) {
                var opt = {};
                opt.service = this.getServiceFor(this.isEditMode() ? "Update" : "Create");
                opt.request = this.getSaveRequest(values);
                return opt;
            };
            FormDataSource.prototype.getIdProperty = function () {
                return this.props.idProperty || "NoIdProperty!";
            };
            FormDataSource.prototype.getLanguages = function () {
                if (Serenity.EntityDialog.defaultLanguageList != null)
                    return Serenity.EntityDialog.defaultLanguageList() || [];
                return [];
            };
            FormDataSource.prototype.getPendingLocalizations = function () {
                if (this.state.localizations == null) {
                    return null;
                }
                var result = {};
                var idField = this.getIdProperty();
                var langs = this.getLanguages();
                for (var _i = 0, langs_1 = langs; _i < langs_1.length; _i++) {
                    var pair = langs_1[_i];
                    var language = pair[0];
                    var entity = {};
                    if (idField != null) {
                        entity[idField] = this.entity[this.getIdProperty()];
                    }
                    var prefix = language + '$';
                    for (var _a = 0, _b = Object.keys(this.state.localizations); _a < _b.length; _a++) {
                        var k = _b[_a];
                        if (Q.startsWith(k, prefix))
                            entity[k.substr(prefix.length)] = this.state.localizations[k];
                    }
                    result[language] = entity;
                }
                return result;
            };
            FormDataSource.prototype.getSaveRequest = function (values) {
                var entity = this.getSaveEntity(values);
                var req = {};
                req.Entity = entity;
                if (this.isEditMode()) {
                    var idField = this.getIdProperty();
                    if (idField != null) {
                        req.EntityId = this.entity[this.props.idProperty];
                    }
                }
                if (this.state.localizations != null) {
                    req.Localizations = this.getPendingLocalizations();
                }
                return req;
            };
            FormDataSource.prototype.save = function (values) {
                var options = this.getSaveOptions(values);
                return Q.serviceCall(options);
            };
            FormDataSource.prototype.delete = function () {
                return null;
            };
            FormDataSource.prototype.undelete = function () {
                return null;
            };
            FormDataSource.prototype.getDataModel = function () {
                return {
                    entity: this.state.entity || this.emptyEntity,
                    formMode: this.state.formMode,
                    formTitle: this.state.formTitle,
                    onSave: (this.state.formMode == UI.FormMode.Edit || this.state.formMode == UI.FormMode.New) ? this.save : null,
                    onDelete: this.state.formMode == UI.FormMode.Edit ? this.delete : null,
                    onUndelete: this.state.formMode == UI.FormMode.Deleted ? this.undelete : null,
                };
            };
            Object.defineProperty(FormDataSource.prototype, "dataModel", {
                get: function () {
                    return this.getDataModel();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FormDataSource.prototype, "entity", {
                get: function () {
                    return this.pendingEntity !== undefined ? this.pendingEntity : this.state.entity;
                },
                enumerable: true,
                configurable: true
            });
            FormDataSource.prototype.render = function () {
                return this.props.view(this.getDataModel());
            };
            return FormDataSource;
        }(React.Component));
        UI.FormDataSource = FormDataSource;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var FormView = /** @class */ (function (_super) {
            __extends(FormView, _super);
            function FormView() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.editors = new UI.EditorRefs();
                return _this;
            }
            FormView.prototype.canSave = function () {
                return this.props.onSave != null;
            };
            FormView.prototype.showSave = function () {
                return this.props.formMode == UI.FormMode.Edit || this.props.formMode == UI.FormMode.New;
            };
            FormView.prototype.canClose = function () {
                return this.props.onClose != null;
            };
            FormView.prototype.showApplyChanges = function () {
                return this.showSave() && this.canClose();
            };
            FormView.prototype.isUpdate = function () {
                return this.props.formMode == UI.FormMode.Edit;
            };
            FormView.prototype.canDelete = function () {
                return this.props.onDelete != null;
            };
            FormView.prototype.showDelete = function () {
                return this.props.formMode == UI.FormMode.Edit;
            };
            FormView.prototype.canUndelete = function () {
                return this.props.onUndelete != null;
            };
            FormView.prototype.showUndelete = function () {
                return this.props.formMode == UI.FormMode.Deleted;
            };
            FormView.prototype.loadEntity = function (entity) {
                this.editors.loadFrom(entity);
            };
            FormView.prototype.componentDidMount = function () {
                this.loadEntity(this.props.entity || Object.create(null));
            };
            FormView.prototype.componentWillReceiveProps = function (nextProps) {
                if (nextProps.entity !== null &&
                    this.props.entity !== nextProps.entity) {
                    this.loadEntity(nextProps.entity || Object.create(null));
                }
            };
            FormView.prototype.renderSaveButton = function () {
                var _this = this;
                return React.createElement(UI.SaveButton, { isUpdate: this.isUpdate(), disabled: !this.canSave(), onClick: function () { return _this.save(true); } });
            };
            FormView.prototype.renderApplyChangesButton = function () {
                var _this = this;
                return React.createElement(UI.ApplyChangesButton, { disabled: !this.canSave(), onClick: function () { return _this.save(false); } });
            };
            FormView.prototype.renderDeleteButton = function () {
                return React.createElement(UI.DeleteButton, { disabled: !this.canDelete() });
            };
            FormView.prototype.renderToolbar = function (children) {
                return (React.createElement(UI.Toolbar, null,
                    this.showSave() && this.renderSaveButton(),
                    this.showApplyChanges() && this.renderApplyChangesButton(),
                    this.showDelete() && this.renderDeleteButton(),
                    children));
            };
            FormView.prototype.save = function (close) {
                var _this = this;
                if (this.props.onSave == null)
                    return Promise.reject("No onSave handler!");
                var values = Object.create(null);
                this.editors.saveTo(values);
                var promise = this.props.onSave(values);
                if (close) {
                    if (this.props.onClose != null)
                        promise = promise.then(function (e) { return _this.props.onClose != null && _this.props.onClose(); });
                }
                else if (this.props.onReload != null) {
                    promise = promise.then(function (e) { return _this.props.onReload != null && _this.props.onReload(); });
                }
                return promise;
            };
            return FormView;
        }(React.Component));
        UI.FormView = FormView;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var UI;
    (function (UI) {
        var Dialog = /** @class */ (function (_super) {
            __extends(Dialog, _super);
            function Dialog(options) {
                var _this = _super.call(this, options) || this;
                _this.mountView();
                return _this;
            }
            Dialog.prototype.loadByIdAndOpenDialog = function (entityId, asPanel) {
                this.entityId = entityId;
                this.dialogOpen(asPanel);
                this.mountView();
            };
            Dialog.prototype.loadEntityAndOpenDialog = function (entity, asPanel) {
                this.entityId = null;
                this.entity = entity;
                this.dialogOpen(asPanel);
                this.mountView();
            };
            Dialog.prototype.loadNewAndOpenDialog = function (asPanel) {
                this.entityId = null;
                this.entity = {};
                this.dialogOpen(asPanel);
                this.mountView();
            };
            Dialog.prototype.mountView = function () {
                if (!this.element || !this.element.length)
                    return;
                var props = Q.extend({}, this.options);
                this.view = ReactDOM.render(this.render(), this.element[0]);
            };
            Dialog.prototype.getTemplate = function () {
                return '<div class="s-DialogContent"></div>';
            };
            return Dialog;
        }(Serenity.TemplatedDialog));
        UI.Dialog = Dialog;
    })(UI = Serenity.UI || (Serenity.UI = {}));
})(Serenity || (Serenity = {}));
//# sourceMappingURL=Serenity.Pro.UI.js.map