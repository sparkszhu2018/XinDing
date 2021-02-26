namespace Kun.Finance {
    export namespace ReceiptService {
        export const baseUrl = 'Finance/Receipt';

        export declare function Commit(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Audit(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Reject(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UnAudit(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Create(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Commit = "Finance/Receipt/Commit",
            Audit = "Finance/Receipt/Audit",
            Reject = "Finance/Receipt/Reject",
            UnAudit = "Finance/Receipt/UnAudit",
            Create = "Finance/Receipt/Create",
            Update = "Finance/Receipt/Update",
            Delete = "Finance/Receipt/Delete",
            Retrieve = "Finance/Receipt/Retrieve",
            List = "Finance/Receipt/List"
        }

        [
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
            (<any>ReceiptService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
