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
            public static class BizType
            {
                public const string BizTypeIndex = "~/Modules/Basic/BizType/BizTypeIndex.cshtml";
            }

            public static class CommonExpression
            {
                public const string CommonExpressionIndex = "~/Modules/Basic/CommonExpression/CommonExpressionIndex.cshtml";
            }

            public static class Company
            {
                public const string CompanyIndex = "~/Modules/Basic/Company/CompanyIndex.cshtml";
            }

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

            public static class PaymentItem
            {
                public const string PaymentItemIndex = "~/Modules/Basic/PaymentItem/PaymentItemIndex.cshtml";
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

        public static class Finance
        {
            public static class BillInvoiced
            {
                public const string BillInvoicedIndex = "~/Modules/Finance/BillInvoiced/BillInvoicedIndex.cshtml";
            }

            public static class Invoice
            {
                public const string InvoiceIndex = "~/Modules/Finance/Invoice/InvoiceIndex.cshtml";
            }

            public static class InvoiceItem
            {
                public const string InvoiceItemIndex = "~/Modules/Finance/InvoiceItem/InvoiceItemIndex.cshtml";
            }

            public static class Receipt
            {
                public const string ReceiptIndex = "~/Modules/Finance/Receipt/ReceiptIndex.cshtml";
            }

            public static class ReceiptItem
            {
                public const string ReceiptItemIndex = "~/Modules/Finance/ReceiptItem/ReceiptItemIndex.cshtml";
            }

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

        public static class Project
        {
            public static class BizBill
            {
                public const string BizBillIndex = "~/Modules/Project/BizBill/BizBillIndex.cshtml";
            }

            public static class BizItem
            {
                public const string BizItemIndex = "~/Modules/Project/BizItem/BizItemIndex.cshtml";
            }

            public static class MaterialsBill
            {
                public const string MaterialsBillIndex = "~/Modules/Project/MaterialsBill/MaterialsBillIndex.cshtml";
            }

            public static class MaterialsItem
            {
                public const string MaterialsItemIndex = "~/Modules/Project/MaterialsItem/MaterialsItemIndex.cshtml";
            }

            public static class ProjectInfo
            {
                public const string ProjectInfoIndex = "~/Modules/Project/ProjectInfo/ProjectInfoIndex.cshtml";
            }

            public static class ServiceBill
            {
                public const string ServiceBillIndex = "~/Modules/Project/ServiceBill/ServiceBillIndex.cshtml";
            }

            public static class ServiceItem
            {
                public const string ServiceItemIndex = "~/Modules/Project/ServiceItem/ServiceItemIndex.cshtml";
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
            public static class Assemble
            {
                public const string AssembleIndex = "~/Modules/Stock/Assemble/AssembleIndex.cshtml";
            }

            public static class AssembleItem
            {
                public const string AssembleItemIndex = "~/Modules/Stock/AssembleItem/AssembleItemIndex.cshtml";
            }

            public static class ChangeStock
            {
                public const string ChangeStockIndex = "~/Modules/Stock/ChangeStock/ChangeStockIndex.cshtml";
            }

            public static class ChangeStockItem
            {
                public const string ChangeStockItemIndex = "~/Modules/Stock/ChangeStockItem/ChangeStockItemIndex.cshtml";
            }

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

            public static class OutStock
            {
                public const string OutStockIndex = "~/Modules/Stock/OutStock/OutStockIndex.cshtml";
            }

            public static class OutStockItem
            {
                public const string OutStockItemIndex = "~/Modules/Stock/OutStockItem/OutStockItemIndex.cshtml";
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
