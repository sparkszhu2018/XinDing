namespace Kun.Stock {
    export namespace ChangeStockService {
        export const baseUrl = 'Stock/ChangeStock';

        export declare function Commit(request: Serenity.SaveRequest<ChangeStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Audit(request: Serenity.SaveRequest<ChangeStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UnAudit(request: Serenity.SaveRequest<ChangeStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Reject(request: Serenity.SaveRequest<ChangeStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Create(request: Serenity.SaveRequest<ChangeStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ChangeStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ChangeStockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ChangeStockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Commit = "Stock/ChangeStock/Commit",
            Audit = "Stock/ChangeStock/Audit",
            UnAudit = "Stock/ChangeStock/UnAudit",
            Reject = "Stock/ChangeStock/Reject",
            Create = "Stock/ChangeStock/Create",
            Update = "Stock/ChangeStock/Update",
            Delete = "Stock/ChangeStock/Delete",
            Retrieve = "Stock/ChangeStock/Retrieve",
            List = "Stock/ChangeStock/List"
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
            (<any>ChangeStockService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
