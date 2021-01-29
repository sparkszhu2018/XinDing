using Serenity.Navigation;
using MyPages = Kun.Project.Pages;

[assembly: NavigationLink(int.MaxValue, "Project/Biz Bill", typeof(MyPages.BizBillController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Project/Biz Item", typeof(MyPages.BizItemController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Project/Project Info", typeof(MyPages.ProjectInfoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Project/Materials Bill", typeof(MyPages.MaterialsBillController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Project/Materials Item", typeof(MyPages.MaterialsItemController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Project/Service Bill", typeof(MyPages.ServiceBillController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Project/Service Item", typeof(MyPages.ServiceItemController), icon: null)]