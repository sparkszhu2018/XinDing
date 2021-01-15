using Serenity.Navigation;
using MyPages = Kun.Ops.Pages;

[assembly: NavigationLink(int.MaxValue, "保养维修/维保单", typeof(MyPages.MaintenanceController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "保养维修/维保单领料", typeof(MyPages.MaintenanceMaterialsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "保养维修/工时标准", typeof(MyPages.ManhourPriceController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Ops/Maintenance Manhours", typeof(MyPages.MaintenanceManhoursController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "保养维修/维保分类", typeof(MyPages.MaintenanceTypeController), icon: null)]