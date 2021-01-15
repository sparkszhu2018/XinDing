namespace Kun.Ops {
    export namespace MaintenanceManhoursService {
        export const baseUrl = 'Ops/MaintenanceManhours';

        export declare function Create(request: Serenity.SaveRequest<MaintenanceManhoursRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MaintenanceManhoursRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaintenanceManhoursRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaintenanceManhoursRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Ops/MaintenanceManhours/Create",
            Update = "Ops/MaintenanceManhours/Update",
            Delete = "Ops/MaintenanceManhours/Delete",
            Retrieve = "Ops/MaintenanceManhours/Retrieve",
            List = "Ops/MaintenanceManhours/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MaintenanceManhoursService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
