using Serenity.Navigation;
using MyPages = Kun.Finance.Pages;

[assembly: NavigationLink(int.MaxValue, "Finance/Invoice", typeof(MyPages.InvoiceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Finance/Invoice Item", typeof(MyPages.InvoiceItemController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Finance/Bill Invoiced", typeof(MyPages.BillInvoicedController), icon: null)]