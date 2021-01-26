namespace Kun.Stock {
    export namespace InStockService {
        export const baseUrl = 'Stock/InStock';

        export declare function Commit(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Audit(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UnAudit(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Reject(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Create(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InStockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InStockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Commit = "Stock/InStock/Commit",
            Audit = "Stock/InStock/Audit",
            UnAudit = "Stock/InStock/UnAudit",
            Reject = "Stock/InStock/Reject",
            Create = "Stock/InStock/Create",
            Update = "Stock/InStock/Update",
            Delete = "Stock/InStock/Delete",
            Retrieve = "Stock/InStock/Retrieve",
            List = "Stock/InStock/List"
        }

        [
            'Commit', 
            'Audit', 
            'UnAudit', 
            'Reject', 
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InStockService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
