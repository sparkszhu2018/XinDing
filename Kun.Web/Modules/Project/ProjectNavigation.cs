using Serenity.Navigation;
using MyPages = Kun.Project.Pages;


[assembly: NavigationMenu(1600, "项目管理", icon: "fa-product-hunt")]
[assembly: NavigationLink(int.MaxValue, "项目管理/项目列表", typeof(MyPages.ProjectInfoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "项目管理/产品领用单", typeof(MyPages.MaterialsBillController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "项目管理/商务费用单", typeof(MyPages.BizBillController), icon: null)]
// [assembly: NavigationLink(int.MaxValue, "项目管理/Biz Item", typeof(MyPages.BizItemController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "项目管理/Materials Item", typeof(MyPages.MaterialsItemController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "项目管理/服务费用单", typeof(MyPages.ServiceBillController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "项目管理/Service Item", typeof(MyPages.ServiceItemController), icon: null)]