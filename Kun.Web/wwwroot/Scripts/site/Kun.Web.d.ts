﻿/// <reference types="jquery" />
/// <reference types="jqueryui" />
/// <reference types="toastr" />
declare namespace Kun.Administration {
}
declare namespace Kun.Administration {
    interface DataAuditLogForm {
        LogType: Serenity.EnumEditor;
        LogDate: Serenity.DateTimeEditor;
        UserId: Serenity.IntegerEditor;
        Tablename: Serenity.LookupEditor;
        RecordId: Serenity.StringEditor;
        FieldName: Serenity.LookupEditor;
        OldValue: Serenity.StringEditor;
        NewValue: Serenity.StringEditor;
    }
    class DataAuditLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Administration {
    interface DataAuditLogRow {
        LogId?: number;
        LogType?: DataAuditLogType;
        LogDate?: string;
        UserId?: number;
        Tablename?: string;
        RecordId?: string;
        FieldName?: string;
        OldValue?: string;
        NewValue?: string;
        Username?: string;
        UserDisplayName?: string;
    }
    namespace DataAuditLogRow {
        const idProperty = "LogId";
        const localTextPrefix = "Administration.DataAuditLog";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            LogId = "LogId",
            LogType = "LogType",
            LogDate = "LogDate",
            UserId = "UserId",
            Tablename = "Tablename",
            RecordId = "RecordId",
            FieldName = "FieldName",
            OldValue = "OldValue",
            NewValue = "NewValue",
            Username = "Username",
            UserDisplayName = "UserDisplayName"
        }
    }
}
declare namespace Kun.Administration {
    namespace DataAuditLogService {
        const baseUrl = "Administration/DataAuditLog";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DataAuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DataAuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Administration/DataAuditLog/Retrieve",
            List = "Administration/DataAuditLog/List"
        }
    }
}
declare namespace Kun.Administration {
    enum DataAuditLogType {
        Insert = 1,
        Update = 2,
        Delete = 3
    }
}
declare namespace Kun.Administration {
}
declare namespace Kun.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace Kun.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Kun.Administration {
}
declare namespace Kun.Administration {
}
declare namespace Kun.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
        RoleKey: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Kun.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Kun.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Kun.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Kun.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Kun.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        RoleKey?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            RoleKey = "RoleKey"
        }
    }
}
declare namespace Kun.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Kun.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace Kun.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace Kun.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace Kun.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace Kun.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace Kun.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace Kun.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Kun.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Kun.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Kun.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Kun.Administration {
    enum TwoFactorAuthType {
        Email = 1,
        SMS = 2
    }
}
declare namespace Kun.Administration {
}
declare namespace Kun.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        MobilePhoneNumber: Serenity.StringEditor;
        MobilePhoneVerified: Serenity.BooleanEditor;
        TwoFactorAuth: Serenity.EnumEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Administration {
    interface UserListRequest extends Serenity.ListRequest {
    }
}
declare namespace Kun.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Kun.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Kun.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Kun.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Kun.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Kun.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Kun.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Kun.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Kun.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Kun.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        MobilePhoneNumber?: string;
        MobilePhoneVerified?: boolean;
        TwoFactorAuth?: TwoFactorAuthType;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        ImpersonationToken?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            MobilePhoneNumber = "MobilePhoneNumber",
            MobilePhoneVerified = "MobilePhoneVerified",
            TwoFactorAuth = "TwoFactorAuth",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            ImpersonationToken = "ImpersonationToken",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Kun.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Kun.Basic {
}
declare namespace Kun.Basic {
    interface CustomerForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Contacts: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Basic {
    interface CustomerRow {
        Id?: string;
        Code?: string;
        Name?: string;
        Description?: string;
        Contacts?: string;
        Mobile?: string;
    }
    namespace CustomerRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Basic.Customer";
        const lookupKey = "Basic.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            Description = "Description",
            Contacts = "Contacts",
            Mobile = "Mobile"
        }
    }
}
declare namespace Kun.Basic {
    namespace CustomerService {
        const baseUrl = "Basic/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Basic/Customer/Create",
            Update = "Basic/Customer/Update",
            Delete = "Basic/Customer/Delete",
            Retrieve = "Basic/Customer/Retrieve",
            List = "Basic/Customer/List"
        }
    }
}
declare namespace Kun.Basic {
}
declare namespace Kun.Basic {
    interface LotForm {
        Code: Serenity.StringEditor;
        MaterialId: Serenity.StringEditor;
    }
    class LotForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Basic {
    interface LotRow {
        Id?: string;
        Code?: string;
        MaterialId?: string;
    }
    namespace LotRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Code";
        const localTextPrefix = "Basic.Lot";
        const lookupKey = "Basic.Lot";
        function getLookup(): Q.Lookup<LotRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            MaterialId = "MaterialId"
        }
    }
}
declare namespace Kun.Basic {
    namespace LotService {
        const baseUrl = "Basic/Lot";
        function Create(request: Serenity.SaveRequest<LotRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LotRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LotRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LotRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Basic/Lot/Create",
            Update = "Basic/Lot/Update",
            Delete = "Basic/Lot/Delete",
            Retrieve = "Basic/Lot/Retrieve",
            List = "Basic/Lot/List"
        }
    }
}
declare namespace Kun.Basic {
}
declare namespace Kun.Basic {
    interface MaterialForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        UnitId: Serenity.LookupEditor;
        SafetyStock: Serenity.DecimalEditor;
        IsBatch: Serenity.BooleanEditor;
        GroupId: Serenity.LookupEditor;
    }
    class MaterialForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Basic {
}
declare namespace Kun.Basic {
    interface MaterialGroupForm {
        Code: Serenity.MaskedEditor;
        Name: Serenity.StringEditor;
    }
    class MaterialGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Basic {
    interface MaterialGroupRow {
        Id?: string;
        Code?: string;
        Name?: string;
    }
    namespace MaterialGroupRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Basic.MaterialGroup";
        const lookupKey = "Basic.MaterialGroup";
        function getLookup(): Q.Lookup<MaterialGroupRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name"
        }
    }
}
declare namespace Kun.Basic {
    namespace MaterialGroupService {
        const baseUrl = "Basic/MaterialGroup";
        function Create(request: Serenity.SaveRequest<MaterialGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaterialGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaterialGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaterialGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Basic/MaterialGroup/Create",
            Update = "Basic/MaterialGroup/Update",
            Delete = "Basic/MaterialGroup/Delete",
            Retrieve = "Basic/MaterialGroup/Retrieve",
            List = "Basic/MaterialGroup/List"
        }
    }
}
declare namespace Kun.Basic {
    interface MaterialImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class MaterialImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Basic {
    interface MaterialRow {
        Id?: string;
        Code?: string;
        Name?: string;
        OldCode?: string;
        UnitId?: string;
        SafetyStock?: number;
        IsBatch?: boolean;
        GroupId?: string;
        CodeName?: string;
        UnitCode?: string;
        GroupName?: string;
        IsVirtual?: boolean;
    }
    namespace MaterialRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "CodeName";
        const localTextPrefix = "Basic.Material";
        const lookupKey = "Basic.MaterialLookup";
        function getLookup(): Q.Lookup<MaterialRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            OldCode = "OldCode",
            UnitId = "UnitId",
            SafetyStock = "SafetyStock",
            IsBatch = "IsBatch",
            GroupId = "GroupId",
            CodeName = "CodeName",
            UnitCode = "UnitCode",
            GroupName = "GroupName",
            IsVirtual = "IsVirtual"
        }
    }
}
declare namespace Kun.Basic {
    namespace MaterialService {
        const baseUrl = "Basic/Material";
        function Create(request: Serenity.SaveRequest<MaterialRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaterialRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaterialRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaterialRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Basic/Material/Create",
            Update = "Basic/Material/Update",
            Delete = "Basic/Material/Delete",
            Retrieve = "Basic/Material/Retrieve",
            List = "Basic/Material/List",
            ExcelImport = "Basic/Material/ExcelImport"
        }
    }
}
declare namespace Kun.Basic {
}
declare namespace Kun.Basic {
    interface PositionForm {
        WarehouseId: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
    }
    class PositionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Basic {
    interface PositionRow {
        Id?: string;
        WarehouseId?: string;
        Code?: string;
        Name?: string;
        WarehouseName?: string;
    }
    namespace PositionRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Basic.Position";
        const lookupKey = "Basic.Position";
        function getLookup(): Q.Lookup<PositionRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            WarehouseId = "WarehouseId",
            Code = "Code",
            Name = "Name",
            WarehouseName = "WarehouseName"
        }
    }
}
declare namespace Kun.Basic {
    namespace PositionService {
        const baseUrl = "Basic/Position";
        function Create(request: Serenity.SaveRequest<PositionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PositionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PositionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PositionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Basic/Position/Create",
            Update = "Basic/Position/Update",
            Delete = "Basic/Position/Delete",
            Retrieve = "Basic/Position/Retrieve",
            List = "Basic/Position/List"
        }
    }
}
declare namespace Kun.Basic {
}
declare namespace Kun.Basic {
    interface SupplierForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Contacts: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
    }
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Basic {
    interface SupplierRow {
        Id?: string;
        Code?: string;
        Name?: string;
        Description?: string;
        Contacts?: string;
        Mobile?: string;
    }
    namespace SupplierRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Basic.Supplier";
        const lookupKey = "Basic.Supplier";
        function getLookup(): Q.Lookup<SupplierRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            Description = "Description",
            Contacts = "Contacts",
            Mobile = "Mobile"
        }
    }
}
declare namespace Kun.Basic {
    namespace SupplierService {
        const baseUrl = "Basic/Supplier";
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Basic/Supplier/Create",
            Update = "Basic/Supplier/Update",
            Delete = "Basic/Supplier/Delete",
            Retrieve = "Basic/Supplier/Retrieve",
            List = "Basic/Supplier/List"
        }
    }
}
declare namespace Kun.Basic {
}
declare namespace Kun.Basic {
    interface UnitForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Decim: Serenity.BooleanEditor;
    }
    class UnitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Basic {
    interface UnitRow {
        Id?: string;
        Code?: string;
        Name?: string;
        Decim?: boolean;
    }
    namespace UnitRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Basic.Unit";
        const lookupKey = "Basic.UnitLookup";
        function getLookup(): Q.Lookup<UnitRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            Decim = "Decim"
        }
    }
}
declare namespace Kun.Basic {
    namespace UnitService {
        const baseUrl = "Basic/Unit";
        function Create(request: Serenity.SaveRequest<UnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Basic/Unit/Create",
            Update = "Basic/Unit/Update",
            Delete = "Basic/Unit/Delete",
            Retrieve = "Basic/Unit/Retrieve",
            List = "Basic/Unit/List"
        }
    }
}
declare namespace Kun.Basic {
}
declare namespace Kun.Basic {
    interface VendorForm {
        Code: Serenity.MaskedEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Contacts: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
    }
    class VendorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Basic {
    interface VendorRow {
        Id?: string;
        Code?: string;
        Name?: string;
        Description?: string;
        Contacts?: string;
        Mobile?: string;
    }
    namespace VendorRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Basic.Vendor";
        const lookupKey = "Basic.Vendor";
        function getLookup(): Q.Lookup<VendorRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            Description = "Description",
            Contacts = "Contacts",
            Mobile = "Mobile"
        }
    }
}
declare namespace Kun.Basic {
    namespace VendorService {
        const baseUrl = "Basic/Vendor";
        function Create(request: Serenity.SaveRequest<VendorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VendorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VendorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VendorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Basic/Vendor/Create",
            Update = "Basic/Vendor/Update",
            Delete = "Basic/Vendor/Delete",
            Retrieve = "Basic/Vendor/Retrieve",
            List = "Basic/Vendor/List"
        }
    }
}
declare namespace Kun.Basic {
}
declare namespace Kun.Basic {
    interface WarehouseForm {
        Code: Serenity.MaskedEditor;
        Name: Serenity.StringEditor;
        UsePosition: Serenity.BooleanEditor;
        Description: Serenity.StringEditor;
    }
    class WarehouseForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Basic {
    interface WarehouseRow {
        Id?: string;
        Code?: string;
        Name?: string;
        Description?: string;
        UsePosition?: boolean;
    }
    namespace WarehouseRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Basic.Warehouse";
        const lookupKey = "Basic.Warehouse";
        function getLookup(): Q.Lookup<WarehouseRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            Description = "Description",
            UsePosition = "UsePosition"
        }
    }
}
declare namespace Kun.Basic {
    namespace WarehouseService {
        const baseUrl = "Basic/Warehouse";
        function Create(request: Serenity.SaveRequest<WarehouseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WarehouseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WarehouseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WarehouseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Basic/Warehouse/Create",
            Update = "Basic/Warehouse/Update",
            Delete = "Basic/Warehouse/Delete",
            Retrieve = "Basic/Warehouse/Retrieve",
            List = "Basic/Warehouse/List"
        }
    }
}
declare namespace Kun.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Kun.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Kun.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace Kun.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace Kun.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailAttachment {
        Key?: number;
        FileName?: string;
        DownloadUrl?: string;
        Size?: number;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailAttachmentRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
        Key?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailComposeForm {
        Subject: StringEditor;
        Attachments: MultipleImageUploadEditor;
        ReplyToFolder: StringEditor;
        ReplyToUniqueId: StringEditor;
    }
    class EmailComposeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serenity.EmailClient {
    interface EmailComposeRequest extends Serenity.ServiceRequest {
        To?: string;
        Cc?: string;
        Bcc?: string;
        Subject?: string;
        BodyHtml?: string;
        Attachments?: string;
        ReplyToFolder?: string;
        ReplyToUniqueId?: number;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailDeleteRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueIds?: number[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailFolder {
        Kind?: string;
        Name?: string;
        FullName?: string;
        UnreadCount?: number;
        SubFolders?: EmailFolder[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailItem {
        UniqueId?: number;
        Subject?: string;
        Date?: string;
        From?: string;
        To?: string;
        Cc?: string;
        Seen?: boolean;
        Important?: boolean;
        Deleted?: boolean;
        HasAttachments?: boolean;
        Size?: number;
        HtmlBody?: string;
        Attachments?: EmailAttachment[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailListRequest extends Serenity.ListRequest {
        Folder?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailLoginInfo {
        ImapHost?: string;
        ImapPort?: number;
        ImapUsername?: string;
        ImapPassword?: string;
        SmtpHost?: string;
        SmtpPort?: number;
        SmtpUsername?: string;
        SmtpPassword?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailLoginRequest extends Serenity.ServiceRequest {
        LoginInfo?: EmailLoginInfo;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailMoveRequest extends Serenity.ServiceRequest {
        SourceFolder?: string;
        UniqueIds?: number[];
        TargetFolder?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailReplyRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
        ReplyToAll?: boolean;
        Forward?: boolean;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailReplyResponse extends Serenity.ServiceResponse {
        Subject?: string;
        To?: string;
        Cc?: string;
        ReplyBody?: string;
        Attachments?: EmailAttachment[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailRetrieveRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
    }
}
declare namespace Serenity.EmailClient {
    namespace EmailService {
        const baseUrl = "Common/Email";
        function Login(request: EmailLoginRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Signout(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UnreadCount(request: EmailUnreadCountRequest, onSuccess?: (response: EmailUnreadCountResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Suggest(request: EmailSuggestRequest, onSuccess?: (response: EmailSuggestResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Reply(request: EmailReplyRequest, onSuccess?: (response: EmailReplyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Compose(request: EmailComposeRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DeleteMessages(request: EmailDeleteRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ToggleSeen(request: EmailToggleSeenRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Move(request: EmailMoveRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListMessages(request: EmailListRequest, onSuccess?: (response: Serenity.ListResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListFolders(request: ServiceRequest, onSuccess?: (response: Serenity.ListResponse<EmailFolder>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveMessage(request: EmailRetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Login = "Common/Email/Login",
            Signout = "Common/Email/Signout",
            UnreadCount = "Common/Email/UnreadCount",
            Suggest = "Common/Email/Suggest",
            Reply = "Common/Email/Reply",
            Compose = "Common/Email/Compose",
            DeleteMessages = "Common/Email/DeleteMessages",
            ToggleSeen = "Common/Email/ToggleSeen",
            Move = "Common/Email/Move",
            ListMessages = "Common/Email/ListMessages",
            ListFolders = "Common/Email/ListFolders",
            RetrieveMessage = "Common/Email/RetrieveMessage"
        }
    }
}
declare namespace Serenity.EmailClient {
    interface EmailSuggestRequest extends Serenity.ServiceRequest {
        ContainsText?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailSuggestResponse extends Serenity.ServiceResponse {
        Suggestions?: string[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailToggleSeenRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueIds?: number[];
        Seen?: boolean;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailUnreadCountRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Serenity.EmailClient {
    interface EmailUnreadCountResponse extends Serenity.ServiceResponse {
        UnreadCount?: number;
    }
}
declare namespace Kun {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Kun {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Kun {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Kun {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Kun.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Kun.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Kun.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
        TwoFactorGuid?: string;
        TwoFactorCode?: number;
    }
}
declare namespace Kun.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Kun.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Kun.Ops.Enums {
    enum BillStatus {
        Edit = 10,
        Reject = 20,
        Commited = 30,
        Audited = 50
    }
}
declare namespace Kun.Ops.Enums {
    enum MaintenanceBillType {
        NormalMaintenance = 1
    }
}
declare namespace Kun.Ops {
}
declare namespace Kun.Ops {
    interface MaintenanceForm {
        BillNo: Serenity.StringEditor;
        BillType: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        VendorId: Serenity.LookupEditor;
        Reporter: Serenity.StringEditor;
        ReportDate: Serenity.DateEditor;
        ReportCustomerId: Serenity.LookupEditor;
        SettleCustomerId: Serenity.LookupEditor;
        TypeId: Serenity.LookupEditor;
        Address: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
        Content: Serenity.TextAreaEditor;
        ChangeDevice: Serenity.BooleanEditor;
        Materials: MaintenanceMaterialsEditor;
        Manhours: MaintenanceManhoursEditor;
        ServicerCost: Serenity.DecimalEditor;
        Note: Serenity.StringEditor;
        ResponsibleId: Serenity.LookupEditor;
    }
    class MaintenanceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Ops {
}
declare namespace Kun.Ops {
    interface MaintenanceManhoursForm {
        Serial: Serenity.IntegerEditor;
        ManhourId: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        Note: Serenity.StringEditor;
    }
    class MaintenanceManhoursForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Ops {
    interface MaintenanceManhoursRow {
        Id?: string;
        HeadId?: string;
        Serial?: number;
        ManhourId?: string;
        Qty?: number;
        Price?: number;
        Amount?: number;
        Note?: string;
        ManhourName?: string;
    }
    namespace MaintenanceManhoursRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Note";
        const localTextPrefix = "Ops.MaintenanceManhours";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            HeadId = "HeadId",
            Serial = "Serial",
            ManhourId = "ManhourId",
            Qty = "Qty",
            Price = "Price",
            Amount = "Amount",
            Note = "Note",
            ManhourName = "ManhourName"
        }
    }
}
declare namespace Kun.Ops {
    namespace MaintenanceManhoursService {
        const baseUrl = "Ops/MaintenanceManhours";
        function Create(request: Serenity.SaveRequest<MaintenanceManhoursRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaintenanceManhoursRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaintenanceManhoursRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaintenanceManhoursRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Ops/MaintenanceManhours/Create",
            Update = "Ops/MaintenanceManhours/Update",
            Delete = "Ops/MaintenanceManhours/Delete",
            Retrieve = "Ops/MaintenanceManhours/Retrieve",
            List = "Ops/MaintenanceManhours/List"
        }
    }
}
declare namespace Kun.Ops {
}
declare namespace Kun.Ops {
    interface MaintenanceMaterialsForm {
        MaterialId: Serenity.LookupEditor;
        MaterialName: Serenity.StringEditor;
        Serial: Serenity.IntegerEditor;
        UnitId: Serenity.LookupEditor;
        UnitName: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
        SaleAmount: Serenity.DecimalEditor;
        Specification: Serenity.StringEditor;
        LotId: Serenity.LookupEditor;
        WarehouseId: Serenity.LookupEditor;
        PositionId: Serenity.LookupEditor;
    }
    class MaintenanceMaterialsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Ops {
    interface MaintenanceMaterialsRow {
        Id?: string;
        HeadId?: string;
        Serial?: number;
        StockDataId?: string;
        MaterialId?: string;
        UnitId?: string;
        Qty?: number;
        SalePrice?: number;
        SaleAmount?: number;
        LotId?: string;
        WarehouseId?: string;
        PositionId?: string;
        Specification?: string;
        BillNo?: string;
        HeadStatus?: Ops.Enums.BillStatus;
        UnitName?: string;
        MaterialCode?: string;
        MaterialName?: string;
        LotCode?: string;
        WarehouseName?: string;
        PositionName?: string;
    }
    namespace MaintenanceMaterialsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "MaterialCode";
        const localTextPrefix = "Ops.MaintenanceMaterials";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            HeadId = "HeadId",
            Serial = "Serial",
            StockDataId = "StockDataId",
            MaterialId = "MaterialId",
            UnitId = "UnitId",
            Qty = "Qty",
            SalePrice = "SalePrice",
            SaleAmount = "SaleAmount",
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            PositionId = "PositionId",
            Specification = "Specification",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus",
            UnitName = "UnitName",
            MaterialCode = "MaterialCode",
            MaterialName = "MaterialName",
            LotCode = "LotCode",
            WarehouseName = "WarehouseName",
            PositionName = "PositionName"
        }
    }
}
declare namespace Kun.Ops {
    namespace MaintenanceMaterialsService {
        const baseUrl = "Ops/MaintenanceMaterials";
        function Create(request: Serenity.SaveRequest<MaintenanceMaterialsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaintenanceMaterialsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaintenanceMaterialsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaintenanceMaterialsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Ops/MaintenanceMaterials/Create",
            Update = "Ops/MaintenanceMaterials/Update",
            Delete = "Ops/MaintenanceMaterials/Delete",
            Retrieve = "Ops/MaintenanceMaterials/Retrieve",
            List = "Ops/MaintenanceMaterials/List"
        }
    }
}
declare namespace Kun.Ops {
    interface MaintenanceRow {
        Id?: string;
        BillNo?: string;
        BillType?: Ops.Enums.MaintenanceBillType;
        Status?: Ops.Enums.BillStatus;
        Date?: string;
        VendorId?: string;
        Reporter?: string;
        ReportDate?: string;
        ReportCustomerId?: string;
        SettleCustomerId?: string;
        Address?: string;
        Description?: string;
        Content?: string;
        ChangeDevice?: boolean;
        ReporterComment?: string;
        ReporterConfirmDate?: string;
        CustomerComment?: string;
        CustomerConfirmDate?: string;
        Note?: string;
        ResponsibleId?: number;
        ApproverId?: number;
        ApproverDate?: string;
        Materials?: MaintenanceMaterialsRow[];
        Manhours?: MaintenanceManhoursRow[];
        VendorName?: string;
        ReportCustomerName?: string;
        SettleCustomerName?: string;
        ResponsibleName?: string;
        ApproverName?: string;
        ServicerCost?: number;
        TypeId?: string;
        TypeName?: string;
    }
    namespace MaintenanceRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "BillNo";
        const localTextPrefix = "Ops.Maintenance";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            BillNo = "BillNo",
            BillType = "BillType",
            Status = "Status",
            Date = "Date",
            VendorId = "VendorId",
            Reporter = "Reporter",
            ReportDate = "ReportDate",
            ReportCustomerId = "ReportCustomerId",
            SettleCustomerId = "SettleCustomerId",
            Address = "Address",
            Description = "Description",
            Content = "Content",
            ChangeDevice = "ChangeDevice",
            ReporterComment = "ReporterComment",
            ReporterConfirmDate = "ReporterConfirmDate",
            CustomerComment = "CustomerComment",
            CustomerConfirmDate = "CustomerConfirmDate",
            Note = "Note",
            ResponsibleId = "ResponsibleId",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate",
            Materials = "Materials",
            Manhours = "Manhours",
            VendorName = "VendorName",
            ReportCustomerName = "ReportCustomerName",
            SettleCustomerName = "SettleCustomerName",
            ResponsibleName = "ResponsibleName",
            ApproverName = "ApproverName",
            ServicerCost = "ServicerCost",
            TypeId = "TypeId",
            TypeName = "TypeName"
        }
    }
}
declare namespace Kun.Ops {
    namespace MaintenanceService {
        const baseUrl = "Ops/Maintenance";
        function Commit(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Audit(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Reject(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UnAudit(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Create(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Commit = "Ops/Maintenance/Commit",
            Audit = "Ops/Maintenance/Audit",
            Reject = "Ops/Maintenance/Reject",
            UnAudit = "Ops/Maintenance/UnAudit",
            Create = "Ops/Maintenance/Create",
            Update = "Ops/Maintenance/Update",
            Delete = "Ops/Maintenance/Delete",
            Retrieve = "Ops/Maintenance/Retrieve",
            List = "Ops/Maintenance/List"
        }
    }
}
declare namespace Kun.Ops {
}
declare namespace Kun.Ops {
    interface MaintenanceTypeForm {
        Name: Serenity.StringEditor;
        Sort: Serenity.IntegerEditor;
    }
    class MaintenanceTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Ops {
    interface MaintenanceTypeRow {
        Id?: string;
        Name?: string;
        Sort?: number;
    }
    namespace MaintenanceTypeRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Ops.MaintenanceType";
        const lookupKey = "Basic.MaintenanceTypeLookup";
        function getLookup(): Q.Lookup<MaintenanceTypeRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Sort = "Sort"
        }
    }
}
declare namespace Kun.Ops {
    namespace MaintenanceTypeService {
        const baseUrl = "Ops/MaintenanceType";
        function Create(request: Serenity.SaveRequest<MaintenanceTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaintenanceTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaintenanceTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaintenanceTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Ops/MaintenanceType/Create",
            Update = "Ops/MaintenanceType/Update",
            Delete = "Ops/MaintenanceType/Delete",
            Retrieve = "Ops/MaintenanceType/Retrieve",
            List = "Ops/MaintenanceType/List"
        }
    }
}
declare namespace Kun.Ops {
}
declare namespace Kun.Ops {
    interface ManhourPriceForm {
        Name: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
    }
    class ManhourPriceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Ops {
    interface ManhourPriceRow {
        Id?: string;
        Name?: string;
        Price?: number;
    }
    namespace ManhourPriceRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Ops.ManhourPrice";
        const lookupKey = "Ops.ManhourPrice";
        function getLookup(): Q.Lookup<ManhourPriceRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Price = "Price"
        }
    }
}
declare namespace Kun.Ops {
    namespace ManhourPriceService {
        const baseUrl = "Ops/ManhourPrice";
        function Create(request: Serenity.SaveRequest<ManhourPriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ManhourPriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ManhourPriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ManhourPriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Ops/ManhourPrice/Create",
            Update = "Ops/ManhourPrice/Update",
            Delete = "Ops/ManhourPrice/Delete",
            Retrieve = "Ops/ManhourPrice/Retrieve",
            List = "Ops/ManhourPrice/List"
        }
    }
}
declare namespace Kun.Ops {
}
declare namespace Serenity.Reporting {
    interface ReportRetrieveResult extends Serenity.ServiceResponse {
        IsExternalReport?: boolean;
        ReportKey?: string;
        Title?: string;
        Properties?: Serenity.PropertyItem[];
        InitialSettings?: any;
        IsDataOnlyReport?: boolean;
    }
}
declare namespace Kun {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Kun.Sell.Enums {
    enum BillStatus {
        Edit = 10,
        Reject = 20,
        Commited = 30,
        Audited = 50
    }
}
declare namespace Kun.Sell.Enums {
    enum SaleOrderBillType {
        NormalSaleOrder = 1
    }
}
declare namespace Kun.Sell {
}
declare namespace Kun.Sell {
    interface SaleOrderForm {
        BillNo: Serenity.StringEditor;
        BillType: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        SettleCustomerId: Serenity.LookupEditor;
        Note: Serenity.StringEditor;
        Materials: SaleOrderItemEditor;
    }
    class SaleOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Sell {
}
declare namespace Kun.Sell {
    interface SaleOrderItemForm {
        MaterialId: Serenity.LookupEditor;
        MaterialName: Serenity.StringEditor;
        Serial: Serenity.IntegerEditor;
        UnitId: Serenity.LookupEditor;
        UnitName: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
        SaleAmount: Serenity.DecimalEditor;
        Specification: Serenity.StringEditor;
        LotId: Serenity.LookupEditor;
        WarehouseId: Serenity.LookupEditor;
        PositionId: Serenity.LookupEditor;
    }
    class SaleOrderItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Sell {
    interface SaleOrderItemRow {
        Id?: string;
        HeadId?: string;
        Serial?: number;
        StockDataId?: string;
        MaterialId?: string;
        MaterialName?: string;
        UnitId?: string;
        UnitName?: string;
        Qty?: number;
        SalePrice?: number;
        SaleAmount?: number;
        LotId?: string;
        WarehouseId?: string;
        PositionId?: string;
        Specification?: string;
        BillNo?: string;
        HeadStatus?: Sell.Enums.BillStatus;
        MaterialCode?: string;
        LotCode?: string;
        WarehouseName?: string;
        PositionName?: string;
    }
    namespace SaleOrderItemRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "MaterialName";
        const localTextPrefix = "Sell.SaleOrderItem";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            HeadId = "HeadId",
            Serial = "Serial",
            StockDataId = "StockDataId",
            MaterialId = "MaterialId",
            MaterialName = "MaterialName",
            UnitId = "UnitId",
            UnitName = "UnitName",
            Qty = "Qty",
            SalePrice = "SalePrice",
            SaleAmount = "SaleAmount",
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            PositionId = "PositionId",
            Specification = "Specification",
            BillNo = "BillNo",
            HeadStatus = "HeadStatus",
            MaterialCode = "MaterialCode",
            LotCode = "LotCode",
            WarehouseName = "WarehouseName",
            PositionName = "PositionName"
        }
    }
}
declare namespace Kun.Sell {
    namespace SaleOrderItemService {
        const baseUrl = "Sell/SaleOrderItem";
        function Create(request: Serenity.SaveRequest<SaleOrderItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SaleOrderItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SaleOrderItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SaleOrderItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sell/SaleOrderItem/Create",
            Update = "Sell/SaleOrderItem/Update",
            Delete = "Sell/SaleOrderItem/Delete",
            Retrieve = "Sell/SaleOrderItem/Retrieve",
            List = "Sell/SaleOrderItem/List"
        }
    }
}
declare namespace Kun.Sell {
    interface SaleOrderRow {
        Id?: string;
        BillNo?: string;
        BillType?: Sell.Enums.SaleOrderBillType;
        Status?: Sell.Enums.BillStatus;
        Date?: string;
        CustomerId?: string;
        SettleCustomerId?: string;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
        CustomerName?: string;
        SettleCustomerName?: string;
        ApproverName?: string;
        Materials?: SaleOrderItemRow[];
    }
    namespace SaleOrderRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "BillNo";
        const localTextPrefix = "Sell.SaleOrder";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            BillNo = "BillNo",
            BillType = "BillType",
            Status = "Status",
            Date = "Date",
            CustomerId = "CustomerId",
            SettleCustomerId = "SettleCustomerId",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate",
            CustomerName = "CustomerName",
            SettleCustomerName = "SettleCustomerName",
            ApproverName = "ApproverName",
            Materials = "Materials"
        }
    }
}
declare namespace Kun.Sell {
    namespace SaleOrderService {
        const baseUrl = "Sell/SaleOrder";
        function Commit(request: Serenity.SaveRequest<SaleOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Audit(request: Serenity.SaveRequest<SaleOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Reject(request: Serenity.SaveRequest<SaleOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Create(request: Serenity.SaveRequest<SaleOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SaleOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SaleOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SaleOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Commit = "Sell/SaleOrder/Commit",
            Audit = "Sell/SaleOrder/Audit",
            Reject = "Sell/SaleOrder/Reject",
            Create = "Sell/SaleOrder/Create",
            Update = "Sell/SaleOrder/Update",
            Delete = "Sell/SaleOrder/Delete",
            Retrieve = "Sell/SaleOrder/Retrieve",
            List = "Sell/SaleOrder/List"
        }
    }
}
declare namespace Kun.Stock.Enums {
    enum BillStatus {
        Edit = 10,
        Reject = 20,
        Commited = 30,
        Audited = 50
    }
}
declare namespace Kun.Stock.Enums {
    enum InStockBillType {
        PuchaseInstock = 1,
        OtherInStock = 9
    }
}
declare namespace Kun.Stock.Enums {
    enum InvoiceType {
        WU = 0,
        ZP = 10,
        PP = 20,
        SJ = 30
    }
}
declare namespace Kun.Stock.Enums {
    enum MoveType {
        Purchase = 10,
        Sale = 30,
        Maint = 31,
        MovStock = 50
    }
}
declare namespace Kun.Stock.Enums {
    enum Status {
        Normal = 10
    }
}
declare namespace Kun.Stock {
}
declare namespace Kun.Stock {
    interface InStockForm {
        BillNo: Serenity.StringEditor;
        BillType: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        Note: Serenity.StringEditor;
        InsertUserId: Serenity.LookupEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.LookupEditor;
        UpdateDate: Serenity.DateEditor;
        ApproverId: Serenity.LookupEditor;
        ApproverDate: Serenity.DateEditor;
        Items: InStockItemEditor;
    }
    class InStockForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Stock {
}
declare namespace Kun.Stock {
    interface InStockItemForm {
        MaterialId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Specification: Serenity.StringEditor;
        ConfirmQty: Serenity.DecimalEditor;
        SupplierId: Serenity.LookupEditor;
        InvoiceType: Serenity.EnumEditor;
        BuyPrice: Serenity.DecimalEditor;
        BuyAmount: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
        SaleAmount: Serenity.DecimalEditor;
        LotId: Serenity.LookupEditor;
    }
    class InStockItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Stock {
    interface InStockItemRow {
        Id?: string;
        HeadId?: string;
        Status?: string;
        MaterialId?: string;
        UnitId?: string;
        DeliveryQty?: number;
        ConfirmQty?: number;
        SupplierId?: string;
        BuyPrice?: number;
        BuyAmount?: number;
        SalePrice?: number;
        SaleAmount?: number;
        LotId?: string;
        WarehouseId?: string;
        InvoiceType?: Stock.Enums.InvoiceType;
        Specification?: string;
        BillNo?: string;
        HeadType?: Stock.Enums.InStockBillType;
        HeadStatus?: Stock.Enums.BillStatus;
        HeadDate?: string;
        ApproverId?: number;
        ApproverDate?: string;
        UnitName?: string;
        MaterialCode?: string;
        MaterialName?: string;
        SupplierName?: string;
        LotCode?: string;
        WarehouseName?: string;
        ApproverName?: string;
        InvoiceTypeName?: string;
        PositionId?: string;
        PositionName?: string;
    }
    namespace InStockItemRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Status";
        const localTextPrefix = "Stock.InStockItem";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            HeadId = "HeadId",
            Status = "Status",
            MaterialId = "MaterialId",
            UnitId = "UnitId",
            DeliveryQty = "DeliveryQty",
            ConfirmQty = "ConfirmQty",
            SupplierId = "SupplierId",
            BuyPrice = "BuyPrice",
            BuyAmount = "BuyAmount",
            SalePrice = "SalePrice",
            SaleAmount = "SaleAmount",
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            InvoiceType = "InvoiceType",
            Specification = "Specification",
            BillNo = "BillNo",
            HeadType = "HeadType",
            HeadStatus = "HeadStatus",
            HeadDate = "HeadDate",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate",
            UnitName = "UnitName",
            MaterialCode = "MaterialCode",
            MaterialName = "MaterialName",
            SupplierName = "SupplierName",
            LotCode = "LotCode",
            WarehouseName = "WarehouseName",
            ApproverName = "ApproverName",
            InvoiceTypeName = "InvoiceTypeName",
            PositionId = "PositionId",
            PositionName = "PositionName"
        }
    }
}
declare namespace Kun.Stock {
    namespace InStockItemService {
        const baseUrl = "Stock/InStockItem";
        function Create(request: Serenity.SaveRequest<InStockItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InStockItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InStockItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InStockItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Stock/InStockItem/Create",
            Update = "Stock/InStockItem/Update",
            Delete = "Stock/InStockItem/Delete",
            Retrieve = "Stock/InStockItem/Retrieve",
            List = "Stock/InStockItem/List"
        }
    }
}
declare namespace Kun.Stock {
    interface InStockRow {
        Id?: string;
        BillNo?: string;
        BillType?: Stock.Enums.InStockBillType;
        Status?: Stock.Enums.BillStatus;
        Date?: string;
        Note?: string;
        ApproverId?: number;
        ApproverDate?: string;
        ApproverName?: string;
        Items?: InStockItemRow[];
    }
    namespace InStockRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "BillNo";
        const localTextPrefix = "Stock.InStock";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            BillNo = "BillNo",
            BillType = "BillType",
            Status = "Status",
            Date = "Date",
            Note = "Note",
            ApproverId = "ApproverId",
            ApproverDate = "ApproverDate",
            ApproverName = "ApproverName",
            Items = "Items"
        }
    }
}
declare namespace Kun.Stock {
    namespace InStockService {
        const baseUrl = "Stock/InStock";
        function Commit(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Audit(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Reject(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UnAudit(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Create(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InStockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InStockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Commit = "Stock/InStock/Commit",
            Audit = "Stock/InStock/Audit",
            Reject = "Stock/InStock/Reject",
            UnAudit = "Stock/InStock/UnAudit",
            Create = "Stock/InStock/Create",
            Update = "Stock/InStock/Update",
            Delete = "Stock/InStock/Delete",
            Retrieve = "Stock/InStock/Retrieve",
            List = "Stock/InStock/List"
        }
    }
}
declare namespace Kun.Stock {
}
declare namespace Kun.Stock {
    interface MoveRecordForm {
        MovCode: Serenity.EnumEditor;
        FromStockId: Serenity.StringEditor;
        FromMaterialId: Serenity.LookupEditor;
        FromUnitId: Serenity.LookupEditor;
        FromWarehouseId: Serenity.StringEditor;
        FromPositionId: Serenity.StringEditor;
        FromLotId: Serenity.LookupEditor;
        Qty: Serenity.DecimalEditor;
        ToStockId: Serenity.StringEditor;
        ToMaterialId: Serenity.LookupEditor;
        ToUnitId: Serenity.LookupEditor;
        ToWarehouseId: Serenity.StringEditor;
        ToPositionId: Serenity.StringEditor;
        ToLotId: Serenity.LookupEditor;
        BizBillType: Serenity.EnumEditor;
        BizBillId: Serenity.StringEditor;
        BizItemId: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
    }
    class MoveRecordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Stock {
    interface MoveRecordRow {
        Id?: string;
        MovCode?: Stock.Enums.MoveType;
        FromStockId?: string;
        FromMaterialId?: string;
        FromUnitId?: string;
        FromWarehouseId?: string;
        FromPositionId?: string;
        FromLotId?: string;
        FromMaterialCode?: string;
        FromMaterialName?: string;
        FromUnitName?: string;
        FromWarehouseName?: string;
        FromPositionName?: string;
        FromLotCode?: string;
        Qty?: number;
        ToStockId?: string;
        ToMaterialId?: string;
        ToUnitId?: string;
        ToWarehouseId?: string;
        ToPositionId?: string;
        ToLotId?: string;
        ToMaterialCode?: string;
        ToMaterialName?: string;
        ToUnitName?: string;
        ToWarehouseName?: string;
        ToPositionName?: string;
        ToLotCode?: string;
        BizBillType?: Sys.Enum.DocumentKind;
        BizBillId?: string;
        BizItemId?: string;
        Status?: Stock.Enums.Status;
        BizBillCode?: string;
    }
    namespace MoveRecordRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const localTextPrefix = "Stock.MoveRecord";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            MovCode = "MovCode",
            FromStockId = "FromStockId",
            FromMaterialId = "FromMaterialId",
            FromUnitId = "FromUnitId",
            FromWarehouseId = "FromWarehouseId",
            FromPositionId = "FromPositionId",
            FromLotId = "FromLotId",
            FromMaterialCode = "FromMaterialCode",
            FromMaterialName = "FromMaterialName",
            FromUnitName = "FromUnitName",
            FromWarehouseName = "FromWarehouseName",
            FromPositionName = "FromPositionName",
            FromLotCode = "FromLotCode",
            Qty = "Qty",
            ToStockId = "ToStockId",
            ToMaterialId = "ToMaterialId",
            ToUnitId = "ToUnitId",
            ToWarehouseId = "ToWarehouseId",
            ToPositionId = "ToPositionId",
            ToLotId = "ToLotId",
            ToMaterialCode = "ToMaterialCode",
            ToMaterialName = "ToMaterialName",
            ToUnitName = "ToUnitName",
            ToWarehouseName = "ToWarehouseName",
            ToPositionName = "ToPositionName",
            ToLotCode = "ToLotCode",
            BizBillType = "BizBillType",
            BizBillId = "BizBillId",
            BizItemId = "BizItemId",
            Status = "Status",
            BizBillCode = "BizBillCode"
        }
    }
}
declare namespace Kun.Stock {
    namespace MoveRecordService {
        const baseUrl = "Stock/MoveRecord";
        function Create(request: Serenity.SaveRequest<MoveRecordRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MoveRecordRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MoveRecordRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MoveRecordRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Stock/MoveRecord/Create",
            Update = "Stock/MoveRecord/Update",
            Delete = "Stock/MoveRecord/Delete",
            Retrieve = "Stock/MoveRecord/Retrieve",
            List = "Stock/MoveRecord/List"
        }
    }
}
declare namespace Kun.Stock {
}
declare namespace Kun.Stock {
    interface StockDataForm {
        MaterialId: Serenity.LookupEditor;
        Qty: Serenity.DecimalEditor;
        ReservedQty: Serenity.DecimalEditor;
        AvailableQty: Serenity.DecimalEditor;
        UnitId: Serenity.LookupEditor;
        LotId: Serenity.LookupEditor;
        WarehouseId: Serenity.StringEditor;
        BuyPrice: Serenity.DecimalEditor;
        BuyAmount: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
        SaleAmount: Serenity.DecimalEditor;
        Specification: Serenity.StringEditor;
    }
    class StockDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Stock {
    interface StockDataRow {
        Id?: string;
        MaterialId?: string;
        Qty?: number;
        ReservedQty?: number;
        AvailableQty?: number;
        UnitId?: string;
        LotId?: string;
        WarehouseId?: string;
        BuyPrice?: number;
        BuyAmount?: number;
        SalePrice?: number;
        SaleAmount?: number;
        Specification?: string;
        UnitName?: string;
        MaterialCode?: string;
        MaterialName?: string;
        LotCode?: string;
        PositionId?: string;
        PositionName?: string;
        WarehouseName?: string;
    }
    namespace StockDataRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Specification";
        const localTextPrefix = "Stock.StockData";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            MaterialId = "MaterialId",
            Qty = "Qty",
            ReservedQty = "ReservedQty",
            AvailableQty = "AvailableQty",
            UnitId = "UnitId",
            LotId = "LotId",
            WarehouseId = "WarehouseId",
            BuyPrice = "BuyPrice",
            BuyAmount = "BuyAmount",
            SalePrice = "SalePrice",
            SaleAmount = "SaleAmount",
            Specification = "Specification",
            UnitName = "UnitName",
            MaterialCode = "MaterialCode",
            MaterialName = "MaterialName",
            LotCode = "LotCode",
            PositionId = "PositionId",
            PositionName = "PositionName",
            WarehouseName = "WarehouseName"
        }
    }
}
declare namespace Kun.Stock {
    namespace StockDataService {
        const baseUrl = "Stock/StockData";
        function Create(request: Serenity.SaveRequest<StockDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StockDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StockDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StockDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Stock/StockData/Create",
            Update = "Stock/StockData/Update",
            Delete = "Stock/StockData/Delete",
            Retrieve = "Stock/StockData/Retrieve",
            List = "Stock/StockData/List"
        }
    }
}
declare namespace Kun.Sys {
}
declare namespace Kun.Sys {
    interface DocumentCodeConfigForm {
        DocumentKind: Serenity.EnumEditor;
        DocumentCodePrefix: Serenity.StringEditor;
    }
    class DocumentCodeConfigForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Kun.Sys {
    interface DocumentCodeConfigRow {
        Id?: string;
        DocumentKind?: Sys.Enum.DocumentKind;
        DocumentCodePrefix?: string;
    }
    namespace DocumentCodeConfigRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "DocumentCodePrefix";
        const localTextPrefix = "Sys.DocumentCodeConfig";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            DocumentKind = "DocumentKind",
            DocumentCodePrefix = "DocumentCodePrefix"
        }
    }
}
declare namespace Kun.Sys {
    namespace DocumentCodeConfigService {
        const baseUrl = "Sys/DocumentCodeConfig";
        function Create(request: Serenity.SaveRequest<DocumentCodeConfigRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DocumentCodeConfigRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentCodeConfigRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentCodeConfigRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sys/DocumentCodeConfig/Create",
            Update = "Sys/DocumentCodeConfig/Update",
            Delete = "Sys/DocumentCodeConfig/Delete",
            Retrieve = "Sys/DocumentCodeConfig/Retrieve",
            List = "Sys/DocumentCodeConfig/List"
        }
    }
}
declare namespace Kun.Sys.Enum {
    enum DocumentKind {
        Material = 1,
        Customer = 2,
        Supplier = 3,
        InStockBill = 10,
        MaintBill = 20,
        SaleOrderBill = 30
    }
}
declare namespace Kun.Texts {
}
declare namespace Kun.Administration {
    class DataAuditLogDialog extends Serenity.EntityDialog<DataAuditLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: DataAuditLogForm;
        protected getToolbarButtons(): any[];
        protected updateInterface(): void;
    }
}
declare namespace Kun.Administration {
    class DataAuditLogGrid extends Serenity.EntityGrid<DataAuditLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DataAuditLogDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Kun.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Kun.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace Kun.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Kun.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace Kun.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace Kun.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace Kun.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Kun.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Kun.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Kun.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Kun.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Kun.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Kun.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Kun.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Kun.Basic {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerForm;
        protected updateInterface(): void;
    }
}
declare namespace Kun.Basic {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Basic {
    class LotDialog extends Serenity.EntityDialog<LotRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LotForm;
    }
}
declare namespace Kun.Basic {
    class LotGrid extends Serenity.EntityGrid<LotRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LotDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Basic {
    class MaterialDialog extends Serenity.EntityDialog<MaterialRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MaterialForm;
        protected updateInterface(): void;
    }
}
declare namespace Kun.Basic {
    class MaterialGrid extends Serenity.EntityGrid<MaterialRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaterialDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Kun.Basic {
    class MaterialImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        protected getFormKey(): string;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace Kun.Basic {
    class MaterialGroupDialog extends Serenity.EntityDialog<MaterialGroupRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MaterialGroupForm;
        protected updateInterface(): void;
    }
}
declare namespace Kun.Basic {
    class MaterialGroupGrid extends Serenity.EntityGrid<MaterialGroupRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaterialGroupDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Basic {
    class PositionDialog extends Serenity.EntityDialog<PositionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PositionForm;
    }
}
declare namespace Kun.Basic {
    class PositionGrid extends Serenity.EntityGrid<PositionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PositionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Basic {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SupplierForm;
        protected updateInterface(): void;
    }
}
declare namespace Kun.Basic {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupplierDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Basic {
    class UnitDialog extends Serenity.EntityDialog<UnitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UnitForm;
    }
}
declare namespace Kun.Basic {
    class UnitGrid extends Serenity.EntityGrid<UnitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UnitDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Basic {
    class VendorDialog extends Serenity.EntityDialog<VendorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VendorForm;
    }
}
declare namespace Kun.Basic {
    class VendorGrid extends Serenity.EntityGrid<VendorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VendorDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Basic {
    class WarehouseDialog extends Serenity.EntityDialog<WarehouseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WarehouseForm;
        protected updateInterface(): void;
    }
}
declare namespace Kun.Basic {
    class WarehouseGrid extends Serenity.EntityGrid<WarehouseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WarehouseDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.LanguageList {
    function getValue(): string[][];
}
declare namespace Kun.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Kun.ScriptInitialization {
}
declare namespace Kun {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Kun.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Kun.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Kun.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Kun.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Kun.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace Kun.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Kun.Membership {
    interface PromptDialogOptions {
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
    class PromptDialog extends Serenity.PropertyDialog<any, PromptDialogOptions> {
        constructor(opt: PromptDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected loadInitialEntity(): void;
        protected getPropertyItems(): {
            name: string;
            editorType: string;
            required: any;
            editorParams: any;
        }[];
        get value(): any;
        set value(v: any);
        static prompt(title: string, message: string, value: string, validateValue: (string: any) => boolean): void;
    }
}
declare namespace Kun {
    interface ServiceEditorOptions {
        cascadeFrom?: string;
        cascadeField?: string;
        cascadeValue?: any;
    }
    class ServiceEditorBase<TOptions extends ServiceEditorOptions, TRow> extends Serenity.Select2AjaxEditor<TOptions, TRow> {
        private cascadeLink;
        constructor(hidden: JQuery, options: TOptions);
        private setCascadeFrom;
        get cascadeValue(): any;
        set cascadeValue(value: any);
        get cascadeField(): any;
        set cascadeField(value: any);
        get cascadeFrom(): any;
        set cascadeFrom(value: any);
        private getCascadeFromValue;
        protected getIncludeColumns(): string[];
        protected getSort(): string[];
        getTypeDelay(): number;
        private lastRequest;
        executeQueryByKey(options: Serenity.ServiceOptions<Serenity.RetrieveResponse<TRow>>): void;
        executeQuery(options: Serenity.ServiceOptions<Serenity.ListResponse<TRow>>): void;
    }
}
declare namespace Kun {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace Kun.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Kun.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Kun.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace Kun.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Kun.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): ({
            title: string;
            cssClass: string;
            onClick: () => void;
            icon?: undefined;
        } | {
            title: string;
            cssClass: string;
            icon: string;
            onClick: () => void;
        })[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Kun.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Kun.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace M {
    let defaultNotifyOptions: ToastrOptions;
    function notifyWarning(message: string, title?: string, options?: ToastrOptions): void;
    function notifySuccess(message: string, title?: string, options?: ToastrOptions): void;
    function notifyInfo(message: string, title?: string, options?: ToastrOptions): void;
    function notifyError(message: string, title?: string, options?: ToastrOptions): void;
}
declare namespace Kun.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected handleTwoFactorAuthentication(user: string, pass: string, twoFactorGuid: string, info: string): void;
        protected getTemplate(): string;
    }
}
declare namespace Kun.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Ops {
    class MaintenanceDialog extends Serenity.EntityDialog<MaintenanceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MaintenanceForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Kun.Ops {
    class MaintenanceGrid extends Serenity.EntityGrid<MaintenanceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaintenanceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace Kun.Ops {
    class MaintenanceManhoursDialog extends Common.GridEditorDialog<MaintenanceManhoursRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: MaintenanceManhoursForm;
        constructor();
    }
}
declare namespace Kun.Ops {
    class MaintenanceManhoursGrid extends Serenity.EntityGrid<MaintenanceManhoursRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaintenanceManhoursDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Ops {
    class MaintenanceManhoursEditor extends Common.GridEditorBase<MaintenanceManhoursRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaintenanceManhoursDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Kun.Ops {
    class MaintenanceMaterialsDialog extends Common.GridEditorDialog<MaintenanceMaterialsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: MaintenanceMaterialsForm;
        constructor();
        protected save(): boolean;
    }
}
declare namespace Kun.Ops {
    class MaintenanceMaterialsGrid extends Serenity.EntityGrid<MaintenanceMaterialsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaintenanceMaterialsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Ops {
    class MaintenanceMaterialsEditor extends Common.GridEditorBase<MaintenanceMaterialsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaintenanceMaterialsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Kun.Ops {
    class MaintenanceTypeDialog extends Serenity.EntityDialog<MaintenanceTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MaintenanceTypeForm;
    }
}
declare namespace Kun.Ops {
    class MaintenanceTypeGrid extends Serenity.EntityGrid<MaintenanceTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaintenanceTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Ops {
    class ManhourPriceDialog extends Serenity.EntityDialog<ManhourPriceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ManhourPriceForm;
    }
}
declare namespace Kun.Ops {
    class ManhourPriceGrid extends Serenity.EntityGrid<ManhourPriceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ManhourPriceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Ops {
    class ManhourPriceCheckGrid extends Serenity.EntityGrid<ManhourPriceRow, null> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): Serenity.ToolButton[];
        get selectedItems(): ManhourPriceRow[];
        onViewSubmit(): boolean;
    }
}
declare namespace Kun.Ops {
    class ManhourPricePickerDialog extends Serenity.TemplatedDialog<null> {
        private checkGrid;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        get selectedItems(): ManhourPriceRow[];
        onSuccess: (selected: ManhourPriceRow[]) => boolean;
    }
}
declare namespace Kun.Sell {
    class SaleOrderDialog extends Serenity.EntityDialog<SaleOrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SaleOrderForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Kun.Sell {
    class SaleOrderGrid extends Serenity.EntityGrid<SaleOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SaleOrderDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace Kun.Sell {
    class SaleOrderItemDialog extends Common.GridEditorDialog<SaleOrderItemRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: SaleOrderItemForm;
        constructor();
        protected save(): boolean;
    }
}
declare namespace Kun.Sell {
    class SaleOrderItemGrid extends Serenity.EntityGrid<SaleOrderItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SaleOrderItemDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Stock {
    class InStockDialog extends Serenity.EntityDialog<InStockRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InStockForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Kun.Stock {
    class InStockGrid extends Serenity.EntityGrid<InStockRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InStockDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace Kun.Stock {
    class InStockItemDialog extends Common.GridEditorDialog<InStockItemRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: InStockItemForm;
        constructor();
        protected updateInterface(): void;
        protected save(): boolean;
    }
}
declare namespace Kun.Stock {
    class InStockItemGrid extends Serenity.EntityGrid<InStockItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InStockItemDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace Kun.Stock {
    class InStockItemEditor extends Common.GridEditorBase<InStockItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InStockItemDialog;
        protected getLocalTextPrefix(): string;
        protected status: Stock.Enums.BillStatus;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Kun.Stock {
    class MoveRecordDialog extends Serenity.EntityDialog<MoveRecordRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MoveRecordForm;
    }
}
declare namespace Kun.Stock {
    class MoveRecordGrid extends Serenity.EntityGrid<MoveRecordRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MoveRecordDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Kun.Stock {
    class StockDataDialog extends Serenity.EntityDialog<StockDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StockDataForm;
    }
}
declare namespace Kun.Stock {
    class StockDataGrid extends Serenity.EntityGrid<StockDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StockDataDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace Kun.Stock {
    interface StockDataPickerOptions {
        hideStockData?: number[];
    }
    class StockDataCheckGrid extends Serenity.EntityGrid<StockDataRow, StockDataPickerOptions> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery, options: StockDataPickerOptions);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): Serenity.ToolButton[];
        get selectedItems(): StockDataRow[];
        protected onViewSubmit(): boolean;
    }
}
declare namespace Kun.Stock {
    class StockDataPickerDialog extends Serenity.TemplatedDialog<StockDataPickerOptions> {
        private checkGrid;
        constructor(opt: StockDataPickerOptions);
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        get selectedItems(): StockDataRow[];
        onSuccess: (selected: StockDataRow[]) => boolean;
    }
}
declare namespace Kun.Sys {
    class DocumentCodeConfigDialog extends Serenity.EntityDialog<DocumentCodeConfigRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocumentCodeConfigForm;
    }
}
declare namespace Kun.Sys {
    class DocumentCodeConfigGrid extends Serenity.EntityGrid<DocumentCodeConfigRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentCodeConfigDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Kun.Sell {
    class SaleOrderItemEditor extends Common.GridEditorBase<SaleOrderItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SaleOrderItemDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
