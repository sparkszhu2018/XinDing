namespace Kun.Texts {

    declare namespace Db {

        namespace Administration {

            namespace DataAuditLog {
                export const FieldName: string;
                export const LogDate: string;
                export const LogId: string;
                export const LogType: string;
                export const NewValue: string;
                export const OldValue: string;
                export const RecordId: string;
                export const Tablename: string;
                export const UserDisplayName: string;
                export const UserId: string;
                export const Username: string;
            }

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleKey: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const ImpersonationToken: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const MobilePhoneNumber: string;
                export const MobilePhoneVerified: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const TwoFactorAuth: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Basic {

            namespace Customer {
                export const Code: string;
                export const Contacts: string;
                export const Description: string;
                export const Id: string;
                export const Mobile: string;
                export const Name: string;
            }

            namespace Lot {
                export const Code: string;
                export const Id: string;
                export const MaterialId: string;
            }

            namespace Material {
                export const Code: string;
                export const CodeName: string;
                export const GroupId: string;
                export const GroupName: string;
                export const Id: string;
                export const IsBatch: string;
                export const IsVirtual: string;
                export const Name: string;
                export const OldCode: string;
                export const SafetyStock: string;
                export const UnitCode: string;
                export const UnitId: string;
            }

            namespace MaterialGroup {
                export const Code: string;
                export const Id: string;
                export const Name: string;
            }

            namespace Position {
                export const Code: string;
                export const Id: string;
                export const Name: string;
                export const WarehouseId: string;
                export const WarehouseName: string;
            }

            namespace Supplier {
                export const Code: string;
                export const Contacts: string;
                export const Description: string;
                export const Id: string;
                export const Mobile: string;
                export const Name: string;
            }

            namespace Unit {
                export const Code: string;
                export const Decim: string;
                export const Id: string;
                export const Name: string;
            }

            namespace Vendor {
                export const Code: string;
                export const Contacts: string;
                export const Description: string;
                export const Id: string;
                export const Mobile: string;
                export const Name: string;
            }

            namespace Warehouse {
                export const Code: string;
                export const Description: string;
                export const Id: string;
                export const Name: string;
                export const UsePosition: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Ops {

            namespace Maintenance {
                export const Address: string;
                export const ApproverDate: string;
                export const ApproverId: string;
                export const ApproverName: string;
                export const BillNo: string;
                export const BillType: string;
                export const ChangeDevice: string;
                export const Content: string;
                export const CustomerComment: string;
                export const CustomerConfirmDate: string;
                export const Date: string;
                export const Description: string;
                export const Id: string;
                export const Manhours: string;
                export const Materials: string;
                export const Note: string;
                export const ReportCustomerId: string;
                export const ReportCustomerName: string;
                export const ReportDate: string;
                export const Reporter: string;
                export const ReporterComment: string;
                export const ReporterConfirmDate: string;
                export const ResponsibleId: string;
                export const ResponsibleName: string;
                export const ServicerCost: string;
                export const SettleCustomerId: string;
                export const SettleCustomerName: string;
                export const Status: string;
                export const TypeId: string;
                export const TypeName: string;
                export const VendorId: string;
                export const VendorName: string;
            }

            namespace MaintenanceManhours {
                export const Amount: string;
                export const BillNo: string;
                export const HeadId: string;
                export const HeadStatus: string;
                export const Id: string;
                export const ManhourId: string;
                export const ManhourName: string;
                export const Note: string;
                export const Price: string;
                export const Qty: string;
                export const Serial: string;
            }

            namespace MaintenanceMaterials {
                export const BillNo: string;
                export const BuyAmount: string;
                export const BuyPrice: string;
                export const HeadId: string;
                export const HeadStatus: string;
                export const Id: string;
                export const LotCode: string;
                export const LotId: string;
                export const MaterialCode: string;
                export const MaterialId: string;
                export const MaterialName: string;
                export const PositionId: string;
                export const PositionName: string;
                export const Qty: string;
                export const SaleAmount: string;
                export const SalePrice: string;
                export const Serial: string;
                export const Specification: string;
                export const StockDataId: string;
                export const UnitId: string;
                export const UnitName: string;
                export const WarehouseId: string;
                export const WarehouseName: string;
            }

            namespace MaintenanceType {
                export const Id: string;
                export const Name: string;
                export const Sort: string;
            }

            namespace ManhourPrice {
                export const Id: string;
                export const Name: string;
                export const Price: string;
            }
        }

        namespace Sell {

            namespace SaleOrder {
                export const ApproverDate: string;
                export const ApproverId: string;
                export const ApproverName: string;
                export const BillNo: string;
                export const BillType: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const Date: string;
                export const Id: string;
                export const Materials: string;
                export const Note: string;
                export const SettleCustomerId: string;
                export const SettleCustomerName: string;
                export const Status: string;
            }

            namespace SaleOrderItem {
                export const BillNo: string;
                export const BuyAmount: string;
                export const BuyPrice: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const HeadDate: string;
                export const HeadId: string;
                export const HeadStatus: string;
                export const Id: string;
                export const LotCode: string;
                export const LotId: string;
                export const MaterialCode: string;
                export const MaterialId: string;
                export const MaterialName: string;
                export const PositionId: string;
                export const PositionName: string;
                export const Qty: string;
                export const SaleAmount: string;
                export const SalePrice: string;
                export const Serial: string;
                export const Specification: string;
                export const StockDataId: string;
                export const UnitId: string;
                export const UnitName: string;
                export const WarehouseId: string;
                export const WarehouseName: string;
            }
        }

        namespace Stock {

            namespace ChangeStock {
                export const ApproverDate: string;
                export const ApproverId: string;
                export const ApproverName: string;
                export const BillNo: string;
                export const BillType: string;
                export const Date: string;
                export const Id: string;
                export const Items: string;
                export const Note: string;
                export const Status: string;
            }

            namespace ChangeStockItem {
                export const BillNo: string;
                export const ChangeCode: string;
                export const FromBuyPrice: string;
                export const FromLotCode: string;
                export const FromLotId: string;
                export const FromMaterialCode: string;
                export const FromMaterialId: string;
                export const FromMaterialName: string;
                export const FromPositionId: string;
                export const FromPositionName: string;
                export const FromSalePrice: string;
                export const FromSpecification: string;
                export const FromStockId: string;
                export const FromUnitId: string;
                export const FromUnitName: string;
                export const FromWarehouseId: string;
                export const FromWarehouseName: string;
                export const HeadDate: string;
                export const HeadId: string;
                export const HeadStatus: string;
                export const Id: string;
                export const Qty: string;
                export const Serial: string;
                export const Status: string;
                export const ToBuyPrice: string;
                export const ToLotCode: string;
                export const ToLotId: string;
                export const ToMaterialCode: string;
                export const ToMaterialId: string;
                export const ToMaterialName: string;
                export const ToPositionId: string;
                export const ToPositionName: string;
                export const ToSalePrice: string;
                export const ToSpecification: string;
                export const ToStockId: string;
                export const ToUnitId: string;
                export const ToUnitName: string;
                export const ToWarehouseId: string;
                export const ToWarehouseName: string;
            }

            namespace InStock {
                export const ApproverDate: string;
                export const ApproverId: string;
                export const ApproverName: string;
                export const BillNo: string;
                export const BillType: string;
                export const Date: string;
                export const Id: string;
                export const Items: string;
                export const Note: string;
                export const Status: string;
            }

            namespace InStockItem {
                export const ApproverDate: string;
                export const ApproverId: string;
                export const ApproverName: string;
                export const BillNo: string;
                export const BuyAmount: string;
                export const BuyPrice: string;
                export const ConfirmQty: string;
                export const DeliveryQty: string;
                export const HeadDate: string;
                export const HeadId: string;
                export const HeadStatus: string;
                export const Id: string;
                export const InvoiceType: string;
                export const InvoiceTypeName: string;
                export const LotCode: string;
                export const LotId: string;
                export const MaterialCode: string;
                export const MaterialId: string;
                export const MaterialName: string;
                export const PositionId: string;
                export const PositionName: string;
                export const SaleAmount: string;
                export const SalePrice: string;
                export const Specification: string;
                export const Status: string;
                export const SupplierId: string;
                export const SupplierName: string;
                export const UnitId: string;
                export const UnitName: string;
                export const WarehouseId: string;
                export const WarehouseName: string;
            }

            namespace MoveRecord {
                export const BizBillCode: string;
                export const BizBillId: string;
                export const BizBillType: string;
                export const BizItemId: string;
                export const FromLotCode: string;
                export const FromLotId: string;
                export const FromMaterialCode: string;
                export const FromMaterialId: string;
                export const FromMaterialName: string;
                export const FromPositionId: string;
                export const FromPositionName: string;
                export const FromStockId: string;
                export const FromUnitId: string;
                export const FromUnitName: string;
                export const FromWarehouseId: string;
                export const FromWarehouseName: string;
                export const Id: string;
                export const MovCode: string;
                export const Qty: string;
                export const Status: string;
                export const ToLotCode: string;
                export const ToLotId: string;
                export const ToMaterialCode: string;
                export const ToMaterialId: string;
                export const ToMaterialName: string;
                export const ToPositionId: string;
                export const ToPositionName: string;
                export const ToStockId: string;
                export const ToUnitId: string;
                export const ToUnitName: string;
                export const ToWarehouseId: string;
                export const ToWarehouseName: string;
            }

            namespace StockData {
                export const AvailableQty: string;
                export const BuyAmount: string;
                export const BuyPrice: string;
                export const Id: string;
                export const LotCode: string;
                export const LotId: string;
                export const MaterialCode: string;
                export const MaterialId: string;
                export const MaterialName: string;
                export const PositionId: string;
                export const PositionName: string;
                export const Qty: string;
                export const ReservedQty: string;
                export const SaleAmount: string;
                export const SalePrice: string;
                export const Specification: string;
                export const UnitId: string;
                export const UnitName: string;
                export const WarehouseId: string;
                export const WarehouseName: string;
            }
        }

        namespace Sys {

            namespace DocumentCodeConfig {
                export const DocumentCodePrefix: string;
                export const DocumentKind: string;
                export const Id: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace CardViewMixin {
            export const CardView: string;
            export const ListView: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Dialogs {
            export const PendingChangesConfirmation: string;
        }

        namespace DraggableGroupingMixin {
            export const CollapseAllButton: string;
            export const DropPlaceholder: string;
            export const ExpandAllButton: string;
        }

        namespace EmailClient {
            export const BackButton: string;
            export const CCLabel: string;
            export const CancelButton: string;
            export const ComposeButton: string;
            export const DeleteButton: string;
            export const DeleteMessageConfirmation: string;
            export const DeleteMessageSuccess: string;
            export const DeleteNoSelectionWarning: string;
            export const DeleteSelectedConfirmation: string;
            export const DeleteSelectedSuccess: string;

            namespace FolderNames {
                export const drafts: string;
                export const inbox: string;
                export const junk: string;
                export const sent: string;
                export const trash: string;
            }
            export const FoldersTitle: string;
            export const ForwardButton: string;
            export const ImapHost: string;
            export const ImapPassword: string;
            export const ImapPort: string;
            export const ImapUsername: string;
            export const LoginButton: string;
            export const LoginTitle: string;
            export const MoveMessageSuccess: string;
            export const MoveNoSelectionWarning: string;
            export const MoveSelectedSuccess: string;
            export const MoveToFolder: string;
            export const NewEmailDialogTitle: string;
            export const PageTitle: string;
            export const QuickSettings: string;
            export const RefreshButton: string;
            export const ReplyAllButton: string;
            export const ReplyButton: string;
            export const ReplyEmailDialogTitle: string;
            export const SearchPlaceholder: string;
            export const SendButton: string;
            export const SignoutButton: string;
            export const SmtpHost: string;
            export const SmtpPassword: string;
            export const SmtpPort: string;
            export const SmtpUsername: string;
            export const ToLabel: string;
            export const ToggleReadButton: string;
            export const ToggleSeenNoSelectionWarning: string;
        }

        namespace FavoriteViewsMixin {
            export const DeleteButtonHint: string;
            export const DeleteSuccessMessage: string;
            export const EmptyNameError: string;
            export const FavoriteViews: string;
            export const LoadedViewMessage: string;
            export const SaveButton: string;
            export const SaveSuccessMessage: string;
            export const SaveView: string;
        }

        namespace HeaderFiltersMixin {
            export const CancelButton: string;
            export const ClearButton: string;
            export const OkButton: string;
            export const Search: string;
            export const SelectAll: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeAzure: string;
            export const ThemeAzureLight: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeCosmos: string;
            export const ThemeCosmosLight: string;
            export const ThemeGlassy: string;
            export const ThemeGlassyLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }

        namespace WizardDialog {
            export const BackButton: string;
            export const CancelMessage: string;
            export const FinishButton: string;
            export const NextButton: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    Kun['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{DataAuditLog:{FieldName:1,LogDate:1,LogId:1,LogType:1,NewValue:1,OldValue:1,RecordId:1,Tablename:1,UserDisplayName:1,UserId:1,Username:1},Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleKey:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,ImpersonationToken:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,MobilePhoneNumber:1,MobilePhoneVerified:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TwoFactorAuth:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Basic:{Customer:{Code:1,Contacts:1,Description:1,Id:1,Mobile:1,Name:1},Lot:{Code:1,Id:1,MaterialId:1},Material:{Code:1,CodeName:1,GroupId:1,GroupName:1,Id:1,IsBatch:1,IsVirtual:1,Name:1,OldCode:1,SafetyStock:1,UnitCode:1,UnitId:1},MaterialGroup:{Code:1,Id:1,Name:1},Position:{Code:1,Id:1,Name:1,WarehouseId:1,WarehouseName:1},Supplier:{Code:1,Contacts:1,Description:1,Id:1,Mobile:1,Name:1},Unit:{Code:1,Decim:1,Id:1,Name:1},Vendor:{Code:1,Contacts:1,Description:1,Id:1,Mobile:1,Name:1},Warehouse:{Code:1,Description:1,Id:1,Name:1,UsePosition:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Ops:{Maintenance:{Address:1,ApproverDate:1,ApproverId:1,ApproverName:1,BillNo:1,BillType:1,ChangeDevice:1,Content:1,CustomerComment:1,CustomerConfirmDate:1,Date:1,Description:1,Id:1,Manhours:1,Materials:1,Note:1,ReportCustomerId:1,ReportCustomerName:1,ReportDate:1,Reporter:1,ReporterComment:1,ReporterConfirmDate:1,ResponsibleId:1,ResponsibleName:1,ServicerCost:1,SettleCustomerId:1,SettleCustomerName:1,Status:1,TypeId:1,TypeName:1,VendorId:1,VendorName:1},MaintenanceManhours:{Amount:1,BillNo:1,HeadId:1,HeadStatus:1,Id:1,ManhourId:1,ManhourName:1,Note:1,Price:1,Qty:1,Serial:1},MaintenanceMaterials:{BillNo:1,BuyAmount:1,BuyPrice:1,HeadId:1,HeadStatus:1,Id:1,LotCode:1,LotId:1,MaterialCode:1,MaterialId:1,MaterialName:1,PositionId:1,PositionName:1,Qty:1,SaleAmount:1,SalePrice:1,Serial:1,Specification:1,StockDataId:1,UnitId:1,UnitName:1,WarehouseId:1,WarehouseName:1},MaintenanceType:{Id:1,Name:1,Sort:1},ManhourPrice:{Id:1,Name:1,Price:1}},Sell:{SaleOrder:{ApproverDate:1,ApproverId:1,ApproverName:1,BillNo:1,BillType:1,CustomerId:1,CustomerName:1,Date:1,Id:1,Materials:1,Note:1,SettleCustomerId:1,SettleCustomerName:1,Status:1},SaleOrderItem:{BillNo:1,BuyAmount:1,BuyPrice:1,CustomerId:1,CustomerName:1,HeadDate:1,HeadId:1,HeadStatus:1,Id:1,LotCode:1,LotId:1,MaterialCode:1,MaterialId:1,MaterialName:1,PositionId:1,PositionName:1,Qty:1,SaleAmount:1,SalePrice:1,Serial:1,Specification:1,StockDataId:1,UnitId:1,UnitName:1,WarehouseId:1,WarehouseName:1}},Stock:{ChangeStock:{ApproverDate:1,ApproverId:1,ApproverName:1,BillNo:1,BillType:1,Date:1,Id:1,Items:1,Note:1,Status:1},ChangeStockItem:{BillNo:1,ChangeCode:1,FromBuyPrice:1,FromLotCode:1,FromLotId:1,FromMaterialCode:1,FromMaterialId:1,FromMaterialName:1,FromPositionId:1,FromPositionName:1,FromSalePrice:1,FromSpecification:1,FromStockId:1,FromUnitId:1,FromUnitName:1,FromWarehouseId:1,FromWarehouseName:1,HeadDate:1,HeadId:1,HeadStatus:1,Id:1,Qty:1,Serial:1,Status:1,ToBuyPrice:1,ToLotCode:1,ToLotId:1,ToMaterialCode:1,ToMaterialId:1,ToMaterialName:1,ToPositionId:1,ToPositionName:1,ToSalePrice:1,ToSpecification:1,ToStockId:1,ToUnitId:1,ToUnitName:1,ToWarehouseId:1,ToWarehouseName:1},InStock:{ApproverDate:1,ApproverId:1,ApproverName:1,BillNo:1,BillType:1,Date:1,Id:1,Items:1,Note:1,Status:1},InStockItem:{ApproverDate:1,ApproverId:1,ApproverName:1,BillNo:1,BuyAmount:1,BuyPrice:1,ConfirmQty:1,DeliveryQty:1,HeadDate:1,HeadId:1,HeadStatus:1,Id:1,InvoiceType:1,InvoiceTypeName:1,LotCode:1,LotId:1,MaterialCode:1,MaterialId:1,MaterialName:1,PositionId:1,PositionName:1,SaleAmount:1,SalePrice:1,Specification:1,Status:1,SupplierId:1,SupplierName:1,UnitId:1,UnitName:1,WarehouseId:1,WarehouseName:1},MoveRecord:{BizBillCode:1,BizBillId:1,BizBillType:1,BizItemId:1,FromLotCode:1,FromLotId:1,FromMaterialCode:1,FromMaterialId:1,FromMaterialName:1,FromPositionId:1,FromPositionName:1,FromStockId:1,FromUnitId:1,FromUnitName:1,FromWarehouseId:1,FromWarehouseName:1,Id:1,MovCode:1,Qty:1,Status:1,ToLotCode:1,ToLotId:1,ToMaterialCode:1,ToMaterialId:1,ToMaterialName:1,ToPositionId:1,ToPositionName:1,ToStockId:1,ToUnitId:1,ToUnitName:1,ToWarehouseId:1,ToWarehouseName:1},StockData:{AvailableQty:1,BuyAmount:1,BuyPrice:1,Id:1,LotCode:1,LotId:1,MaterialCode:1,MaterialId:1,MaterialName:1,PositionId:1,PositionName:1,Qty:1,ReservedQty:1,SaleAmount:1,SalePrice:1,Specification:1,UnitId:1,UnitName:1,WarehouseId:1,WarehouseName:1}},Sys:{DocumentCodeConfig:{DocumentCodePrefix:1,DocumentKind:1,Id:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},CardViewMixin:{CardView:1,ListView:1},Dashboard:{ContentDescription:1},Dialogs:{PendingChangesConfirmation:1},DraggableGroupingMixin:{CollapseAllButton:1,DropPlaceholder:1,ExpandAllButton:1},EmailClient:{BackButton:1,CCLabel:1,CancelButton:1,ComposeButton:1,DeleteButton:1,DeleteMessageConfirmation:1,DeleteMessageSuccess:1,DeleteNoSelectionWarning:1,DeleteSelectedConfirmation:1,DeleteSelectedSuccess:1,FolderNames:{drafts:1,inbox:1,junk:1,sent:1,trash:1},FoldersTitle:1,ForwardButton:1,ImapHost:1,ImapPassword:1,ImapPort:1,ImapUsername:1,LoginButton:1,LoginTitle:1,MoveMessageSuccess:1,MoveNoSelectionWarning:1,MoveSelectedSuccess:1,MoveToFolder:1,NewEmailDialogTitle:1,PageTitle:1,QuickSettings:1,RefreshButton:1,ReplyAllButton:1,ReplyButton:1,ReplyEmailDialogTitle:1,SearchPlaceholder:1,SendButton:1,SignoutButton:1,SmtpHost:1,SmtpPassword:1,SmtpPort:1,SmtpUsername:1,ToLabel:1,ToggleReadButton:1,ToggleSeenNoSelectionWarning:1},FavoriteViewsMixin:{DeleteButtonHint:1,DeleteSuccessMessage:1,EmptyNameError:1,FavoriteViews:1,LoadedViewMessage:1,SaveButton:1,SaveSuccessMessage:1,SaveView:1},HeaderFiltersMixin:{CancelButton:1,ClearButton:1,OkButton:1,Search:1,SelectAll:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeAzure:1,ThemeAzureLight:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeCosmos:1,ThemeCosmosLight:1,ThemeGlassy:1,ThemeGlassyLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1},WizardDialog:{BackButton:1,CancelMessage:1,FinishButton:1,NextButton:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
