import { IResourceContext } from '../utils/ResourceContext';
/**
 * Awards module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare function awardsResource(context: IResourceContext): {
    get: <T>(id: string, userOpts?: any) => Promise<T>;
    getIterator: <T>(userOpts?: any) => IterableIterator<Promise<T[]>>;
    getAll: <T>(userOpts?: any) => Promise<T[]>;
    create: <T>(object: any, userOpts?: any) => Promise<T>;
    update: (id: string, updates: any[], userOpts?: any) => Promise<any>;
    remove: (id: string, userOpts?: any) => Promise<any>;
};
