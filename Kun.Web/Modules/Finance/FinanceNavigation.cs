using Serenity.Navigation;
using MyPages = Kun.Finance.Pages;

[assembly: NavigationLink(int.MaxValue, "财务管理/开票列表", typeof(MyPages.InvoiceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "财务管理/开票明细", typeof(MyPages.InvoiceItemController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "财务管理/Bill Invoiced", typeof(MyPages.BillInvoicedController), icon: null)]