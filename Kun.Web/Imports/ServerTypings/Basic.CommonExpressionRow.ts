namespace Kun.Basic {
    export interface CommonExpressionRow {
        Id?: string;
        Content?: string;
    }

    export namespace CommonExpressionRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Content';
        export const localTextPrefix = 'Basic.CommonExpression';
        export const lookupKey = 'Basic.CommonExpression';

        export function getLookup(): Q.Lookup<CommonExpressionRow> {
            return Q.getLookup<CommonExpressionRow>('Basic.CommonExpression');
        }
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Content = "Content"
        }
    }
}
