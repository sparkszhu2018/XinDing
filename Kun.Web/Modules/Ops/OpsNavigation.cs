using Serenity.Navigation;
using MyPages = Kun.Ops.Pages;


[assembly: NavigationMenu(1000, "维保管理", icon: "fa-deaf")]
[assembly: NavigationLink(int.MaxValue, "维保管理/维保单", typeof(MyPages.MaintenanceController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "保养维修/维保单领料", typeof(MyPages.MaintenanceMaterialsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "维保管理/工时标准", typeof(MyPages.ManhourPriceController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Ops/Maintenance Manhours", typeof(MyPages.MaintenanceManhoursController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "维保管理/维保分类", typeof(MyPages.MaintenanceTypeController), icon: null)]