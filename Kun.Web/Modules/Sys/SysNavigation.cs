using Serenity.Navigation;
using MyPages = Kun.Sys.Pages;

[assembly: NavigationMenu(8000, "系统设置", icon: "fa-credit-card")]
[assembly: NavigationLink(int.MaxValue, "系统设置/单据编码", typeof(MyPages.DocumentCodeConfigController), icon: null)]