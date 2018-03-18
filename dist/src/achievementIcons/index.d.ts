import { IResourceContext } from '../utils/ResourceContext';
/**
 * Achievement icons module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare function achievementIconsResource(context: IResourceContext): {
    getAll: (userOpts?: any) => Promise<any>;
    remove: (id: string, userOpts?: any) => Promise<any>;
};
