import { IResourceContext } from '../utils/ResourceContext';
/**
 * Achievement icons module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare class AchievementIconsResource {
    private common;
    private context;
    constructor(context: IResourceContext);
    /**
     * Get all achievement icons
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object[]>} A promise that resolves to an array of achievement icon identifiers
     */
    getAll(userOpts?: any): Promise<any>;
    remove(id: string, userOpts?: any): Promise<any>;
}
