import { IResourceContext } from '../utils/ResourceContext';
/**
 * API Keys module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare function apiKeysResource(context: IResourceContext): {
    getAll: <T>(userOpts?: any) => Promise<T[]>;
    getIterator: <T>(userOpts?: any) => IterableIterator<Promise<T[]>>;
    create: <T>(object: any, userOpts?: any) => Promise<T>;
    remove: (id: string, userOpts?: any) => Promise<any>;
    update: (id: string, updates: any[], userOpts?: any) => Promise<any>;
    listScopes: (userOpts?: any) => Promise<any>;
};
