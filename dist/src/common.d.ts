import { IResourceContext } from './utils/ResourceContext';
/**
 * Provides a set of common funcitonality that can be used on most endpoints
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 * @param {string} endpoint The endpoint used for this common module
 */
export declare function common(context: IResourceContext, endpoint: string): {
    get: <T>(id: string, userOpts?: any) => Promise<T>;
    getIterator: <T>(userOpts?: any) => IterableIterator<Promise<T>>;
    getAll: <T>(userOpts?: any) => Promise<T[]>;
    create: <T>(object: any, userOpts?: any) => Promise<T>;
    update: (id: string, updates: any[], userOpts?: any) => Promise<any>;
    remove: (id: string, userOpts?: any) => Promise<any>;
};
