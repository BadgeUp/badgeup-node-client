import { IResourceContext } from '../utils/ResourceContext';
/**
 * Achievement icons resource
 */
export declare class AchievementIconsResource {
    private common;
    private context;
    /**
     * Construct the achievement icons resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext);
    /**
     * Get all achievement icons
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to an array of achievement icon identifiers
     */
    getAll(userOpts?: any): Promise<any>;
    remove(id: string, userOpts?: any): Promise<any>;
}
