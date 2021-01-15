namespace Kun.Ops {
    export namespace MaintenanceService {
        export const baseUrl = 'Ops/Maintenance';

        export declare function Commit(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Audit(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Reject(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UnAudit(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Create(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Commit = "Ops/Maintenance/Commit",
            Audit = "Ops/Maintenance/Audit",
            Reject = "Ops/Maintenance/Reject",
            UnAudit = "Ops/Maintenance/UnAudit",
            Create = "Ops/Maintenance/Create",
            Update = "Ops/Maintenance/Update",
            Delete = "Ops/Maintenance/Delete",
            Retrieve = "Ops/Maintenance/Retrieve",
            List = "Ops/Maintenance/List"
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
            (<any>MaintenanceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
