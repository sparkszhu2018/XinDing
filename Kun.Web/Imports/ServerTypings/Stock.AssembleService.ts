namespace Kun.Stock {
    export namespace AssembleService {
        export const baseUrl = 'Stock/Assemble';

        export declare function Commit(request: Serenity.SaveRequest<AssembleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Audit(request: Serenity.SaveRequest<AssembleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UnAudit(request: Serenity.SaveRequest<AssembleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Reject(request: Serenity.SaveRequest<AssembleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Create(request: Serenity.SaveRequest<AssembleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AssembleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssembleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssembleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Commit = "Stock/Assemble/Commit",
            Audit = "Stock/Assemble/Audit",
            UnAudit = "Stock/Assemble/UnAudit",
            Reject = "Stock/Assemble/Reject",
            Create = "Stock/Assemble/Create",
            Update = "Stock/Assemble/Update",
            Delete = "Stock/Assemble/Delete",
            Retrieve = "Stock/Assemble/Retrieve",
            List = "Stock/Assemble/List"
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
            (<any>AssembleService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
