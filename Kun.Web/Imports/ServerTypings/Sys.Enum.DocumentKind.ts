namespace Kun.Sys.Enum {
    export enum DocumentKind {
        Material = 1,
        Customer = 2,
        Supplier = 3,
        InStockBill = 10,
        MaintBill = 20,
        SaleOrderBill = 30,
        ChangeStockBill = 40,
        OutStockBill = 45,
        ProjectInfo = 50,
        ProjectMaterials = 51,
        ProjectService = 52,
        ProjectBiz = 53,
        InvoiceBill = 60,
        ReceiptBill = 61,
        AssembleBill = 70
    }
    Serenity.Decorators.registerEnumType(DocumentKind, 'Kun.Sys.Enum.DocumentKind', 'Sys.DocumentKind');
}
