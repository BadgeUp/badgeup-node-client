import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { IAchievementResponse } from './Achievement.class';
/**
 * Achievements module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare class AchievementsResource extends Common<IAchievementResponse> {
    constructor(context: IResourceContext);
    /**
     * Retrieves a list of criteria
     * @param id ID of the achievement to retrieve criteria for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the list of criteria
     */
    getAchievementCriteria(id: string, userOpts?: any): Promise<any>;
    /**
     * Retrieves a list of awards
     * @param id ID of the achievement to retrieve criteria for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the list of awards
     */
    getAchievementAwards(id: string, userOpts?: any): Promise<any>;
}
