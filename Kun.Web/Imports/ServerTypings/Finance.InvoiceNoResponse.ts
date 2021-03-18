namespace Kun.Finance {
    export interface InvoiceNoResponse extends Serenity.ServiceResponse {
        InvoiceNo?: string;
        InvoiceAmount?: number;
        ReceiptAmount?: number;
        UnReceiptAmount?: number;
    }
}
