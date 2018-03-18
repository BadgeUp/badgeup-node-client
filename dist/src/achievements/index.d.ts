import { IResourceContext } from '../utils/ResourceContext';
/**
 * Achievements module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare function achievementsResource(context: IResourceContext): {
    get: <T>(id: string, userOpts?: any) => Promise<T>;
    getIterator: <T>(userOpts?: any) => IterableIterator<Promise<T[]>>;
    getAll: <T>(userOpts?: any) => Promise<T[]>;
    create: <T>(object: any, userOpts?: any) => Promise<T>;
    update: (id: string, updates: any[], userOpts?: any) => Promise<any>;
    remove: (id: string, userOpts?: any) => Promise<any>;
} & {
    getAchievementCriteria: (id: string, userOpts?: any) => Promise<any>;
    getAchievementAwards: (id: string, userOpts?: any) => Promise<any>;
};
