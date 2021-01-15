namespace Kun.Sys {
    export namespace DocumentCodeConfigService {
        export const baseUrl = 'Sys/DocumentCodeConfig';

        export declare function Create(request: Serenity.SaveRequest<DocumentCodeConfigRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DocumentCodeConfigRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentCodeConfigRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentCodeConfigRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Sys/DocumentCodeConfig/Create",
            Update = "Sys/DocumentCodeConfig/Update",
            Delete = "Sys/DocumentCodeConfig/Delete",
            Retrieve = "Sys/DocumentCodeConfig/Retrieve",
            List = "Sys/DocumentCodeConfig/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DocumentCodeConfigService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
