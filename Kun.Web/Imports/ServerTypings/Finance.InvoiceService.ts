namespace Kun.Finance {
    export namespace InvoiceService {
        export const baseUrl = 'Finance/Invoice';

        export declare function FetchInvoiceNo(request: InvoiceNoRequest, onSuccess?: (response: InvoiceNoResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Commit(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Audit(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Reject(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UnAudit(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Create(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            FetchInvoiceNo = "Finance/Invoice/FetchInvoiceNo",
            Commit = "Finance/Invoice/Commit",
            Audit = "Finance/Invoice/Audit",
            Reject = "Finance/Invoice/Reject",
            UnAudit = "Finance/Invoice/UnAudit",
            Create = "Finance/Invoice/Create",
            Update = "Finance/Invoice/Update",
            Delete = "Finance/Invoice/Delete",
            Retrieve = "Finance/Invoice/Retrieve",
            List = "Finance/Invoice/List"
        }

        [
            'FetchInvoiceNo', 
            'Commit', 
            'Audit', 
            'Reject', 
            'UnAudit', 
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
