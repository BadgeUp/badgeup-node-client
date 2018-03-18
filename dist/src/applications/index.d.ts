import { IResourceContext } from '../utils/ResourceContext';
/**
 * Applications module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare function applicationsResource(context: IResourceContext): {
    get: (id: string, userOpts?: any) => Promise<any>;
    getAll: (userOpts?: any) => any;
    getIterator: (userOpts?: any) => IterableIterator<Promise<{}>>;
    create: (object: any, userOpts?: any) => Promise<any>;
    update: (id: string, updates: any, userOpts?: any) => Promise<any>;
    remove: (id: string, userOpts?: any) => Promise<any>;
};
