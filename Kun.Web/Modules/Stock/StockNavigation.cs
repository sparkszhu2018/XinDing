using Serenity.Navigation;
using MyPages = Kun.Stock.Pages;
 
[assembly: NavigationLink(int.MaxValue, "库存管理/入库单", typeof(MyPages.InStockController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/入库明细单", typeof(MyPages.InStockItemController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/即时库存", typeof(MyPages.StockDataController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "库存管理/出入库记录", typeof(MyPages.MoveRecordController), icon: null)]