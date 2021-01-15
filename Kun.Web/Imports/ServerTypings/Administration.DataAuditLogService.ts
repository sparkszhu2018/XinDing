namespace Kun.Administration {
    export namespace DataAuditLogService {
        export const baseUrl = 'Administration/DataAuditLog';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DataAuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DataAuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "Administration/DataAuditLog/Retrieve",
            List = "Administration/DataAuditLog/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DataAuditLogService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

