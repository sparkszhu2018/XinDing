using Serenity.Navigation;
using MyPages = Kun.Stock.Pages;

[assembly: NavigationMenu(1800, "库存管理", icon: "fa-cubes")]
[assembly: NavigationLink(int.MaxValue, "库存管理/入库单", typeof(MyPages.InStockController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/入库明细", typeof(MyPages.InStockItemController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/即时库存", typeof(MyPages.StockDataController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/出入库记录", typeof(MyPages.MoveRecordController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/移库单", typeof(MyPages.ChangeStockController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/移库明细", typeof(MyPages.ChangeStockItemController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/组装单", typeof(MyPages.AssembleController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/组装单明细", typeof(MyPages.AssembleItemController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/其他出库单", typeof(MyPages.OutStockController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/其他出库明细", typeof(MyPages.OutStockItemController), icon: null)]