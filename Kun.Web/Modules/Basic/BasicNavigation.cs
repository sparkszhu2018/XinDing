using Serenity.Navigation;
using MyPages = Kun.Basic.Pages;

[assembly: NavigationLink(int.MaxValue, "基础数据/物料组", typeof(MyPages.MaterialGroupController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "基础数据/批次", typeof(MyPages.LotController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "基础数据/物料主数据", typeof(MyPages.MaterialController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "基础数据/客户", typeof(MyPages.CustomerController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "基础数据/供应商", typeof(MyPages.SupplierController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "基础数据/计量单位", typeof(MyPages.UnitController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "基础数据/仓库", typeof(MyPages.WarehouseController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "基础数据/仓位", typeof(MyPages.PositionController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "基础数据/服务商", typeof(MyPages.VendorController), icon: null)]