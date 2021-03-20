using Serenity.Navigation;
using MyPages = Kun.Sell.Pages;


[assembly: NavigationMenu(1700, "销售管理", icon: "fa-area-chart")]
[assembly: NavigationLink(int.MaxValue, "销售管理/销售订单", typeof(MyPages.SaleOrderController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "销售管理/销售订单明细", typeof(MyPages.SaleOrderItemController), icon: null)]