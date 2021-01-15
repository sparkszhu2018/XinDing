namespace Kun.Ops {
    export namespace MaintenanceMaterialsService {
        export const baseUrl = 'Ops/MaintenanceMaterials';

        export declare function Create(request: Serenity.SaveRequest<MaintenanceMaterialsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MaintenanceMaterialsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaintenanceMaterialsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaintenanceMaterialsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Ops/MaintenanceMaterials/Create",
            Update = "Ops/MaintenanceMaterials/Update",
            Delete = "Ops/MaintenanceMaterials/Delete",
            Retrieve = "Ops/MaintenanceMaterials/Retrieve",
            List = "Ops/MaintenanceMaterials/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MaintenanceMaterialsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
