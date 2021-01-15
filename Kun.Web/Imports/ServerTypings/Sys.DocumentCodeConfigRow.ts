namespace Kun.Sys {
    export interface DocumentCodeConfigRow {
        Id?: string;
        DocumentKind?: Sys.Enum.DocumentKind;
        DocumentCodePrefix?: string;
    }

    export namespace DocumentCodeConfigRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'DocumentCodePrefix';
        export const localTextPrefix = 'Sys.DocumentCodeConfig';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            DocumentKind = "DocumentKind",
            DocumentCodePrefix = "DocumentCodePrefix"
        }
    }
}
