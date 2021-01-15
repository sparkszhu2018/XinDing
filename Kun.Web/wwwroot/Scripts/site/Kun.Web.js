﻿var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var DataAuditLogForm = /** @class */ (function (_super) {
            __extends(DataAuditLogForm, _super);
            function DataAuditLogForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DataAuditLogForm.init) {
                    DataAuditLogForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.DateTimeEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.StringEditor;
                    Q.initFormType(DataAuditLogForm, [
                        'LogType', w0,
                        'LogDate', w1,
                        'UserId', w2,
                        'Tablename', w3,
                        'RecordId', w4,
                        'FieldName', w3,
                        'OldValue', w4,
                        'NewValue', w4
                    ]);
                }
                return _this;
            }
            DataAuditLogForm.formKey = 'Administration.DataAuditLog';
            return DataAuditLogForm;
        }(Serenity.PrefixedContext));
        Administration.DataAuditLogForm = DataAuditLogForm;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var DataAuditLogRow;
        (function (DataAuditLogRow) {
            DataAuditLogRow.idProperty = 'LogId';
            DataAuditLogRow.localTextPrefix = 'Administration.DataAuditLog';
            DataAuditLogRow.deletePermission = 'Administration:Security';
            DataAuditLogRow.insertPermission = 'Administration:Security';
            DataAuditLogRow.readPermission = 'Administration:Security';
            DataAuditLogRow.updatePermission = 'Administration:Security';
        })(DataAuditLogRow = Administration.DataAuditLogRow || (Administration.DataAuditLogRow = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var DataAuditLogService;
        (function (DataAuditLogService) {
            DataAuditLogService.baseUrl = 'Administration/DataAuditLog';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DataAuditLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(DataAuditLogService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DataAuditLogService = Administration.DataAuditLogService || (Administration.DataAuditLogService = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var DataAuditLogType;
        (function (DataAuditLogType) {
            DataAuditLogType[DataAuditLogType["Insert"] = 1] = "Insert";
            DataAuditLogType[DataAuditLogType["Update"] = 2] = "Update";
            DataAuditLogType[DataAuditLogType["Delete"] = 3] = "Delete";
        })(DataAuditLogType = Administration.DataAuditLogType || (Administration.DataAuditLogType = {}));
        Serenity.Decorators.registerEnumType(DataAuditLogType, 'Kun.Administration.DataAuditLogType');
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0,
                        'RoleKey', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var TwoFactorAuthType;
        (function (TwoFactorAuthType) {
            TwoFactorAuthType[TwoFactorAuthType["Email"] = 1] = "Email";
            TwoFactorAuthType[TwoFactorAuthType["SMS"] = 2] = "SMS";
        })(TwoFactorAuthType = Administration.TwoFactorAuthType || (Administration.TwoFactorAuthType = {}));
        Serenity.Decorators.registerEnumType(TwoFactorAuthType, 'Kun.Administration.TwoFactorAuthType');
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.EnumEditor;
                    var w4 = s.ImageUploadEditor;
                    var w5 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'MobilePhoneNumber', w0,
                        'MobilePhoneVerified', w2,
                        'TwoFactorAuth', w3,
                        'UserImage', w4,
                        'Password', w5,
                        'PasswordConfirm', w5,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CustomerForm, [
                        'Code', w0,
                        'Name', w0,
                        'Description', w0,
                        'Contacts', w0,
                        'Mobile', w0
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Basic.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Basic.CustomerForm = CustomerForm;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'Id';
            CustomerRow.isActiveProperty = 'IsActive';
            CustomerRow.nameProperty = 'Name';
            CustomerRow.localTextPrefix = 'Basic.Customer';
            CustomerRow.lookupKey = 'Basic.Customer';
            function getLookup() {
                return Q.getLookup('Basic.Customer');
            }
            CustomerRow.getLookup = getLookup;
            CustomerRow.deletePermission = '*';
            CustomerRow.insertPermission = '*';
            CustomerRow.readPermission = '*';
            CustomerRow.updatePermission = '*';
        })(CustomerRow = Basic.CustomerRow || (Basic.CustomerRow = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Basic/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Basic.CustomerService || (Basic.CustomerService = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var LotForm = /** @class */ (function (_super) {
            __extends(LotForm, _super);
            function LotForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LotForm.init) {
                    LotForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LotForm, [
                        'Code', w0,
                        'MaterialId', w0
                    ]);
                }
                return _this;
            }
            LotForm.formKey = 'Basic.Lot';
            return LotForm;
        }(Serenity.PrefixedContext));
        Basic.LotForm = LotForm;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var LotRow;
        (function (LotRow) {
            LotRow.idProperty = 'Id';
            LotRow.isActiveProperty = 'IsActive';
            LotRow.nameProperty = 'Code';
            LotRow.localTextPrefix = 'Basic.Lot';
            LotRow.lookupKey = 'Basic.Lot';
            function getLookup() {
                return Q.getLookup('Basic.Lot');
            }
            LotRow.getLookup = getLookup;
            LotRow.deletePermission = '*';
            LotRow.insertPermission = '*';
            LotRow.readPermission = '*';
            LotRow.updatePermission = '*';
        })(LotRow = Basic.LotRow || (Basic.LotRow = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var LotService;
        (function (LotService) {
            LotService.baseUrl = 'Basic/Lot';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LotService[x] = function (r, s, o) {
                    return Q.serviceRequest(LotService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LotService = Basic.LotService || (Basic.LotService = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialForm = /** @class */ (function (_super) {
            __extends(MaterialForm, _super);
            function MaterialForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaterialForm.init) {
                    MaterialForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(MaterialForm, [
                        'Code', w0,
                        'Name', w0,
                        'UnitId', w1,
                        'SafetyStock', w2,
                        'IsBatch', w3,
                        'GroupId', w1
                    ]);
                }
                return _this;
            }
            MaterialForm.formKey = 'Basic.Material';
            return MaterialForm;
        }(Serenity.PrefixedContext));
        Basic.MaterialForm = MaterialForm;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialGroupForm = /** @class */ (function (_super) {
            __extends(MaterialGroupForm, _super);
            function MaterialGroupForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaterialGroupForm.init) {
                    MaterialGroupForm.init = true;
                    var s = Serenity;
                    var w0 = s.MaskedEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(MaterialGroupForm, [
                        'Code', w0,
                        'Name', w1
                    ]);
                }
                return _this;
            }
            MaterialGroupForm.formKey = 'Basic.MaterialGroup';
            return MaterialGroupForm;
        }(Serenity.PrefixedContext));
        Basic.MaterialGroupForm = MaterialGroupForm;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialGroupRow;
        (function (MaterialGroupRow) {
            MaterialGroupRow.idProperty = 'Id';
            MaterialGroupRow.isActiveProperty = 'IsActive';
            MaterialGroupRow.nameProperty = 'Name';
            MaterialGroupRow.localTextPrefix = 'Basic.MaterialGroup';
            MaterialGroupRow.lookupKey = 'Basic.MaterialGroup';
            function getLookup() {
                return Q.getLookup('Basic.MaterialGroup');
            }
            MaterialGroupRow.getLookup = getLookup;
            MaterialGroupRow.deletePermission = '*';
            MaterialGroupRow.insertPermission = '*';
            MaterialGroupRow.readPermission = '*';
            MaterialGroupRow.updatePermission = '*';
        })(MaterialGroupRow = Basic.MaterialGroupRow || (Basic.MaterialGroupRow = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialGroupService;
        (function (MaterialGroupService) {
            MaterialGroupService.baseUrl = 'Basic/MaterialGroup';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaterialGroupService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaterialGroupService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaterialGroupService = Basic.MaterialGroupService || (Basic.MaterialGroupService = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialImportForm = /** @class */ (function (_super) {
            __extends(MaterialImportForm, _super);
            function MaterialImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaterialImportForm.init) {
                    MaterialImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(MaterialImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            MaterialImportForm.formKey = 'Basic.MaterialImportForm';
            return MaterialImportForm;
        }(Serenity.PrefixedContext));
        Basic.MaterialImportForm = MaterialImportForm;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialRow;
        (function (MaterialRow) {
            MaterialRow.idProperty = 'Id';
            MaterialRow.isActiveProperty = 'IsActive';
            MaterialRow.nameProperty = 'CodeName';
            MaterialRow.localTextPrefix = 'Basic.Material';
            MaterialRow.lookupKey = 'Basic.MaterialLookup';
            function getLookup() {
                return Q.getLookup('Basic.MaterialLookup');
            }
            MaterialRow.getLookup = getLookup;
            MaterialRow.deletePermission = '*';
            MaterialRow.insertPermission = '*';
            MaterialRow.readPermission = '*';
            MaterialRow.updatePermission = '*';
        })(MaterialRow = Basic.MaterialRow || (Basic.MaterialRow = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialService;
        (function (MaterialService) {
            MaterialService.baseUrl = 'Basic/Material';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                MaterialService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaterialService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaterialService = Basic.MaterialService || (Basic.MaterialService = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var PositionForm = /** @class */ (function (_super) {
            __extends(PositionForm, _super);
            function PositionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PositionForm.init) {
                    PositionForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(PositionForm, [
                        'WarehouseId', w0,
                        'Code', w1,
                        'Name', w1
                    ]);
                }
                return _this;
            }
            PositionForm.formKey = 'Basic.Position';
            return PositionForm;
        }(Serenity.PrefixedContext));
        Basic.PositionForm = PositionForm;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var PositionRow;
        (function (PositionRow) {
            PositionRow.idProperty = 'Id';
            PositionRow.isActiveProperty = 'IsActive';
            PositionRow.nameProperty = 'Name';
            PositionRow.localTextPrefix = 'Basic.Position';
            PositionRow.lookupKey = 'Basic.Position';
            function getLookup() {
                return Q.getLookup('Basic.Position');
            }
            PositionRow.getLookup = getLookup;
            PositionRow.deletePermission = '*';
            PositionRow.insertPermission = '*';
            PositionRow.readPermission = '*';
            PositionRow.updatePermission = '*';
        })(PositionRow = Basic.PositionRow || (Basic.PositionRow = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var PositionService;
        (function (PositionService) {
            PositionService.baseUrl = 'Basic/Position';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PositionService[x] = function (r, s, o) {
                    return Q.serviceRequest(PositionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PositionService = Basic.PositionService || (Basic.PositionService = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var SupplierForm = /** @class */ (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierForm.init) {
                    SupplierForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SupplierForm, [
                        'Code', w0,
                        'Name', w0,
                        'Description', w0,
                        'Contacts', w0,
                        'Mobile', w0
                    ]);
                }
                return _this;
            }
            SupplierForm.formKey = 'Basic.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Basic.SupplierForm = SupplierForm;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'Id';
            SupplierRow.isActiveProperty = 'IsActive';
            SupplierRow.nameProperty = 'Name';
            SupplierRow.localTextPrefix = 'Basic.Supplier';
            SupplierRow.lookupKey = 'Basic.Supplier';
            function getLookup() {
                return Q.getLookup('Basic.Supplier');
            }
            SupplierRow.getLookup = getLookup;
            SupplierRow.deletePermission = '*';
            SupplierRow.insertPermission = '*';
            SupplierRow.readPermission = '*';
            SupplierRow.updatePermission = '*';
        })(SupplierRow = Basic.SupplierRow || (Basic.SupplierRow = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Basic/Supplier';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierService = Basic.SupplierService || (Basic.SupplierService = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var UnitForm = /** @class */ (function (_super) {
            __extends(UnitForm, _super);
            function UnitForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UnitForm.init) {
                    UnitForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(UnitForm, [
                        'Code', w0,
                        'Name', w0,
                        'Decim', w1
                    ]);
                }
                return _this;
            }
            UnitForm.formKey = 'Basic.Unit';
            return UnitForm;
        }(Serenity.PrefixedContext));
        Basic.UnitForm = UnitForm;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var UnitRow;
        (function (UnitRow) {
            UnitRow.idProperty = 'Id';
            UnitRow.isActiveProperty = 'IsActive';
            UnitRow.nameProperty = 'Name';
            UnitRow.localTextPrefix = 'Basic.Unit';
            UnitRow.lookupKey = 'Basic.UnitLookup';
            function getLookup() {
                return Q.getLookup('Basic.UnitLookup');
            }
            UnitRow.getLookup = getLookup;
            UnitRow.deletePermission = '*';
            UnitRow.insertPermission = '*';
            UnitRow.readPermission = '*';
            UnitRow.updatePermission = '*';
        })(UnitRow = Basic.UnitRow || (Basic.UnitRow = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var UnitService;
        (function (UnitService) {
            UnitService.baseUrl = 'Basic/Unit';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UnitService[x] = function (r, s, o) {
                    return Q.serviceRequest(UnitService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UnitService = Basic.UnitService || (Basic.UnitService = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var VendorForm = /** @class */ (function (_super) {
            __extends(VendorForm, _super);
            function VendorForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VendorForm.init) {
                    VendorForm.init = true;
                    var s = Serenity;
                    var w0 = s.MaskedEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(VendorForm, [
                        'Code', w0,
                        'Name', w1,
                        'Description', w1,
                        'Contacts', w1,
                        'Mobile', w1
                    ]);
                }
                return _this;
            }
            VendorForm.formKey = 'Basic.Vendor';
            return VendorForm;
        }(Serenity.PrefixedContext));
        Basic.VendorForm = VendorForm;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var VendorRow;
        (function (VendorRow) {
            VendorRow.idProperty = 'Id';
            VendorRow.isActiveProperty = 'IsActive';
            VendorRow.nameProperty = 'Name';
            VendorRow.localTextPrefix = 'Basic.Vendor';
            VendorRow.lookupKey = 'Basic.Vendor';
            function getLookup() {
                return Q.getLookup('Basic.Vendor');
            }
            VendorRow.getLookup = getLookup;
            VendorRow.deletePermission = '*';
            VendorRow.insertPermission = '*';
            VendorRow.readPermission = '*';
            VendorRow.updatePermission = '*';
        })(VendorRow = Basic.VendorRow || (Basic.VendorRow = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var VendorService;
        (function (VendorService) {
            VendorService.baseUrl = 'Basic/Vendor';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VendorService[x] = function (r, s, o) {
                    return Q.serviceRequest(VendorService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VendorService = Basic.VendorService || (Basic.VendorService = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var WarehouseForm = /** @class */ (function (_super) {
            __extends(WarehouseForm, _super);
            function WarehouseForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WarehouseForm.init) {
                    WarehouseForm.init = true;
                    var s = Serenity;
                    var w0 = s.MaskedEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(WarehouseForm, [
                        'Code', w0,
                        'Name', w1,
                        'UsePosition', w2,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            WarehouseForm.formKey = 'Basic.Warehouse';
            return WarehouseForm;
        }(Serenity.PrefixedContext));
        Basic.WarehouseForm = WarehouseForm;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var WarehouseRow;
        (function (WarehouseRow) {
            WarehouseRow.idProperty = 'Id';
            WarehouseRow.isActiveProperty = 'IsActive';
            WarehouseRow.nameProperty = 'Name';
            WarehouseRow.localTextPrefix = 'Basic.Warehouse';
            WarehouseRow.lookupKey = 'Basic.Warehouse';
            function getLookup() {
                return Q.getLookup('Basic.Warehouse');
            }
            WarehouseRow.getLookup = getLookup;
            WarehouseRow.deletePermission = '*';
            WarehouseRow.insertPermission = '*';
            WarehouseRow.readPermission = '*';
            WarehouseRow.updatePermission = '*';
        })(WarehouseRow = Basic.WarehouseRow || (Basic.WarehouseRow = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var WarehouseService;
        (function (WarehouseService) {
            WarehouseService.baseUrl = 'Basic/Warehouse';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WarehouseService[x] = function (r, s, o) {
                    return Q.serviceRequest(WarehouseService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WarehouseService = Basic.WarehouseService || (Basic.WarehouseService = {}));
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailComposeForm = /** @class */ (function (_super) {
            __extends(EmailComposeForm, _super);
            function EmailComposeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmailComposeForm.init) {
                    EmailComposeForm.init = true;
                    var s = Serenity;
                    var w0 = Serenity.StringEditor;
                    var w1 = Serenity.MultipleImageUploadEditor;
                    Q.initFormType(EmailComposeForm, [
                        'Subject', w0,
                        'Attachments', w1,
                        'ReplyToFolder', w0,
                        'ReplyToUniqueId', w0
                    ]);
                }
                return _this;
            }
            EmailComposeForm.formKey = 'Serenity.EmailClient.EmailCompose';
            return EmailComposeForm;
        }(Serenity.PrefixedContext));
        EmailClient.EmailComposeForm = EmailComposeForm;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailService;
        (function (EmailService) {
            EmailService.baseUrl = 'Common/Email';
            [
                'Login',
                'Signout',
                'UnreadCount',
                'Suggest',
                'Reply',
                'Compose',
                'DeleteMessages',
                'ToggleSeen',
                'Move',
                'ListMessages',
                'ListFolders',
                'RetrieveMessage'
            ].forEach(function (x) {
                EmailService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmailService = EmailClient.EmailService || (EmailClient.EmailService = {}));
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Kun;
(function (Kun) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Kun.Membership || (Kun.Membership = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Kun.Membership || (Kun.Membership = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Kun.Membership || (Kun.Membership = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Kun.Membership || (Kun.Membership = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Kun.Membership || (Kun.Membership = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var Enums;
        (function (Enums) {
            var BillStatus;
            (function (BillStatus) {
                BillStatus[BillStatus["Edit"] = 10] = "Edit";
                BillStatus[BillStatus["Reject"] = 20] = "Reject";
                BillStatus[BillStatus["Commited"] = 30] = "Commited";
                BillStatus[BillStatus["Audited"] = 50] = "Audited";
            })(BillStatus = Enums.BillStatus || (Enums.BillStatus = {}));
            Serenity.Decorators.registerEnumType(BillStatus, 'Kun.Ops.Enums.BillStatus', 'OpsEnums.Status');
        })(Enums = Ops.Enums || (Ops.Enums = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var Enums;
        (function (Enums) {
            var MaintenanceBillType;
            (function (MaintenanceBillType) {
                MaintenanceBillType[MaintenanceBillType["NormalMaintenance"] = 1] = "NormalMaintenance";
            })(MaintenanceBillType = Enums.MaintenanceBillType || (Enums.MaintenanceBillType = {}));
            Serenity.Decorators.registerEnumType(MaintenanceBillType, 'Kun.Ops.Enums.MaintenanceBillType', 'OpsEnums.MaintenanceBillType');
        })(Enums = Ops.Enums || (Ops.Enums = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceForm = /** @class */ (function (_super) {
            __extends(MaintenanceForm, _super);
            function MaintenanceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaintenanceForm.init) {
                    MaintenanceForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.BooleanEditor;
                    var w6 = Ops.MaintenanceMaterialsEditor;
                    var w7 = Ops.MaintenanceManhoursEditor;
                    var w8 = s.DecimalEditor;
                    Q.initFormType(MaintenanceForm, [
                        'BillNo', w0,
                        'BillType', w1,
                        'Status', w1,
                        'Date', w2,
                        'ApproverId', w3,
                        'ApproverDate', w2,
                        'VendorId', w3,
                        'Reporter', w0,
                        'ReportDate', w2,
                        'ReportCustomerId', w3,
                        'SettleCustomerId', w3,
                        'TypeId', w3,
                        'Address', w4,
                        'Description', w4,
                        'Content', w4,
                        'ChangeDevice', w5,
                        'Materials', w6,
                        'Manhours', w7,
                        'ServicerCost', w8,
                        'Note', w0,
                        'ResponsibleId', w3
                    ]);
                }
                return _this;
            }
            MaintenanceForm.formKey = 'Ops.Maintenance';
            return MaintenanceForm;
        }(Serenity.PrefixedContext));
        Ops.MaintenanceForm = MaintenanceForm;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceManhoursForm = /** @class */ (function (_super) {
            __extends(MaintenanceManhoursForm, _super);
            function MaintenanceManhoursForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaintenanceManhoursForm.init) {
                    MaintenanceManhoursForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(MaintenanceManhoursForm, [
                        'Serial', w0,
                        'ManhourId', w1,
                        'Price', w2,
                        'Qty', w2,
                        'Amount', w2,
                        'Note', w3
                    ]);
                }
                return _this;
            }
            MaintenanceManhoursForm.formKey = 'Ops.MaintenanceManhours';
            return MaintenanceManhoursForm;
        }(Serenity.PrefixedContext));
        Ops.MaintenanceManhoursForm = MaintenanceManhoursForm;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceManhoursRow;
        (function (MaintenanceManhoursRow) {
            MaintenanceManhoursRow.idProperty = 'Id';
            MaintenanceManhoursRow.isActiveProperty = 'IsActive';
            MaintenanceManhoursRow.nameProperty = 'Note';
            MaintenanceManhoursRow.localTextPrefix = 'Ops.MaintenanceManhours';
            MaintenanceManhoursRow.deletePermission = '*';
            MaintenanceManhoursRow.insertPermission = '*';
            MaintenanceManhoursRow.readPermission = '*';
            MaintenanceManhoursRow.updatePermission = '*';
        })(MaintenanceManhoursRow = Ops.MaintenanceManhoursRow || (Ops.MaintenanceManhoursRow = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceManhoursService;
        (function (MaintenanceManhoursService) {
            MaintenanceManhoursService.baseUrl = 'Ops/MaintenanceManhours';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaintenanceManhoursService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaintenanceManhoursService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaintenanceManhoursService = Ops.MaintenanceManhoursService || (Ops.MaintenanceManhoursService = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceMaterialsForm = /** @class */ (function (_super) {
            __extends(MaintenanceMaterialsForm, _super);
            function MaintenanceMaterialsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaintenanceMaterialsForm.init) {
                    MaintenanceMaterialsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(MaintenanceMaterialsForm, [
                        'MaterialId', w0,
                        'MaterialName', w1,
                        'Serial', w2,
                        'UnitId', w0,
                        'UnitName', w1,
                        'Qty', w3,
                        'SalePrice', w3,
                        'SaleAmount', w3,
                        'Specification', w1,
                        'LotId', w0,
                        'WarehouseId', w0,
                        'PositionId', w0
                    ]);
                }
                return _this;
            }
            MaintenanceMaterialsForm.formKey = 'Ops.MaintenanceMaterials';
            return MaintenanceMaterialsForm;
        }(Serenity.PrefixedContext));
        Ops.MaintenanceMaterialsForm = MaintenanceMaterialsForm;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceMaterialsRow;
        (function (MaintenanceMaterialsRow) {
            MaintenanceMaterialsRow.idProperty = 'Id';
            MaintenanceMaterialsRow.isActiveProperty = 'IsActive';
            MaintenanceMaterialsRow.nameProperty = 'MaterialCode';
            MaintenanceMaterialsRow.localTextPrefix = 'Ops.MaintenanceMaterials';
            MaintenanceMaterialsRow.deletePermission = '*';
            MaintenanceMaterialsRow.insertPermission = '*';
            MaintenanceMaterialsRow.readPermission = '*';
            MaintenanceMaterialsRow.updatePermission = '*';
        })(MaintenanceMaterialsRow = Ops.MaintenanceMaterialsRow || (Ops.MaintenanceMaterialsRow = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceMaterialsService;
        (function (MaintenanceMaterialsService) {
            MaintenanceMaterialsService.baseUrl = 'Ops/MaintenanceMaterials';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaintenanceMaterialsService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaintenanceMaterialsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaintenanceMaterialsService = Ops.MaintenanceMaterialsService || (Ops.MaintenanceMaterialsService = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceRow;
        (function (MaintenanceRow) {
            MaintenanceRow.idProperty = 'Id';
            MaintenanceRow.isActiveProperty = 'IsActive';
            MaintenanceRow.nameProperty = 'BillNo';
            MaintenanceRow.localTextPrefix = 'Ops.Maintenance';
            MaintenanceRow.deletePermission = '*';
            MaintenanceRow.insertPermission = '*';
            MaintenanceRow.readPermission = '*';
            MaintenanceRow.updatePermission = '*';
        })(MaintenanceRow = Ops.MaintenanceRow || (Ops.MaintenanceRow = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceService;
        (function (MaintenanceService) {
            MaintenanceService.baseUrl = 'Ops/Maintenance';
            [
                'Commit',
                'Audit',
                'Reject',
                'UnAudit',
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaintenanceService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaintenanceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaintenanceService = Ops.MaintenanceService || (Ops.MaintenanceService = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceTypeForm = /** @class */ (function (_super) {
            __extends(MaintenanceTypeForm, _super);
            function MaintenanceTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaintenanceTypeForm.init) {
                    MaintenanceTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(MaintenanceTypeForm, [
                        'Name', w0,
                        'Sort', w1
                    ]);
                }
                return _this;
            }
            MaintenanceTypeForm.formKey = 'Ops.MaintenanceType';
            return MaintenanceTypeForm;
        }(Serenity.PrefixedContext));
        Ops.MaintenanceTypeForm = MaintenanceTypeForm;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceTypeRow;
        (function (MaintenanceTypeRow) {
            MaintenanceTypeRow.idProperty = 'Id';
            MaintenanceTypeRow.isActiveProperty = 'IsActive';
            MaintenanceTypeRow.nameProperty = 'Name';
            MaintenanceTypeRow.localTextPrefix = 'Ops.MaintenanceType';
            MaintenanceTypeRow.lookupKey = 'Basic.MaintenanceTypeLookup';
            function getLookup() {
                return Q.getLookup('Basic.MaintenanceTypeLookup');
            }
            MaintenanceTypeRow.getLookup = getLookup;
            MaintenanceTypeRow.deletePermission = '*';
            MaintenanceTypeRow.insertPermission = '*';
            MaintenanceTypeRow.readPermission = '*';
            MaintenanceTypeRow.updatePermission = '*';
        })(MaintenanceTypeRow = Ops.MaintenanceTypeRow || (Ops.MaintenanceTypeRow = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceTypeService;
        (function (MaintenanceTypeService) {
            MaintenanceTypeService.baseUrl = 'Ops/MaintenanceType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaintenanceTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaintenanceTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaintenanceTypeService = Ops.MaintenanceTypeService || (Ops.MaintenanceTypeService = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var ManhourPriceForm = /** @class */ (function (_super) {
            __extends(ManhourPriceForm, _super);
            function ManhourPriceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ManhourPriceForm.init) {
                    ManhourPriceForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(ManhourPriceForm, [
                        'Name', w0,
                        'Price', w1
                    ]);
                }
                return _this;
            }
            ManhourPriceForm.formKey = 'Ops.ManhourPrice';
            return ManhourPriceForm;
        }(Serenity.PrefixedContext));
        Ops.ManhourPriceForm = ManhourPriceForm;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var ManhourPriceRow;
        (function (ManhourPriceRow) {
            ManhourPriceRow.idProperty = 'Id';
            ManhourPriceRow.isActiveProperty = 'IsActive';
            ManhourPriceRow.nameProperty = 'Name';
            ManhourPriceRow.localTextPrefix = 'Ops.ManhourPrice';
            ManhourPriceRow.lookupKey = 'Ops.ManhourPrice';
            function getLookup() {
                return Q.getLookup('Ops.ManhourPrice');
            }
            ManhourPriceRow.getLookup = getLookup;
            ManhourPriceRow.deletePermission = '*';
            ManhourPriceRow.insertPermission = '*';
            ManhourPriceRow.readPermission = '*';
            ManhourPriceRow.updatePermission = '*';
        })(ManhourPriceRow = Ops.ManhourPriceRow || (Ops.ManhourPriceRow = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var ManhourPriceService;
        (function (ManhourPriceService) {
            ManhourPriceService.baseUrl = 'Ops/ManhourPrice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ManhourPriceService[x] = function (r, s, o) {
                    return Q.serviceRequest(ManhourPriceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ManhourPriceService = Ops.ManhourPriceService || (Ops.ManhourPriceService = {}));
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sell;
    (function (Sell) {
        var SaleOrderForm = /** @class */ (function (_super) {
            __extends(SaleOrderForm, _super);
            function SaleOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SaleOrderForm.init) {
                    SaleOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(SaleOrderForm, [
                        'BillNo', w0,
                        'BillType', w1,
                        'Status', w1,
                        'Date', w2,
                        'CustomerId', w0,
                        'SettleCustomerId', w0,
                        'Note', w0,
                        'ApproverId', w0,
                        'ApproverDate', w2
                    ]);
                }
                return _this;
            }
            SaleOrderForm.formKey = 'Sell.SaleOrder';
            return SaleOrderForm;
        }(Serenity.PrefixedContext));
        Sell.SaleOrderForm = SaleOrderForm;
    })(Sell = Kun.Sell || (Kun.Sell = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sell;
    (function (Sell) {
        var SaleOrderItemForm = /** @class */ (function (_super) {
            __extends(SaleOrderItemForm, _super);
            function SaleOrderItemForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SaleOrderItemForm.init) {
                    SaleOrderItemForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(SaleOrderItemForm, [
                        'HeadId', w0,
                        'Serial', w1,
                        'StockDataId', w0,
                        'MaterialId', w0,
                        'MaterialName', w0,
                        'UnitId', w0,
                        'UnitName', w0,
                        'Qty', w2,
                        'SalePrice', w2,
                        'SaleAmount', w2,
                        'LotId', w0,
                        'WarehouseId', w0,
                        'PositionId', w0,
                        'Specification', w0
                    ]);
                }
                return _this;
            }
            SaleOrderItemForm.formKey = 'Sell.SaleOrderItem';
            return SaleOrderItemForm;
        }(Serenity.PrefixedContext));
        Sell.SaleOrderItemForm = SaleOrderItemForm;
    })(Sell = Kun.Sell || (Kun.Sell = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sell;
    (function (Sell) {
        var SaleOrderItemRow;
        (function (SaleOrderItemRow) {
            SaleOrderItemRow.idProperty = 'Id';
            SaleOrderItemRow.isActiveProperty = 'IsActive';
            SaleOrderItemRow.nameProperty = 'MaterialName';
            SaleOrderItemRow.localTextPrefix = 'Sell.SaleOrderItem';
            SaleOrderItemRow.deletePermission = '*';
            SaleOrderItemRow.insertPermission = '*';
            SaleOrderItemRow.readPermission = '*';
            SaleOrderItemRow.updatePermission = '*';
        })(SaleOrderItemRow = Sell.SaleOrderItemRow || (Sell.SaleOrderItemRow = {}));
    })(Sell = Kun.Sell || (Kun.Sell = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sell;
    (function (Sell) {
        var SaleOrderItemService;
        (function (SaleOrderItemService) {
            SaleOrderItemService.baseUrl = 'Sell/SaleOrderItem';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SaleOrderItemService[x] = function (r, s, o) {
                    return Q.serviceRequest(SaleOrderItemService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SaleOrderItemService = Sell.SaleOrderItemService || (Sell.SaleOrderItemService = {}));
    })(Sell = Kun.Sell || (Kun.Sell = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sell;
    (function (Sell) {
        var SaleOrderRow;
        (function (SaleOrderRow) {
            SaleOrderRow.idProperty = 'Id';
            SaleOrderRow.isActiveProperty = 'IsActive';
            SaleOrderRow.nameProperty = 'BillNo';
            SaleOrderRow.localTextPrefix = 'Sell.SaleOrder';
            SaleOrderRow.deletePermission = '*';
            SaleOrderRow.insertPermission = '*';
            SaleOrderRow.readPermission = '*';
            SaleOrderRow.updatePermission = '*';
        })(SaleOrderRow = Sell.SaleOrderRow || (Sell.SaleOrderRow = {}));
    })(Sell = Kun.Sell || (Kun.Sell = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sell;
    (function (Sell) {
        var SaleOrderService;
        (function (SaleOrderService) {
            SaleOrderService.baseUrl = 'Sell/SaleOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SaleOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(SaleOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SaleOrderService = Sell.SaleOrderService || (Sell.SaleOrderService = {}));
    })(Sell = Kun.Sell || (Kun.Sell = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var Enums;
        (function (Enums) {
            var BillStatus;
            (function (BillStatus) {
                BillStatus[BillStatus["Edit"] = 10] = "Edit";
                BillStatus[BillStatus["Reject"] = 20] = "Reject";
                BillStatus[BillStatus["Commited"] = 30] = "Commited";
                BillStatus[BillStatus["Audited"] = 50] = "Audited";
            })(BillStatus = Enums.BillStatus || (Enums.BillStatus = {}));
            Serenity.Decorators.registerEnumType(BillStatus, 'Kun.Stock.Enums.BillStatus', 'StockEnums.Status');
        })(Enums = Stock.Enums || (Stock.Enums = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var Enums;
        (function (Enums) {
            var InStockBillType;
            (function (InStockBillType) {
                InStockBillType[InStockBillType["PuchaseInstock"] = 1] = "PuchaseInstock";
                InStockBillType[InStockBillType["OtherInStock"] = 9] = "OtherInStock";
            })(InStockBillType = Enums.InStockBillType || (Enums.InStockBillType = {}));
            Serenity.Decorators.registerEnumType(InStockBillType, 'Kun.Stock.Enums.InStockBillType', 'StockEnums.InStockBillType');
        })(Enums = Stock.Enums || (Stock.Enums = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var Enums;
        (function (Enums) {
            var InvoiceType;
            (function (InvoiceType) {
                InvoiceType[InvoiceType["WU"] = 0] = "WU";
                InvoiceType[InvoiceType["ZP"] = 10] = "ZP";
                InvoiceType[InvoiceType["PP"] = 20] = "PP";
                InvoiceType[InvoiceType["SJ"] = 30] = "SJ";
            })(InvoiceType = Enums.InvoiceType || (Enums.InvoiceType = {}));
            Serenity.Decorators.registerEnumType(InvoiceType, 'Kun.Stock.Enums.InvoiceType', 'InStockEnums.InvoiceType');
        })(Enums = Stock.Enums || (Stock.Enums = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var Enums;
        (function (Enums) {
            var MoveType;
            (function (MoveType) {
                MoveType[MoveType["Purchase"] = 10] = "Purchase";
                MoveType[MoveType["Sale"] = 30] = "Sale";
                MoveType[MoveType["Maint"] = 31] = "Maint";
                MoveType[MoveType["MovStock"] = 50] = "MovStock";
            })(MoveType = Enums.MoveType || (Enums.MoveType = {}));
            Serenity.Decorators.registerEnumType(MoveType, 'Kun.Stock.Enums.MoveType', 'MoveRecordEnums.MoveType');
        })(Enums = Stock.Enums || (Stock.Enums = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var Enums;
        (function (Enums) {
            var Status;
            (function (Status) {
                Status[Status["Normal"] = 10] = "Normal";
            })(Status = Enums.Status || (Enums.Status = {}));
            Serenity.Decorators.registerEnumType(Status, 'Kun.Stock.Enums.Status', 'MoveRecordEnums.Status');
        })(Enums = Stock.Enums || (Stock.Enums = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var InStockForm = /** @class */ (function (_super) {
            __extends(InStockForm, _super);
            function InStockForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InStockForm.init) {
                    InStockForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = Stock.InStockItemEditor;
                    Q.initFormType(InStockForm, [
                        'BillNo', w0,
                        'BillType', w1,
                        'Status', w1,
                        'Date', w2,
                        'Note', w0,
                        'InsertUserId', w3,
                        'InsertDate', w2,
                        'UpdateUserId', w3,
                        'UpdateDate', w2,
                        'ApproverId', w3,
                        'ApproverDate', w2,
                        'Items', w4
                    ]);
                }
                return _this;
            }
            InStockForm.formKey = 'Stock.InStock';
            return InStockForm;
        }(Serenity.PrefixedContext));
        Stock.InStockForm = InStockForm;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var InStockItemForm = /** @class */ (function (_super) {
            __extends(InStockItemForm, _super);
            function InStockItemForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InStockItemForm.init) {
                    InStockItemForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.EnumEditor;
                    Q.initFormType(InStockItemForm, [
                        'MaterialId', w0,
                        'UnitId', w0,
                        'Specification', w1,
                        'ConfirmQty', w2,
                        'SupplierId', w0,
                        'InvoiceType', w3,
                        'BuyPrice', w2,
                        'BuyAmount', w2,
                        'SalePrice', w2,
                        'SaleAmount', w2,
                        'LotId', w0
                    ]);
                }
                return _this;
            }
            InStockItemForm.formKey = 'Stock.InStockItem';
            return InStockItemForm;
        }(Serenity.PrefixedContext));
        Stock.InStockItemForm = InStockItemForm;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var InStockItemRow;
        (function (InStockItemRow) {
            InStockItemRow.idProperty = 'Id';
            InStockItemRow.isActiveProperty = 'IsActive';
            InStockItemRow.nameProperty = 'Status';
            InStockItemRow.localTextPrefix = 'Stock.InStockItem';
            InStockItemRow.deletePermission = '*';
            InStockItemRow.insertPermission = '*';
            InStockItemRow.readPermission = '*';
            InStockItemRow.updatePermission = '*';
        })(InStockItemRow = Stock.InStockItemRow || (Stock.InStockItemRow = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var InStockItemService;
        (function (InStockItemService) {
            InStockItemService.baseUrl = 'Stock/InStockItem';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InStockItemService[x] = function (r, s, o) {
                    return Q.serviceRequest(InStockItemService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InStockItemService = Stock.InStockItemService || (Stock.InStockItemService = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var InStockRow;
        (function (InStockRow) {
            InStockRow.idProperty = 'Id';
            InStockRow.isActiveProperty = 'IsActive';
            InStockRow.nameProperty = 'BillNo';
            InStockRow.localTextPrefix = 'Stock.InStock';
            InStockRow.deletePermission = '*';
            InStockRow.insertPermission = '*';
            InStockRow.readPermission = '*';
            InStockRow.updatePermission = '*';
        })(InStockRow = Stock.InStockRow || (Stock.InStockRow = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var InStockService;
        (function (InStockService) {
            InStockService.baseUrl = 'Stock/InStock';
            [
                'Commit',
                'Audit',
                'Reject',
                'UnAudit',
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InStockService[x] = function (r, s, o) {
                    return Q.serviceRequest(InStockService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InStockService = Stock.InStockService || (Stock.InStockService = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var MoveRecordForm = /** @class */ (function (_super) {
            __extends(MoveRecordForm, _super);
            function MoveRecordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MoveRecordForm.init) {
                    MoveRecordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(MoveRecordForm, [
                        'MovCode', w0,
                        'FromStockId', w1,
                        'FromMaterialId', w2,
                        'FromUnitId', w2,
                        'FromWarehouseId', w1,
                        'FromPositionId', w1,
                        'FromLotId', w2,
                        'Qty', w3,
                        'ToStockId', w1,
                        'ToMaterialId', w2,
                        'ToUnitId', w2,
                        'ToWarehouseId', w1,
                        'ToPositionId', w1,
                        'ToLotId', w2,
                        'BizBillType', w0,
                        'BizBillId', w1,
                        'BizItemId', w1,
                        'Status', w0
                    ]);
                }
                return _this;
            }
            MoveRecordForm.formKey = 'Stock.MoveRecord';
            return MoveRecordForm;
        }(Serenity.PrefixedContext));
        Stock.MoveRecordForm = MoveRecordForm;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var MoveRecordRow;
        (function (MoveRecordRow) {
            MoveRecordRow.idProperty = 'Id';
            MoveRecordRow.isActiveProperty = 'IsActive';
            MoveRecordRow.localTextPrefix = 'Stock.MoveRecord';
            MoveRecordRow.deletePermission = '*';
            MoveRecordRow.insertPermission = '*';
            MoveRecordRow.readPermission = '*';
            MoveRecordRow.updatePermission = '*';
        })(MoveRecordRow = Stock.MoveRecordRow || (Stock.MoveRecordRow = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var MoveRecordService;
        (function (MoveRecordService) {
            MoveRecordService.baseUrl = 'Stock/MoveRecord';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MoveRecordService[x] = function (r, s, o) {
                    return Q.serviceRequest(MoveRecordService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MoveRecordService = Stock.MoveRecordService || (Stock.MoveRecordService = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var StockDataForm = /** @class */ (function (_super) {
            __extends(StockDataForm, _super);
            function StockDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StockDataForm.init) {
                    StockDataForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(StockDataForm, [
                        'MaterialId', w0,
                        'Qty', w1,
                        'ReservedQty', w1,
                        'AvailableQty', w1,
                        'UnitId', w0,
                        'LotId', w0,
                        'WarehouseId', w2,
                        'BuyPrice', w1,
                        'BuyAmount', w1,
                        'SalePrice', w1,
                        'SaleAmount', w1,
                        'Specification', w2
                    ]);
                }
                return _this;
            }
            StockDataForm.formKey = 'Stock.StockData';
            return StockDataForm;
        }(Serenity.PrefixedContext));
        Stock.StockDataForm = StockDataForm;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var StockDataRow;
        (function (StockDataRow) {
            StockDataRow.idProperty = 'Id';
            StockDataRow.isActiveProperty = 'IsActive';
            StockDataRow.nameProperty = 'Specification';
            StockDataRow.localTextPrefix = 'Stock.StockData';
            StockDataRow.deletePermission = '*';
            StockDataRow.insertPermission = '*';
            StockDataRow.readPermission = '*';
            StockDataRow.updatePermission = '*';
        })(StockDataRow = Stock.StockDataRow || (Stock.StockDataRow = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var StockDataService;
        (function (StockDataService) {
            StockDataService.baseUrl = 'Stock/StockData';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StockDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(StockDataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StockDataService = Stock.StockDataService || (Stock.StockDataService = {}));
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sys;
    (function (Sys) {
        var DocumentCodeConfigForm = /** @class */ (function (_super) {
            __extends(DocumentCodeConfigForm, _super);
            function DocumentCodeConfigForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DocumentCodeConfigForm.init) {
                    DocumentCodeConfigForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(DocumentCodeConfigForm, [
                        'DocumentKind', w0,
                        'DocumentCodePrefix', w1
                    ]);
                }
                return _this;
            }
            DocumentCodeConfigForm.formKey = 'Sys.DocumentCodeConfig';
            return DocumentCodeConfigForm;
        }(Serenity.PrefixedContext));
        Sys.DocumentCodeConfigForm = DocumentCodeConfigForm;
    })(Sys = Kun.Sys || (Kun.Sys = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sys;
    (function (Sys) {
        var DocumentCodeConfigRow;
        (function (DocumentCodeConfigRow) {
            DocumentCodeConfigRow.idProperty = 'Id';
            DocumentCodeConfigRow.isActiveProperty = 'IsActive';
            DocumentCodeConfigRow.nameProperty = 'DocumentCodePrefix';
            DocumentCodeConfigRow.localTextPrefix = 'Sys.DocumentCodeConfig';
            DocumentCodeConfigRow.deletePermission = '*';
            DocumentCodeConfigRow.insertPermission = '*';
            DocumentCodeConfigRow.readPermission = '*';
            DocumentCodeConfigRow.updatePermission = '*';
        })(DocumentCodeConfigRow = Sys.DocumentCodeConfigRow || (Sys.DocumentCodeConfigRow = {}));
    })(Sys = Kun.Sys || (Kun.Sys = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sys;
    (function (Sys) {
        var DocumentCodeConfigService;
        (function (DocumentCodeConfigService) {
            DocumentCodeConfigService.baseUrl = 'Sys/DocumentCodeConfig';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DocumentCodeConfigService[x] = function (r, s, o) {
                    return Q.serviceRequest(DocumentCodeConfigService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DocumentCodeConfigService = Sys.DocumentCodeConfigService || (Sys.DocumentCodeConfigService = {}));
    })(Sys = Kun.Sys || (Kun.Sys = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sys;
    (function (Sys) {
        var Enum;
        (function (Enum) {
            var DocumentKind;
            (function (DocumentKind) {
                DocumentKind[DocumentKind["Material"] = 1] = "Material";
                DocumentKind[DocumentKind["Customer"] = 2] = "Customer";
                DocumentKind[DocumentKind["Supplier"] = 3] = "Supplier";
                DocumentKind[DocumentKind["InStockBill"] = 10] = "InStockBill";
                DocumentKind[DocumentKind["MaintBill"] = 20] = "MaintBill";
                DocumentKind[DocumentKind["SaleOrderBill"] = 30] = "SaleOrderBill";
            })(DocumentKind = Enum.DocumentKind || (Enum.DocumentKind = {}));
            Serenity.Decorators.registerEnumType(DocumentKind, 'Kun.Sys.Enum.DocumentKind', 'Sys.DocumentKind');
        })(Enum = Sys.Enum || (Sys.Enum = {}));
    })(Sys = Kun.Sys || (Kun.Sys = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Texts;
    (function (Texts) {
        Kun['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { DataAuditLog: { FieldName: 1, LogDate: 1, LogId: 1, LogType: 1, NewValue: 1, OldValue: 1, RecordId: 1, Tablename: 1, UserDisplayName: 1, UserId: 1, Username: 1 }, Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleKey: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, ImpersonationToken: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, MobilePhoneNumber: 1, MobilePhoneVerified: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TwoFactorAuth: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Basic: { Customer: { Code: 1, Contacts: 1, Description: 1, Id: 1, Mobile: 1, Name: 1 }, Lot: { Code: 1, Id: 1, MaterialId: 1 }, Material: { Code: 1, CodeName: 1, GroupId: 1, GroupName: 1, Id: 1, IsBatch: 1, IsVirtual: 1, Name: 1, OldCode: 1, SafetyStock: 1, UnitCode: 1, UnitId: 1 }, MaterialGroup: { Code: 1, Id: 1, Name: 1 }, Position: { Code: 1, Id: 1, Name: 1, WarehouseId: 1, WarehouseName: 1 }, Supplier: { Code: 1, Contacts: 1, Description: 1, Id: 1, Mobile: 1, Name: 1 }, Unit: { Code: 1, Decim: 1, Id: 1, Name: 1 }, Vendor: { Code: 1, Contacts: 1, Description: 1, Id: 1, Mobile: 1, Name: 1 }, Warehouse: { Code: 1, Description: 1, Id: 1, Name: 1, UsePosition: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Ops: { Maintenance: { Address: 1, ApproverDate: 1, ApproverId: 1, ApproverName: 1, BillNo: 1, BillType: 1, ChangeDevice: 1, Content: 1, CustomerComment: 1, CustomerConfirmDate: 1, Date: 1, Description: 1, Id: 1, Manhours: 1, Materials: 1, Note: 1, ReportCustomerId: 1, ReportCustomerName: 1, ReportDate: 1, Reporter: 1, ReporterComment: 1, ReporterConfirmDate: 1, ResponsibleId: 1, ResponsibleName: 1, ServicerCost: 1, SettleCustomerId: 1, SettleCustomerName: 1, Status: 1, TypeId: 1, TypeName: 1, VendorId: 1, VendorName: 1 }, MaintenanceManhours: { Amount: 1, HeadId: 1, Id: 1, ManhourId: 1, ManhourName: 1, Note: 1, Price: 1, Qty: 1, Serial: 1 }, MaintenanceMaterials: { BillNo: 1, HeadId: 1, HeadStatus: 1, Id: 1, LotCode: 1, LotId: 1, MaterialCode: 1, MaterialId: 1, MaterialName: 1, PositionId: 1, PositionName: 1, Qty: 1, SaleAmount: 1, SalePrice: 1, Serial: 1, Specification: 1, StockDataId: 1, UnitId: 1, UnitName: 1, WarehouseId: 1, WarehouseName: 1 }, MaintenanceType: { Id: 1, Name: 1, Sort: 1 }, ManhourPrice: { Id: 1, Name: 1, Price: 1 } }, Sell: { SaleOrder: { ApproverDate: 1, ApproverId: 1, BillNo: 1, BillType: 1, CustomerId: 1, Date: 1, Id: 1, Note: 1, SettleCustomerId: 1, Status: 1 }, SaleOrderItem: { HeadId: 1, Id: 1, LotId: 1, MaterialId: 1, MaterialName: 1, PositionId: 1, Qty: 1, SaleAmount: 1, SalePrice: 1, Serial: 1, Specification: 1, StockDataId: 1, UnitId: 1, UnitName: 1, WarehouseId: 1 } }, Stock: { InStock: { ApproverDate: 1, ApproverId: 1, ApproverName: 1, BillNo: 1, BillType: 1, Date: 1, Id: 1, Items: 1, Note: 1, Status: 1 }, InStockItem: { ApproverDate: 1, ApproverId: 1, ApproverName: 1, BillNo: 1, BuyAmount: 1, BuyPrice: 1, ConfirmQty: 1, DeliveryQty: 1, HeadDate: 1, HeadId: 1, HeadStatus: 1, HeadType: 1, Id: 1, InvoiceType: 1, InvoiceTypeName: 1, LotCode: 1, LotId: 1, MaterialCode: 1, MaterialId: 1, MaterialName: 1, PositionId: 1, PositionName: 1, SaleAmount: 1, SalePrice: 1, Specification: 1, Status: 1, SupplierId: 1, SupplierName: 1, UnitId: 1, UnitName: 1, WarehouseId: 1, WarehouseName: 1 }, MoveRecord: { BizBillCode: 1, BizBillId: 1, BizBillType: 1, BizItemId: 1, FromLotCode: 1, FromLotId: 1, FromMaterialCode: 1, FromMaterialId: 1, FromMaterialName: 1, FromPositionId: 1, FromPositionName: 1, FromStockId: 1, FromUnitId: 1, FromUnitName: 1, FromWarehouseId: 1, FromWarehouseName: 1, Id: 1, MovCode: 1, Qty: 1, Status: 1, ToLotCode: 1, ToLotId: 1, ToMaterialCode: 1, ToMaterialId: 1, ToMaterialName: 1, ToPositionId: 1, ToPositionName: 1, ToStockId: 1, ToUnitId: 1, ToUnitName: 1, ToWarehouseId: 1, ToWarehouseName: 1 }, StockData: { AvailableQty: 1, BuyAmount: 1, BuyPrice: 1, Id: 1, LotCode: 1, LotId: 1, MaterialCode: 1, MaterialId: 1, MaterialName: 1, PositionId: 1, PositionName: 1, Qty: 1, ReservedQty: 1, SaleAmount: 1, SalePrice: 1, Specification: 1, UnitId: 1, UnitName: 1, WarehouseId: 1, WarehouseName: 1 } }, Sys: { DocumentCodeConfig: { DocumentCodePrefix: 1, DocumentKind: 1, Id: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, CardViewMixin: { CardView: 1, ListView: 1 }, Dashboard: { ContentDescription: 1 }, Dialogs: { PendingChangesConfirmation: 1 }, DraggableGroupingMixin: { CollapseAllButton: 1, DropPlaceholder: 1, ExpandAllButton: 1 }, EmailClient: { BackButton: 1, CCLabel: 1, CancelButton: 1, ComposeButton: 1, DeleteButton: 1, DeleteMessageConfirmation: 1, DeleteMessageSuccess: 1, DeleteNoSelectionWarning: 1, DeleteSelectedConfirmation: 1, DeleteSelectedSuccess: 1, FolderNames: { drafts: 1, inbox: 1, junk: 1, sent: 1, trash: 1 }, FoldersTitle: 1, ForwardButton: 1, ImapHost: 1, ImapPassword: 1, ImapPort: 1, ImapUsername: 1, LoginButton: 1, LoginTitle: 1, MoveMessageSuccess: 1, MoveNoSelectionWarning: 1, MoveSelectedSuccess: 1, MoveToFolder: 1, NewEmailDialogTitle: 1, PageTitle: 1, QuickSettings: 1, RefreshButton: 1, ReplyAllButton: 1, ReplyButton: 1, ReplyEmailDialogTitle: 1, SearchPlaceholder: 1, SendButton: 1, SignoutButton: 1, SmtpHost: 1, SmtpPassword: 1, SmtpPort: 1, SmtpUsername: 1, ToLabel: 1, ToggleReadButton: 1, ToggleSeenNoSelectionWarning: 1 }, FavoriteViewsMixin: { DeleteButtonHint: 1, DeleteSuccessMessage: 1, EmptyNameError: 1, FavoriteViews: 1, LoadedViewMessage: 1, SaveButton: 1, SaveSuccessMessage: 1, SaveView: 1 }, HeaderFiltersMixin: { CancelButton: 1, ClearButton: 1, OkButton: 1, Search: 1, SelectAll: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeAzure: 1, ThemeAzureLight: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeCosmos: 1, ThemeCosmosLight: 1, ThemeGlassy: 1, ThemeGlassyLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 }, WizardDialog: { BackButton: 1, CancelMessage: 1, FinishButton: 1, NextButton: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Kun.Texts || (Kun.Texts = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var DataAuditLogDialog = /** @class */ (function (_super) {
            __extends(DataAuditLogDialog, _super);
            function DataAuditLogDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.DataAuditLogForm(_this.idPrefix);
                return _this;
            }
            DataAuditLogDialog.prototype.getFormKey = function () { return Administration.DataAuditLogForm.formKey; };
            DataAuditLogDialog.prototype.getIdProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogDialog.prototype.getNameProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogDialog.prototype.getLocalTextPrefix = function () { return Administration.DataAuditLogRow.localTextPrefix; };
            DataAuditLogDialog.prototype.getService = function () { return Administration.DataAuditLogService.baseUrl; };
            DataAuditLogDialog.prototype.getToolbarButtons = function () {
                return [];
            };
            DataAuditLogDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
            };
            DataAuditLogDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], DataAuditLogDialog);
            return DataAuditLogDialog;
        }(Serenity.EntityDialog));
        Administration.DataAuditLogDialog = DataAuditLogDialog;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var DataAuditLogGrid = /** @class */ (function (_super) {
            __extends(DataAuditLogGrid, _super);
            function DataAuditLogGrid(container) {
                return _super.call(this, container) || this;
            }
            DataAuditLogGrid.prototype.getColumnsKey = function () { return 'Administration.DataAuditLog'; };
            DataAuditLogGrid.prototype.getDialogType = function () { return Administration.DataAuditLogDialog; };
            DataAuditLogGrid.prototype.getIdProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogGrid.prototype.getLocalTextPrefix = function () { return Administration.DataAuditLogRow.localTextPrefix; };
            DataAuditLogGrid.prototype.getService = function () { return Administration.DataAuditLogService.baseUrl; };
            DataAuditLogGrid.prototype.getButtons = function () {
                return [];
            };
            DataAuditLogGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === "LogType" /* LogType */; }).format = function (ctx) {
                    var icon = null;
                    switch (ctx.value) {
                        case Administration.DataAuditLogType.Delete:
                            icon = "fa-times text-red";
                            break;
                        case Administration.DataAuditLogType.Insert:
                            icon = "fa-plus text-green";
                            break;
                        case Administration.DataAuditLogType.Update:
                            icon = "fa-pencil-square-o text-orange";
                            break;
                    }
                    return (icon ? '<i class="fa ' + icon + '"></i> ' : '') +
                        Serenity.EnumFormatter.format(Administration.DataAuditLogType, ctx.value);
                };
                return columns;
            };
            DataAuditLogGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DataAuditLogGrid);
            return DataAuditLogGrid;
        }(Serenity.EntityGrid));
        Administration.DataAuditLogGrid = DataAuditLogGrid;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var SergenPanel = /** @class */ (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var impersonate = Q.tryFirst(columns, function (x) { return x.field == "ImpersonationToken"; });
                if (impersonate != null) {
                    impersonate.format = function (ctx) {
                        if (!ctx.value)
                            return "";
                        return "<a target=\"_blank\" href=\"" + Q.resolveUrl('~/Account/ImpersonateAs?token=') + ctx.value + "\">"
                            + "<i class=\"fa fa-user-secret text-blue\"></i></a>";
                    };
                }
                return columns;
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Kun.Authorization || (Kun.Authorization = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Kun.Administration || (Kun.Administration = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Basic.CustomerForm(_this.idPrefix);
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Basic.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Basic.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Basic.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Basic.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Basic.CustomerService.baseUrl; };
            CustomerDialog.prototype.getDeletePermission = function () { return Basic.CustomerRow.deletePermission; };
            CustomerDialog.prototype.getInsertPermission = function () { return Basic.CustomerRow.insertPermission; };
            CustomerDialog.prototype.getUpdatePermission = function () { return Basic.CustomerRow.updatePermission; };
            CustomerDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadonly(this.byId('Code'), true);
                }
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Basic.CustomerDialog = CustomerDialog;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return 'Basic.Customer'; };
            CustomerGrid.prototype.getDialogType = function () { return Basic.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Basic.CustomerRow.idProperty; };
            CustomerGrid.prototype.getInsertPermission = function () { return Basic.CustomerRow.insertPermission; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Basic.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Basic.CustomerService.baseUrl; };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Basic.CustomerGrid = CustomerGrid;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var LotDialog = /** @class */ (function (_super) {
            __extends(LotDialog, _super);
            function LotDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Basic.LotForm(_this.idPrefix);
                return _this;
            }
            LotDialog.prototype.getFormKey = function () { return Basic.LotForm.formKey; };
            LotDialog.prototype.getIdProperty = function () { return Basic.LotRow.idProperty; };
            LotDialog.prototype.getLocalTextPrefix = function () { return Basic.LotRow.localTextPrefix; };
            LotDialog.prototype.getNameProperty = function () { return Basic.LotRow.nameProperty; };
            LotDialog.prototype.getService = function () { return Basic.LotService.baseUrl; };
            LotDialog.prototype.getDeletePermission = function () { return Basic.LotRow.deletePermission; };
            LotDialog.prototype.getInsertPermission = function () { return Basic.LotRow.insertPermission; };
            LotDialog.prototype.getUpdatePermission = function () { return Basic.LotRow.updatePermission; };
            LotDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LotDialog);
            return LotDialog;
        }(Serenity.EntityDialog));
        Basic.LotDialog = LotDialog;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var LotGrid = /** @class */ (function (_super) {
            __extends(LotGrid, _super);
            function LotGrid(container) {
                return _super.call(this, container) || this;
            }
            LotGrid.prototype.getColumnsKey = function () { return 'Basic.Lot'; };
            LotGrid.prototype.getDialogType = function () { return Basic.LotDialog; };
            LotGrid.prototype.getIdProperty = function () { return Basic.LotRow.idProperty; };
            LotGrid.prototype.getInsertPermission = function () { return Basic.LotRow.insertPermission; };
            LotGrid.prototype.getLocalTextPrefix = function () { return Basic.LotRow.localTextPrefix; };
            LotGrid.prototype.getService = function () { return Basic.LotService.baseUrl; };
            LotGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LotGrid);
            return LotGrid;
        }(Serenity.EntityGrid));
        Basic.LotGrid = LotGrid;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialDialog = /** @class */ (function (_super) {
            __extends(MaterialDialog, _super);
            function MaterialDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Basic.MaterialForm(_this.idPrefix);
                return _this;
            }
            MaterialDialog.prototype.getFormKey = function () { return Basic.MaterialForm.formKey; };
            MaterialDialog.prototype.getIdProperty = function () { return Basic.MaterialRow.idProperty; };
            MaterialDialog.prototype.getLocalTextPrefix = function () { return Basic.MaterialRow.localTextPrefix; };
            MaterialDialog.prototype.getNameProperty = function () { return Basic.MaterialRow.nameProperty; };
            MaterialDialog.prototype.getService = function () { return Basic.MaterialService.baseUrl; };
            MaterialDialog.prototype.getDeletePermission = function () { return Basic.MaterialRow.deletePermission; };
            MaterialDialog.prototype.getInsertPermission = function () { return Basic.MaterialRow.insertPermission; };
            MaterialDialog.prototype.getUpdatePermission = function () { return Basic.MaterialRow.updatePermission; };
            MaterialDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadonly(this.byId('Code'), true);
                }
            };
            MaterialDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaterialDialog);
            return MaterialDialog;
        }(Serenity.EntityDialog));
        Basic.MaterialDialog = MaterialDialog;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialGrid = /** @class */ (function (_super) {
            __extends(MaterialGrid, _super);
            function MaterialGrid(container) {
                return _super.call(this, container) || this;
            }
            MaterialGrid.prototype.getColumnsKey = function () { return 'Basic.Material'; };
            MaterialGrid.prototype.getDialogType = function () { return Basic.MaterialDialog; };
            MaterialGrid.prototype.getIdProperty = function () { return Basic.MaterialRow.idProperty; };
            MaterialGrid.prototype.getInsertPermission = function () { return Basic.MaterialRow.insertPermission; };
            MaterialGrid.prototype.getLocalTextPrefix = function () { return Basic.MaterialRow.localTextPrefix; };
            MaterialGrid.prototype.getService = function () { return Basic.MaterialService.baseUrl; };
            MaterialGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                // add our import button
                buttons.push(Kun.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Basic.MaterialService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push({
                    title: '批量导入',
                    // cssClass: 'export-xlsx-button',
                    icon: 'fa-database',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new Basic.MaterialImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            MaterialGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaterialGrid);
            return MaterialGrid;
        }(Serenity.EntityGrid));
        Basic.MaterialGrid = MaterialGrid;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialImportDialog = /** @class */ (function (_super) {
            __extends(MaterialImportDialog, _super);
            function MaterialImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Basic.MaterialImportForm(_this.idPrefix);
                return _this;
            }
            MaterialImportDialog.prototype.getFormKey = function () { return Basic.MaterialImportForm.formKey; };
            MaterialImportDialog.prototype.getDialogTitle = function () {
                return "Excel导入";
            };
            MaterialImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [{
                        text: '下载模板',
                        click: function () {
                            var url = "~/upload\\DataUploadTemplate\\物料模板.xlsx";
                            window.open(Q.resolveUrl(url));
                        }
                    },
                    {
                        text: '导入',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("请选择文件!");
                                return;
                            }
                            Basic.MaterialService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('共计导入: ' + (response.Inserted || 0) + '行！');
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: '取消',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            MaterialImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaterialImportDialog);
            return MaterialImportDialog;
        }(Serenity.PropertyDialog));
        Basic.MaterialImportDialog = MaterialImportDialog;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialGroupDialog = /** @class */ (function (_super) {
            __extends(MaterialGroupDialog, _super);
            function MaterialGroupDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Basic.MaterialGroupForm(_this.idPrefix);
                return _this;
            }
            MaterialGroupDialog.prototype.getFormKey = function () { return Basic.MaterialGroupForm.formKey; };
            MaterialGroupDialog.prototype.getIdProperty = function () { return Basic.MaterialGroupRow.idProperty; };
            MaterialGroupDialog.prototype.getLocalTextPrefix = function () { return Basic.MaterialGroupRow.localTextPrefix; };
            MaterialGroupDialog.prototype.getNameProperty = function () { return Basic.MaterialGroupRow.nameProperty; };
            MaterialGroupDialog.prototype.getService = function () { return Basic.MaterialGroupService.baseUrl; };
            MaterialGroupDialog.prototype.getDeletePermission = function () { return Basic.MaterialGroupRow.deletePermission; };
            MaterialGroupDialog.prototype.getInsertPermission = function () { return Basic.MaterialGroupRow.insertPermission; };
            MaterialGroupDialog.prototype.getUpdatePermission = function () { return Basic.MaterialGroupRow.updatePermission; };
            MaterialGroupDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadonly(this.byId('Code'), true);
                }
            };
            MaterialGroupDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaterialGroupDialog);
            return MaterialGroupDialog;
        }(Serenity.EntityDialog));
        Basic.MaterialGroupDialog = MaterialGroupDialog;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var MaterialGroupGrid = /** @class */ (function (_super) {
            __extends(MaterialGroupGrid, _super);
            function MaterialGroupGrid(container) {
                return _super.call(this, container) || this;
            }
            MaterialGroupGrid.prototype.getColumnsKey = function () { return 'Basic.MaterialGroup'; };
            MaterialGroupGrid.prototype.getDialogType = function () { return Basic.MaterialGroupDialog; };
            MaterialGroupGrid.prototype.getIdProperty = function () { return Basic.MaterialGroupRow.idProperty; };
            MaterialGroupGrid.prototype.getInsertPermission = function () { return Basic.MaterialGroupRow.insertPermission; };
            MaterialGroupGrid.prototype.getLocalTextPrefix = function () { return Basic.MaterialGroupRow.localTextPrefix; };
            MaterialGroupGrid.prototype.getService = function () { return Basic.MaterialGroupService.baseUrl; };
            MaterialGroupGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaterialGroupGrid);
            return MaterialGroupGrid;
        }(Serenity.EntityGrid));
        Basic.MaterialGroupGrid = MaterialGroupGrid;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var PositionDialog = /** @class */ (function (_super) {
            __extends(PositionDialog, _super);
            function PositionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Basic.PositionForm(_this.idPrefix);
                return _this;
            }
            PositionDialog.prototype.getFormKey = function () { return Basic.PositionForm.formKey; };
            PositionDialog.prototype.getIdProperty = function () { return Basic.PositionRow.idProperty; };
            PositionDialog.prototype.getLocalTextPrefix = function () { return Basic.PositionRow.localTextPrefix; };
            PositionDialog.prototype.getNameProperty = function () { return Basic.PositionRow.nameProperty; };
            PositionDialog.prototype.getService = function () { return Basic.PositionService.baseUrl; };
            PositionDialog.prototype.getDeletePermission = function () { return Basic.PositionRow.deletePermission; };
            PositionDialog.prototype.getInsertPermission = function () { return Basic.PositionRow.insertPermission; };
            PositionDialog.prototype.getUpdatePermission = function () { return Basic.PositionRow.updatePermission; };
            PositionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PositionDialog);
            return PositionDialog;
        }(Serenity.EntityDialog));
        Basic.PositionDialog = PositionDialog;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var PositionGrid = /** @class */ (function (_super) {
            __extends(PositionGrid, _super);
            function PositionGrid(container) {
                return _super.call(this, container) || this;
            }
            PositionGrid.prototype.getColumnsKey = function () { return 'Basic.Position'; };
            PositionGrid.prototype.getDialogType = function () { return Basic.PositionDialog; };
            PositionGrid.prototype.getIdProperty = function () { return Basic.PositionRow.idProperty; };
            PositionGrid.prototype.getInsertPermission = function () { return Basic.PositionRow.insertPermission; };
            PositionGrid.prototype.getLocalTextPrefix = function () { return Basic.PositionRow.localTextPrefix; };
            PositionGrid.prototype.getService = function () { return Basic.PositionService.baseUrl; };
            PositionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PositionGrid);
            return PositionGrid;
        }(Serenity.EntityGrid));
        Basic.PositionGrid = PositionGrid;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var SupplierDialog = /** @class */ (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Basic.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Basic.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Basic.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Basic.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Basic.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Basic.SupplierService.baseUrl; };
            SupplierDialog.prototype.getDeletePermission = function () { return Basic.SupplierRow.deletePermission; };
            SupplierDialog.prototype.getInsertPermission = function () { return Basic.SupplierRow.insertPermission; };
            SupplierDialog.prototype.getUpdatePermission = function () { return Basic.SupplierRow.updatePermission; };
            SupplierDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadonly(this.byId('Code'), true);
                }
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Basic.SupplierDialog = SupplierDialog;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var SupplierGrid = /** @class */ (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return 'Basic.Supplier'; };
            SupplierGrid.prototype.getDialogType = function () { return Basic.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Basic.SupplierRow.idProperty; };
            SupplierGrid.prototype.getInsertPermission = function () { return Basic.SupplierRow.insertPermission; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Basic.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Basic.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Basic.SupplierGrid = SupplierGrid;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var UnitDialog = /** @class */ (function (_super) {
            __extends(UnitDialog, _super);
            function UnitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Basic.UnitForm(_this.idPrefix);
                return _this;
            }
            UnitDialog.prototype.getFormKey = function () { return Basic.UnitForm.formKey; };
            UnitDialog.prototype.getIdProperty = function () { return Basic.UnitRow.idProperty; };
            UnitDialog.prototype.getLocalTextPrefix = function () { return Basic.UnitRow.localTextPrefix; };
            UnitDialog.prototype.getNameProperty = function () { return Basic.UnitRow.nameProperty; };
            UnitDialog.prototype.getService = function () { return Basic.UnitService.baseUrl; };
            UnitDialog.prototype.getDeletePermission = function () { return Basic.UnitRow.deletePermission; };
            UnitDialog.prototype.getInsertPermission = function () { return Basic.UnitRow.insertPermission; };
            UnitDialog.prototype.getUpdatePermission = function () { return Basic.UnitRow.updatePermission; };
            UnitDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitDialog);
            return UnitDialog;
        }(Serenity.EntityDialog));
        Basic.UnitDialog = UnitDialog;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var UnitGrid = /** @class */ (function (_super) {
            __extends(UnitGrid, _super);
            function UnitGrid(container) {
                return _super.call(this, container) || this;
            }
            UnitGrid.prototype.getColumnsKey = function () { return 'Basic.Unit'; };
            UnitGrid.prototype.getDialogType = function () { return Basic.UnitDialog; };
            UnitGrid.prototype.getIdProperty = function () { return Basic.UnitRow.idProperty; };
            UnitGrid.prototype.getInsertPermission = function () { return Basic.UnitRow.insertPermission; };
            UnitGrid.prototype.getLocalTextPrefix = function () { return Basic.UnitRow.localTextPrefix; };
            UnitGrid.prototype.getService = function () { return Basic.UnitService.baseUrl; };
            UnitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitGrid);
            return UnitGrid;
        }(Serenity.EntityGrid));
        Basic.UnitGrid = UnitGrid;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var VendorDialog = /** @class */ (function (_super) {
            __extends(VendorDialog, _super);
            function VendorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Basic.VendorForm(_this.idPrefix);
                return _this;
            }
            VendorDialog.prototype.getFormKey = function () { return Basic.VendorForm.formKey; };
            VendorDialog.prototype.getIdProperty = function () { return Basic.VendorRow.idProperty; };
            VendorDialog.prototype.getLocalTextPrefix = function () { return Basic.VendorRow.localTextPrefix; };
            VendorDialog.prototype.getNameProperty = function () { return Basic.VendorRow.nameProperty; };
            VendorDialog.prototype.getService = function () { return Basic.VendorService.baseUrl; };
            VendorDialog.prototype.getDeletePermission = function () { return Basic.VendorRow.deletePermission; };
            VendorDialog.prototype.getInsertPermission = function () { return Basic.VendorRow.insertPermission; };
            VendorDialog.prototype.getUpdatePermission = function () { return Basic.VendorRow.updatePermission; };
            VendorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VendorDialog);
            return VendorDialog;
        }(Serenity.EntityDialog));
        Basic.VendorDialog = VendorDialog;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var VendorGrid = /** @class */ (function (_super) {
            __extends(VendorGrid, _super);
            function VendorGrid(container) {
                return _super.call(this, container) || this;
            }
            VendorGrid.prototype.getColumnsKey = function () { return 'Basic.Vendor'; };
            VendorGrid.prototype.getDialogType = function () { return Basic.VendorDialog; };
            VendorGrid.prototype.getIdProperty = function () { return Basic.VendorRow.idProperty; };
            VendorGrid.prototype.getInsertPermission = function () { return Basic.VendorRow.insertPermission; };
            VendorGrid.prototype.getLocalTextPrefix = function () { return Basic.VendorRow.localTextPrefix; };
            VendorGrid.prototype.getService = function () { return Basic.VendorService.baseUrl; };
            VendorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VendorGrid);
            return VendorGrid;
        }(Serenity.EntityGrid));
        Basic.VendorGrid = VendorGrid;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var WarehouseDialog = /** @class */ (function (_super) {
            __extends(WarehouseDialog, _super);
            function WarehouseDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Basic.WarehouseForm(_this.idPrefix);
                return _this;
            }
            WarehouseDialog.prototype.getFormKey = function () { return Basic.WarehouseForm.formKey; };
            WarehouseDialog.prototype.getIdProperty = function () { return Basic.WarehouseRow.idProperty; };
            WarehouseDialog.prototype.getLocalTextPrefix = function () { return Basic.WarehouseRow.localTextPrefix; };
            WarehouseDialog.prototype.getNameProperty = function () { return Basic.WarehouseRow.nameProperty; };
            WarehouseDialog.prototype.getService = function () { return Basic.WarehouseService.baseUrl; };
            WarehouseDialog.prototype.getDeletePermission = function () { return Basic.WarehouseRow.deletePermission; };
            WarehouseDialog.prototype.getInsertPermission = function () { return Basic.WarehouseRow.insertPermission; };
            WarehouseDialog.prototype.getUpdatePermission = function () { return Basic.WarehouseRow.updatePermission; };
            WarehouseDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadonly(this.byId('Code'), true);
                }
            };
            WarehouseDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WarehouseDialog);
            return WarehouseDialog;
        }(Serenity.EntityDialog));
        Basic.WarehouseDialog = WarehouseDialog;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Basic;
    (function (Basic) {
        var WarehouseGrid = /** @class */ (function (_super) {
            __extends(WarehouseGrid, _super);
            function WarehouseGrid(container) {
                return _super.call(this, container) || this;
            }
            WarehouseGrid.prototype.getColumnsKey = function () { return 'Basic.Warehouse'; };
            WarehouseGrid.prototype.getDialogType = function () { return Basic.WarehouseDialog; };
            WarehouseGrid.prototype.getIdProperty = function () { return Basic.WarehouseRow.idProperty; };
            WarehouseGrid.prototype.getInsertPermission = function () { return Basic.WarehouseRow.insertPermission; };
            WarehouseGrid.prototype.getLocalTextPrefix = function () { return Basic.WarehouseRow.localTextPrefix; };
            WarehouseGrid.prototype.getService = function () { return Basic.WarehouseService.baseUrl; };
            WarehouseGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WarehouseGrid);
            return WarehouseGrid;
        }(Serenity.EntityGrid));
        Basic.WarehouseGrid = WarehouseGrid;
    })(Basic = Kun.Basic || (Kun.Basic = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Kun.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Kun.LanguageList || (Kun.LanguageList = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
/// <reference path="../Common/UserPreference/UserPreferenceStorage.ts" />
var Kun;
(function (Kun) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Kun');
        Serenity.EntityDialog.defaultLanguageList = Kun.LanguageList.getValue;
        Serenity.DataGrid.defaultPersistanceStorage = new Kun.Common.UserPreferenceStorage();
        Q.Router.enabled = false;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        Serenity.setupUIOverrides();
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
        $(function () {
            // let demo page use its own settings for idle timeout
            if (window.location.pathname.indexOf('Samples/IdleTimeout') > 0)
                return;
            var meta = $('meta[name=username]');
            if ((meta.length && meta.attr('content')) ||
                (!meta.length && Q.Authorization.isLoggedIn)) {
                new Serenity.IdleTimeout({
                    activityTimeout: 4 * 60 * 60,
                    warningDuration: 2 * 60
                });
            }
        });
    })(ScriptInitialization = Kun.ScriptInitialization || (Kun.ScriptInitialization = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Kun.BasicProgressDialog = BasicProgressDialog;
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Kun.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm(Q.text('Site.Dialogs.PendingChangesConfirmation'), function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Kun.DialogUtils || (Kun.DialogUtils = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var addButton = Q.tryFirst(buttons, function (x) { return x.cssClass == 'add-button'; });
                if (addButton != null) {
                    addButton.onClick = function () {
                        _this.createEntityDialog(_this.getItemType(), function (dlg) {
                            var dialog = dlg;
                            dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                            _this.transferDialogReadOnly(dialog);
                            dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                        });
                    };
                }
                return buttons.filter(function (x) { return x.cssClass != "refresh-button"; });
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    _this.transferDialogReadOnly(dialog);
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Membership;
    (function (Membership) {
        var PromptDialog = /** @class */ (function (_super) {
            __extends(PromptDialog, _super);
            function PromptDialog(opt) {
                var _this = _super.call(this, opt) || this;
                if (!Q.isEmptyOrNull(_this.options.cssClass))
                    _this.element.addClass(_this.options.cssClass);
                if (!Q.isEmptyOrNull(_this.options.message)) {
                    var msg = $("<div/>").addClass("message")
                        .insertBefore(_this.byId("PropertyGrid"));
                    _this.options.isHtml ? msg.html(_this.options.message) : msg.text(_this.options.message);
                }
                return _this;
            }
            PromptDialog_1 = PromptDialog;
            PromptDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text("Dialogs.OkButton"),
                        click: function () {
                            if (!_this.validateForm())
                                return;
                            if (_this.options.validateValue == null || _this.options.validateValue(_this.value))
                                _this.dialogClose();
                        },
                    },
                    {
                        text: Q.text("Dialogs.CancelButton"),
                        click: function () { return _this.dialogClose; }
                    }
                ];
                opt.title = this.options.title || "Prompt";
                return opt;
            };
            PromptDialog.prototype.loadInitialEntity = function () {
                this.value = this.options.value;
            };
            PromptDialog.prototype.getPropertyItems = function () {
                return [
                    {
                        name: "Value",
                        editorType: this.options.editorType || "String",
                        required: Q.coalesce(this.options.required, true),
                        editorParams: this.options.editorOptions
                    }
                ];
            };
            Object.defineProperty(PromptDialog.prototype, "value", {
                get: function () {
                    return this.getSaveEntity().Value;
                },
                set: function (v) {
                    this.propertyGrid.load({
                        Value: v
                    });
                },
                enumerable: true,
                configurable: true
            });
            PromptDialog.prompt = function (title, message, value, validateValue) {
                new PromptDialog_1({
                    title: title,
                    message: message,
                    value: value,
                    validateValue: function (v) { return validateValue(v); }
                }).dialogOpen();
            };
            var PromptDialog_1;
            PromptDialog = PromptDialog_1 = __decorate([
                Serenity.Decorators.registerClass()
            ], PromptDialog);
            return PromptDialog;
        }(Serenity.PropertyDialog));
        Membership.PromptDialog = PromptDialog;
    })(Membership = Kun.Membership || (Kun.Membership = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var ServiceEditorBase = /** @class */ (function (_super) {
        __extends(ServiceEditorBase, _super);
        function ServiceEditorBase(hidden, options) {
            var _this = _super.call(this, hidden, options) || this;
            _this.setCascadeFrom(_this.options.cascadeFrom);
            return _this;
        }
        ServiceEditorBase.prototype.setCascadeFrom = function (value) {
            var _this = this;
            if (Q.isEmptyOrNull(value)) {
                if (this.cascadeLink) {
                    this.cascadeLink.set_parentID(null);
                    this.cascadeLink = null;
                }
                this.options.cascadeFrom = null;
                return;
            }
            this.cascadeLink = new Serenity.CascadedWidgetLink(Serenity.Widget, this, function (p) { return _this.cascadeValue = _this.getCascadeFromValue(p); });
            this.cascadeLink.set_parentID(value);
            this.options.cascadeFrom = value;
        };
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeValue", {
            get: function () {
                return this.options.cascadeValue;
            },
            set: function (value) {
                if (value !== this.options.cascadeValue) {
                    this.options.cascadeValue = value;
                    this.value = null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeField", {
            get: function () {
                return this.options.cascadeField || this.options.cascadeFrom;
            },
            set: function (value) {
                this.options.cascadeField = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeFrom", {
            get: function () {
                return this.options.cascadeFrom;
            },
            set: function (value) {
                if (value !== this.options.cascadeFrom) {
                    this.setCascadeFrom(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        ServiceEditorBase.prototype.getCascadeFromValue = function (parent) {
            return Serenity.EditorUtils.getValue(parent);
        };
        ServiceEditorBase.prototype.getIncludeColumns = function () {
            return [];
        };
        ServiceEditorBase.prototype.getSort = function () {
            return [];
        };
        ServiceEditorBase.prototype.getTypeDelay = function () {
            return 500;
        };
        ServiceEditorBase.prototype.executeQueryByKey = function (options) {
            var request = options.request;
            request.ColumnSelection = 1 /* keyOnly */;
            request.IncludeColumns = this.getIncludeColumns();
            _super.prototype.executeQueryByKey.call(this, options);
        };
        ServiceEditorBase.prototype.executeQuery = function (options) {
            var _this = this;
            var request = options.request;
            request.ColumnSelection = 1 /* KeyOnly */;
            request.IncludeColumns = this.getIncludeColumns();
            request.Sort = this.getSort();
            request.ExcludeTotalCount = true;
            if (this.cascadeField) {
                request.EqualityFilter = request.EqualityFilter || {};
                request.EqualityFilter[this.cascadeField] = this.cascadeValue;
            }
            options.blockUI = false;
            options.error = function () { };
            if (this.lastRequest != null && this.lastRequest.readyState != XMLHttpRequest.DONE)
                this.lastRequest.abort();
            this.lastRequest = Q.serviceCall(options);
            this.lastRequest.then(function () { return _this.lastRequest = null; }, function () { return _this.lastRequest = null; });
        };
        ServiceEditorBase = __decorate([
            Serenity.Decorators.registerClass()
        ], ServiceEditorBase);
        return ServiceEditorBase;
    }(Serenity.Select2AjaxEditor));
    Kun.ServiceEditorBase = ServiceEditorBase;
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    Kun.StaticTextBlock = StaticTextBlock;
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('KunTheme', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'azure', Q.text('Site.Layout.ThemeAzure'));
                Q.addOption(select, 'azure-light', Q.text('Site.Layout.ThemeAzureLight'));
                Q.addOption(select, 'cosmos', Q.text('Site.Layout.ThemeCosmos'));
                Q.addOption(select, 'cosmos-light', Q.text('Site.Layout.ThemeCosmosLight'));
                Q.addOption(select, 'glassy', Q.text('Site.Layout.ThemeGlassy'));
                Q.addOption(select, 'glassy-light', Q.text('Site.Layout.ThemeGlassyLight'));
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport && !this.report.IsExternalReport);
                this.toolbar.findButton('run-button')
                    .toggle(this.report && this.report.IsExternalReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport && !this.report.IsExternalReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport && !this.report.IsExternalReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'Run',
                        cssClass: 'run-button',
                        icon: 'fa-print text-blue',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Kun.Common || (Kun.Common = {}));
})(Kun || (Kun = {}));
var M;
(function (M) {
    M.defaultNotifyOptions = {
        timeOut: 3000,
        showDuration: 250,
        hideDuration: 500,
        extendedTimeOut: 500,
        positionClass: 'toast-bottom-right'
    };
    function getToastrOptions(options) {
        options = $.extend({}, M.defaultNotifyOptions, options);
        return options;
    }
    function notifyWarning(message, title, options) {
        toastr.warning(message, title, getToastrOptions(options));
    }
    M.notifyWarning = notifyWarning;
    function notifySuccess(message, title, options) {
        toastr.success(message, title, getToastrOptions(options));
    }
    M.notifySuccess = notifySuccess;
    function notifyInfo(message, title, options) {
        toastr.info(message, title, getToastrOptions(options));
    }
    M.notifyInfo = notifyInfo;
    function notifyError(message, title, options) {
        toastr.error(message, title, getToastrOptions(options));
    }
    M.notifyError = notifyError;
})(M || (M = {}));
var Kun;
(function (Kun) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
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
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "TwoFactorAuthenticationRequired") {
                                var args = response.Error.Arguments.split('|');
                                _this.handleTwoFactorAuthentication(request.Username, request.Password, args[1], args[0]);
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
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
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
            };
            LoginPanel.prototype.handleTwoFactorAuthentication = function (user, pass, twoFactorGuid, info) {
                var _this = this;
                var tries = 0;
                var remaining = 120;
                var dialog = null;
                var showDialog = function () {
                    dialog = new Membership.PromptDialog({
                        title: "Two Factor Authentication",
                        editorOptions: {
                            maxLength: 4,
                        },
                        editorType: "Integer",
                        message: info,
                        isHtml: true,
                        required: true,
                        validateValue: function (x) {
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
                                    onSuccess: function (r) {
                                        _this.redirectToReturnUrl();
                                        return;
                                    },
                                    onError: function (z) {
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
                }
                ;
                showDialog();
                window.setTimeout(updateCounter, 1000);
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = Kun.Membership || (Kun.Membership = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Kun.Membership || (Kun.Membership = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Kun.Membership || (Kun.Membership = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Kun.Membership || (Kun.Membership = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Kun.Membership || (Kun.Membership = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceDialog = /** @class */ (function (_super) {
            __extends(MaintenanceDialog, _super);
            function MaintenanceDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Ops.MaintenanceForm(_this.idPrefix);
                _this.form.ChangeDevice.change(function (e) {
                    if (_this.form.ChangeDevice.value == true) {
                        _this.byId('Materials').parent().css({
                            display: ''
                        });
                    }
                    else {
                        _this.byId('Materials').parent().css({
                            display: 'none'
                        });
                    }
                });
                _this.form.ReportCustomerId.change(function (e) {
                    if (Q.isEmptyOrNull(_this.form.SettleCustomerId.value)) {
                        _this.form.SettleCustomerId.value = _this.form.ReportCustomerId.value;
                    }
                });
                return _this;
            }
            MaintenanceDialog.prototype.getFormKey = function () { return Ops.MaintenanceForm.formKey; };
            MaintenanceDialog.prototype.getIdProperty = function () { return Ops.MaintenanceRow.idProperty; };
            MaintenanceDialog.prototype.getLocalTextPrefix = function () { return Ops.MaintenanceRow.localTextPrefix; };
            MaintenanceDialog.prototype.getNameProperty = function () { return Ops.MaintenanceRow.nameProperty; };
            MaintenanceDialog.prototype.getService = function () { return Ops.MaintenanceService.baseUrl; };
            MaintenanceDialog.prototype.getDeletePermission = function () { return Ops.MaintenanceRow.deletePermission; };
            MaintenanceDialog.prototype.getInsertPermission = function () { return Ops.MaintenanceRow.insertPermission; };
            MaintenanceDialog.prototype.getUpdatePermission = function () { return Ops.MaintenanceRow.updatePermission; };
            MaintenanceDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: "提交",
                    icon: "glyphicon-ok",
                    cssClass: "submit-button",
                    onClick: function () {
                        _this.save(function (r) {
                            if (!_this.validateBeforeSave())
                                return;
                            Ops.MaintenanceService.Commit({
                                EntityId: _this.entityId
                            }, function (r) {
                                Q.notifySuccess("提交成功!");
                                _this.dialogClose();
                            });
                        });
                    }
                });
                if (Q.Authorization.hasPermission("Ops:Maintenance:Approve")) {
                    buttons.push({
                        title: "审核",
                        icon: "fa-star",
                        cssClass: "audit-button",
                        onClick: function () {
                            Ops.MaintenanceService.Audit({
                                EntityId: _this.entityId
                            }, function (r) {
                                Q.notifySuccess("审核成功!");
                                _this.dialogClose();
                            });
                        }
                    });
                    buttons.push({
                        title: "驳回",
                        icon: "fa-star-o",
                        cssClass: "reject-button",
                        onClick: function () {
                            Ops.MaintenanceService.Reject({
                                EntityId: _this.entityId
                            }, function (r) {
                                Q.notifySuccess("驳回成功!");
                                _this.dialogClose();
                            });
                        }
                    });
                }
                return buttons;
            };
            MaintenanceDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.entity.Status == Ops.Enums.BillStatus.Edit || this.entity.Status == Ops.Enums.BillStatus.Reject) {
                    this.toolbar.findButton('save-and-close-button').show();
                    this.toolbar.findButton('submit-button').show();
                    this.toolbar.findButton('apply-changes-button').show();
                    this.toolbar.findButton('delete-button').show();
                    this.toolbar.findButton('reject-button').hide();
                    this.toolbar.findButton('audit-button').hide();
                }
                else if (this.entity.Status == Ops.Enums.BillStatus.Commited) {
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                    this.toolbar.findButton('save-and-close-button').hide();
                    this.toolbar.findButton('submit-button').hide();
                    this.toolbar.findButton('apply-changes-button').hide();
                    this.toolbar.findButton('delete-button').hide();
                    this.toolbar.findButton('reject-button').show();
                    this.toolbar.findButton('audit-button').show();
                }
                else if (this.entity.Status == Ops.Enums.BillStatus.Audited) {
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                    this.toolbar.findButton('save-and-close-button').hide();
                    this.toolbar.findButton('submit-button').hide();
                    this.toolbar.findButton('apply-changes-button').hide();
                    this.toolbar.findButton('delete-button').hide();
                    this.toolbar.findButton('reject-button').hide();
                    this.toolbar.findButton('audit-button').hide();
                }
            };
            MaintenanceDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], MaintenanceDialog);
            return MaintenanceDialog;
        }(Serenity.EntityDialog));
        Ops.MaintenanceDialog = MaintenanceDialog;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceGrid = /** @class */ (function (_super) {
            __extends(MaintenanceGrid, _super);
            function MaintenanceGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            MaintenanceGrid.prototype.getColumnsKey = function () { return 'Ops.Maintenance'; };
            MaintenanceGrid.prototype.getDialogType = function () { return Ops.MaintenanceDialog; };
            MaintenanceGrid.prototype.getIdProperty = function () { return Ops.MaintenanceRow.idProperty; };
            MaintenanceGrid.prototype.getInsertPermission = function () { return Ops.MaintenanceRow.insertPermission; };
            MaintenanceGrid.prototype.getLocalTextPrefix = function () { return Ops.MaintenanceRow.localTextPrefix; };
            MaintenanceGrid.prototype.getService = function () { return Ops.MaintenanceService.baseUrl; };
            MaintenanceGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                return opt;
            };
            MaintenanceGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], MaintenanceGrid);
            return MaintenanceGrid;
        }(Serenity.EntityGrid));
        Ops.MaintenanceGrid = MaintenanceGrid;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceManhoursDialog = /** @class */ (function (_super) {
            __extends(MaintenanceManhoursDialog, _super);
            function MaintenanceManhoursDialog() {
                var _this = _super.call(this) || this;
                //protected getNameProperty() { return MaintenanceManhoursRow.nameProperty; }
                //protected getService() { return MaintenanceManhoursService.baseUrl; }
                //protected getDeletePermission() { return MaintenanceManhoursRow.deletePermission; }
                //protected getInsertPermission() { return MaintenanceManhoursRow.insertPermission; }
                //protected getUpdatePermission() { return MaintenanceManhoursRow.updatePermission; }
                _this.form = new Ops.MaintenanceManhoursForm(_this.idPrefix);
                _this.form.Qty.change(function (e) {
                    if (_this.form.Price.value != null) {
                        _this.form.Amount.value = _this.form.Qty.value * _this.form.Price.value;
                    }
                });
                _this.form.Price.change(function (e) {
                    if (_this.form.Qty.value != null) {
                        _this.form.Amount.value = _this.form.Qty.value * _this.form.Price.value;
                    }
                });
                return _this;
            }
            MaintenanceManhoursDialog.prototype.getFormKey = function () { return Ops.MaintenanceManhoursForm.formKey; };
            //protected getIdProperty() { return MaintenanceManhoursRow.idProperty; }
            MaintenanceManhoursDialog.prototype.getLocalTextPrefix = function () { return Ops.MaintenanceManhoursRow.localTextPrefix; };
            MaintenanceManhoursDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceManhoursDialog);
            return MaintenanceManhoursDialog;
        }(Kun.Common.GridEditorDialog));
        Ops.MaintenanceManhoursDialog = MaintenanceManhoursDialog;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceManhoursGrid = /** @class */ (function (_super) {
            __extends(MaintenanceManhoursGrid, _super);
            function MaintenanceManhoursGrid(container) {
                return _super.call(this, container) || this;
            }
            MaintenanceManhoursGrid.prototype.getColumnsKey = function () { return 'Ops.MaintenanceManhours'; };
            MaintenanceManhoursGrid.prototype.getDialogType = function () { return Ops.MaintenanceManhoursDialog; };
            MaintenanceManhoursGrid.prototype.getIdProperty = function () { return Ops.MaintenanceManhoursRow.idProperty; };
            MaintenanceManhoursGrid.prototype.getInsertPermission = function () { return Ops.MaintenanceManhoursRow.insertPermission; };
            MaintenanceManhoursGrid.prototype.getLocalTextPrefix = function () { return Ops.MaintenanceManhoursRow.localTextPrefix; };
            MaintenanceManhoursGrid.prototype.getService = function () { return Ops.MaintenanceManhoursService.baseUrl; };
            MaintenanceManhoursGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceManhoursGrid);
            return MaintenanceManhoursGrid;
        }(Serenity.EntityGrid));
        Ops.MaintenanceManhoursGrid = MaintenanceManhoursGrid;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceManhoursEditor = /** @class */ (function (_super) {
            __extends(MaintenanceManhoursEditor, _super);
            function MaintenanceManhoursEditor(container) {
                return _super.call(this, container) || this;
            }
            MaintenanceManhoursEditor.prototype.getColumnsKey = function () { return "Ops.MaintenanceManhours"; };
            MaintenanceManhoursEditor.prototype.getDialogType = function () { return Ops.MaintenanceManhoursDialog; };
            MaintenanceManhoursEditor.prototype.getLocalTextPrefix = function () { return Ops.MaintenanceManhoursRow.localTextPrefix; };
            MaintenanceManhoursEditor.prototype.validateEntity = function (row, id) {
                if (!Q.isEmptyOrNull(row.ManhourId)) {
                    row.ManhourName = Ops.ManhourPriceRow.getLookup().itemById[row.ManhourId].Name;
                }
                return true;
            };
            MaintenanceManhoursEditor.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.push({
                    title: "选择工时",
                    cssClass: "add-button",
                    onClick: function () {
                        var dlg = new Ops.ManhourPricePickerDialog();
                        dlg.onSuccess = function (selected) {
                            var i = 0;
                            if (_this.view.getLength() == 0) {
                                i = 10;
                            }
                            else {
                                i = _this.view.getItems()[_this.view.getLength() - 1].Serial + 10;
                            }
                            for (var _i = 0, selected_1 = selected; _i < selected_1.length; _i++) {
                                var sel = selected_1[_i];
                                var item = {
                                    Serial: i,
                                    ManhourId: sel.Id,
                                    Qty: 1,
                                    Price: sel.Price,
                                    Amount: sel.Price * 1,
                                    ManhourName: sel.Name,
                                };
                                var id = _this.getNextId();
                                item[_this.getIdProperty()] = id;
                                _this.view.addItem(item);
                                i = i + 10;
                            }
                            return true;
                        };
                        dlg.dialogOpen();
                    }
                });
                return buttons;
            };
            MaintenanceManhoursEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceManhoursEditor);
            return MaintenanceManhoursEditor;
        }(Kun.Common.GridEditorBase));
        Ops.MaintenanceManhoursEditor = MaintenanceManhoursEditor;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceMaterialsDialog = /** @class */ (function (_super) {
            __extends(MaintenanceMaterialsDialog, _super);
            function MaintenanceMaterialsDialog() {
                var _this = _super.call(this) || this;
                //protected getNameProperty() { return MaintenanceMaterialsRow.nameProperty; }
                //protected getService() { return MaintenanceMaterialsService.baseUrl; }
                //protected getDeletePermission() { return MaintenanceMaterialsRow.deletePermission; }
                //protected getInsertPermission() { return MaintenanceMaterialsRow.insertPermission; }
                //protected getUpdatePermission() { return MaintenanceMaterialsRow.updatePermission; }
                _this.form = new Ops.MaintenanceMaterialsForm(_this.idPrefix);
                _this.form.Qty.change(function (e) {
                    if (_this.form.SalePrice.value != null) {
                        _this.form.SaleAmount.value = _this.form.Qty.value * _this.form.SalePrice.value;
                    }
                });
                _this.form.SalePrice.change(function (e) {
                    if (_this.form.Qty.value != null) {
                        _this.form.SaleAmount.value = _this.form.Qty.value * _this.form.SalePrice.value;
                    }
                });
                return _this;
            }
            MaintenanceMaterialsDialog.prototype.getFormKey = function () { return Ops.MaintenanceMaterialsForm.formKey; };
            //protected getIdProperty() { return MaintenanceMaterialsRow.idProperty; }
            MaintenanceMaterialsDialog.prototype.getLocalTextPrefix = function () { return Ops.MaintenanceMaterialsRow.localTextPrefix; };
            MaintenanceMaterialsDialog.prototype.save = function () {
                var _this = this;
                var unit = Kun.Basic.UnitRow.getLookup().itemById[this.form.UnitId.value];
                if (unit.Decim === false && this.form.Qty.value % 1 !== 0) {
                    Q.notifyError("请输入整数数量!");
                    return false;
                }
                _super.prototype.save.call(this, function (c) {
                    _this.dialogClose();
                });
            };
            MaintenanceMaterialsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceMaterialsDialog);
            return MaintenanceMaterialsDialog;
        }(Kun.Common.GridEditorDialog));
        Ops.MaintenanceMaterialsDialog = MaintenanceMaterialsDialog;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceMaterialsGrid = /** @class */ (function (_super) {
            __extends(MaintenanceMaterialsGrid, _super);
            function MaintenanceMaterialsGrid(container) {
                return _super.call(this, container) || this;
            }
            MaintenanceMaterialsGrid.prototype.getColumnsKey = function () { return 'Ops.MaintenanceMaterials'; };
            MaintenanceMaterialsGrid.prototype.getDialogType = function () { return Ops.MaintenanceMaterialsDialog; };
            MaintenanceMaterialsGrid.prototype.getIdProperty = function () { return Ops.MaintenanceMaterialsRow.idProperty; };
            MaintenanceMaterialsGrid.prototype.getInsertPermission = function () { return Ops.MaintenanceMaterialsRow.insertPermission; };
            MaintenanceMaterialsGrid.prototype.getLocalTextPrefix = function () { return Ops.MaintenanceMaterialsRow.localTextPrefix; };
            MaintenanceMaterialsGrid.prototype.getService = function () { return Ops.MaintenanceMaterialsService.baseUrl; };
            MaintenanceMaterialsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceMaterialsGrid);
            return MaintenanceMaterialsGrid;
        }(Serenity.EntityGrid));
        Ops.MaintenanceMaterialsGrid = MaintenanceMaterialsGrid;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceMaterialsEditor = /** @class */ (function (_super) {
            __extends(MaintenanceMaterialsEditor, _super);
            function MaintenanceMaterialsEditor(container) {
                return _super.call(this, container) || this;
            }
            MaintenanceMaterialsEditor.prototype.getColumnsKey = function () { return "Ops.MaintenanceMaterials"; };
            MaintenanceMaterialsEditor.prototype.getDialogType = function () { return Ops.MaintenanceMaterialsDialog; };
            MaintenanceMaterialsEditor.prototype.getLocalTextPrefix = function () { return Ops.MaintenanceMaterialsRow.localTextPrefix; };
            MaintenanceMaterialsEditor.prototype.validateEntity = function (row, id) {
                var material = Kun.Basic.MaterialRow.getLookup().itemById[row.MaterialId];
                //row.UnitName = Basic.UnitRow.getLookup().itemById[row.UnitId].Name;
                row.MaterialCode = material.Code;
                //row.MaterialName = material.Name;
                if (!Q.isEmptyOrNull(row.LotId)) {
                    row.LotCode = Kun.Basic.LotRow.getLookup().itemById[row.LotId].Code;
                }
                if (!Q.isEmptyOrNull(row.WarehouseId)) {
                    alert(row.WarehouseId);
                    row.WarehouseName = Kun.Basic.WarehouseRow.getLookup().itemById[row.WarehouseId].Name;
                }
                if (!Q.isEmptyOrNull(row.PositionId)) {
                    row.PositionName = Kun.Basic.PositionRow.getLookup().itemById[row.PositionId].Name;
                }
                return true;
            };
            MaintenanceMaterialsEditor.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.push({
                    title: "选择物料",
                    cssClass: "add-button",
                    onClick: function () {
                        var dlg = new Kun.Stock.StockDataPickerDialog({
                            hideStockData: null
                        });
                        dlg.onSuccess = function (selected) {
                            // filter already existing stocks
                            //selected = selected.filter(x => !Q.any(this.view.getItems(), y => y.ProductID == x.ProductID));
                            var i = 0;
                            if (_this.view.getLength() == 0) {
                                i = 10;
                            }
                            else {
                                i = _this.view.getItems()[_this.view.getLength() - 1].Serial + 10;
                            }
                            for (var _i = 0, selected_2 = selected; _i < selected_2.length; _i++) {
                                var sel = selected_2[_i];
                                var item = {
                                    Serial: i,
                                    StockDataId: sel.Id,
                                    MaterialId: sel.MaterialId,
                                    MaterialName: sel.MaterialName,
                                    UnitId: sel.UnitId,
                                    UnitName: sel.UnitName,
                                    Qty: 1,
                                    SalePrice: sel.SalePrice,
                                    SaleAmount: sel.SalePrice * 1,
                                    LotId: sel.LotId,
                                    WarehouseId: sel.WarehouseId,
                                    PositionId: sel.PositionId,
                                    Specification: sel.Specification,
                                    MaterialCode: sel.MaterialCode,
                                    LotCode: sel.LotCode,
                                    WarehouseName: sel.WarehouseName,
                                    PositionName: sel.PositionName
                                };
                                var id = _this.getNextId();
                                item[_this.getIdProperty()] = id;
                                _this.view.addItem(item);
                                i = i + 10;
                            }
                            return true;
                        };
                        dlg.dialogOpen();
                    }
                });
                buttons.push({
                    title: "",
                    icon: "fa-paperclip",
                    onClick: function () {
                        var i = 0;
                        if (_this.view.getLength() == 0) {
                            i = 10;
                        }
                        else {
                            i = _this.view.getItems()[_this.view.getLength() - 1].Serial + 10;
                        }
                        var item = {
                            Serial: i,
                            StockDataId: null,
                            MaterialId: 'd0a674ec-551c-449a-8eb7-57a6edcf26e0',
                            MaterialName: '',
                            UnitId: 'b18339d0-ed34-4fdc-88eb-5e16a8b42a2b',
                            UnitName: '个',
                            Qty: 1,
                            SalePrice: 0,
                            SaleAmount: 0,
                            MaterialCode: '1000000',
                        };
                        var id = _this.getNextId();
                        item[_this.getIdProperty()] = id;
                        _this.view.addItem(item);
                        i = i + 10;
                        return true;
                    }
                });
                return buttons;
            };
            MaintenanceMaterialsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceMaterialsEditor);
            return MaintenanceMaterialsEditor;
        }(Kun.Common.GridEditorBase));
        Ops.MaintenanceMaterialsEditor = MaintenanceMaterialsEditor;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceTypeDialog = /** @class */ (function (_super) {
            __extends(MaintenanceTypeDialog, _super);
            function MaintenanceTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ops.MaintenanceTypeForm(_this.idPrefix);
                return _this;
            }
            MaintenanceTypeDialog.prototype.getFormKey = function () { return Ops.MaintenanceTypeForm.formKey; };
            MaintenanceTypeDialog.prototype.getIdProperty = function () { return Ops.MaintenanceTypeRow.idProperty; };
            MaintenanceTypeDialog.prototype.getLocalTextPrefix = function () { return Ops.MaintenanceTypeRow.localTextPrefix; };
            MaintenanceTypeDialog.prototype.getNameProperty = function () { return Ops.MaintenanceTypeRow.nameProperty; };
            MaintenanceTypeDialog.prototype.getService = function () { return Ops.MaintenanceTypeService.baseUrl; };
            MaintenanceTypeDialog.prototype.getDeletePermission = function () { return Ops.MaintenanceTypeRow.deletePermission; };
            MaintenanceTypeDialog.prototype.getInsertPermission = function () { return Ops.MaintenanceTypeRow.insertPermission; };
            MaintenanceTypeDialog.prototype.getUpdatePermission = function () { return Ops.MaintenanceTypeRow.updatePermission; };
            MaintenanceTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceTypeDialog);
            return MaintenanceTypeDialog;
        }(Serenity.EntityDialog));
        Ops.MaintenanceTypeDialog = MaintenanceTypeDialog;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var MaintenanceTypeGrid = /** @class */ (function (_super) {
            __extends(MaintenanceTypeGrid, _super);
            function MaintenanceTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            MaintenanceTypeGrid.prototype.getColumnsKey = function () { return 'Ops.MaintenanceType'; };
            MaintenanceTypeGrid.prototype.getDialogType = function () { return Ops.MaintenanceTypeDialog; };
            MaintenanceTypeGrid.prototype.getIdProperty = function () { return Ops.MaintenanceTypeRow.idProperty; };
            MaintenanceTypeGrid.prototype.getInsertPermission = function () { return Ops.MaintenanceTypeRow.insertPermission; };
            MaintenanceTypeGrid.prototype.getLocalTextPrefix = function () { return Ops.MaintenanceTypeRow.localTextPrefix; };
            MaintenanceTypeGrid.prototype.getService = function () { return Ops.MaintenanceTypeService.baseUrl; };
            MaintenanceTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceTypeGrid);
            return MaintenanceTypeGrid;
        }(Serenity.EntityGrid));
        Ops.MaintenanceTypeGrid = MaintenanceTypeGrid;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var ManhourPriceDialog = /** @class */ (function (_super) {
            __extends(ManhourPriceDialog, _super);
            function ManhourPriceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ops.ManhourPriceForm(_this.idPrefix);
                return _this;
            }
            ManhourPriceDialog.prototype.getFormKey = function () { return Ops.ManhourPriceForm.formKey; };
            ManhourPriceDialog.prototype.getIdProperty = function () { return Ops.ManhourPriceRow.idProperty; };
            ManhourPriceDialog.prototype.getLocalTextPrefix = function () { return Ops.ManhourPriceRow.localTextPrefix; };
            ManhourPriceDialog.prototype.getNameProperty = function () { return Ops.ManhourPriceRow.nameProperty; };
            ManhourPriceDialog.prototype.getService = function () { return Ops.ManhourPriceService.baseUrl; };
            ManhourPriceDialog.prototype.getDeletePermission = function () { return Ops.ManhourPriceRow.deletePermission; };
            ManhourPriceDialog.prototype.getInsertPermission = function () { return Ops.ManhourPriceRow.insertPermission; };
            ManhourPriceDialog.prototype.getUpdatePermission = function () { return Ops.ManhourPriceRow.updatePermission; };
            ManhourPriceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ManhourPriceDialog);
            return ManhourPriceDialog;
        }(Serenity.EntityDialog));
        Ops.ManhourPriceDialog = ManhourPriceDialog;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var ManhourPriceGrid = /** @class */ (function (_super) {
            __extends(ManhourPriceGrid, _super);
            function ManhourPriceGrid(container) {
                return _super.call(this, container) || this;
            }
            ManhourPriceGrid.prototype.getColumnsKey = function () { return 'Ops.ManhourPrice'; };
            ManhourPriceGrid.prototype.getDialogType = function () { return Ops.ManhourPriceDialog; };
            ManhourPriceGrid.prototype.getIdProperty = function () { return Ops.ManhourPriceRow.idProperty; };
            ManhourPriceGrid.prototype.getInsertPermission = function () { return Ops.ManhourPriceRow.insertPermission; };
            ManhourPriceGrid.prototype.getLocalTextPrefix = function () { return Ops.ManhourPriceRow.localTextPrefix; };
            ManhourPriceGrid.prototype.getService = function () { return Ops.ManhourPriceService.baseUrl; };
            ManhourPriceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ManhourPriceGrid);
            return ManhourPriceGrid;
        }(Serenity.EntityGrid));
        Ops.ManhourPriceGrid = ManhourPriceGrid;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
/// <reference path="../ManhourPriceGrid.ts" />
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var ManhourPriceCheckGrid = /** @class */ (function (_super) {
            __extends(ManhourPriceCheckGrid, _super);
            function ManhourPriceCheckGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.rowSelection = new Serenity.GridRowSelectionMixin(_this);
                return _this;
            }
            ManhourPriceCheckGrid.prototype.getColumnsKey = function () { return 'Ops.ManhourPrice'; };
            // protected getDialogType() { return <any>Northwind.ProductDialog; }
            ManhourPriceCheckGrid.prototype.getIdProperty = function () { return Ops.ManhourPriceRow.idProperty; };
            ManhourPriceCheckGrid.prototype.getLocalTextPrefix = function () { return Ops.ManhourPriceRow.localTextPrefix; };
            ManhourPriceCheckGrid.prototype.getService = function () { return Ops.ManhourPriceService.baseUrl; };
            ManhourPriceCheckGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            ManhourPriceCheckGrid.prototype.usePager = function () {
                return false;
            };
            ManhourPriceCheckGrid.prototype.getInitialTitle = function () {
                return null;
            };
            ManhourPriceCheckGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons = buttons.filter(function (x) { return x.cssClass != 'add-button'; });
                return buttons;
            };
            Object.defineProperty(ManhourPriceCheckGrid.prototype, "selectedItems", {
                get: function () {
                    var _this = this;
                    return this.rowSelection.getSelectedKeys().map(function (x) { return _this.view.getItemById(x); });
                    //  return this.rowSelection.getSelectedAsInt32().map(x => this.view.getItemById(x));
                },
                enumerable: true,
                configurable: true
            });
            ManhourPriceCheckGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this))
                    return false;
                // var request = this.view.params as Serenity.ListRequest;
                //if (this.options.hideProducts && this.options.hideProducts.length)
                //    request.Criteria = Serenity.Criteria.and(request.Criteria,
                //        [[Northwind.ProductRow.Fields.ProductID], 'not in', [this.options.hideProducts]]);
                return true;
            };
            ManhourPriceCheckGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ManhourPriceCheckGrid);
            return ManhourPriceCheckGrid;
        }(Serenity.EntityGrid));
        Ops.ManhourPriceCheckGrid = ManhourPriceCheckGrid;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Ops;
    (function (Ops) {
        var ManhourPricePickerDialog = /** @class */ (function (_super) {
            __extends(ManhourPricePickerDialog, _super);
            function ManhourPricePickerDialog() {
                var _this = _super.call(this) || this;
                _this.checkGrid = new Ops.ManhourPriceCheckGrid(_this.byId("CheckGrid"));
                _this.dialogTitle = "选择工时";
                return _this;
            }
            ManhourPricePickerDialog.prototype.getTemplate = function () {
                return "<div id=\"~_CheckGrid\"></div>";
            };
            ManhourPricePickerDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text("Dialogs.OkButton"),
                        click: function () {
                            var selected = _this.checkGrid.selectedItems;
                            if (!selected.length) {
                                Q.notifyWarning("请选择工时!");
                                return;
                            }
                            if (!_this.onSuccess || _this.onSuccess(selected))
                                _this.dialogClose();
                        }
                    },
                    {
                        text: Q.text("Dialogs.CancelButton"),
                        click: function () {
                            _this.dialogClose();
                        }
                    }
                ];
                return opt;
            };
            Object.defineProperty(ManhourPricePickerDialog.prototype, "selectedItems", {
                get: function () {
                    return this.checkGrid.selectedItems;
                },
                enumerable: true,
                configurable: true
            });
            ManhourPricePickerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ManhourPricePickerDialog);
            return ManhourPricePickerDialog;
        }(Serenity.TemplatedDialog));
        Ops.ManhourPricePickerDialog = ManhourPricePickerDialog;
    })(Ops = Kun.Ops || (Kun.Ops = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sell;
    (function (Sell) {
        var SaleOrderDialog = /** @class */ (function (_super) {
            __extends(SaleOrderDialog, _super);
            function SaleOrderDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sell.SaleOrderForm(_this.idPrefix);
                return _this;
            }
            SaleOrderDialog.prototype.getFormKey = function () { return Sell.SaleOrderForm.formKey; };
            SaleOrderDialog.prototype.getIdProperty = function () { return Sell.SaleOrderRow.idProperty; };
            SaleOrderDialog.prototype.getLocalTextPrefix = function () { return Sell.SaleOrderRow.localTextPrefix; };
            SaleOrderDialog.prototype.getNameProperty = function () { return Sell.SaleOrderRow.nameProperty; };
            SaleOrderDialog.prototype.getService = function () { return Sell.SaleOrderService.baseUrl; };
            SaleOrderDialog.prototype.getDeletePermission = function () { return Sell.SaleOrderRow.deletePermission; };
            SaleOrderDialog.prototype.getInsertPermission = function () { return Sell.SaleOrderRow.insertPermission; };
            SaleOrderDialog.prototype.getUpdatePermission = function () { return Sell.SaleOrderRow.updatePermission; };
            SaleOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleOrderDialog);
            return SaleOrderDialog;
        }(Serenity.EntityDialog));
        Sell.SaleOrderDialog = SaleOrderDialog;
    })(Sell = Kun.Sell || (Kun.Sell = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sell;
    (function (Sell) {
        var SaleOrderGrid = /** @class */ (function (_super) {
            __extends(SaleOrderGrid, _super);
            function SaleOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            SaleOrderGrid.prototype.getColumnsKey = function () { return 'Sell.SaleOrder'; };
            SaleOrderGrid.prototype.getDialogType = function () { return Sell.SaleOrderDialog; };
            SaleOrderGrid.prototype.getIdProperty = function () { return Sell.SaleOrderRow.idProperty; };
            SaleOrderGrid.prototype.getInsertPermission = function () { return Sell.SaleOrderRow.insertPermission; };
            SaleOrderGrid.prototype.getLocalTextPrefix = function () { return Sell.SaleOrderRow.localTextPrefix; };
            SaleOrderGrid.prototype.getService = function () { return Sell.SaleOrderService.baseUrl; };
            SaleOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleOrderGrid);
            return SaleOrderGrid;
        }(Serenity.EntityGrid));
        Sell.SaleOrderGrid = SaleOrderGrid;
    })(Sell = Kun.Sell || (Kun.Sell = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sell;
    (function (Sell) {
        var SaleOrderItemDialog = /** @class */ (function (_super) {
            __extends(SaleOrderItemDialog, _super);
            function SaleOrderItemDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sell.SaleOrderItemForm(_this.idPrefix);
                return _this;
            }
            SaleOrderItemDialog.prototype.getFormKey = function () { return Sell.SaleOrderItemForm.formKey; };
            SaleOrderItemDialog.prototype.getIdProperty = function () { return Sell.SaleOrderItemRow.idProperty; };
            SaleOrderItemDialog.prototype.getLocalTextPrefix = function () { return Sell.SaleOrderItemRow.localTextPrefix; };
            SaleOrderItemDialog.prototype.getNameProperty = function () { return Sell.SaleOrderItemRow.nameProperty; };
            SaleOrderItemDialog.prototype.getService = function () { return Sell.SaleOrderItemService.baseUrl; };
            SaleOrderItemDialog.prototype.getDeletePermission = function () { return Sell.SaleOrderItemRow.deletePermission; };
            SaleOrderItemDialog.prototype.getInsertPermission = function () { return Sell.SaleOrderItemRow.insertPermission; };
            SaleOrderItemDialog.prototype.getUpdatePermission = function () { return Sell.SaleOrderItemRow.updatePermission; };
            SaleOrderItemDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleOrderItemDialog);
            return SaleOrderItemDialog;
        }(Serenity.EntityDialog));
        Sell.SaleOrderItemDialog = SaleOrderItemDialog;
    })(Sell = Kun.Sell || (Kun.Sell = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sell;
    (function (Sell) {
        var SaleOrderItemGrid = /** @class */ (function (_super) {
            __extends(SaleOrderItemGrid, _super);
            function SaleOrderItemGrid(container) {
                return _super.call(this, container) || this;
            }
            SaleOrderItemGrid.prototype.getColumnsKey = function () { return 'Sell.SaleOrderItem'; };
            SaleOrderItemGrid.prototype.getDialogType = function () { return Sell.SaleOrderItemDialog; };
            SaleOrderItemGrid.prototype.getIdProperty = function () { return Sell.SaleOrderItemRow.idProperty; };
            SaleOrderItemGrid.prototype.getInsertPermission = function () { return Sell.SaleOrderItemRow.insertPermission; };
            SaleOrderItemGrid.prototype.getLocalTextPrefix = function () { return Sell.SaleOrderItemRow.localTextPrefix; };
            SaleOrderItemGrid.prototype.getService = function () { return Sell.SaleOrderItemService.baseUrl; };
            SaleOrderItemGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleOrderItemGrid);
            return SaleOrderItemGrid;
        }(Serenity.EntityGrid));
        Sell.SaleOrderItemGrid = SaleOrderItemGrid;
    })(Sell = Kun.Sell || (Kun.Sell = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var InStockDialog = /** @class */ (function (_super) {
            __extends(InStockDialog, _super);
            function InStockDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Stock.InStockForm(_this.idPrefix);
                return _this;
            }
            InStockDialog.prototype.getFormKey = function () { return Stock.InStockForm.formKey; };
            InStockDialog.prototype.getIdProperty = function () { return Stock.InStockRow.idProperty; };
            InStockDialog.prototype.getLocalTextPrefix = function () { return Stock.InStockRow.localTextPrefix; };
            InStockDialog.prototype.getNameProperty = function () { return Stock.InStockRow.nameProperty; };
            InStockDialog.prototype.getService = function () { return Stock.InStockService.baseUrl; };
            InStockDialog.prototype.getDeletePermission = function () { return Stock.InStockRow.deletePermission; };
            InStockDialog.prototype.getInsertPermission = function () { return Stock.InStockRow.insertPermission; };
            InStockDialog.prototype.getUpdatePermission = function () { return Stock.InStockRow.updatePermission; };
            InStockDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: "提交",
                    icon: "glyphicon-ok",
                    cssClass: "submit-button",
                    onClick: function () {
                        _this.save(function (r) {
                            if (!_this.validateBeforeSave())
                                return;
                            Stock.InStockService.Commit({
                                EntityId: _this.entityId
                            }, function (r) {
                                Q.notifySuccess("提交成功!");
                                _this.dialogClose();
                            });
                        });
                    }
                });
                buttons.push({
                    title: "审核",
                    icon: "fa-star",
                    cssClass: "audit-button",
                    onClick: function () {
                        Stock.InStockService.Audit({
                            EntityId: _this.entityId
                        }, function (r) {
                            Q.notifySuccess("审核成功!");
                            _this.dialogClose();
                        });
                    }
                });
                buttons.push({
                    title: "驳回",
                    icon: "fa-star-o",
                    cssClass: "reject-button",
                    onClick: function () {
                        Stock.InStockService.Reject({
                            EntityId: _this.entityId
                        }, function (r) {
                            Q.notifySuccess("驳回成功!");
                            _this.dialogClose();
                        });
                    }
                });
                return buttons;
            };
            InStockDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.entity.Status == Stock.Enums.BillStatus.Edit || this.entity.Status == Stock.Enums.BillStatus.Reject) {
                    this.toolbar.findButton('save-and-close-button').show();
                    this.toolbar.findButton('submit-button').show();
                    this.toolbar.findButton('apply-changes-button').show();
                    this.toolbar.findButton('delete-button').show();
                    this.toolbar.findButton('reject-button').hide();
                    this.toolbar.findButton('audit-button').hide();
                }
                else if (this.entity.Status == Stock.Enums.BillStatus.Commited) {
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                    this.toolbar.findButton('save-and-close-button').hide();
                    this.toolbar.findButton('submit-button').hide();
                    this.toolbar.findButton('apply-changes-button').hide();
                    this.toolbar.findButton('delete-button').hide();
                    this.toolbar.findButton('reject-button').show();
                    this.toolbar.findButton('audit-button').show();
                }
                else if (this.entity.Status == Stock.Enums.BillStatus.Audited) {
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                    this.toolbar.findButton('save-and-close-button').hide();
                    this.toolbar.findButton('submit-button').hide();
                    this.toolbar.findButton('apply-changes-button').hide();
                    this.toolbar.findButton('delete-button').hide();
                    this.toolbar.findButton('reject-button').hide();
                    this.toolbar.findButton('audit-button').hide();
                }
            };
            InStockDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], InStockDialog);
            return InStockDialog;
        }(Serenity.EntityDialog));
        Stock.InStockDialog = InStockDialog;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var InStockGrid = /** @class */ (function (_super) {
            __extends(InStockGrid, _super);
            function InStockGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            InStockGrid.prototype.getColumnsKey = function () { return 'Stock.InStock'; };
            InStockGrid.prototype.getDialogType = function () { return Stock.InStockDialog; };
            InStockGrid.prototype.getIdProperty = function () { return Stock.InStockRow.idProperty; };
            InStockGrid.prototype.getInsertPermission = function () { return Stock.InStockRow.insertPermission; };
            InStockGrid.prototype.getLocalTextPrefix = function () { return Stock.InStockRow.localTextPrefix; };
            InStockGrid.prototype.getService = function () { return Stock.InStockService.baseUrl; };
            InStockGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                return opt;
            };
            InStockGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], InStockGrid);
            return InStockGrid;
        }(Serenity.EntityGrid));
        Stock.InStockGrid = InStockGrid;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var InStockItemDialog = /** @class */ (function (_super) {
            __extends(InStockItemDialog, _super);
            function InStockItemDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Stock.InStockItemForm(_this.idPrefix);
                _this.form.MaterialId.changeSelect2(function (e) {
                    var materail = Kun.Basic.MaterialRow.getLookup().itemById[_this.form.MaterialId.value];
                    _this.form.UnitId.value = materail.UnitId;
                });
                //this.form.DeliveryQty.change(e => {
                //    if (this.form.ConfirmQty.value == null) {
                //        this.form.ConfirmQty.value = this.form.DeliveryQty.value;
                //    }
                //});
                _this.form.BuyPrice.change(function (e) {
                    if (_this.form.BuyPrice.value != null && _this.form.ConfirmQty.value > 0) {
                        _this.form.BuyAmount.value = _this.form.BuyPrice.value * _this.form.ConfirmQty.value;
                    }
                });
                _this.form.SalePrice.change(function (e) {
                    if (_this.form.SalePrice.value != null && _this.form.ConfirmQty.value > 0) {
                        _this.form.SaleAmount.value = _this.form.SalePrice.value * _this.form.ConfirmQty.value;
                    }
                });
                return _this;
            }
            InStockItemDialog.prototype.getFormKey = function () { return Stock.InStockItemForm.formKey; };
            // protected getIdProperty() { return InStockItemRow.idProperty; }
            InStockItemDialog.prototype.getLocalTextPrefix = function () { return Stock.InStockItemRow.localTextPrefix; };
            InStockItemDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.entity.Id != null) {
                    if (this.entity.HeadStatus == Stock.Enums.BillStatus.Edit || this.entity.HeadStatus == Stock.Enums.BillStatus.Reject) {
                        this.toolbar.findButton('save-and-close-button').show();
                        this.toolbar.findButton('apply-changes-button').show();
                        this.toolbar.findButton('delete-button').show();
                    }
                    else {
                        Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                        this.toolbar.findButton('save-and-close-button').hide();
                        this.toolbar.findButton('apply-changes-button').hide();
                        this.toolbar.findButton('delete-button').hide();
                    }
                }
            };
            InStockItemDialog.prototype.save = function () {
                var _this = this;
                var unit = Kun.Basic.UnitRow.getLookup().itemById[this.form.UnitId.value];
                if (unit.Decim === false && this.form.ConfirmQty.value % 1 !== 0) {
                    Q.notifyError("请输入整数数量!");
                    return false;
                }
                _super.prototype.save.call(this, function (c) {
                    _this.dialogClose();
                });
            };
            InStockItemDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InStockItemDialog);
            return InStockItemDialog;
        }(Kun.Common.GridEditorDialog));
        Stock.InStockItemDialog = InStockItemDialog;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var InStockItemGrid = /** @class */ (function (_super) {
            __extends(InStockItemGrid, _super);
            function InStockItemGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            InStockItemGrid.prototype.getColumnsKey = function () { return 'Stock.InStockItem'; };
            InStockItemGrid.prototype.getDialogType = function () { return Stock.InStockItemDialog; };
            InStockItemGrid.prototype.getIdProperty = function () { return Stock.InStockItemRow.idProperty; };
            InStockItemGrid.prototype.getInsertPermission = function () { return Stock.InStockItemRow.insertPermission; };
            InStockItemGrid.prototype.getLocalTextPrefix = function () { return Stock.InStockItemRow.localTextPrefix; };
            InStockItemGrid.prototype.getService = function () { return Stock.InStockItemService.baseUrl; };
            InStockItemGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            InStockItemGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                return opt;
            };
            InStockItemGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], InStockItemGrid);
            return InStockItemGrid;
        }(Serenity.EntityGrid));
        Stock.InStockItemGrid = InStockItemGrid;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var InStockItemEditor = /** @class */ (function (_super) {
            __extends(InStockItemEditor, _super);
            function InStockItemEditor(container) {
                return _super.call(this, container) || this;
            }
            InStockItemEditor.prototype.getColumnsKey = function () { return "Stock.InStockItem"; };
            InStockItemEditor.prototype.getDialogType = function () { return Stock.InStockItemDialog; };
            InStockItemEditor.prototype.getLocalTextPrefix = function () { return Stock.InStockItemRow.localTextPrefix; };
            InStockItemEditor.prototype.validateEntity = function (row, id) {
                var material = Kun.Basic.MaterialRow.getLookup().itemById[row.MaterialId];
                row.MaterialName = material.Name;
                row.MaterialCode = material.Code;
                row.UnitName = Kun.Basic.UnitRow.getLookup().itemById[material.UnitId].Name;
                // row.InvoiceType = Serenity.EnumFormatter.format(Stock.Enums.InvoiceType, Q.toId(row.InvoiceType)); 
                row.SupplierName = Kun.Basic.SupplierRow.getLookup().itemById[row.SupplierId].Name;
                return true;
            };
            InStockItemEditor.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                return buttons;
            };
            InStockItemEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], InStockItemEditor);
            return InStockItemEditor;
        }(Kun.Common.GridEditorBase));
        Stock.InStockItemEditor = InStockItemEditor;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var MoveRecordDialog = /** @class */ (function (_super) {
            __extends(MoveRecordDialog, _super);
            function MoveRecordDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Stock.MoveRecordForm(_this.idPrefix);
                return _this;
            }
            MoveRecordDialog.prototype.getFormKey = function () { return Stock.MoveRecordForm.formKey; };
            MoveRecordDialog.prototype.getIdProperty = function () { return Stock.MoveRecordRow.idProperty; };
            MoveRecordDialog.prototype.getLocalTextPrefix = function () { return Stock.MoveRecordRow.localTextPrefix; };
            MoveRecordDialog.prototype.getService = function () { return Stock.MoveRecordService.baseUrl; };
            MoveRecordDialog.prototype.getDeletePermission = function () { return Stock.MoveRecordRow.deletePermission; };
            MoveRecordDialog.prototype.getInsertPermission = function () { return Stock.MoveRecordRow.insertPermission; };
            MoveRecordDialog.prototype.getUpdatePermission = function () { return Stock.MoveRecordRow.updatePermission; };
            MoveRecordDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MoveRecordDialog);
            return MoveRecordDialog;
        }(Serenity.EntityDialog));
        Stock.MoveRecordDialog = MoveRecordDialog;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var MoveRecordGrid = /** @class */ (function (_super) {
            __extends(MoveRecordGrid, _super);
            function MoveRecordGrid(container) {
                return _super.call(this, container) || this;
            }
            MoveRecordGrid.prototype.getColumnsKey = function () { return 'Stock.MoveRecord'; };
            MoveRecordGrid.prototype.getDialogType = function () { return Stock.MoveRecordDialog; };
            MoveRecordGrid.prototype.getIdProperty = function () { return Stock.MoveRecordRow.idProperty; };
            MoveRecordGrid.prototype.getInsertPermission = function () { return Stock.MoveRecordRow.insertPermission; };
            MoveRecordGrid.prototype.getLocalTextPrefix = function () { return Stock.MoveRecordRow.localTextPrefix; };
            MoveRecordGrid.prototype.getService = function () { return Stock.MoveRecordService.baseUrl; };
            MoveRecordGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            MoveRecordGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MoveRecordGrid);
            return MoveRecordGrid;
        }(Serenity.EntityGrid));
        Stock.MoveRecordGrid = MoveRecordGrid;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var StockDataDialog = /** @class */ (function (_super) {
            __extends(StockDataDialog, _super);
            function StockDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Stock.StockDataForm(_this.idPrefix);
                return _this;
            }
            StockDataDialog.prototype.getFormKey = function () { return Stock.StockDataForm.formKey; };
            StockDataDialog.prototype.getIdProperty = function () { return Stock.StockDataRow.idProperty; };
            StockDataDialog.prototype.getLocalTextPrefix = function () { return Stock.StockDataRow.localTextPrefix; };
            StockDataDialog.prototype.getNameProperty = function () { return Stock.StockDataRow.nameProperty; };
            StockDataDialog.prototype.getService = function () { return Stock.StockDataService.baseUrl; };
            StockDataDialog.prototype.getDeletePermission = function () { return Stock.StockDataRow.deletePermission; };
            StockDataDialog.prototype.getInsertPermission = function () { return Stock.StockDataRow.insertPermission; };
            StockDataDialog.prototype.getUpdatePermission = function () { return Stock.StockDataRow.updatePermission; };
            StockDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StockDataDialog);
            return StockDataDialog;
        }(Serenity.EntityDialog));
        Stock.StockDataDialog = StockDataDialog;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var StockDataGrid = /** @class */ (function (_super) {
            __extends(StockDataGrid, _super);
            function StockDataGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            StockDataGrid.prototype.getColumnsKey = function () { return 'Stock.StockData'; };
            StockDataGrid.prototype.getDialogType = function () { return Stock.StockDataDialog; };
            StockDataGrid.prototype.getIdProperty = function () { return Stock.StockDataRow.idProperty; };
            StockDataGrid.prototype.getInsertPermission = function () { return Stock.StockDataRow.insertPermission; };
            StockDataGrid.prototype.getLocalTextPrefix = function () { return Stock.StockDataRow.localTextPrefix; };
            StockDataGrid.prototype.getService = function () { return Stock.StockDataService.baseUrl; };
            StockDataGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.push(Kun.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Stock.StockDataService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                return buttons;
            };
            StockDataGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                return opt;
            };
            StockDataGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], StockDataGrid);
            return StockDataGrid;
        }(Serenity.EntityGrid));
        Stock.StockDataGrid = StockDataGrid;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
/// <reference path="../StockDataGrid.ts" />
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var StockDataCheckGrid = /** @class */ (function (_super) {
            __extends(StockDataCheckGrid, _super);
            function StockDataCheckGrid(container, options) {
                var _this = _super.call(this, container, options) || this;
                _this.rowSelection = new Serenity.GridRowSelectionMixin(_this);
                return _this;
            }
            StockDataCheckGrid.prototype.getColumnsKey = function () { return 'Stock.StockData'; };
            // protected getDialogType() { return <any>Northwind.ProductDialog; }
            StockDataCheckGrid.prototype.getIdProperty = function () { return Stock.StockDataRow.idProperty; };
            StockDataCheckGrid.prototype.getLocalTextPrefix = function () { return Stock.StockDataRow.localTextPrefix; };
            StockDataCheckGrid.prototype.getService = function () { return Stock.StockDataService.baseUrl; };
            StockDataCheckGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            StockDataCheckGrid.prototype.usePager = function () {
                return false;
            };
            StockDataCheckGrid.prototype.getInitialTitle = function () {
                return null;
            };
            StockDataCheckGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons = buttons.filter(function (x) { return x.cssClass != 'add-button'; });
                return buttons;
            };
            Object.defineProperty(StockDataCheckGrid.prototype, "selectedItems", {
                get: function () {
                    var _this = this;
                    return this.rowSelection.getSelectedKeys().map(function (x) { return _this.view.getItemById(x); });
                    //  return this.rowSelection.getSelectedAsInt32().map(x => this.view.getItemById(x));
                },
                enumerable: true,
                configurable: true
            });
            StockDataCheckGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this))
                    return false;
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [["AvailableQty" /* AvailableQty */], '>', 0]);
                return true;
            };
            StockDataCheckGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StockDataCheckGrid);
            return StockDataCheckGrid;
        }(Serenity.EntityGrid));
        Stock.StockDataCheckGrid = StockDataCheckGrid;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Stock;
    (function (Stock) {
        var StockDataPickerDialog = /** @class */ (function (_super) {
            __extends(StockDataPickerDialog, _super);
            function StockDataPickerDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.checkGrid = new Stock.StockDataCheckGrid(_this.byId("CheckGrid"), opt);
                _this.dialogTitle = "选择库存";
                return _this;
            }
            StockDataPickerDialog.prototype.getTemplate = function () {
                return "<div id=\"~_CheckGrid\"></div>";
            };
            StockDataPickerDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text("Dialogs.OkButton"),
                        click: function () {
                            var selected = _this.checkGrid.selectedItems;
                            if (!selected.length) {
                                Q.notifyWarning("请选择物料!");
                                return;
                            }
                            if (!_this.onSuccess || _this.onSuccess(selected))
                                _this.dialogClose();
                        }
                    },
                    {
                        text: Q.text("Dialogs.CancelButton"),
                        click: function () {
                            _this.dialogClose();
                        }
                    }
                ];
                return opt;
            };
            Object.defineProperty(StockDataPickerDialog.prototype, "selectedItems", {
                get: function () {
                    return this.checkGrid.selectedItems;
                },
                enumerable: true,
                configurable: true
            });
            StockDataPickerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StockDataPickerDialog);
            return StockDataPickerDialog;
        }(Serenity.TemplatedDialog));
        Stock.StockDataPickerDialog = StockDataPickerDialog;
    })(Stock = Kun.Stock || (Kun.Stock = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sys;
    (function (Sys) {
        var DocumentCodeConfigDialog = /** @class */ (function (_super) {
            __extends(DocumentCodeConfigDialog, _super);
            function DocumentCodeConfigDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sys.DocumentCodeConfigForm(_this.idPrefix);
                return _this;
            }
            DocumentCodeConfigDialog.prototype.getFormKey = function () { return Sys.DocumentCodeConfigForm.formKey; };
            DocumentCodeConfigDialog.prototype.getIdProperty = function () { return Sys.DocumentCodeConfigRow.idProperty; };
            DocumentCodeConfigDialog.prototype.getLocalTextPrefix = function () { return Sys.DocumentCodeConfigRow.localTextPrefix; };
            DocumentCodeConfigDialog.prototype.getNameProperty = function () { return Sys.DocumentCodeConfigRow.nameProperty; };
            DocumentCodeConfigDialog.prototype.getService = function () { return Sys.DocumentCodeConfigService.baseUrl; };
            DocumentCodeConfigDialog.prototype.getDeletePermission = function () { return Sys.DocumentCodeConfigRow.deletePermission; };
            DocumentCodeConfigDialog.prototype.getInsertPermission = function () { return Sys.DocumentCodeConfigRow.insertPermission; };
            DocumentCodeConfigDialog.prototype.getUpdatePermission = function () { return Sys.DocumentCodeConfigRow.updatePermission; };
            DocumentCodeConfigDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DocumentCodeConfigDialog);
            return DocumentCodeConfigDialog;
        }(Serenity.EntityDialog));
        Sys.DocumentCodeConfigDialog = DocumentCodeConfigDialog;
    })(Sys = Kun.Sys || (Kun.Sys = {}));
})(Kun || (Kun = {}));
var Kun;
(function (Kun) {
    var Sys;
    (function (Sys) {
        var DocumentCodeConfigGrid = /** @class */ (function (_super) {
            __extends(DocumentCodeConfigGrid, _super);
            function DocumentCodeConfigGrid(container) {
                return _super.call(this, container) || this;
            }
            DocumentCodeConfigGrid.prototype.getColumnsKey = function () { return 'Sys.DocumentCodeConfig'; };
            DocumentCodeConfigGrid.prototype.getDialogType = function () { return Sys.DocumentCodeConfigDialog; };
            DocumentCodeConfigGrid.prototype.getIdProperty = function () { return Sys.DocumentCodeConfigRow.idProperty; };
            DocumentCodeConfigGrid.prototype.getInsertPermission = function () { return Sys.DocumentCodeConfigRow.insertPermission; };
            DocumentCodeConfigGrid.prototype.getLocalTextPrefix = function () { return Sys.DocumentCodeConfigRow.localTextPrefix; };
            DocumentCodeConfigGrid.prototype.getService = function () { return Sys.DocumentCodeConfigService.baseUrl; };
            DocumentCodeConfigGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DocumentCodeConfigGrid);
            return DocumentCodeConfigGrid;
        }(Serenity.EntityGrid));
        Sys.DocumentCodeConfigGrid = DocumentCodeConfigGrid;
    })(Sys = Kun.Sys || (Kun.Sys = {}));
})(Kun || (Kun = {}));