using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class DataAuditLog
            {
                public const string DataAuditLogIndex = "~/Modules/Administration/DataAuditLog/DataAuditLogIndex.cshtml";
            }

            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Basic
        {
            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Basic/Customer/CustomerIndex.cshtml";
            }

            public static class Lot
            {
                public const string LotIndex = "~/Modules/Basic/Lot/LotIndex.cshtml";
            }

            public static class Material
            {
                public const string MaterialIndex = "~/Modules/Basic/Material/MaterialIndex.cshtml";
            }

            public static class MaterialGroup
            {
                public const string MaterialGroupIndex = "~/Modules/Basic/MaterialGroup/MaterialGroupIndex.cshtml";
            }

            public static class Position
            {
                public const string PositionIndex = "~/Modules/Basic/Position/PositionIndex.cshtml";
            }

            public static class Supplier
            {
                public const string SupplierIndex = "~/Modules/Basic/Supplier/SupplierIndex.cshtml";
            }

            public static class Unit
            {
                public const string UnitIndex = "~/Modules/Basic/Unit/UnitIndex.cshtml";
            }

            public static class Vendor
            {
                public const string VendorIndex = "~/Modules/Basic/Vendor/VendorIndex.cshtml";
            }

            public static class Warehouse
            {
                public const string WarehouseIndex = "~/Modules/Basic/Warehouse/WarehouseIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class EmailClient
            {
                public const string EmailIndex = "~/Modules/Common/EmailClient/EmailIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class Ops
        {
            public static class Maintenance
            {
                public const string MaintenanceIndex = "~/Modules/Ops/Maintenance/MaintenanceIndex.cshtml";
                public static class Print
                {
                    public const string MaintenanceReport = "~/Modules/Ops/Maintenance/Print/MaintenanceReport.cshtml";
                }
            }

            public static class MaintenanceManhours
            {
                public const string MaintenanceManhoursIndex = "~/Modules/Ops/MaintenanceManhours/MaintenanceManhoursIndex.cshtml";
            }

            public static class MaintenanceMaterials
            {
                public const string MaintenanceMaterialsIndex = "~/Modules/Ops/MaintenanceMaterials/MaintenanceMaterialsIndex.cshtml";
            }

            public static class MaintenanceType
            {
                public const string MaintenanceTypeIndex = "~/Modules/Ops/MaintenanceType/MaintenanceTypeIndex.cshtml";
            }

            public static class ManhourPrice
            {
                public const string ManhourPriceIndex = "~/Modules/Ops/ManhourPrice/ManhourPriceIndex.cshtml";
            }

        }

        public static class Sell
        {
            public static class SaleOrder
            {
                public const string SaleOrderIndex = "~/Modules/Sell/SaleOrder/SaleOrderIndex.cshtml";
            }

            public static class SaleOrderItem
            {
                public const string SaleOrderItemIndex = "~/Modules/Sell/SaleOrderItem/SaleOrderItemIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class Stock
        {
            public static class InStock
            {
                public const string InStockIndex = "~/Modules/Stock/InStock/InStockIndex.cshtml";
            }

            public static class InStockItem
            {
                public const string InStockItemIndex = "~/Modules/Stock/InStockItem/InStockItemIndex.cshtml";
            }

            public static class MoveRecord
            {
                public const string MoveRecordIndex = "~/Modules/Stock/MoveRecord/MoveRecordIndex.cshtml";
            }

            public static class StockData
            {
                public const string StockDataIndex = "~/Modules/Stock/StockData/StockDataIndex.cshtml";
            }

        }

        public static class Sys
        {
            public static class DocumentCodeConfig
            {
                public const string DocumentCodeConfigIndex = "~/Modules/Sys/DocumentCodeConfig/DocumentCodeConfigIndex.cshtml";
            }

        }

    }
}
